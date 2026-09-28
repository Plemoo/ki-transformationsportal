# Technische Machbarkeitsbewertung – Musterpilot Servicewissensrecherche

Status: technische Vorprüfung für eine kontrollierte Offline-/Shadow-Evaluation; keine Architektur-, Tool-, Modell-, Anbieter-, Hosting-, Integrations-, Beschaffungs- oder Implementierungsentscheidung.

## 1. Mandat, Grenze und Evidenz

Gegenstand ist ausschließlich die technisch kontrollierbare Unterstützung berechtigter Servicebeschäftigter beim Auffinden und Zusammenstellen freigegebener Serviceinformationen für vorab definierte, nicht sicherheitskritische Standardfälle. Der Mensch prüft jede Arbeitsgrundlage; direkte Kundenausgabe, autonome Entscheidung, Sicherheitsdiagnose/-anweisung, Personalentscheidung und Leistungs-/Verhaltenskontrolle sind ausgeschlossen.

Der beurteilbare Start ist ein kleiner, kuratierter, versionierter und freigegebener Korpus mit synthetischen oder fachlich bereinigten Referenzfällen. Personen-, Kunden-, Maschinen- und sonstige vertrauliche Daten bleiben ausgeschlossen, sofern sie nicht zwingend erforderlich und separat fachlich freigegeben würden.

NIST beschreibt sein AI RMF als freiwilligen Rahmen, der Vertrauenswürdigkeitsaspekte in Gestaltung, Entwicklung, Nutzung und Bewertung von KI-Systemen einbeziehen soll.[1] OWASP veröffentlicht Risiken und Gegenmaßnahmen über Entwicklung, Deployment und Betrieb von LLM-/GenAI-Anwendungen hinweg.[2] Diese Quellen sind Leitplanken für die Prüffragen, kein Nachweis einer Pilotfreigabe oder einer konkreten Lösung.

Evidenzstatus:
- B (belegbar im Musterpilot): mit fixiertem Korpus, Referenzfällen und Testprotokollen unmittelbar messbar.
- S (technische Standardfähigkeit): grundsätzlich mit üblichen Kontrollmustern umsetzbar, im konkreten Kontext jedoch noch unbewiesen.
- V (Voraussetzung): fachliche, organisatorische oder Datenvorgabe; ohne sie keine belastbare technische Aussage.
- U (Unsicherheit): nur durch Evaluation oder spätere Fachentscheidung auflösbar.

## 2. Machbarkeit nach Fähigkeit

