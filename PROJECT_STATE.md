# PROJECT_STATE

schema_version: 1.0.0
current_task: t_7f7236a7
parent_task: t_86af2dbe
content_task: t_b99c5e59
content_verification_task: t_31e8fffc
independent_review_task: t_d25125e4
status: IMPLEMENTATION_COMPLETE_PENDING_INDEPENDENT_REVIEW

## Ziel

Dauerhaft lokale, managementtaugliche Projektübersicht für den verifizierten KI-Transformationskorpus unter `/home/hermes/.hermes/profiles/ki-transformationsberater/projects/ki-transformationsportal`.

## Aktueller Stand

- Die 13 Inhaltsbereiche und 14 Navigationseinträge des Parent-Korpus sind in einer lokalen Explore-/Monitor-Oberfläche abgebildet.
- Volltextsuche und Filter nach Phase, Status, Inhaltstyp und Gate sind implementiert.
- Fakten, Annahmen, Optionen, Risiken/Gates und Empfehlungen werden getrennt dargestellt.
- Autoritative, superseded und verworfene Artefakte sind gekennzeichnet. Lokale Downloads werden nur für tatsächlich kopierte und gehashte Dateien angeboten.
- Server und Skripte sind dependency-arm und binden ausschließlich an `127.0.0.1`.
- Implementierungsprüfung ist lokal vorgesehen; die unabhängige Schlussprüfung erfolgt nach Abschluss über `t_d25125e4`.

## Verbindliche Entscheidung und No-Go

GO nur für einen namentlich begrenzten, begleiteten internen Evaluationskreis auf `127.0.0.1`, In-Memory und ausschließlich mit D0/D1-Synthesedaten.

Nicht freigegeben: reale Daten/D2/D3, erweiterter Nutzerkreis, Produktivbetrieb/Hosting, produktives IAM/SSO, Persistenz, externe Integrationen, externe oder öffentliche Publikation.

Die lokale Projektübersicht ist kein produktives Portal, keine Authentisierung und keine Fach-, Betriebs-, Security- oder Publikationsfreigabe.

## Autoritative Inhaltsbasis

- `content/KI_TRANSFORMATION_CONTENT.md` — Parent-SHA-256 `77b9af9736110bddc253ddf48eca0490c170decf732d779b31afc689844b5dad`
- `content/project-content.json` — Parent-SHA-256 `c965ffd3731061a6354c7baa636655dae80aa0cd1dacd53542c8e3f07b7d448a`
- `content/PARENT_PROJECT_STATE.md` — Parent-SHA-256 `4181643316a48daa7bc9c4f52d97cc5a426f70c57a0cff31e1526a2d62d73d37`
- `content/CONTENT_VERIFICATION.md` — Parent-SHA-256 `83302d9bcacaecd3ee84dd7e7b92d56005a0944280b3e083d266f5f22fdef846`
- Autoritatives Wissensportal-Bundle bleibt `wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` mit SHA-256 `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`.

## Offene Punkte und Gates

- Namentliche Besetzung von Portal/Product, Content/Library, Publication, Business/Process, Method/Package, Accessibility und späterer Betriebsverantwortung.
- Markt-/Kauf-/Zahlungsbereitschaft, reale Baseline, Nutzerwirkung, Usability und Geschäftswert sind nicht belegt.
- Reale Browser-, Tastatur-, Screenreader-, Geräte-/Responsive- und formale Accessibility-Prüfung für den Wissensportal-Scope bleibt ausstehend; die Projektübersicht erhält nur ihren eigenen technischen Smoke.
- Recht/Compliance, Datenschutz, InfoSec, Arbeitsrecht/Mitbestimmung, Rechte/Lizenz, produktive Technik/Betrieb, IAM sowie interne/ externe Publikationsgates bleiben offen.
- `NACHWEIS-A5-ROLLEN.md:26` verweist veraltet auf eine frühere SHA-Datei; vor Neupaketierung, Übergabe oder Scope-Erweiterung korrigieren und erneut unabhängig prüfen.

## Sofortiger Aufruf

```sh
cd /home/hermes/.hermes/profiles/ki-transformationsberater/projects/ki-transformationsportal
./start.sh
```

URL: `http://127.0.0.1:8765`

Stop: `./stop.sh`

## Genauer nächster Schritt

Unabhängige, rein lesende Schlussprüfung über `t_d25125e4`: dokumentierten Start/Stop, alle Hauptansichten, Navigation, Suche/Filter, lokale Links, Scope-Grenzen, Accessibility-/Responsive-Smokes sowie Archiv/Manifest/SHA gegen die tatsächlich angehängten Lieferbytes prüfen. Danach bleibt der fachliche nächste Schritt: Evaluationskreis, Zweck, Zeitraum und Portal/Product Owner namentlich festhalten und ausschließlich das unveränderte autoritative Bundle im engen lokalen D0/D1-Synthesedaten-Scope begleitet evaluieren.
