/* Local-only project overview. No external requests or telemetry. */
'use strict';

function searchableText(section) {
  const values = [
    section.id,
    section.title,
    section.phase,
    section.status,
    section.content_type,
    ...(section.facts || []),
    ...(section.assumptions || []),
    ...(section.options || []),
    ...(section.risks_gates || []),
    ...(section.recommendation_next_steps || []),
    ...(section.task_ids || []),
    ...(section.tags || []),
    ...(section.gate_tags || []),
    section.goal,
    ...(section.skills || []),
    section.practice,
    section.observable_outcome,
    section.exit_criterion,
    section.dependency,
    section.gate,
    section.evidence_status,
    section.evidence_detail,
    section.skill_name,
  ];
  return values.join(' ').toLocaleLowerCase('de');
}

function matchesFilters(section, filters) {
  const query = (filters.query || '').trim().toLocaleLowerCase('de');
  if (query && !searchableText(section).includes(query)) return false;
  if (filters.phase && section.phase !== filters.phase) return false;
  if (filters.status && section.status !== filters.status) return false;
  if (filters.type && section.content_type !== filters.type) return false;
  if (filters.gate && !(section.gate_tags || []).includes(filters.gate)) return false;
  return true;
}

function roadmapSearchItems(roadmap) {
  return (roadmap?.phases || []).map((phase) => ({
    ...phase,
    id: `capability-${phase.id.toLocaleLowerCase('de')}`,
    title: `${phase.id} · ${phase.title}`,
    facts: [phase.goal, ...(phase.skills || []), phase.practice, phase.observable_outcome],
    assumptions: [phase.evidence_detail],
    risks_gates: [phase.gate],
    recommendation_next_steps: [phase.exit_criterion],
    tags: [phase.skill_name, phase.dependency],
    roadmap_anchor: `phase-${phase.id.toLocaleLowerCase('de')}`,
  }));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { matchesFilters, roadmapSearchItems, searchableText };
}

