# PROJECT_STATE

schema_version: 1.0.0
handoff_task: t_b99c5e59
parent_task: t_86af2dbe
status: CONDITIONALLY_READY_FOR_LIMITED_SYNTHETIC_EVALUATION

## Ziel

Sessionübergreifende, quellengebundene Fortführung der KI-Transformationsarbeit und Bereitstellung konsolidierter Inhalte für eine lokale Übersichtswebseite. Die Inhaltsbasis umfasst Zielmarkt, Geschäftsproblem, Musterpilot, Angebotsmodule, Methoden/Vorlagen, Portal-Spezifikation, technischen MVP-Stand, Abnahmehistorie, Gates und Artefakte.

## Aktueller Stand

- Fachlich/inhaltlich: Zielmarktentscheidung konditional; Problem- und Nutzenbild bleiben ausdrücklich H/V. Problem-, Pilot-, Angebots-, Methoden- und Portalkonzept sind intern materialisiert, aber nicht durch reale Kunden-, Nutzer- oder Marktevidenz freigegeben.
- Technisch: P0-Funktionen A1–A8 im lokalen Demo-Scope nachgewiesen; 22/22 Tests und gezielte A5-/Rollen-Gegenproben grün.
- Entscheidung: GO nur für namentlich begrenzten begleiteten internen Evaluationskreis, `127.0.0.1`, In-Memory, D0/D1-Synthesedaten.
- B9/B10: nur statische/automatisierte Smokes; keine reale Browser-, Tastatur-, Screenreader-, Geräte- oder formale WCAG-Prüfung.
- B11: automatisierter Smoke; keine Nutzer-/Verständlichkeitsprüfung.

## Verbindliche Entscheidungen

1. Primärsegment-Hypothese: deutsche Maschinen- und Anlagenbauer mit 50–499 Beschäftigten.
2. Einstieg über belegtes Geschäftsproblem, nicht über Tool-Verkauf.
3. E und P1 zuerst standardisieren; P2/P3 bleiben Erweiterungsstruktur.
4. Portal bleibt lokal, datengetrieben und rollen-/lifecycle-simuliert; keine produktive Architekturfreigabe.
5. Finale GO-Grenze darf nicht erweitert werden.

## Autoritative Artefakte

- archive: /home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz
- sha256: cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52
- sha_file: /home/hermes/.hermes/kanban/attachments/t_620b5346/wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz.sha256
- manifest: /home/hermes/.hermes/kanban/attachments/t_620b5346/MANIFEST.md
- verification: /home/hermes/.hermes/kanban/attachments/t_620b5346/VERIFICATION.md
- a5_roles_evidence: /home/hermes/.hermes/kanban/attachments/t_620b5346/NACHWEIS-A5-ROLLEN.md
- market_evidence: /home/hermes/.hermes/kanban/attachments/t_7efdb91a/zielmarkt-evidenzbasis.md
- technical_feasibility: /home/hermes/.hermes/kanban/attachments/t_14fd8ed5/Technische_Machbarkeitsbewertung_Musterpilot.md

Die autoritative Lieferbasis ist ausschließlich das oben genannte A5-/Rollen-Default-Deny-Bundle. Seine Freigabe gilt nur für den engen technischen Evaluationsscope und ist keine Fach-, Betriebs-, Publikations- oder Produktionsfreigabe.

## Superseded / verworfen

