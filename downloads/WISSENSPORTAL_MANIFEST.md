# Source manifest – Wissensportal MVP P0-Nachbesserung

## Eindeutige Lieferbezeichnung

Dieses Quellverzeichnis wird ausschließlich als
`wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz` ausgeliefert.
Die zugehörige Prüfsummendatei heißt ausschließlich
`wissensportal-mvp-p0-a5-version-role-default-deny-source.tar.gz.sha256`.
Sie enthält einen `sha256sum -c`-Eintrag für exakt diesen Archivnamen. Die
beiliegende externe Verifikation `VERIFICATION.md` dokumentiert den tatsächlich
ausgeführten Byte-, gzip-, Inhalts- und Frischentpacknachweis.

Included source:

- `knowledge_portal/app.py` – validated D0/D1 domain model, authorization, filters, download policy and synthetic lifecycle.
- `knowledge_portal/server.py` – loopback-only HTTP/UI, navigation, comparison, download and help views.
- `tests/test_portal.py`, `tests/test_http.py` – original regression coverage.
- `tests/test_p0.py`, `tests/test_http_p0.py` – P0 domain and real HTTP/UI regressions.
- `README.md` – start, tests, reset, local removal and boundaries.
- `VERIFICATION.md` – executed verification evidence, including the scoped teardown proof and fresh-package rerun.
- `MANIFEST.md` – this manifest.

Excluded: `__pycache__/`, `.pyc`, virtual environments, logs, temporary files, databases, caches, credentials, tokens and real data.

Run from archive root:

    python3 -m unittest discover -s tests -v
    python3 -m py_compile knowledge_portal/app.py knowledge_portal/server.py
    python3 -m compileall -q knowledge_portal tests
    python3 -m knowledge_portal.server

The server rejects every host other than `127.0.0.1`. Reset is stop/start because all state is in memory. The teardown evidence is a strictly scoped synthetic probe under the task workspace; no external state is created.