| Fähigkeit | Vorläufige Machbarkeitsaussage | Evidenz / Unsicherheit | Mindestvoraussetzungen und Optionen |
|---|---|---|---|
| Ergebnisqualität für enge Falltypen | Bedingt machbar. Eine quellenbezogene Arbeitsgrundlage kann für klar abgegrenzte Fragen evaluiert werden; Vollständigkeit oder fachliche Richtigkeit darf nicht unterstellt werden. | B für Retrieval-Abdeckung, Zitierbarkeit und Rubrikbewertung; U für Generalisierung, Fallmix und tatsächliche Prozesswirkung. | Positiv-/Negativliste, Goldset mit erwarteten Fundstellen und zulässiger Nicht-Antwort, unabhängige Fachrubrik. Option A: strukturierte Suche/Filter (geringerer Funktionsumfang); Option B: assistierte Zusammenstellung (mehr Nutzenhypothese, mehr Kontrollbedarf). |
| Quellen-, Versions- und Gültigkeitsnachweis | Bedingt machbar. Quelle, stabile Dokument-ID, Fundstelle, Version, Freigabestatus, Gültigkeitszeitraum, Owner und Korpus-/Index-Snapshot können als Pflichtmetadaten geführt und angezeigt werden. | S; B erst bei jeder Testantwort mit öffnungsfähiger, berechtigter Fundstelle. U, falls führende Quelle oder Gültigkeitslogik fehlen. | Korpus-Owner, führendes Quellsystem, einheitliche Statussemantik (Entwurf/freigegeben/ersetzt/gesperrt), Ersetzungsbeziehung und Sperrprozess. Ohne Pflichtfelder: keine Aussage „aktuell/gültig“. |
| Durchsetzung bestehender Rollen-/Zugriffsrechte | Bedingt machbar. Zugriffsentscheidung muss vor Treffer-, Metadaten-, Cache-, Export- und Fehlerausgabe gelten. | S; B über dokumentierte Allow-/Deny-Tests je Rolle und Dokumentklasse. U für reale IdP- und Berechtigungsvererbung außerhalb des Shadow-Scopes. | Verbindliches Rollenmodell, Gruppenquelle, Dokumentklassifikation, Least-Privilege-Matrix, getrennte Rollen für Nutzung, Korpuspflege, Betrieb und Audit. Option: isolierte Testidentitäten zuerst; Integration erst nach IT-/InfoSec-Entscheidung. |
| Fehlende Inhalte | Machbar als sicheres Degradationsverhalten: „im freigegebenen Korpus nicht belegt“ statt Ergänzung oder Vermutung. | B mit Negativtests; U bleibt, ob das Ergebnis für Fachnutzer ausreichend nützlich ist. | Zulässige Nicht-Antwort, Eskalationsweg und kein Zwang zur Nutzung. |
| Widersprüchliche oder veraltete Inhalte | Bedingt machbar: Konflikt, Quelle, Version und Gültigkeitsstatus sichtbar machen oder Quellen ausschließen; keine stille Auflösung. | B mit absichtlich widersprüchlichem/ersetztem Testkorpus; U bei fachlich nicht definierter Konfliktregel. | Gültigkeitsmetadaten, Konflikt-/Sperrprozess, fachlicher Owner. Bei unklarer Gültigkeit: nur Quellenvergleich oder Eskalation. |
| Protokollierbarkeit ohne Beschäftigtenüberwachung | Bedingt machbar. Audit kann auf Zweck-, Sicherheits- und Qualitätsereignisse minimiert, pseudonymisiert und von Inhalts- bzw. Leistungsdaten getrennt werden. | S; B durch Feldprüfung der erzeugten Logs und Zugriffstests. U über Rechtmäßigkeit, Aufbewahrung und Mitbestimmung. | Zulässiger Zweck, Datenfeldliste, Rollen auf Auditdaten, Löschfrist, Trennung des Zuordnungsschlüssels und aggregierte Auswertung. NIST behandelt die Notwendigkeit wirksamen Sicherheits-Logmanagements und praktische Leitlinien dafür.[3] |
| Test-/Betriebstrennung | Machbar. Separater Korpus-Snapshot, Testidentitäten, getrennte Konfiguration/Telemetry und kein operativer Folgeprozess können Shadow-Evaluation abgrenzen. | B durch Datenfluss- und Rückbauprüfung; U bei späterer Integration. | Eigenständige Testumgebung, keine Produktionsdaten, Kennzeichnung der Ergebnisse als Pilot, Freigabeprozess für jeden Übergang. |
| Datenflüsse/Drittparteien | Machbarkeit offen bis zur Architekturentscheidung. Ein vollständiges Datenflussinventar ist jedoch vor jeder Übermittlung testbar. | B für Inventar und kontrollierte Testdaten; U für alle späteren externen Komponenten, Regionen, Subprozessoren und Transfers. | Pro Komponente: Datenklassen, Speicher-/Verarbeitungsort, Empfänger, Ausfallfolge, Export- und Löschpfad. Externe Übermittlung nur nach separater InfoSec-/Datenschutzfreigabe. |
| Beobachtbarkeit, Störung, Abschaltung/Rückbau | Bedingt machbar: Qualitäts-, Zugriff-, Ingestion- und Betriebsereignisse können messbar sein; Sperrung von Anfragen, Quellen und Korpus-Snapshots sowie Rückfall auf manuelle Recherche sind testbar. | B erst nach realem Auslösen und Nachweis von Alarm, Sperre, Wiederherstellung und Löschung. U zu 24/7-Anforderungen und späteren SLO/SLA. | Benannte Betriebs-/Incident-Owner, Kill-Switch, Quellen-/Index-Sperre, Rückfallprozess, Runbook, Wiederanlauffreigabe. |
| Integration, Pflege, Support und Betrieb | Für eine isolierte Evaluation grundsätzlich machbar; nachhaltiger Betrieb ist ausdrücklich nicht beurteilt. | B für Zeit-/Fehlererfassung im kleinen Korpus; U für Skalierung, Wartung, Beschaffung und Organisationsfähigkeit. | Ownership für Quelle, Korpus, Rechte, Testset, Betrieb und Support; Messung statt pauschaler Aufwandsschätzung. |

