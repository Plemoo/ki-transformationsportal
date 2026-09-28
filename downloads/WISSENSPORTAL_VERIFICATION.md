# Verifikationsprotokoll – Wissensportal MVP P0-Nachbesserung

Ausgeführt am 2026-09-27 im lokalen Scratch-Workspace. Ausschließlich Python 3.11-Standardbibliothek, D0/D1-Synthesedaten und 127.0.0.1 wurden verwendet.

Lieferbundle: `wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz`, zugehörig ausschließlich `wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz.sha256`. Der Archivname, die SHA-Datei und `MANIFEST.md` verwenden exakt diese Bezeichnung.

| Prüfung | Befehl | Ergebnis |
|---|---|---|
| P0-Tests + bestehende Regressionen (frisch entpackt) | `python3 -m unittest discover -s tests -v` | Exit 0; 22 Tests bestanden |
| Syntax (frisch entpackt) | `python3 -m py_compile knowledge_portal/app.py knowledge_portal/server.py` | Exit 0 |
| Bytecode-Kompilierung (frisch entpackt) | `python3 -m compileall -q knowledge_portal tests` | Exit 0 |
| Reeller Loopback-Start/Stop | `python3 -m knowledge_portal.server` auf 127.0.0.1:8000, danach gezielt beendet | Startnachricht beobachtet; kontrolliert gestoppt |
| Gezielte A5-HTTP-Gegenproben | `curl --noproxy '*'` gegen den real gestarteten Server | Exakte Version: 200; falsche `9.9.9`, unbekannte `0.0.0` und fehlende Version: jeweils 404 mit exakt `Not found` ohne Metadaten |
| Gezielte Policy-Gegenproben | `curl --noproxy '*'` gegen den real gestarteten Server | N, R, abgelaufenes Gate und Bulk: jeweils 404; unbekannte Rolle listet keine I-ID; rein technisches `portal_admin` erhält beim I-Download 404 `Not found` |
| Bereinigter Archivbau | `tar --exclude='__pycache__' --exclude='*.pyc' --exclude='.git' -czf wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz -C source .` | Exit 0; 13 Mitglieder; kein `__pycache__`, keine `.pyc` und kein `.git` |
| Archivbytes | `sha256sum -c wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz.sha256`; `gzip -tv`; `tar -tzf` | Alle Exit 0; Prüfsumme, gzip-Struktur und Mitgliederliste verifiziert |

P0-Nachweise:

- A1: `test_release_requires_all_specification_metadata_and_passing_gates` prüft vollständige Metadaten und negative Freigabevalidierung.
- A2: `test_sections_breadcrumb_archive_and_version_links_are_navigable` prüft alle sieben verlinkten Bereiche, Breadcrumb, Archiv und Versionslink per HTTP.
- A3: `test_all_required_filters_combine_and_facets_are_authorized_and_filtered` sowie `test_filter_state_reset_and_a11y_responsive_help_are_rendered` prüfen Pflichtfilter, autorisierte Facetten, sichtbaren Zustand und Reset.
- A4: `test_compare_ui_and_download_headers_and_negative_bulk_are_real_http` sowie bestehender Typ-/Maximaltest prüfen den realen Vergleich und Negativfälle.
- A5: Domain- und HTTP-Tests prüfen vollständigen Kopf, N, R ohne Sonderrecht, abgelaufenes/entzogenes Gate und fehlenden Bulk-Endpunkt.
- A6: `test_lifecycle_creates_version_with_changelog_and_handles_revocation_archive_and_tombstone` deckt den vollständigen synthetischen Lifecycle ab.
- A7: 22 automatisierte Domänen-, HTTP- und UI-Regressionen bestanden.
- A8: der eng begrenzte, programmatisch abgesicherte Rückbau ist real ausgeführt; anschließend wurde das Lieferarchiv bereinigt gebaut, frisch entpackt und erneut vollständig geprüft.
- B9–B11: HTTP/UI-Smoke prüft Landmarken, Labels, Fokusregel, Textstatus, responsive CSS, Hilfe, leere Treffer und neutrale 404; Kontrastdokumentation: Text `#111` auf `#fff`, Link `#0645ad` auf `#fff`, Fokus `#b00020` auf `#fff` sind im CSS fest definiert und visuell unterscheidbar. Eine formale WCAG-Konformitätsbewertung ist nicht Bestandteil dieses lokalen MVP.

Offene Produktiv-Gates: echtes IAM, reale Inhalte, Aufbewahrung/Löschung, Audit-Revisionssicherheit, Backup/Restore, Datenschutz, InfoSec, Rechte/Lizenz, Arbeitsrecht/Mitbestimmung, Betrieb und externe Veröffentlichung.
