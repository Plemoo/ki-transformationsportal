# Fundstellengenauer Nachweis – A5-Versionierung und Rollen-Fail-Closed

## Lieferbundle

- Archiv: `wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz`
- SHA-Datei: `wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz.sha256`
- SHA-256: `cfffbe7623a88afaf1c266cd6af66500e9eeed9c56cf5d0566874f0e0d1bce52`
- Konsistenz: Archivname und SHA-Dateiname sind in `source/MANIFEST.md` Zeilen 5–8 identisch dokumentiert; die gleiche Bezeichnung steht in `source/VERIFICATION.md` Zeile 5.

## Implementierungsfundstellen

- Exakte serverseitige A5-Prüfung: `knowledge_portal/server.py` Zeilen 88–98. Die Route liest `version`, löst die Ressource ausschließlich über `Catalog.get(id, role)` auf und liefert nur bei vorhandener Version und `record["version"] == requested_version`. Alle Abweichungen gehen über `_not_found()` in Zeile 42 und geben nur `Not found\n` zurück.
- Rollen-Fail-Closed: `knowledge_portal/app.py` Zeilen 54–57 normalisieren ausschließlich bekannte fachliche Rollen und liefern für unbekannte/technische Rollen den leeren Wert; Zeilen 71–79 verweigern diesen Rollen alle Inhalte vor jeder Sichtbarkeitsoperation. `portal_admin` ist nicht in `ROLES` (Zeile 8).
- I/R/N-Grenzen: `knowledge_portal/app.py` Zeilen 75–78 verweigern N stets und R allen Rollen außer `restricted_reader`, `editor` und `gate_owner`.

## Regressionsfundstellen

- A5 passende, falsche, unbekannte und fehlende Version; neutrale Fehler: `tests/test_http_p0.py` Zeilen 57–68.
- HTTP N/R/Bulk: `tests/test_http_p0.py` Zeilen 45–55.
- HTTP abgelaufenes/entzogenes Gate: `tests/test_http_p0.py` Zeilen 70–83.
- Unbekannte Rolle und nur technische `portal_admin` ohne I-Recht: `tests/test_portal.py` Zeilen 19–23.
- Reader-, Restricted-Reader- und Gate-Owner-Demo-Scope: `tests/test_portal.py` Zeilen 10–17 und 25–26.

## Reale Ausführung und Exitcodes

- Autoritatives Reparaturarchiv: `sha256sum -c wissensportal-mvp-p0-source-rebuilt.sha256`, `gzip -tv`, `tar -tzf`: Exit 0.
- RED gegen frisch extrahiertes autoritatives Archiv mit den neuen Tests: A5-Test schlug erwartungsgemäß fehl, weil die falsche Version HTTP 200 lieferte; Rollen-Test schlug erwartungsgemäß fehl, weil unbekannte Rolle I-Inhalte sah. Jeweils Exit 1.
- Finales Lieferarchiv: `sha256sum -c`, `gzip -tv` und `tar -tzf`: Exit 0; 13 Archivmitglieder, ohne `__pycache__`, `.pyc` oder `.git`.
- Frisch entpacktes finales Archiv: `py_compile`, `compileall` und `python3 -m unittest discover -s tests -v`: jeweils Exit 0; 22/22 Tests bestanden.
- Reeller 127.0.0.1-Server: Startmeldung beobachtet und Prozess kontrolliert gestoppt. Gegenproben: passende Version 200; falsche, unbekannte und fehlende Version jeweils 404 mit `Not found`; N, R, abgelaufenes Gate und Bulk jeweils 404; unbekannte Rolle ohne I-ID; `portal_admin`-I-Download 404 mit `Not found`.

## Grenzen

Ausschließlich lokaler In-Memory-Demonstrator mit D0/D1-Synthesedaten und 127.0.0.1. Keine Produktions-, Fach-, Rechts-, Datenschutz-, InfoSec-, Lizenz-, Betriebs- oder Publikationsfreigabe.