Vorläufiges technisches Urteil: Ein eng abgegrenzter Offline-/Shadow-Nachweis ist technisch plausibel und testbar, aber nur unter den genannten Voraussetzungen. Ein Feldpilot oder Betrieb ist daraus nicht ableitbar. Fehlende Korpus- und Rechtequalität kann keine Technik kompensieren.

## 3. Nichtfunktionale Mindestanforderungen

1. Fail closed: Ohne Berechtigung, gültige Quelle, ausreichende Evidenz oder klaren Scope keine scheinbar belastbare Arbeitsgrundlage.
2. Nachvollziehbarkeit: Jede fachliche Aussage verweist auf Quelle, Version, Fundstelle, Gültigkeitsstatus und Korpus-/Konfigurationsstand.
3. Reproduzierbarkeit: Testläufe binden Korpus-Snapshot, Index-/Regelstand, Testfall-ID und Bewertungsrubrik.
4. Rechtekonsistenz: Deny gilt gleichermaßen für Treffer, Zitate, Metadaten, Caches, Exporte, Logs und Fehlermeldungen.
5. Datenminimierung: Nur erlaubte abstrakte Fallmerkmale; keine Vorratsspeicherung von Eingaben oder Rohdokumenten in Auditdaten.
6. Trennung: Testdaten, Produktionsdaten, Qualitätsbewertung, Betriebsmonitoring und Nutzungs-/Feedbackdaten sind zweckgebunden getrennt.
7. Kontrollierbare Degradation: Fehler, fehlende Deckung, Konflikt, veralteter Index oder Drittparteiausfall erzeugen Hinweis/Eskalation, nicht erfundene Ergänzung.
8. Reversibilität: Sperre, Rückfall auf den manuellen Prozess und dokumentierter Rückbau müssen vor einer Nutzererprobung nachgewiesen sein.

## 4. Testbarer Evaluationsansatz (Stufe 1: Offline/Shadow)

| Prüfobjekt | Aufbau | Mess-/Abnahmekriterium |
|---|---|---|
| Fachliche Qualität | Versioniertes Goldset: Falltyp, erlaubte Eingabe, erwartete Quellen/Fundstellen, zulässige Nicht-Antwort, Fehlerklasse. Fachreview möglichst ohne Kenntnis der Erzeugungsart. | Retrieval-Abdeckung, Quellengebundenheit, Relevanz/Vollständigkeit nach Rubrik, kritische Fehler; Schwellenwerte werden vor Testbeginn fachlich festgelegt. |
| Fundstellennachweis | Jede Ergebnisbehauptung gegen die zitierte Passage und Metadaten prüfen. | Öffnungsfähige, berechtigte, passende und gültige Fundstelle; unzitierte Tatsachenbehauptung ist Fehler. |
| Berechtigung | Rollen × Dokumentklassen × Pfade: Suche, Zitat, Metadaten, Cache, Export, Audit, Fehlermeldung. | Jeder Deny-Test liefert weder Inhalt noch indirekte Metadatenhinweise; jeder Allow-Test bleibt auf freigegebene Inhalte begrenzt. |
| Latenz/Verfügbarkeit auf Pilotniveau | Definierte Shadow-Testlast, Ingestion- und Ausfallfälle; getrennt von Wartezeit messen. | Verteilung von Antwort-/Fehlerzeiten, Erfolgsrate und Wiederherstellungszeit erfassen. Zielgrenzen erst nach Prozessbedarf und Baseline festlegen. |
| Beobachtbarkeit | Kontrollierte Qualitäts-, Rechte-, Ingestion-, Konfigurations- und Ausfallereignisse auslösen. | Metrik/Alarm, Triage, Auditspur und keine unnötigen Klartexte in Logs nachweisbar. |
| Abschaltung/Rückbau | Anfrageannahme sperren; einzelne Quelle und Snapshot sperren; externe Übermittlung deaktivieren; Testartefakte anhand Löschregel entfernen. | Sperre wirkt nachvollziehbar, manueller Rückfall bleibt nutzbar, verbleibende Artefakte und Wiederanlauffreigabe dokumentiert. |

