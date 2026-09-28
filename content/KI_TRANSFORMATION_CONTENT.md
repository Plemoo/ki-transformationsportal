# KI-Transformation – konsolidierter Projektinhalt

**Status:** GO nur für engen begleiteten internen D0/D1-Synthesedaten-Evaluationskreis. Keine Produktions-, Real-Daten-, IAM-, Integrations-, Betriebs-, Fach- oder Publikationsfreigabe.

**Evidenzschlüssel:** `F` Fakt/gesetzte Leitplanke; `H` Hypothese; `V` Validierungsbedarf; `G` Fach-Gate; `E` Primärevidenz; `O` offene Frage. Aussagen aus Quellen bleiben gemäß ihrem ursprünglichen Evidenzstatus klassifiziert.

## Navigation der 14 Lieferbereiche

1. [Executive Overview](#executive-overview)
2. [Roadmap und Phasenstatus](#roadmap-phasenstatus)
3. [Zielmarkt und Evidenz](#zielmarkt-evidenz)
4. [Geschäftsproblem und Werthebel](#geschaeftsproblem-werthebel)
5. [Muster-Use-Case und Pilot-Canvas](#muster-use-case-pilot)
6. [Angebotsbaukasten M1–M8 und Paketlogik](#angebotsbaukasten)
7. [Methodenbibliothek M1–M8 und Vorlagen T1–T12](#methodenbibliothek)
8. [Fachlich-funktionale Wissensportal-Spezifikation](#wissensportal-spezifikation)
9. [MVP-Funktionsumfang und Schutzkonzept](#mvp-funktionsumfang-schutz)
10. [Prüf- und Abnahmehistorie HOLD → ADAPT → GO](#abnahmehistorie)
11. [Aktuelle GO-Bedingungen, No-Go-Scope, Fach-Gates und Stop-Kriterien](#go-bedingungen-no-go)
12. [Artefaktregister: autoritativ, superseded und verworfen](#artefaktregister)
13. [Entscheidungslog und offene Entscheidungen/Owner](#entscheidungslog-offene-owner)
14. [Session-Handoff PROJECT_STATE](PROJECT_STATE.md)

---

<a id="executive-overview"></a>
## 1. Executive Overview

**Phase:** Gesamtprogramm  
**Status:** GO – streng begrenzt  
**Inhaltstyp:** `management_overview`

### Fakten und Quellen
- Zielbild ist eine problem-, wert- und verantwortungsorientierte KI-Transformation: vom belegten Geschäftsproblem über einen reversiblen Pilot bis zur ausdrücklich neu zu entscheidenden Skalierung.
- Primärsegment bleibt konditional der deutsche Maschinen- und Anlagenbau mit 50–499 Beschäftigten; das Segment ist eine interne Validierungshypothese, keine abschließend bestätigte Marktentscheidung.
- Der inhaltliche Musterfall ist assistierte interne Servicewissensrecherche für nicht sicherheitskritische Standardfälle; autonome Kundenausgabe, Diagnose, Freigabe und Personalentscheidung sind ausgeschlossen.
- Der aktuelle technische Reifegrad ist P0: A1–A8 sind im lokalen Demo-Scope nachgewiesen; B9/B10 nur als statische/automatisierte Smokes, B11 als automatisierter Smoke.
- Finales GO gilt ausschließlich für einen namentlich begrenzten, begleiteten internen Evaluationskreis, lokal 127.0.0.1, In-Memory und mit D0/D1-Synthesedaten.
- Autoritative Lieferbasis ist wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz mit SHA-256 cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52.

### Annahmen und Datenlücken
- Reale Nachfrage, Kaufbereitschaft, Zahlungsbereitschaft, Nutzerwirkung, Usability und Geschäftswert sind nicht belegt.
- Technische D0/D1-Klassifikation ersetzt keine rechtliche, datenschutzrechtliche, lizenzrechtliche oder sicherheitsfachliche Freigabe.

### Optionen und Trade-offs
- Eng begrenzte Synthesedaten-Evaluation fortführen.
- Bei fehlendem Owner oder Grenzverletzung auf HOLD setzen.
- STOP/Rückbau bei kritischem Leak, Versionsmismatch, D2/D3-Verarbeitung oder Verlust der Loopback-Grenze.

### Risiken, Gates und Abhängigkeiten
- Offen: Recht/Compliance, Datenschutz, InfoSec, Arbeitsrecht/Mitbestimmung, Rechte/Lizenz, Betrieb, IAM und Publikation.
- B9/B10 begrenzen die Nutzerausweitung.
- Restabweichung in NACHWEIS-A5-ROLLEN.md:26 muss vor Neupaketierung, Übergabe oder Scope-Erweiterung korrigiert werden.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Evaluationskreis, Zweck, Zeitraum und Portal/Product Owner namentlich festhalten.
- Zeitlich begrenzten begleiteten Synthesedatenlauf durchführen und Ergebnisse dokumentieren.
- Vor jeder Scope-Erweiterung echte Browser-/Tastatur-/Screenreader-/Responsive-Prüfung und einschlägige Fach-Gates vorlegen.

**Quellen/Fundstellen:** `t_95d25e06`, `t_7b5ce6b5`, `t_6270cd68`, `t_cb52a72a`, `t_620b5346`

**Artefaktverweise:**
- `authoritative_archive` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` — Status `authoritative` — SHA-256 `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`
- `authoritative_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz.sha256` — Status `authoritative`
- `authoritative_manifest` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/MANIFEST.md` — Status `authoritative`
- `authoritative_verification` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/VERIFICATION.md` — Status `authoritative`


---

<a id="roadmap-phasenstatus"></a>
## 2. Roadmap und Phasenstatus

**Phase:** Roadmap  
**Status:** P0-Evaluation freigegeben; spätere Phasen HOLD  
**Inhaltstyp:** `roadmap`

### Fakten und Quellen
- Phase 0 Orientierung/Zielmarkt: interne Evidenzbasis und konditionale Zielmarktentscheidung liegen vor.
- Phase 1 Problem und Use Case: Geschäftsproblem-Canvas und Muster-Pilot-Canvas liegen als interne Hypothesen- und Entscheidungsartefakte vor.
- Phase 2 Angebotsproduktisierung: M1–M8 sind konzipiert; zunächst E und P1 standardisieren, P2/P3 nur als Erweiterungsstruktur.
- Phase 3 Methoden/Portal: Methodenbibliothek v0.9 mit T1–T12 und fachlich-funktionale Portal-Spezifikation v0.9 liegen vor.
- Phase 4 technisches P0-MVP: umgesetzt, mehrfach nachgebessert und unabhängig geprüft; finales enges GO liegt vor.
- Phase 5 begleitete interne Evaluation: nächster erlaubter Schritt, noch nicht durchgeführt.
- Phase 6 erweiterter Nutzerkreis/Produktivisierung/Skalierung: nicht freigegeben.

### Annahmen und Datenlücken
- Die Roadmap ist gate-basiert und nicht kalenderbasiert; keine Dauer wird ohne reale Liefer- und Evaluationsdaten behauptet.

### Optionen und Trade-offs
- Weiter mit begleitetem Evaluationslauf.
- Vor Neupaketierung, Übergabe oder Scope-Erweiterung den Dokumentationsrest korrigieren.
- Programm pausieren, wenn Owner oder zulässiger Rahmen fehlen.

### Risiken, Gates und Abhängigkeiten
- Kein automatischer Übergang zwischen Phasen.
- Jede Scope-, Daten-, Rollen-, Architektur- oder Publikationsänderung löst Re-Gating aus.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- P0-GO-Bedingungen als Eintrittskriterien für die Evaluation verwenden.
- Evaluationsergebnisse in T5/T9/T11/T12 dokumentieren.

**Quellen/Fundstellen:** `t_7efdb91a`, `t_95d25e06`, `t_037c1c30`, `t_7b5ce6b5`, `t_8a935e29`, `t_76c313e0`, `t_2e5af365`, `t_6270cd68`

**Artefaktverweise:**
- `market_evidence` → `/home/hermes/.hermes/kanban/attachments/t_7efdb91a/zielmarkt-evidenzbasis.md` — Status `authoritative`
- `technical_feasibility` → `/home/hermes/.hermes/kanban/attachments/t_14fd8ed5/Technische_Machbarkeitsbewertung_Musterpilot.md` — Status `authoritative`
- `authoritative_archive` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` — Status `authoritative` — SHA-256 `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`


---

<a id="zielmarkt-evidenz"></a>
## 3. Zielmarkt und Evidenz

**Phase:** Discovery  
**Status:** Konditionale interne Präferenz; Validierung offen  
**Inhaltstyp:** `market_evidence`

### Fakten und Quellen
- Die verifizierte Research-Basis umfasst 11 registrierte Quellen und vier Kandidatensegmente: Maschinen-/Anlagenbau, freiberufliche/wissenschaftliche/technische Dienstleistungen, beaufsichtigte Finanzunternehmen sowie größere Gesundheitsversorgung/Pflege.
- Die gewichtete Expertensynthese (keine gemessenen Marktwerte) ergibt 4,15/5 für Maschinen-/Anlagenbau, 4,05/5 für technische Dienstleistungen, 3,50/5 für Finanzunternehmen und 2,90/5 für Gesundheit/Pflege; der Vorsprung des Primärkandidaten ist damit klein.
- Die interne Zielmarktentscheidung priorisiert konditional deutsche Maschinen- und Anlagenbauer mit 50–499 Beschäftigten; B2B-Ingenieur-/Technikdienstleister bleiben nicht parallel zu aktivierende Alternative.
- Öffentliche Evidenz belegt Transformations-/Governancebedarf und Branchenaktivität, aber weder Beratungsbudget noch Kauf- oder Zahlungsbereitschaft.

### Annahmen und Datenlücken
- Ein wiederkehrender interner Servicewissensprozess mit verstreuten, unterschiedlich aktuellen und berechtigten Quellen ist der plausible Einstieg, aber noch nicht kundenseitig bestätigt.
- Sponsor/Käufer könnten Geschäftsführung oder Service-/After-Sales-Leitung und der Business Owner die Serviceleitung sein; Rollen, Budgethoheit und Entscheidungsmacht sind zu validieren.
- Problemwiederholung, Budgetquelle, Beschaffungsweg, Entscheiderzugang und Zahlungsbereitschaft sind offen.
- WZ-M-Daten sind breit aggregiert; das Technikdienstleister-Subsegment muss gesondert abgegrenzt werden.

### Optionen und Trade-offs
- Maschinen-/Anlagenbau als Primärhypothese testen.
- Bei schwacher Evidenz auf engeres Technikdienstleistersegment wechseln.
- Keine Segmentfestlegung ohne Primärinterviews und echte Problembelege.

### Risiken, Gates und Abhängigkeiten
- Zugangsgate: 8–12 strukturierte Probleminterviews, keine Produktdemo und keine vertraulichen Daten.
- Problemgate: wiederkehrender Prozess mit Reibung und fachlichem Owner.
- Daten-/Sicherheitsgate: begrenzter klassifizierter nicht besonders sensibler Korpus, freigegebener Ablageort und bestätigter Datenverantwortlicher.
- Governancegate: dokumentierter Nicht-Hochrisiko-Zuschnitt sowie Datenschutz-, InfoSec- und gegebenenfalls Mitbestimmungsprüfung.
- Externe Ansprache und Angebotskommunikation benötigen gesonderte Freigabe.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Validierungsinterviews mit Sponsor-, Business- und Prozess-Owner-Rollen konzipieren.
- Wiederholung, Problemdruck, Budgetlogik, Mitwirkung und Kaufprozess belegen.

**Quellen/Fundstellen:** `t_7efdb91a`, `t_95d25e06`, /home/hermes/.hermes/kanban/attachments/t_7efdb91a/zielmarkt-evidenzbasis.md

**Artefaktverweise:**
- `market_evidence` → `/home/hermes/.hermes/kanban/attachments/t_7efdb91a/zielmarkt-evidenzbasis.md` — Status `authoritative`


---

<a id="geschaeftsproblem-werthebel"></a>
## 4. Geschäftsproblem und Werthebel

**Phase:** Discovery  
**Status:** Intern konzipiert; reale Baseline offen  
**Inhaltstyp:** `business_problem`

### Fakten und Quellen
- Gesetzte Leitplanke ist ein begrenzter interner Wissens-/Dokumentenprozess im konditional priorisierten Segment; autonome, sicherheitskritische und personalbezogene Entscheidungen sind ausgeschlossen.
- Der Canvas setzt GO nur für interne Discovery-Vorbereitung und HOLD für externe Ansprache, Pilot, Technologieauswahl, reale Datenverarbeitung und Umsetzung.
- Der Canvas definiert Baseline-Dimensionen für Prozesskapazität, Recherche-/Zusammenstellungszeit, Erstpassquote, fachliche Akzeptanz, Fundstellen-Nachvollziehbarkeit, Nutzer/Belegschaft, Risiko, Kontrolle sowie Betrieb/Pflege.
- Lösungsraum und Vergleichsbasis umfassen Prozess-/Wissensordnung, kuratierte manuelle Recherche, strukturierte Suche/Filter, assistierte quellenbezogene Zusammenstellung und Nichtumsetzung.

### Annahmen und Datenlücken
- Hypothese: Servicewissen ist verteilt, unterschiedlich aktuell und nicht zuverlässig auffindbar; dadurch können Suchaufwand, Rückfragen, Nacharbeit, uneinheitliche Bearbeitung und Kontrollaufwand entstehen.
- Hypothese: Nutzer sind Service-/After-Sales-Beschäftigte und Fachspezialisten; Sponsor, Business Owner und Prozess-Owner sind erst noch real zu bestimmen.
- Hypothese: Werthebel sind weniger Such-/Zusammenstellungsaufwand, höhere Erstpassqualität, weniger vermeidbare Eskalation und bessere Quellen-/Versionsklarheit.
- Fallhäufigkeit, heutige Suchdauer, Erstpassquote, Fehlerprofil, Kostensätze und jede Wirkungskette sind nicht erhoben.
- Ein kleiner aktueller klassifizierter und rechtmäßig nutzbarer Korpus, zulässige Baseline und positiver Netto-Wert sind zu validieren.

### Optionen und Trade-offs
- Wissensordnung und Governance verbessern.
- Strukturierte Suche/Filter ohne KI.
- Assistierte Recherche mit menschlicher Prüfung.
- Nicht umsetzen, wenn Baseline oder zulässige Messung fehlen.

### Risiken, Gates und Abhängigkeiten
- Pflicht-Gates: Geschäftsproblem/Wert, Recht/Compliance, Datenschutz, Informationssicherheit, Arbeitsrecht/Mitbestimmung sowie technische Machbarkeit/Betrieb.
- GO zum Pilot-Canvas nur kumulativ bei bestätigtem Problem, Owner, erhebbarer Baseline/Qualitätsrubrik, kleinstem freigegebenem Korpus, ausgeschlossenen sensiblen Entscheidungen und zulassenden Gates.
- HOLD bei fehlenden Ownern, Baseline, Korpus, Rechten, Ressourcen oder Fachprüfungen; STOP bei fehlendem Problem/Owner, unzulässiger Messung, unbeherrschbaren Fachrisiken oder nicht tragfähigem Netto-Wert.
- Individualisierte Beschäftigtenmessung ist ausgeschlossen; Beratung und Technik übernehmen keine Fach-/Business-Freigabe.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Discovery-Leitfaden, Evidenzprotokoll F/H/V/G, Minimal-Baseline, Qualitätsrubrik und Schutzbedarfsraster intern vorbereiten.
- Erst nach gesonderter Freigabe Primärevidenz erheben und den Canvas anhand Go/Adapt/Hold/Stop neu entscheiden.
- Problemwiederholung, Ursachen, Owner, Korpus, Messbarkeit und Netto-Wert vor jedem Realpilot bestätigen.

**Quellen/Fundstellen:** `t_037c1c30`, `t_7b5ce6b5`, `t_8a935e29`


---

<a id="muster-use-case-pilot"></a>
## 5. Muster-Use-Case und Pilot-Canvas

**Phase:** Pilotdesign  
**Status:** Methodischer Demonstrator; kein Realpilot-GO  
**Inhaltstyp:** `pilot_canvas`

### Fakten und Quellen
- Gesetzter Problemraum ist interne Recherche und quellenbezogene Zusammenstellung freigegebener Serviceinformationen für nicht sicherheitskritische Standardfälle; direkte Kundenausgabe und autonome/sicherheitskritische Entscheidungen sind ausgeschlossen.
- Der Musterentwurf setzt GO für interne Pilotvorbereitung und HOLD für reale Datenverarbeitung, Feldpilot, Technologieauswahl und Umsetzung.
- Die Stufen sind Vorbereitung/Baseline, kontrollierte Offline-/Shadow-Evaluation mit synthetischen oder bereinigten Referenzfällen und ein nur separat freizugebender beaufsichtigter Feldpilot.
- Das RACI trennt Sponsor, Business Owner, Prozess-Owner, Pilotleitung, Nutzer, Fachreviewer, Dokumenten-Owner, Fach-Gate-Owner und technische Verantwortung; reale A/R-Besetzung bleibt offen.
- Baseline/KPI umfassen Geschäft/Netto-Wert, Prozesszeit/Erstpassquote, fachliche Qualität/Fundstellen, Nutzer/Belegschaft, Risiko/Kontrollaufwand und Betrieb/Pflege/Support.
- Sechzehn Lernfragen decken Problem/Wert, Qualität/Grenzen, Nutzer/Change sowie Governance/Betrieb ab.

### Annahmen und Datenlücken
- Hypothese: Assistierte Recherche aus einem kleinen freigegebenen Korpus reduziert Aufwand und vermeidbare Rückfragen bei mindestens gehaltener Qualität.
- Geschäftliche Relevanz, Wiederholung, Baseline, Korpusrechte, Nutzerakzeptanz, Fallabdeckung und positiver Nettoeffekt sind noch nachzuweisen.
- Technische Machbarkeit gilt nur bedingt für eine enge reversible Offline-/Shadow-Evaluation; Architektur, Anbieter, reale Daten, Integration und Betrieb bleiben offen.

### Optionen und Trade-offs
- Offline-Auswertung mit synthetischen Referenzfällen.
- Shadow-Nutzung ohne operative Wirkung, erst nach Gate-Prüfung.
- Stop oder Scope-Verengung statt Feldpilot.

### Risiken, Gates und Abhängigkeiten
- Gate A Geschäftsproblem/Pilotfähigkeit, B Recht/Compliance, C Datenschutz, D Informationssicherheit, E Arbeitsrecht/Mitbestimmung und Change, F technische Machbarkeit/Betrieb sind vor einer realen Pilotstufe separat zu entscheiden.
- STOP bei kritischer Sicherheitswirkung, Leak/Rechteverletzung, ungeprüfter Kundenausgabe/autonomer Entscheidung, kritischem Fehler, Umgehung menschlicher Prüfung, unzulässiger Beschäftigtenmessung, fehlender Abschaltbarkeit oder entzogenem Gate.
- ADAPT bei zu breitem Scope, verbesserungsfähigen Fehlerklassen, zu hohem Review-/Pflegeaufwand, unzureichender Baseline/Fallabdeckung oder Qualifizierungsbedarf; HOLD bei fehlenden Ownern, Ressourcen, Korpus oder Gates.
- Unklare Version/Gültigkeit, fehlende Beobachtbarkeit, Kill-Switch oder Rückfallweg führen mindestens zu ADAPT/HOLD.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Nur den bereits freigegebenen Portal-Synthesedatenlauf durchführen; dies ist kein Realpilot.
- Für jede spätere Pilotstufe T7–T12 aktualisieren und alle Pflicht-Gates neu entscheiden.

**Quellen/Fundstellen:** `t_7b5ce6b5`, `t_14fd8ed5`, /home/hermes/.hermes/kanban/attachments/t_14fd8ed5/Technische_Machbarkeitsbewertung_Musterpilot.md

**Artefaktverweise:**
- `technical_feasibility` → `/home/hermes/.hermes/kanban/attachments/t_14fd8ed5/Technische_Machbarkeitsbewertung_Musterpilot.md` — Status `authoritative`


---

<a id="angebotsbaukasten"></a>
## 6. Angebotsbaukasten M1–M8 und Paketlogik

**Phase:** Produktisierung  
**Status:** E und P1 intern standardisierbar; P2/P3 Erweiterungsstruktur  
**Inhaltstyp:** `offering_modules`

### Fakten und Quellen
- M1 Orientierung & Readiness: Scope, Owner, qualitative Readiness-Heatmap, Lücken- und Gate-Landkarte.
- M2 Geschäftsproblem-Discovery: Problem-/Prozess-Canvas, Ursachen, Baseline-Plan, Lösungsraum und Evidenzregister.
- M3 Use-Case-Priorisierung: Steckbriefe, qualitative Matrix, Negativliste und Auswahl eines bevorzugten Falls.
- M4 Pilotdesign: Lernfragen, Prozess, Stufen, Messung, Kontrollen, RACI, Stop und Rückbau.
- M5 Governance & Fach-Gates: Gate-/Nachweisregister, Verantwortungsmatrix, Risiken, Nutzung, Vorfall und Entscheidungslog.
- M6 Befähigung & Change: Rollenwirkung, Beteiligung, Kompetenz, Leitplanken, Support, Adoption und Belastung.
- M7 Wertmessung & Pilotentscheidung: Baselinevergleich, Qualität, Risiko, Netto-Wert und Go/Adapt/Hold/Stop.
- M8 Skalierungsentscheidung & Übergabe: Optionen, Operating Model, Lifecycle, Ressourcen, Re-Gates und Rückbau.
- Einstiegspaket E = M1 + fokussiertes M2 + schlankes M3.
- P1 Pilotentscheidung & Governance = M4 + M5 + M7-Messdesign + M6-Rollen-/Beteiligungsentwurf.
- P2 Pilotbegleitung = M5 + M6 + M7 mit fortgeschriebenem M4; nur nach separaten Freigaben.
- P3 Skalierungsentscheidung = M8 mit fortgeführtem M5/M7 und bedarfsgerechtem M6.
- Jede Modulkarten-Definition umfasst Voraussetzungen, Aktivitäten, Deliverables, Verantwortlichkeiten, Ausschlüsse, Exit-Gates, Qualitätskriterien und Übergabe; ein Modulname allein ist kein lieferfähiger Vertrag.
- E und P1 sind die Standardisierungskandidaten; P2/P3 bleiben Erweiterungsstruktur und benötigen jeweils eine neue Gate-Entscheidung.
- Der Quellenbaukasten sieht alternative Kombinationen und S/M/L-Komplexitätsklassen nur zur internen Aufwandsschätzung vor; Preisoptionen und Preisformel sind Hypothesen, keine Marktpreise oder bindenden Angebote.

### Annahmen und Datenlücken
- Lieferaufwand, Marktpreise, Zahlungsbereitschaft und kaufmännische Bandbreiten sind nicht belegt.
- S/M/L-Zuordnung, Rollenaufwand, Risikopuffer, Fremdkosten und Preislogik müssen anhand realer Liefererfahrung kalibriert werden.
- Die Paketkombination ist je Problem, Reifegrad und Gate-Lage anzupassen; sie darf keine Fachfreigabe implizieren.

### Optionen und Trade-offs
- Nur E standardisieren.
- E + P1 als empfohlene Kernproduktisierung standardisieren.
- Gesamtstrecke E–P3 erst nach realer Liefer-/Marktevidenz standardisieren.

### Risiken, Gates und Abhängigkeiten
- Kein Paket ersetzt Fachfreigaben.
- Technische Implementierung ist nicht Teil des Beratungsbaukastens.
- Scope- und Mitwirkungsrisiken müssen vor Preisbildung geklärt werden.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- E und P1 als interne v1.0-Kandidaten in synthetischem Musterlauf prüfen.
- Aufwand nach Rollen und Komplexität erfassen; keine Marktpreise erfinden.

**Quellen/Fundstellen:** `t_8a935e29`


---

<a id="methodenbibliothek"></a>
## 7. Methodenbibliothek M1–M8 und Vorlagen T1–T12

**Phase:** Methodenstandardisierung  
**Status:** v0.9 intern prüffähig  
**Inhaltstyp:** `method_library`

### Fakten und Quellen
- Evidenzlabels: F Fakt/Leitplanke, H Hypothese, V Validierungsbedarf, G Fach-Gate, E Primärevidenz, O offene Frage.
- Priorisierte Methoden: MB-M1-01 Readiness, MB-M1-02 Owneranalyse, MB-M2-01 Problem-Discovery, MB-M2-02 Prozess/Reibung, MB-M2-03 Evidenzmanagement, MB-M3-01 Priorisierung, MB-M4-01 Pilotdesign, MB-M5-01 Gate-Steuerung, MB-M7-01 KPI-Design.
- M6/M7-Auswertung/M8 bleiben Erweiterungskarten, bis reale Pilot- und Lieferevidenz vorliegt.
- T1 Readiness-Heatmap ohne Scheinscore: sieben Felder, Status belegt/teilweise/offen/hindernd/n.a., Evidenz, Lücke, Wirkung, Owner und nächste Prüfung.
- T2 Stakeholder-/Owner-Map: Betroffenheit, Beitrag, Mandat, Accountability, Phase, Informationsbedarf, Konflikt und Eskalation.
- T3 Geschäftsproblem-Canvas: Situation, Prozess, Problem, Ziel, Werthebel, Baseline, Informationsklassen, Optionen, Gates und Entscheid.
- T4 Prozess-/Reibungsanalyse: Schritte, Rollen, Übergaben, Bearbeitung/Wartezeit, Symptom, Ursache, Kontrolle, Wirkung, Evidenz und Messpunkt.
- T5 Hypothesen-/Evidenzregister: atomare Aussage, F/H/V/G/E/O, Quelle, Scope, Qualität, Gegenindiz, Prüfweg, Owner, Ergebnis und Konsequenz.
- T6 Use-Case-Steckbrief/Priorisierung: Problem, Nutzer, Prozess, Wirkung, Kontrolle, Informationen, Scope, Gates, Referenzoption und qualitative Matrix ohne Summenscore.
- T7 Pilot-Canvas: Lernziel, Scope, Falltypen, Rollen, Daten, Prozess, Stufen, Referenzfälle, KPI, Gate, Stop, Kill-Switch, Rückfall und Entscheidung.
- T8 Gate-/Nachweisregister: Gate, Stufe, Owner, Prüffrage, Nachweis, Status, Auflage, Gültigkeit, Re-Gate und Konsequenz.
- T9 Baseline-/KPI-Plan: Geschäft, Prozess, Qualität, Nutzer/Belegschaft, Risiko/Kontrolle, Pflege/Support/Betrieb; Definition, Quelle, Vergleich, Unsicherheit und Schwelle.
- T10 RACI: je Ergebnis genau ein A; Beratung nie A für Fachfreigabe, Technik oder Kundenentscheid.
- T11 Risiko-/Entscheidungslog: Ursache/Ereignis/Auswirkung/Kontrolle/Owner/Trigger sowie Optionen/Evidenz/Gate/Beschluss/Auflagen.
- T12 Go/Adapt/Hold/Stop: Fakten, Lücken, Optionen, Gate-Matrix, Wertbild, Entscheidungsregeln, Beschluss und nicht freigegebene Schritte.
- Bibliotheksbetrieb: stabile ID, SemVer, Owner, Reviewer, Status, Abhängigkeiten, Review-Trigger, Changelog und Archivierung.
- Jede der neun priorisierten Methodenkarten beschreibt Zweck/Managementfrage, Einsatz, Voraussetzungen, Inputs, Arbeitsschritte, Rollen, Output/Vorlage, Qualität, Evidenz, Gate-Bezug, Übergabe, Fehlanwendung und Abbruchregel.
- T1–T12 sind Feldschemata mit Pflichtfeldern und QA-Regeln; sie reichen von Readiness/Owner/Problem/Prozess/Evidenz über Use Case/Pilot/Gates/KPI/RACI/Risiko bis zur Go/Adapt/Hold/Stop-Entscheidung.
- Bibliotheksbetrieb verlangt stabile IDs, SemVer, Changelog, Library-/Method-/Package-Owner, unabhängigen Review, Definition of Ready/Done, Re-Review-Trigger und Archivierung.
- P1 enthält ausdrücklich einen M6-Rollen-/Beteiligungsentwurf; nur die vollständige M6-/M7-Durchführung sowie M8 bleiben P2/P3-Erweiterung.

### Annahmen und Datenlücken
- Library Owner, Method Owner, Package Owner und Review-Takt sind noch zu benennen/festzulegen.

### Optionen und Trade-offs
- Nur Vorlagen standardisieren.
- Empfohlen: Methoden + Vorlagen + QA/Ownership für E/P1.
- P2/P3 erst nach realer Evidenz voll standardisieren.

### Risiken, Gates und Abhängigkeiten
- Template-Häkchen ist keine Evidenz.
- Beratung dokumentiert Gates, entscheidet sie aber nicht.
- Veraltete Versionen dürfen Entscheidungen nicht still umdeuten.
- Methoden-DoR/DoD, QA- und Abbruchregeln sind vor Nutzung zu prüfen; ein ausgefülltes Template ist kein Nachweis.
- Scope-, Evidenz-, Gate-, Rollen- oder Major-Version-Änderungen lösen Review/Re-Gate aus.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- v0.9 in synthetischem Musterlauf prüfen und danach v1.0 entscheiden.
- Gate-relevante Bausteine durch zuständige Fachfunktionen sichten lassen.

**Quellen/Fundstellen:** `t_76c313e0`, `t_14fd8ed5`, `t_037c1c30`, `t_7b5ce6b5`

**Artefaktverweise:**
- `technical_feasibility` → `/home/hermes/.hermes/kanban/attachments/t_14fd8ed5/Technische_Machbarkeitsbewertung_Musterpilot.md` — Status `authoritative`


---

<a id="wissensportal-spezifikation"></a>
## 8. Fachlich-funktionale Wissensportal-Spezifikation

**Phase:** Portaldesign  
**Status:** v0.9 intern entscheidungsreif; Produktionsscope offen  
**Inhaltstyp:** `functional_specification`

### Fakten und Quellen
- Nutzergruppen: Management/Sponsor, Methoden-Anwendende, Business-/Prozess-/Package Owner, Reviewer/Gate-Funktionen, Content Steward, Portal-/Betriebsadministration und Audit.
- Fachrollen: Reader, Restricted Reader, Contributor, Editor/Content Steward, Peer Reviewer, Content/Method/Package Owner, Gate Owner, Publication Owner, Records/Privacy Reviewer, Auditor und Portal Admin.
- Portal Admin erhält ohne separate fachliche Rolle kein Inhaltsrecht; Least Privilege, Vier-Augen-Prinzip und Default Deny gelten.
- Hauptbereiche: Start; Zielbild/Roadmaps; Angebotsbaukasten; Methoden/Vorlagen; Muster-Use-Cases; Governance/Gates; Entscheidungen/Änderungen; getrenntes Archiv.
- Pflichtmetadaten: stabile ID, Typ, Zweck, Owner, Version/Vorgänger/Nachfolger, Lifecyclestatus, I/R/N, Evidenz, Gates, Gültigkeit, Abhängigkeiten, Änderung, nächste Prüfung, Datenklasse, Rechte/Lizenz, Downloadrecht, Aufbewahrung und Nicht-Ziele.
- Publikationsklassen: I intern freigegeben, R eingeschränkt, N nicht veröffentlichungsfähig; Datenklassen D0/D1 erlaubt, D2/D3 im MVP verboten.
- Funktionen: berechtigungsgefilterte Volltextsuche und Facetten, Pflichtfilter, Vergleich bis drei gleichartige erlaubte Inhalte, versionsgenauer Einzeldownload, Versions-/Lifecycle-/Gate-Sicht.
- Content-Lifecycle: Anlage → Redaktion → Peer Review → Fach-Gates → interne Freigabe → Nutzung/Monitoring → Änderung → Ersetzen/Archivieren → Löschprüfung/Tombstone.
- Fach-Gates: Geschäftsproblem/Wert, Recht/Compliance, Datenschutz, InfoSec, Rechte/Lizenz, Arbeitsrecht/Mitbestimmung, Publikation und Technik/Betrieb.
- Jobs-to-be-done: Management erkennt gültige Entscheidungen; Methoden-Anwendende finden passende Methoden/Vorlagen; Owner verantworten Artefakte; Gate-Funktionen prüfen nur ihr Mandat; Redaktion steuert Metadaten/Lifecycle; Administration erhält kein automatisches Inhaltsrecht.
- Content-Typen: Zielbild, Roadmap/Phasenkarte, Modul/Paket, Methodenkarte, Vorlage, Muster-Use-Case/Pilot-Canvas, Governance/Gate, Nachweis, Entscheidung, Risiko/Abhängigkeit und Glossar/Hilfe.
- Gate-Statusvokabular: nicht anwendbar–begründet, offen, in Prüfung, bestanden, bestanden mit Auflage, nicht bestanden, entzogen, abgelaufen.
- Akzeptanzmatrix A–G prüft Navigation, Metadaten, Berechtigung/Leak-Schutz, Suche/Filter/Vergleich, Download, Lifecycle sowie nichtfunktionale Anforderungen/Rückbau.
- Backlog P0 enthält Schema, Seeds, I/R/N, Navigation, Suche, Vergleich, Download, Lifecycle, Tests und Betriebsanleitung; P1 umfasst Wiedervorlagen/Druck/Accessibility/Import; P2 hält IAM/SSO, Integrationen, Kollaboration, KI-Suche, Analytics, Außenpublikation, reale Migration und Betrieb zurück.
- Offene Architekturentscheidungen betreffen Framework, Persistenz, IAM-Abstraktion, Rechte-sichere Suche, Downloadformat, Audit-Minimum, lokale Bindung/Paketierung/Teststack, Cache/Backup/Löschung, Accessibility/Browserziel und spätere Härtung.

### Annahmen und Datenlücken
- Produktives IAM, Aufbewahrungsfristen, Audit, Backup/Restore, Browserziele, Mengen und Betriebsmodell bleiben offen.

### Optionen und Trade-offs
- Statischer lokaler Katalog.
- Empfohlen: lokales datengetriebenes MVP mit Rollen-/Lifecycle-Simulation.
- Produktionsnahes Portal erst nach separater Architektur- und Gate-Entscheidung.

### Risiken, Gates und Abhängigkeiten
- Keine Metadaten-, Such-, Facetten-, Preview-, Cache-, Fehler- oder Exportleaks.
- Keine öffentliche Klasse im MVP.
- Inhaltsfreigabe ist keine Fach- oder Außenfreigabe.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Engen Evaluationslauf gegen die fachlichen Nutzerpfade durchführen.
- Vor Produktivisierung IAM, Persistenz, Audit, Löschung, Betrieb und reale Fach-Gates neu spezifizieren.

**Quellen/Fundstellen:** `t_2e5af365`, `t_76c313e0`


---

<a id="mvp-funktionsumfang-schutz"></a>
## 9. MVP-Funktionsumfang und Schutzkonzept

**Phase:** P0-MVP  
**Status:** Technisch grün im engen Demo-Scope  
**Inhaltstyp:** `mvp_scope_security`

### Fakten und Quellen
- P0 umfasst Schema/Metadaten, D0/D1-Seeds, I/R/N-Trennung, Navigation/Detail/Version/Abhängigkeiten, Suche/Filter, Vergleich, versionsgenauen Download, Lifecycle/Gates, Tests sowie Start/Reset/Rückbau.
- Runtime ist Python 3.11 Standardbibliothek, In-Memory und nur 127.0.0.1; keine produktive Persistenz oder externe Abhängigkeit.
- Autorisierung wird vor Liste, Suche/Facetten, Detail, Vergleich und Download angewandt.
- Exakter Download verlangt ID + Version; falsche, unbekannte oder fehlende Version wird neutral mit 404 beantwortet.
- unknown und portal_admin ohne fachliche Rolle sehen/listen/laden keine Inhalte; Reader, Restricted Reader und Gate Owner funktionieren nur im Demo-Mandat.
- D2/D3, 0.0.0.0, Bulk-Export, N-Inhalte, R ohne Recht sowie abgelaufene/entzogene Gates werden abgelehnt.
- 22/22 Tests, py_compile, compileall, SHA/gzip/tar und realer Loopback-Start/Stop wurden in der Schlussprüfung mit Exit 0 nachgewiesen.

### Annahmen und Datenlücken
- Statische B9/B10-Smokes ersetzen keine reale Accessibility-/Responsive-Prüfung.
- Lokale Demo-Rollen sind kein produktives IAM.

### Optionen und Trade-offs
- Bestehenden P0-Stand unverändert für Evaluation nutzen.
- Vor jeder Neupaketierung Dokumentationsreferenz korrigieren und neu prüfen.
- Für Produktionsnähe einen neuen Architektur-/Security-Track starten, nicht P0 still erweitern.

### Risiken, Gates und Abhängigkeiten
- Jeder Leak, Versionsmismatch, externe Datenfluss, D2/D3-Verarbeitung oder Verlust der Loopback-Grenze setzt GO sofort auf HOLD.
- Kein Produktions-, Betriebs- oder Security-Attest.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Nur autoritatives Bundle unverändert verwenden.
- Evaluation ohne Real- und Personenbezug protokollieren.

**Quellen/Fundstellen:** `t_fb428621`, `t_8afe8e7a`, `t_3f5b50f9`, `t_8a39971c`, `t_620b5346`, `t_cb52a72a`

**Artefaktverweise:**
- `initial_archive` → `/home/hermes/.hermes/kanban/attachments/t_8afe8e7a/wissensportal-mvp-source.tar.gz` — Status `superseded` — SHA-256 `3383f53a5da687123012f24e29c3dece6178f564c2460b4f0b0a1458fa83aeea`
- `rejected_corrupt_archive` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source-final.tar.gz` — Status `rejected`
- `superseded_rebuilt_archive` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/wissensportal-mvp-p0-source-rebuilt.tar.gz` — Status `superseded` — SHA-256 `777bb89035811c9d26502010fd7f8c36c302717549bd24fc5660374131a7c148`
- `authoritative_archive` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` — Status `authoritative` — SHA-256 `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`
- `authoritative_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz.sha256` — Status `authoritative`
- `authoritative_manifest` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/MANIFEST.md` — Status `authoritative`
- `authoritative_verification` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/VERIFICATION.md` — Status `authoritative`
- `authoritative_a5_roles_evidence` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/NACHWEIS-A5-ROLLEN.md` — Status `authoritative`
- `rejected_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source-final.sha256` — Status `rejected`
- `rejected_evidence` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/P0-NACHWEIS-FINAL.md` — Status `rejected`
- `rejected_rollback` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/RUECKBAU-PROTOKOLL.md` — Status `rejected`
- `rejected_earlier_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source.sha256` — Status `rejected`
- `rejected_earlier_evidence` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/P0-NACHWEIS.md` — Status `rejected`
- `superseded_rebuilt_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/wissensportal-mvp-p0-source-rebuilt.sha256` — Status `superseded`
- `superseded_rebuilt_evidence` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/P0-NACHWEIS-REBUILT.md` — Status `superseded`


---

<a id="abnahmehistorie"></a>
## 10. Prüf- und Abnahmehistorie HOLD → ADAPT → GO

**Phase:** Abnahme  
**Status:** Finales enges GO  
**Inhaltstyp:** `acceptance_history`

### Fakten und Quellen
- Erste Umsetzung t_fb428621 wurde nach Verlust des Scratch-Quellstands in t_8afe8e7a ausdrücklich als funktional äquivalente, nicht byte-identische Rekonstruktion neu geliefert: SHA 3383f53a5da687123012f24e29c3dece6178f564c2460b4f0b0a1458fa83aeea, 11/11 Tests, Loopback HTTP 200.
- Erste unabhängige Stichprobe und Erstabnahme t_48c6a4fd/t_d28cfd4e: P0 nur teilweise erfüllt; HOLD für den nächsten Reifegrad und ADAPT zur Schließung A1–A8.
- P0-Nachbesserung t_3f5b50f9 meldete 18/18 grün, lieferte aber ein korruptes Archiv; zwei unabhängige Prüfungen in t_a335a6f3 ergaben FAIL/HOLD wegen SHA-/Dateinamenswiderspruch, gzip-/tar-Fehler und nicht ausführbarer Tests.
- Forensische Identität des verworfenen Attachments: SHA-256 81d1d0b7469ac2edfb95728ab13a13fe0713573dfcd559eeade88ff670a11e48; die mitgelieferte SHA-Datei behauptete 93bcbf8616acbcee2970be2cf59158afe110ccd6607238561a623099e8e3a60a und nannte den falschen Dateinamen. Dies ist keine gültige Lieferfreigabe.
- Rebuild t_8a39971c: reproduzierbares Archiv SHA 777bb89035811c9d26502010fd7f8c36c302717549bd24fc5660374131a7c148; 18/18 Tests.
- Unabhängige Rebuilt-Prüfung t_a335a6f3: A1–A4, A6, A8 grün; ADAPT/HOLD wegen A5/A7, da version=9.9.9 HTTP 200 mit 1.0.0 lieferte und unknown/portal_admin auf Reader zurückfiel.
- Wiederabnahme t_5b312955: erneut HOLD und ADAPT für exakte Versionsprüfung, Regressionstest, Rollen-Fail-Closed und konsistente Lieferung.
- Restnachbesserung t_620b5346: Red-Tests für A5 und Rollen zunächst Exit 1; danach 22/22 grün, exakte ID+Version und Default-Deny-Rollen.
- Schlussprüfung t_cb52a72a: technische Punkte nachgewiesen; Dokumentationspunkt nur teilweise wegen veralteter Referenz in NACHWEIS-A5-ROLLEN.md:26.
- Finalentscheidung t_6270cd68: enges GO; Dokumentationsrest nicht blockierend, aber vor Neupaketierung/Übergabe/Scope-Erweiterung zwingend zu korrigieren.

### Annahmen und Datenlücken
- GO bezieht sich nur auf den expliziten Evaluationsscope, nicht auf alle fachlichen Anforderungen.

### Optionen und Trade-offs
- GO im engen Scope beibehalten.
- Bei Bedingungsverletzung sofort HOLD.
- STOP nur bei kritischem Restdefekt, fehlender Verantwortung oder aufgegebenem Zielbild.

### Risiken, Gates und Abhängigkeiten
- Grüne Testzahl allein genügt nicht; gezielte Negativproben und Artefaktidentität bleiben Pflicht.
- B9/B10 und Fach-Gates bleiben offen.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Historie revisionsfest erhalten; verworfene/superseded Artefakte nie als aktuell verwenden.
- Restreferenz korrigieren, falls eine neue Lieferung erzeugt wird.

**Quellen/Fundstellen:** `t_48c6a4fd`, `t_d28cfd4e`, `t_3f5b50f9`, `t_8a39971c`, `t_a335a6f3`, `t_5b312955`, `t_620b5346`, `t_cb52a72a`, `t_6270cd68`

**Artefaktverweise:**
- `initial_archive` → `/home/hermes/.hermes/kanban/attachments/t_8afe8e7a/wissensportal-mvp-source.tar.gz` — Status `superseded` — SHA-256 `3383f53a5da687123012f24e29c3dece6178f564c2460b4f0b0a1458fa83aeea`
- `rejected_corrupt_archive` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source-final.tar.gz` — Status `rejected`
- `superseded_rebuilt_archive` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/wissensportal-mvp-p0-source-rebuilt.tar.gz` — Status `superseded` — SHA-256 `777bb89035811c9d26502010fd7f8c36c302717549bd24fc5660374131a7c148`
- `authoritative_archive` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` — Status `authoritative` — SHA-256 `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`
- `rejected_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source-final.sha256` — Status `rejected`
- `rejected_evidence` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/P0-NACHWEIS-FINAL.md` — Status `rejected`
- `rejected_rollback` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/RUECKBAU-PROTOKOLL.md` — Status `rejected`
- `rejected_earlier_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source.sha256` — Status `rejected`
- `rejected_earlier_evidence` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/P0-NACHWEIS.md` — Status `rejected`
- `superseded_rebuilt_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/wissensportal-mvp-p0-source-rebuilt.sha256` — Status `superseded`
- `superseded_rebuilt_evidence` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/P0-NACHWEIS-REBUILT.md` — Status `superseded`


---

<a id="go-bedingungen-no-go"></a>
## 11. Aktuelle GO-Bedingungen, No-Go-Scope, Fach-Gates und Stop-Kriterien

**Phase:** Governance  
**Status:** Verbindlich  
**Inhaltstyp:** `decision_guardrails`

### Fakten und Quellen
- GO-Bedingungen: namentlich begrenzter begleiteter interner Evaluationskreis; festgehaltener Zweck/Zeitraum/Owner; ausschließlich 127.0.0.1; In-Memory; D0/D1-Synthesedaten; autoritatives unverändertes Bundle.
- No-Go: reale Daten/D2/D3, erweiterter Nutzerkreis, Produktivbetrieb/Hosting, produktives IAM/SSO, Persistenz, externe Integrationen, externe oder öffentliche Veröffentlichung.
- Offene Fach-Gates: Recht/Compliance, Datenschutz, Informationssicherheit, Arbeitsrecht/Mitbestimmung, Rechte/Lizenz, produktive Technik/Betrieb, IAM, interne Publikation für erweiterten realen Kreis, externe Publikation.
- Stop/Hold: Leak oder nicht neutrale Autorisierungsantwort, falsche/fehlende Versionsbindung, nicht freigegebener Datenfluss, externe Verbindung, D2/D3, Verlust Loopback/In-Memory, fehlender Kill-Switch/Rückfall, kritischer unbelegter Output, individualisierte Beschäftigtenmessung oder entzogenes Gate.

### Annahmen und Datenlücken
- Die Benennung realer Owner und Evaluationsdauer steht noch aus.

### Optionen und Trade-offs
- GO nur bei kumulativer Erfüllung aller Bedingungen.
- ADAPT/HOLD bei korrigierbarer Abweichung.
- STOP/Rückbau bei kritischer oder nicht begrenzbarer Abweichung.

### Risiken, Gates und Abhängigkeiten
- Scope creep ist der zentrale Governance-Risikotreiber.
- Eine positive technische Prüfung kompensiert kein negatives/offenes Fach-Gate.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Bedingungen in Evaluationsauftrag übernehmen.
- Vor Start Ownerbestätigung und Rückfallweg dokumentieren.

**Quellen/Fundstellen:** `t_6270cd68`, `t_cb52a72a`, `t_14fd8ed5`, `t_76c313e0`

**Artefaktverweise:**
- `authoritative_archive` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` — Status `authoritative` — SHA-256 `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`
- `authoritative_verification` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/VERIFICATION.md` — Status `authoritative`


---

<a id="artefaktregister"></a>
## 12. Artefaktregister: autoritativ, superseded und verworfen

**Phase:** Artefaktmanagement  
**Status:** Autoritative Basis eindeutig  
**Inhaltstyp:** `artifact_registry`

### Fakten und Quellen
- AUTORITATIV — t_620b5346 — wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz — vorhanden — SHA-256 cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52.
- AUTORITATIV — t_620b5346 — gleichnamige .sha256, MANIFEST.md, VERIFICATION.md und NACHWEIS-A5-ROLLEN.md — vorhanden.
- AUTORITATIV INHALT — t_7efdb91a — zielmarkt-evidenzbasis.md — vorhanden.
- AUTORITATIV FACHLICHE EINGABE — t_14fd8ed5 — Technische_Machbarkeitsbewertung_Musterpilot.md — vorhanden.
- SUPERSEDED — t_8a39971c — wissensportal-mvp-p0-source-rebuilt.tar.gz — vorhanden — verifizierte SHA 777bb89035811c9d26502010fd7f8c36c302717549bd24fc5660374131a7c148; durch A5/Rollen-Bundle ersetzt.
- SUPERSEDED — t_8afe8e7a — wissensportal-mvp-source.tar.gz — vorhanden — verifizierte SHA 3383f53a5da687123012f24e29c3dece6178f564c2460b4f0b0a1458fa83aeea; funktional frühere Basis.
- VERWORFEN — t_3f5b50f9 — wissensportal-mvp-p0-source-final.tar.gz — vorhanden, aber gzip-korrupt/inkonsistent geliefert; nicht verwenden.
- RESTABWEICHUNG — t_cb52a72a — NACHWEIS-A5-ROLLEN.md:26 verweist veraltet auf wissensportal-mvp-p0-source-rebuilt.sha256; die autoritative SHA-Datei und übrigen Manifest-/Verifikationsdaten sind korrekt.
- PROVENIENZ — t_8afe8e7a — autorisierte funktional äquivalente Rekonstruktion nach Verlust des ursprünglichen Scratch-Quellstands; nicht byte-identisch zur ersten Umsetzung.
- FORENSISCH VERWORFEN — t_3f5b50f9 — tatsächliche Attachment-SHA 81d1d0b7469ac2edfb95728ab13a13fe0713573dfcd559eeade88ff670a11e48; mitgelieferte Selbstbehauptung 93bcbf8616acbcee2970be2cf59158afe110ccd6607238561a623099e8e3a60a mit falschem Dateinamen; keine davon ist eine genehmigte Liefer-SHA.
- VERWORFENE BEGLEITNACHWEISE — t_3f5b50f9 — finale und frühere SHA-Dateien, P0-Nachweise sowie Rückbauprotokoll bleiben nur historische, nicht reproduzierbare Selbstnachweise.
- SUPERSEDED BEGLEITNACHWEISE — t_8a39971c — rebuilt SHA-Datei und P0-NACHWEIS-REBUILT.md sind intern konsistente historische Evidenz, aber nicht aktuelle Lieferbasis.

### Annahmen und Datenlücken
- Keine weiteren SHA-Werte werden ohne vorliegenden verifizierten Nachweis behauptet.

### Optionen und Trade-offs
- Nur autoritative Basis verwenden.
- Superseded Dateien nur für Historie/Forensik halten.
- Verworfenes Archiv niemals entpacken oder als Prüfbasis verwenden.

### Risiken, Gates und Abhängigkeiten
- Artefaktvermischung kann frühere A5-/Rollenfehler wieder einführen.
- Dokumentationsreferenz vor neuer Lieferung korrigieren.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Bei Nutzung Archivpfad und SHA prüfen.
- Neupaketierung nur mit frischer unabhängiger Prüfung.

**Quellen/Fundstellen:** `t_7efdb91a`, `t_14fd8ed5`, `t_8afe8e7a`, `t_3f5b50f9`, `t_8a39971c`, `t_620b5346`, `t_cb52a72a`

**Artefaktverweise:**
- `market_evidence` → `/home/hermes/.hermes/kanban/attachments/t_7efdb91a/zielmarkt-evidenzbasis.md` — Status `authoritative`
- `technical_feasibility` → `/home/hermes/.hermes/kanban/attachments/t_14fd8ed5/Technische_Machbarkeitsbewertung_Musterpilot.md` — Status `authoritative`
- `initial_archive` → `/home/hermes/.hermes/kanban/attachments/t_8afe8e7a/wissensportal-mvp-source.tar.gz` — Status `superseded` — SHA-256 `3383f53a5da687123012f24e29c3dece6178f564c2460b4f0b0a1458fa83aeea`
- `initial_manifest` → `/home/hermes/.hermes/kanban/attachments/t_8afe8e7a/ARTIFACT_MANIFEST.txt` — Status `superseded`
- `rejected_corrupt_archive` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source-final.tar.gz` — Status `rejected`
- `rejected_manifest` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/MANIFEST-FINAL.md` — Status `rejected`
- `superseded_rebuilt_archive` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/wissensportal-mvp-p0-source-rebuilt.tar.gz` — Status `superseded` — SHA-256 `777bb89035811c9d26502010fd7f8c36c302717549bd24fc5660374131a7c148`
- `superseded_rebuilt_manifest` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/MANIFEST-REBUILT.md` — Status `superseded`
- `authoritative_archive` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` — Status `authoritative` — SHA-256 `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`
- `authoritative_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz.sha256` — Status `authoritative`
- `authoritative_manifest` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/MANIFEST.md` — Status `authoritative`
- `authoritative_verification` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/VERIFICATION.md` — Status `authoritative`
- `authoritative_a5_roles_evidence` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/NACHWEIS-A5-ROLLEN.md` — Status `authoritative`
- `rejected_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source-final.sha256` — Status `rejected`
- `rejected_evidence` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/P0-NACHWEIS-FINAL.md` — Status `rejected`
- `rejected_rollback` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/RUECKBAU-PROTOKOLL.md` — Status `rejected`
- `rejected_earlier_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source.sha256` — Status `rejected`
- `rejected_earlier_evidence` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/P0-NACHWEIS.md` — Status `rejected`
- `superseded_rebuilt_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/wissensportal-mvp-p0-source-rebuilt.sha256` — Status `superseded`
- `superseded_rebuilt_evidence` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/P0-NACHWEIS-REBUILT.md` — Status `superseded`


---

<a id="entscheidungslog-offene-owner"></a>
## 13. Entscheidungslog und offene Entscheidungen/Owner

**Phase:** Steuerung  
**Status:** Teilweise entschieden  
**Inhaltstyp:** `decision_log`

### Fakten und Quellen
- Entschieden: Primärsegment als konditionale Hypothese Maschinen-/Anlagenbau 50–499.
- Entschieden: geschäftsproblem-, wert- und verantwortungsorientierte Positionierung; keine Tool-/Implementierungspositionierung.
- Entschieden: E und P1 zuerst standardisieren; P2/P3 bleiben Erweiterung.
- Entschieden: Portal-Option B, lokales datengetriebenes MVP mit Rollen-/Lifecycle-Simulation.
- Entschieden: finales enges GO nur für begleiteten D0/D1-Synthesedaten-Evaluationskreis.
- Offen: Portal/Product Owner, Content/Library Owner, Publication Owner, Business-/Process Owner, Method/Package Owner, Accessibility-Verantwortung und spätere Betriebsverantwortung.
- Offen: Marktnachfrage, Kauf-/Zahlungsbereitschaft, reale Baseline, Nutzen, Usability, Review-Takt, Aufbewahrung/Löschung, IAM, Betrieb und alle Fach-Gates.

### Annahmen und Datenlücken
- Rollenbezeichnungen genügen in den Artefakten; vor Evaluation muss mindestens der verantwortliche Portal/Product Owner namentlich feststehen.

### Optionen und Trade-offs
- Owner jetzt benennen und Evaluation starten.
- HOLD bis Verantwortung und Zweck geklärt sind.

### Risiken, Gates und Abhängigkeiten
- Unbesetzte Accountability führt zu HOLD.
- Beratung oder Technik darf Fach-/Business-Ownership nicht still übernehmen.

### Empfehlung, Entscheidungsbedarf und nächste interne Schritte
- Namentliche Owner- und Mandatsbestätigung erstellen.
- Genauen nächsten Schritt: autoritatives Bundle unverändert für einen zeitlich begrenzten begleiteten Synthesedaten-Evaluationslauf bereitstellen, Ergebnisse erfassen und danach T12 neu entscheiden.

**Quellen/Fundstellen:** `t_95d25e06`, `t_8a935e29`, `t_76c313e0`, `t_2e5af365`, `t_6270cd68`

**Artefaktverweise:**
- `authoritative_archive` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` — Status `authoritative` — SHA-256 `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`

---

## Vollständiger Quellenkatalog

- `t_7efdb91a` — Zielmarkt-Evidenzbasis
- `t_95d25e06` — Zielmarktentscheidung und Transformationsrahmen
- `t_037c1c30` — Geschäftsproblem-Canvas
- `t_7b5ce6b5` — Muster-Use-Case und Pilot-Canvas
- `t_8a935e29` — Angebotsbaukasten M1–M8
- `t_14fd8ed5` — Technische Machbarkeitsbewertung
- `t_76c313e0` — Methodenbibliothek und T1–T12
- `t_2e5af365` — Fachlich-funktionale Wissensportal-Spezifikation
- `t_fb428621` — Erste technische MVP-Umsetzung
- `t_8afe8e7a` — Rekonstruierte, reproduzierbare erste Lieferbasis
- `t_48c6a4fd` — Erste unabhängige technische Stichprobe
- `t_d28cfd4e` — Erstabnahme HOLD/ADAPT
- `t_3f5b50f9` — P0-Nachbesserung; korruptes Finalarchiv
- `t_5b312955` — Wiederabnahme HOLD/ADAPT
- `t_8a39971c` — Rebuilt-Reparaturarchiv
- `t_a335a6f3` — Unabhängige Prüfung des Rebuilt-Archivs
- `t_620b5346` — A5- und Rollen-Fail-Closed-Nachbesserung
- `t_cb52a72a` — Unabhängige technische Schlussprüfung
- `t_6270cd68` — Finale enge P0-GO-Entscheidung

## Vollständiges Artefaktregister (maschinenidentisch zum JSON)

- `market_evidence` → `/home/hermes/.hermes/kanban/attachments/t_7efdb91a/zielmarkt-evidenzbasis.md` — `authoritative` — vorhanden erwartet: `true`
- `technical_feasibility` → `/home/hermes/.hermes/kanban/attachments/t_14fd8ed5/Technische_Machbarkeitsbewertung_Musterpilot.md` — `authoritative` — vorhanden erwartet: `true`
- `initial_archive` → `/home/hermes/.hermes/kanban/attachments/t_8afe8e7a/wissensportal-mvp-source.tar.gz` — `superseded` — vorhanden erwartet: `true` — SHA-256 `3383f53a5da687123012f24e29c3dece6178f564c2460b4f0b0a1458fa83aeea`
- `initial_manifest` → `/home/hermes/.hermes/kanban/attachments/t_8afe8e7a/ARTIFACT_MANIFEST.txt` — `superseded` — vorhanden erwartet: `true`
- `rejected_corrupt_archive` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source-final.tar.gz` — `rejected` — vorhanden erwartet: `true`
- `rejected_manifest` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/MANIFEST-FINAL.md` — `rejected` — vorhanden erwartet: `true`
- `superseded_rebuilt_archive` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/wissensportal-mvp-p0-source-rebuilt.tar.gz` — `superseded` — vorhanden erwartet: `true` — SHA-256 `777bb89035811c9d26502010fd7f8c36c302717549bd24fc5660374131a7c148`
- `superseded_rebuilt_manifest` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/MANIFEST-REBUILT.md` — `superseded` — vorhanden erwartet: `true`
- `authoritative_archive` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` — `authoritative` — vorhanden erwartet: `true` — SHA-256 `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`
- `authoritative_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz.sha256` — `authoritative` — vorhanden erwartet: `true`
- `authoritative_manifest` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/MANIFEST.md` — `authoritative` — vorhanden erwartet: `true`
- `authoritative_verification` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/VERIFICATION.md` — `authoritative` — vorhanden erwartet: `true`
- `authoritative_a5_roles_evidence` → `/home/hermes/.hermes/kanban/attachments/t_620b5346/NACHWEIS-A5-ROLLEN.md` — `authoritative` — vorhanden erwartet: `true`
- `rejected_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source-final.sha256` — `rejected` — vorhanden erwartet: `true`
- `rejected_evidence` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/P0-NACHWEIS-FINAL.md` — `rejected` — vorhanden erwartet: `true`
- `rejected_rollback` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/RUECKBAU-PROTOKOLL.md` — `rejected` — vorhanden erwartet: `true`
- `rejected_earlier_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source.sha256` — `rejected` — vorhanden erwartet: `true`
- `rejected_earlier_evidence` → `/home/hermes/.hermes/kanban/attachments/t_3f5b50f9/P0-NACHWEIS.md` — `rejected` — vorhanden erwartet: `true`
- `superseded_rebuilt_sha_file` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/wissensportal-mvp-p0-source-rebuilt.sha256` — `superseded` — vorhanden erwartet: `true`
- `superseded_rebuilt_evidence` → `/home/hermes/.hermes/kanban/attachments/t_8a39971c/P0-NACHWEIS-REBUILT.md` — `superseded` — vorhanden erwartet: `true`

## Bekannte Restgrenzen

- NACHWEIS-A5-ROLLEN.md:26 verweist veraltet auf die frühere SHA-Datei; vor Neupaketierung, Übergabe oder Scope-Erweiterung korrigieren und erneut prüfen.

## Genauer nächster Schritt

Evaluationskreis, Zweck, Zeitraum und Portal/Product Owner namentlich festhalten; dann ausschließlich das autoritative Bundle unverändert lokal auf 127.0.0.1/In-Memory mit D0/D1-Synthesedaten zeitlich begrenzt begleitet evaluieren, Ergebnisse/Vorfälle und reale B9/B10-Browser-, Tastatur-, Screenreader- und Responsive-Befunde dokumentieren und danach mit T12 neu entscheiden. Vor Neupaketierung, Übergabe oder Scope-Erweiterung NACHWEIS-A5-ROLLEN.md:26 korrigieren, erneut unabhängig prüfen und alle einschlägigen Fach-Gate-Entscheidungen einholen.

## Verbindlicher Scope-Merksatz

Das finale GO gilt nur, wenn alle folgenden Bedingungen kumulativ erfüllt sind: namentlich begrenzter begleiteter interner Evaluationskreis; 127.0.0.1; In-Memory; D0/D1-Synthesedaten; Zweck, Zeitraum und Portal/Product Owner vor Nutzung festgehalten; unverändertes autoritatives Bundle wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz. Nicht erlaubt sind: reale Daten/D2/D3; erweiterter Nutzerkreis; Produktivbetrieb/Hosting; produktives IAM/Persistenz/Integrationen; externe oder öffentliche Publikation. Jede Erweiterung von Nutzer-, Daten-, Integrations-, Betriebs- oder Publikationsscope ist eine neue Entscheidung und benötigt die jeweils einschlägigen Fach-Gates.