if (typeof document !== 'undefined') {
  const state = {
    data: null,
    currentView: new URLSearchParams(window.location.search).get('view') || 'executive-overview',
    filters: { query: '', phase: '', status: '', type: '', gate: '' },
  };

  const view = document.getElementById('view');
  const resultStatus = document.getElementById('result-status');
  const controls = {
    search: document.getElementById('search'),
    phase: document.getElementById('filter-phase'),
    status: document.getElementById('filter-status'),
    type: document.getElementById('filter-type'),
    gate: document.getElementById('filter-gate'),
  };

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
    })[char]);
  }

  function safeLocalHref(value) {
    const href = String(value || '');
    if (!href || href.startsWith('/') || href.includes('..') || /^[a-z][a-z0-9+.-]*:/i.test(href)) return '';
    return href;
  }

  function humanize(value) {
    return String(value || '').replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes)) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KiB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MiB`;
  }

  function currentFilters() {
    return {
      query: controls.search.value,
      phase: controls.phase.value,
      status: controls.status.value,
      type: controls.type.value,
      gate: controls.gate.value,
    };
  }

  function hasActiveFilters(filters) {
    return Object.values(filters).some(Boolean);
  }

  function populateSelect(select, values) {
    values.forEach((value) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      select.append(option);
    });
  }

  function renderNavigation() {
    const nav = document.getElementById('primary-nav');
    nav.replaceChildren();
    state.data.navigation.forEach((item) => {
      const link = document.createElement('a');
      link.className = 'nav-link';
      link.href = item.route ? safeLocalHref(item.route) : `?view=${encodeURIComponent(item.id)}`;
      if (item.id === state.currentView && !hasActiveFilters(state.filters)) link.setAttribute('aria-current', 'page');
      link.innerHTML = `<span class="nav-number">${String(item.order).padStart(2, '0')}</span><span>${escapeHtml(item.title)}</span>`;
      nav.append(link);
    });
  }

  function evidenceBlock(title, kind, items) {
    if (!items || !items.length) return '';
    return `<section class="evidence-block ${kind}" aria-labelledby="${kind}-title"><h3 id="${kind}-title">${escapeHtml(title)}</h3><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>`;
  }

  function renderArtifactRegistry() {
    const rows = state.data.artifact_registry.map((artifact) => {
      const status = artifact.status || 'unbekannt';
      const href = safeLocalHref(artifact.download);
      const action = href
        ? `<a href="${escapeHtml(href)}" download>Herunterladen</a><br><small class="mono">${escapeHtml(artifact.download_sha256 || '')}</small>`
        : '<span aria-label="Kein lokaler Download angeboten">Nur Registereintrag</span>';
      return `<tr><td class="mono">${escapeHtml(artifact.id)}</td><td><span class="artifact-status ${escapeHtml(status)}">${escapeHtml(status)}</span></td><td class="mono">${escapeHtml(artifact.path)}</td><td>${action}</td></tr>`;
    }).join('');
    return `<section aria-labelledby="artifact-table-title"><h3 id="artifact-table-title">Lokales Artefaktregister</h3><p>Historische Einträge bleiben sichtbar. Downloadlinks werden ausschließlich für im Projekt vorhandene, beim Build gehashte Dateien angeboten.</p><div class="artifact-table-wrap"><table><thead><tr><th>ID</th><th>Status</th><th>Originalpfad</th><th>Lokale Verfügbarkeit</th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
  }

  function renderDownloads() {
    const items = state.data.project_downloads.map((item) => {
      const href = safeLocalHref(item.download);
      return `<li><a href="${escapeHtml(href)}" download><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.filename)} · ${formatBytes(item.bytes)}</small><small class="mono">SHA-256 ${escapeHtml(item.sha256)}</small></a></li>`;
    }).join('');
    return `<section aria-labelledby="source-download-title"><h3 id="source-download-title">Quellenkorpus und Prüfbericht</h3><ul class="download-list">${items}</ul></section>`;
  }

  function renderRoadmapTeaser() {
    const roadmap = state.data.capability_roadmap;
    return `<aside class="roadmap-teaser" aria-labelledby="roadmap-teaser-title">
      <div><p class="eyebrow">Persönlicher Capability Track P0–P7</p><h3 id="roadmap-teaser-title">Fähigkeiten & Lernroadmap</h3><p>${escapeHtml(roadmap.summary)}</p></div>
      <div class="next-step"><strong>Nächster Lernschritt</strong><p>${escapeHtml(roadmap.next_recommended_step)}</p><a class="button-link" href="?view=capability-roadmap">Roadmap öffnen</a></div>
    </aside>`;
  }

  function renderWhiteboardTeaser() {
    const board = state.data.whiteboard;
    const downloads = board.downloads.map((item) => {
      const href = safeLocalHref(item.path);
      return `<li><a href="${escapeHtml(href)}" download><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.kind)} · ${formatBytes(item.bytes)}</small><small class="mono">SHA-256 ${escapeHtml(item.sha256)}</small></a></li>`;
    }).join('');
    return `<aside class="whiteboard-teaser" aria-labelledby="whiteboard-teaser-title">
      <div><p class="eyebrow">Interaktives Planungsboard</p><h3 id="whiteboard-teaser-title">${escapeHtml(board.title)}</h3><p>${escapeHtml(board.summary)}</p><a class="button-link" href="${escapeHtml(safeLocalHref(board.route))}">Whiteboard öffnen</a></div>
      <div class="whiteboard-boundary"><strong>Freigabegrenze</strong><p>${escapeHtml(board.disclaimer)}</p></div>
      <div class="whiteboard-downloads"><h4>Downloads und Lieferinformationen</h4><p>README und Prüfbericht dokumentieren Nutzung und technische Verifikation; sie sind keine Spezialisten- oder Fachfreigabe.</p><ul class="download-list">${downloads}</ul></div>
    </aside>`;
  }

  function renderSection(section) {
    const sourceTags = (section.task_ids || []).map((id) => `<span class="badge mono">${escapeHtml(id)}</span>`).join('');
    const gateTags = (section.gate_tags || []).map((gate) => `<span class="badge gate">${escapeHtml(gate)}</span>`).join('');
    const artifactExtra = section.id === 'artefaktregister' ? renderArtifactRegistry() + renderDownloads() : '';
    const roadmapTeaser = section.id === 'executive-overview' ? renderWhiteboardTeaser() + renderRoadmapTeaser() : '';
    document.title = `${section.title} · KI-Transformation`;
    view.innerHTML = `
      <article aria-labelledby="page-title">
        <header class="page-header">
          <div class="page-kicker"><span class="badge">${escapeHtml(section.phase)}</span><span class="badge status">${escapeHtml(section.status)}</span><span class="badge">${escapeHtml(humanize(section.content_type))}</span></div>
          <h2 id="page-title">${escapeHtml(section.title)}</h2>
          <div class="page-meta" aria-label="Zugeordnete Gates">${gateTags}</div>
        </header>
        ${roadmapTeaser}
        <div class="evidence-layout">
          ${evidenceBlock('Fakten und gesetzte Leitplanken', 'facts', section.facts)}
          ${evidenceBlock('Annahmen und noch unbelegte Aussagen', 'assumptions', section.assumptions)}
          ${evidenceBlock('Handlungsoptionen', 'options', section.options)}
          ${evidenceBlock('Risiken, Gates und Stop-Kriterien', 'risks', section.risks_gates)}
          ${evidenceBlock('Empfehlungen und nächste Schritte', 'recommendations', section.recommendation_next_steps)}
        </div>
        ${artifactExtra}
        <footer class="section-footnotes">
          <p><strong>Quelltasks</strong></p><div class="page-meta">${sourceTags}</div>
          <p><strong>Artefakt-Referenzen:</strong> <span class="mono">${escapeHtml((section.artifact_refs || []).join(', ') || 'keine')}</span></p>
        </footer>
      </article>`;
    resultStatus.textContent = `Ansicht: ${section.title}`;
  }

  function renderCapabilityRoadmap() {
    const roadmap = state.data.capability_roadmap;
    const capabilityById = Object.fromEntries(roadmap.tracks.capability.map((item) => [item.id, item]));
    const applicationById = Object.fromEntries(roadmap.tracks.application.map((item) => [item.id, item]));
    const trackRows = roadmap.tracks.connections.map((connection) => {
      const capability = capabilityById[connection.from];
      const application = applicationById[connection.to];
      return `<li class="track-row">
        <div class="track-node capability-track"><strong>${escapeHtml(capability.id)}</strong><span>${escapeHtml(capability.title)}</span></div>
        <div class="track-connection"><span aria-hidden="true">→</span><small>${escapeHtml(connection.artifact)}</small></div>
        <div class="track-node application-track"><strong>${escapeHtml(application.id)}</strong><span>${escapeHtml(application.title)}</span></div>
      </li>`;
    }).join('');
    const phaseCards = roadmap.phases.map((phase) => `<article class="phase-card" id="phase-${escapeHtml(phase.id.toLocaleLowerCase('de'))}">
      <header><div><p class="eyebrow">Capability ${escapeHtml(phase.id)}</p><h3>${escapeHtml(phase.title)}</h3></div><span class="evidence-status">${escapeHtml(phase.evidence_status)}</span></header>
      <dl class="phase-details">
        <div><dt>Ziel</dt><dd>${escapeHtml(phase.goal)}</dd></div>
        <div><dt>Zu erlernende Fähigkeiten</dt><dd><ul>${phase.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join('')}</ul></dd></div>
        <div><dt>Praktische Übung</dt><dd>${escapeHtml(phase.practice)}</dd></div>
        <div><dt>Beobachtbares Ergebnis</dt><dd>${escapeHtml(phase.observable_outcome)}</dd></div>
        <div><dt>Exit-Kriterium</dt><dd>${escapeHtml(phase.exit_criterion)}</dd></div>
        <div><dt>Abhängigkeit</dt><dd>${escapeHtml(phase.dependency)}</dd></div>
        <div><dt>Gate</dt><dd>${escapeHtml(phase.gate)}</dd></div>
        <div><dt>Aktueller Evidenzstatus</dt><dd>${escapeHtml(phase.evidence_detail)}</dd></div>
      </dl>
      <p class="phase-skill"><strong>Phasen-Skill:</strong> <a href="#skill-${escapeHtml(phase.id.toLocaleLowerCase('de'))}" class="mono">${escapeHtml(phase.skill_name)}</a></p>
    </article>`).join('');
    const skills = roadmap.skill_register.map((skill, index) => `<li id="skill-${index === 0 ? 'master' : `p${index - 1}`}"><h3 class="mono">${escapeHtml(skill.name)}</h3><p><strong>Zweck:</strong> ${escapeHtml(skill.purpose)}</p><p><strong>Erweiterungsregel:</strong> ${escapeHtml(skill.extension_rule)}</p></li>`).join('');
    document.title = `${roadmap.title} · KI-Transformation`;
    view.innerHTML = `<article class="capability-roadmap" aria-labelledby="page-title">
      <header class="page-header"><div class="page-kicker"><span class="badge">Persönlicher Lernpfad</span><span class="badge status">P0–P7 · evidenzbasiert</span></div><h2 id="page-title">${escapeHtml(roadmap.title)}</h2><p>${escapeHtml(roadmap.summary)}</p></header>
      <section class="next-learning-step" aria-labelledby="next-learning-title"><p class="eyebrow">Jetzt beginnen</p><h3 id="next-learning-title">Nächster empfohlener Lernschritt</h3><p>${escapeHtml(roadmap.next_recommended_step)}</p></section>
      <section aria-labelledby="big-picture-title"><header class="section-heading"><p class="eyebrow">Big Picture</p><h3 id="big-picture-title">Zwei getrennte Tracks – verbunden durch beobachtbare Artefakte</h3><p>Links wächst die persönliche Fähigkeit. Rechts wird sie in einer Enterprise-/Anwendungsentscheidung eingesetzt. Eine Verbindung bedeutet Abhängigkeit, nicht automatisch bestandene Kompetenz oder Freigabe.</p></header><ol class="track-map">${trackRows}</ol></section>
      <section class="evidence-baseline" aria-labelledby="baseline-title"><h3 id="baseline-title">Ehrlicher Ausgangsstatus</h3><ul>${roadmap.evidence_baseline.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
      <section aria-labelledby="phase-title"><header class="section-heading"><p class="eyebrow">Persönlicher Capability Track</p><h3 id="phase-title">Phasen P0–P7</h3></header><div class="phase-grid">${phaseCards}</div></section>
      <section class="skill-register" aria-labelledby="skill-register-title"><header class="section-heading"><p class="eyebrow">Kontinuierlich erweiterbar</p><h3 id="skill-register-title">Skills-Register</h3><p>Die Skills werden mit neuer, rückverfolgbarer Evidenz erweitert. Hypothesen werden nie ohne Quelle zu Fakten.</p></header><ol>${skills}</ol></section>
      <aside class="scope-reminder"><strong>Keine Freigabe durch Lernstatus:</strong> Diese Roadmap erteilt keine fachliche, rechtliche, Datenschutz-, Informationssicherheits-, Betriebs-, Produktions- oder Publikationsfreigabe.</aside>
    </article>`;
    resultStatus.textContent = 'Ansicht: Fähigkeiten & Lernroadmap · 8 Phasen';
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }

  function renderSearchResults(results) {
    document.title = 'Suche und Filter · KI-Transformation';
    const cards = results.map((section) => `
      <article class="result-card">
        <p class="eyebrow">${escapeHtml(section.phase)} · ${escapeHtml(section.status)}</p>
        <h3><a href="${section.roadmap_anchor ? `?view=capability-roadmap#${encodeURIComponent(section.roadmap_anchor)}` : `?view=${encodeURIComponent(section.id)}`}">${escapeHtml(section.title)}</a></h3>
        <p>${escapeHtml((section.facts || [])[0] || '')}</p>
        <div class="page-meta">${(section.gate_tags || []).map((gate) => `<span class="badge gate">${escapeHtml(gate)}</span>`).join('')}</div>
      </article>`).join('');
    view.innerHTML = `<section aria-labelledby="results-title"><header class="page-header"><p class="eyebrow">Korpusweite Recherche</p><h2 id="results-title">Gefilterte Inhalte</h2></header>${cards ? `<div class="result-grid">${cards}</div>` : '<div class="empty-state"><h3>Keine Treffer</h3><p>Suchbegriff oder Filter zurücksetzen.</p></div>'}</section>`;
    resultStatus.textContent = `${results.length} von ${state.data.sections.length + roadmapSearchItems(state.data.capability_roadmap).length} Inhalten gefunden.`;
  }

  function renderProjectState() {
    const residuals = state.data.known_residuals || [];
    document.title = 'Projekt-Handoff · KI-Transformation';
    view.innerHTML = `
      <article aria-labelledby="page-title">
        <header class="page-header"><div class="page-kicker"><span class="badge status">Session-Handoff</span><span class="badge mono">t_7f7236a7</span></div><h2 id="page-title">Projekt-Handoff und Einstieg für neue Sessions</h2><p>Diese Übersicht basiert auf dem unabhängig verifizierten Parent-Korpus. Der operative Projektstand wird zusätzlich in zwei lokalen Handoff-Dateien geführt.</p></header>
        <div class="evidence-layout">
          ${evidenceBlock('Aktueller Stand', 'facts', [state.data.status, '13 quellengebundene Inhaltsbereiche und 20 registrierte Artefakte sind lokal navigierbar.', 'Diese Webseite ist eine separate interne Übersicht und verändert das autoritative Wissensportal-Bundle nicht.'])}
          ${evidenceBlock('Offene Punkte', 'risks', [...residuals, 'Owner-Benennung, Markt-/Wirkungsevidenz, reale B9/B10-Prüfung sowie Fach-, Betriebs-, IAM- und Publikationsgates bleiben offen.'])}
          ${evidenceBlock('Genauer nächster Schritt', 'recommendations', [state.data.next_exact_step])}
        </div>
        <section class="section-footnotes"><p><a href="PROJECT_STATE.md">PROJECT_STATE.md öffnen</a></p><p><a href="project-state.json">project-state.json öffnen</a></p><p><a href="downloads/CONTENT_VERIFICATION.md">Parent-Verifikationsbericht öffnen</a></p></section>
      </article>`;
    resultStatus.textContent = 'Ansicht: Projekt-Handoff';
  }

  function render() {
    state.filters = currentFilters();
    renderNavigation();
    if (hasActiveFilters(state.filters)) {
      const searchableItems = [...state.data.sections, ...roadmapSearchItems(state.data.capability_roadmap)];
      renderSearchResults(searchableItems.filter((section) => matchesFilters(section, state.filters)));
      return;
    }
    if (state.currentView === 'capability-roadmap') {
      renderCapabilityRoadmap();
      return;
    }
    if (state.currentView === 'project-state') {
      renderProjectState();
      return;
    }
    const section = state.data.sections.find((candidate) => candidate.id === state.currentView) || state.data.sections[0];
    state.currentView = section.id;
    renderSection(section);
  }

  function bindControls() {
    Object.values(controls).forEach((control) => control.addEventListener('input', render));
    document.getElementById('clear-filters').addEventListener('click', () => {
      Object.values(controls).forEach((control) => { control.value = ''; });
      render();
      controls.search.focus();
    });
  }

  fetch('web/data/site-data.json', { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((data) => {
      state.data = data;
      populateSelect(controls.phase, data.facets.phase);
      populateSelect(controls.status, data.facets.status);
      populateSelect(controls.type, data.facets.content_type);
      populateSelect(controls.gate, data.facets.gate);
      bindControls();
      render();
    })
    .catch((error) => {
      view.innerHTML = `<section class="error-panel" role="alert"><h2>Daten konnten nicht geladen werden</h2><p>${escapeHtml(error.message)}</p><p>Bitte die Seite über den dokumentierten lokalen Server starten, nicht direkt als Datei öffnen.</p></section>`;
      resultStatus.textContent = 'Ladefehler';
    });
}