Testkorpus muss neben gültigen Dokumenten absichtlich nicht abgedeckte Fragen, Duplikate, ersetzte/abgelaufene Dokumente, widersprüchliche Quellen, gesperrte Dokumentklassen und fehlerhafte Metadaten enthalten. Wiederholte Läufe messen Quellenmenge, Status und relevante Varianz; ein kleiner Korpus beweist keine spätere Skalierungs- oder Sicherheitsleistung.

## 5. Datenfluss- und Auditmodell auf abstrakter Ebene

1. Quelle → Aufnahme: freigegebene Service-/Produktinformation plus Metadaten (ID, Status, Version, Gültigkeit, Owner, Rechte); Fehlerpfad und Prüfsumme dokumentieren.
2. Aufnahme → Rechercheartefakte: nur benötigte Extrakte/Segmente und Metadaten; Speicherort, Index-/Snapshot-ID, Lösch- und Neuerstellungsweg dokumentieren.
3. Anfrage → Ergebnis: erlaubte abstrakte Fallmerkmale, Berechtigungsentscheidung, Quellen-IDs/Versionen und Ergebnisstatus. Eingabeklartext nicht standardmäßig dauerhaft speichern.
4. Betrieb/Audit: Zeitpunkt, pseudonyme Sitzungs-/Nutzerkennung, Rolle, Snapshot-/Konfigurationsstand, Fehler-/Policyklasse und technische Kennzahlen. Keine individuellen Leistungsprofile; nur fachlich und rechtlich freigegebene aggregierte Auswertung.
5. System → Drittpartei: vorab zwingend je Empfänger Datenklasse, Zweck, Übertragungsweg, Region, Unterauftragsverarbeitung, Ausfallfolge, Rückhol-/Löschpfad und Freigabestatus dokumentieren.

## 6. Aufwandstreiber (keine Aufwandsschätzung)

- Korpusaufbereitung: Extraktionsqualität, Metadatenvollständigkeit, Rechte- und Gültigkeitsklärung, Duplikate/Ersetzungen.
- Referenz- und Reviewarbeit: Testfallauswahl, Goldset, Fehlerklassen, fachliche Bewertung und Interrater-Abweichung.
- Berechtigungen: Granularität der Regeln, Sonderfälle, Rezertifizierung, Joiner/Mover/Leaver und Deny-Regressionen.
- Betriebsanschluss: Identität, Monitoring, Backup/Löschung, Incident, Dokumentation, Support und Schulung.
- Drittparteien: Freigabe- und Vertragsdurchlauf, Transfergrenzen, Verfügbarkeit, Exit- und Rückbaupflichten.
- Änderungsrate: Häufigkeit neuer, ersetzter oder gesperrter Dokumente sowie Regression nach Korpus-/Regeländerung.

Je Treiber sind im Musterpilot mindestens Dokument-/Testfallzahl, Bearbeitungs- und Reviewzeit, Fehlerklasse, Nacharbeitsaufwand und offene Abhängigkeit zu erfassen.

## 7. Technische Stop-/Adapt-Kriterien