- superseded: /home/hermes/.hermes/kanban/attachments/t_8afe8e7a/wissensportal-mvp-source.tar.gz (ausdrücklich autorisierte funktional äquivalente Rekonstruktion nach Verlust des Scratch-Quellstands, nicht byte-identische Wiederherstellung; SHA 3383f53a5da687123012f24e29c3dece6178f564c2460b4f0b0a1458fa83aeea)
- rejected: /home/hermes/.hermes/kanban/attachments/t_3f5b50f9/wissensportal-mvp-p0-source-final.tar.gz (korrupt/inkonsistent; nicht verwenden; tatsächliche forensische Attachment-SHA 81d1d0b7469ac2edfb95728ab13a13fe0713573dfcd559eeade88ff670a11e48, während die mitgelieferte Selbstbehauptung 93bcbf8616acbcee2970be2cf59158afe110ccd6607238561a623099e8e3a60a und einen falschen Dateinamen nannte; keine gültige Liefer-SHA)
- superseded: /home/hermes/.hermes/kanban/attachments/t_8a39971c/wissensportal-mvp-p0-source-rebuilt.tar.gz (repariert; SHA 777bb89035811c9d26502010fd7f8c36c302717549bd24fc5660374131a7c148; durch A5/Rollen-Bundle ersetzt)
- Die Begleitnachweise unter `t_3f5b50f9` sind verworfene historische Selbstnachweise; rebuilt SHA-Datei und `P0-NACHWEIS-REBUILT.md` unter `t_8a39971c` sind superseded historische Evidenz.

## Offene Punkte und Gates

- Owner: Portal/Product, Content/Library, Publication, Business/Process, Method/Package, Accessibility und spätere Betriebsverantwortung.
- Fach-Gates: Recht/Compliance, Datenschutz, Informationssicherheit, Arbeitsrecht/Mitbestimmung, Rechte/Lizenz, produktive Technik/Betrieb und IAM; zusätzlich getrennt interne Publikationsentscheidung für einen erweiterten realen Nutzerkreis und jede externe Veröffentlichung.
- Evidenzlücken: Markt-/Kaufbereitschaft, reale Baseline, Nutzerwirkung, Usability, Geschäftswert, reale B9/B10-Prüfung.
- Restabweichung: `NACHWEIS-A5-ROLLEN.md:26` nennt eine veraltete SHA-Datei; vor Neupaketierung, Übergabe oder Scope-Erweiterung korrigieren und erneut prüfen.

## No-Go und Stop

No-Go: reale Daten/D2/D3, erweiterter Nutzerkreis, Produktivbetrieb/Hosting, produktives IAM/SSO, Persistenz, externe Integrationen, externe oder öffentliche Veröffentlichung.

Sofort HOLD/STOP bei Leak, nicht neutraler Autorisierungsantwort, Versionsmismatch, externem/nicht freigegebenem Datenfluss, D2/D3-Verarbeitung, Verlust von Loopback/In-Memory, fehlendem Kill-Switch/Rückfall, kritischem unbelegtem Output, individualisierter Beschäftigtenmessung oder entzogenem Pflicht-Gate.

## Task-Graph-Anker

source_tasks: t_7efdb91a, t_95d25e06, t_037c1c30, t_7b5ce6b5, t_8a935e29, t_14fd8ed5, t_76c313e0, t_2e5af365, t_fb428621, t_8afe8e7a, t_48c6a4fd, t_d28cfd4e, t_3f5b50f9, t_5b312955, t_8a39971c, t_a335a6f3, t_620b5346, t_cb52a72a, t_6270cd68
content_task: t_b99c5e59
verification_task: t_31e8fffc
parent_orchestration: t_86af2dbe
content_files: KI_TRANSFORMATION_CONTENT.md, project-content.json
verification_file: CONTENT_VERIFICATION.md

## Genauer nächster Schritt

Evaluationskreis, Zweck, Zeitraum und Portal/Product Owner namentlich festhalten. Danach ausschließlich das autoritative Bundle unverändert lokal auf `127.0.0.1`, In-Memory und mit D0/D1-Synthesedaten in einem zeitlich begrenzten begleiteten Lauf evaluieren; Ergebnisse und Vorfälle sowie reale Browser-, Tastatur-, Screenreader- und Responsive-B9/B10-Befunde dokumentieren und anschließend mit T12 erneut GO/ADAPT/HOLD/STOP entscheiden. Vor Neupaketierung, Übergabe oder jeder Scope-Erweiterung `NACHWEIS-A5-ROLLEN.md:26` korrigieren, das neue Paket unabhängig prüfen und alle einschlägigen Fach-Gate-Entscheidungen einholen.
