# KI-Transformationsportal · lokale Projektübersicht

Diese separate interne Leseoberfläche macht den unabhängig verifizierten KI-Transformationskorpus lokal navigierbar. Sie ist weder das autoritative Wissensportal-MVP noch eine Produktions-, Real-Daten-, Betriebs- oder Publikationsfreigabe.

## Sofort starten

```sh
cd /home/hermes/.hermes/profiles/ki-transformationsberater/projects/ki-transformationsportal
./start.sh
```

Dann im Browser öffnen:

`http://127.0.0.1:8765`

Kontrolliert stoppen:

```sh
./stop.sh
```

Optional kann ein anderer lokaler Port als erstes Argument gewählt werden, zum Beispiel `./start.sh 8877`. Die Bind-Adresse ist nicht konfigurierbar und bleibt fest `127.0.0.1`.

## Enthaltene Ansichten

- Management-Startseite mit engem GO, Reifegrad, Risiken und nächsten Schritten
- Fähigkeiten & Lernroadmap mit verbundenem persönlichen Capability Track P0–P7 und Enterprise/Application Track
- Acht evidenzgebundene Phasenkarten, nächster Lernschritt und kontinuierlich erweiterbares Skills-Register
- Roadmap/Fortschritt
- Zielmarkt und Evidenz
- Geschäftsproblem und Werthebel
- Muster-Use-Case und Pilot-Canvas
- Angebot M1–M8 und Paketlogik
- Methoden M1–M8 und Vorlagen T1–T12
- Portal-Spezifikation
- MVP-Funktionsumfang und Schutzkonzept
- Prüf-/Abnahmehistorie
- Governance, Gates, No-Go und Stop-Kriterien
- Artefaktregister mit autoritativ/superseded/verworfen
- Entscheidungslog und offene Owner
- Projekt-Handoff mit `PROJECT_STATE.md` und `project-state.json`

Volltextsuche und Facettenfilter stehen für Phase, Status, Inhaltstyp und Gate bereit und schließen die acht Capability-Phasen ein. Fakten, Annahmen, Optionen, Risiken/Gates und Empfehlungen werden getrennt dargestellt. Vorhandene Strategie-/Methodenartefakte oder Lernmaterialien gelten ausdrücklich nicht automatisch als persönlicher Kompetenznachweis.

## Scope-Grenze

Das aktuelle GO gilt ausschließlich für einen namentlich begrenzten, begleiteten internen Evaluationskreis auf `127.0.0.1`, In-Memory und mit D0/D1-Synthesedaten. Nicht freigegeben sind reale Daten/D2/D3, ein erweiterter Nutzerkreis, Produktivbetrieb oder Hosting, produktives IAM/SSO, Persistenz, externe Integrationen und externe/öffentliche Publikation.

Diese Projektübersicht selbst verarbeitet nur den statischen, verifizierten Korpus. Sie simuliert keine produktive Authentisierung und sendet keine Telemetrie oder externen Requests.

## Verifikation

Vollständige lokale Prüfsuite:

```sh
./verify.sh
```

Realer HTTP-Smoke mit kontrolliertem Start und Stop:

```sh
./start.sh
python3 scripts/http_smoke.py
./stop.sh
```

Die Prüfsuite deckt Daten-Build, Gate-Facetten, Navigation, Suche/Filter, No-Go-Pflichttexte, externe Ressourcen, lokale Downloadziele, CSP, Loopback-Bindung und Start/Stop ab.

## Daten- und Dateistruktur

- `content/`: unveränderte Parent-Eingaben plus die separat auditierbare `capability-roadmap.json`; `PARENT_PROJECT_STATE.md` bewahrt den Parent-Handoff separat
- `downloads/`: explizit lokal angebotene, vorhandene Quellen-/Nachweisdateien
- `web/data/site-data.json`: deterministisch erzeugte Browser-Daten mit abgeleiteten Gate-Facetten und verifizierten Downloadmetadaten
- `index.html`, `styles.css`, `app.js`: lokale Oberfläche ohne externe Ressourcen
- `server.py`: Python-Standardbibliothek, fest auf `127.0.0.1`
- `start.sh`, `stop.sh`: kontrollierter lokaler Lebenszyklus
- `tests/`: Python- und Node-Tests
- `scripts/`: Daten-Build und HTTP-Smoke

Browser-Daten neu erzeugen:

```sh
python3 scripts/build_site_data.py
```

## Sicherheits- und Nutzungsgrenzen

- Keine externen Ressourcen, CDNs, Telemetrie oder Netzwerkabhängigkeiten.
- Keine realen Kunden-, Personen- oder Unternehmensdaten.
- Downloadlinks werden nur erzeugt, wenn die whitelisted Projektkopie vorhanden ist; SHA-256 und Dateigröße werden beim Build ermittelt.
- Verworfene und superseded Artefakte bleiben im Register sichtbar, werden aber nicht als aktuelle Lieferbasis dargestellt.
- Das autoritative Wissensportal-Bundle wird nur unverändert als Downloadkopie angeboten, nicht entpackt oder überschrieben.
- Die dokumentierte Restabweichung `NACHWEIS-A5-ROLLEN.md:26` bleibt offen und blockiert jede Neupaketierung, Übergabe oder Scope-Erweiterung bis zur Korrektur und erneuten unabhängigen Prüfung.