| Auslöser | Entscheidung | Sofortmaßnahme |
|---|---|---|
| Berechtigungstest, Cache, Export oder Fehlermeldung offenbart geschützten Inhalt/Metadaten. | STOP bis Ursachenbehebung und vollständige Regression. | Betroffenen Korpus/Snapshot sperren, Zugang/Übermittlung stoppen, Audit sichern, InfoSec-Prozess aktivieren. |
| Nicht freigegebener Datenfluss oder Drittübermittlung. | STOP der betroffenen Verarbeitung. | Datenfluss deaktivieren, Artefakte gemäß Freigaberegel behandeln, Fach-Gate einschalten. |
| Kritischer fachlicher Fehler, unbelegte Antwort oder verdeckter Konflikt über der vorab festgelegten Toleranz. | STOP der Nutzererprobung; nur Testmodus. | Anfragezugang sperren, Goldset/Regel-/Korpusstand analysieren, erneute Fach- und Regressionstests. |
| Version/Gültigkeit oder Source-Ownership nicht eindeutig. | ADAPT/HOLD. | Betroffene Quellen ausschließen oder nur als ungeklärten Quellenvergleich zeigen; Metadaten/Owner nacharbeiten. |
| Fehlende Telemetrie, Kill-Switch oder getesteter manueller Rückfall. | STOP vor Erweiterung über isolierte Tests. | Keine Nutzererprobung; Runbook, Sperren und Rückbau nachweisen. |
| Unzulässige individualisierte Nutzungs-/Leistungsmessung. | STOP/HOLD bis Fachentscheidung. | Auswertung beenden, Datensätze sperren/minimieren, Arbeitsrecht/Datenschutz einbeziehen. |

## 8. Entscheidungen nach Fach-Gates (nicht durch diese Prüfung getroffen)

| Entscheider | Offene Entscheidung |
|---|---|
| Sponsor/Business/Prozess-Owner | Nutzenhypothese, zugelassene Falltypen/Negativliste, Qualitätsrubrik, Fehlertoleranz, Go/Adapt/Hold/Stop. |
| Dokumenten-/Korpus-Owner | Führende Quellen, Version/Gültigkeit, Rechte, Aufnahme-, Ersetzungs- und Sperrprozess. |
| IT/Betrieb | Architektur, Identitätsanbindung, Netz-/Speichergrenzen, Betriebsmodell, Backup, Incident und Rückbauverantwortung. |
| InfoSec | Schutzbedarf, Bedrohungsmodell, Zugriff, Logging, Export, Drittparteien, Sicherheitskontrollen und Incidentpflichten. |
| Datenschutz | Erforderlichkeit, Datenkategorien, Empfänger, Speicher-/Löschkonzept, Messdesign und ggf. Folgeprüfungen. |
| Recht/Compliance | Rechte an Inhalten, Vertrags-/Geschäftsgeheimnis- und sonstige Nutzungsgrenzen. |
| Arbeitsrecht/Mitbestimmung | Transparenz, Rollenwirkung, Qualifizierung, zulässige Messung und Ausschluss von Leistungs-/Verhaltenskontrolle. |

## 9. Schlussfolgerung

Die technische Machbarkeit für eine strikt begrenzte, reversible Offline-/Shadow-Evaluation ist bedingt bejahbar: Nachweisbarkeit von Quellen, Version/Gültigkeit, Rechtegrenzen, sichere Nicht-Antwort, minimale Auditierbarkeit und kontrollierter Rückbau sind konkret testbar. Die Aussage bleibt abhängig von einem verantworteten Korpus, einem verbindlichen Rollenmodell, fachlichen Referenzfällen, definierten Abbruchgrenzen und allen noch offenen Fach-Gates.

Nicht belegt und nicht freigegeben sind Feldpilot, reale Datenverarbeitung, Integration, Skalierung, Dauerbetrieb sowie jede konkrete Architektur- und Lieferentscheidung. Die nächste technisch zulässige Handlung wäre nur die Vorbereitung des oben beschriebenen, fachlich freigegebenen Shadow-Testdesigns.

## Sources

[1] https://www.nist.gov/itl/ai-risk-management-framework — NIST AI Risk Management Framework
[2] https://genai.owasp.org/llm-top-10 — OWASP Top 10 for LLM and GenAI
[3] https://csrc.nist.gov/pubs/sp/800/92/final — NIST SP 800-92 Guide to Computer Security Log Management
