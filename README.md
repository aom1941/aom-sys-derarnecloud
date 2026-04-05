# nextDockerCloud
 nextcloud

## Sicherheitsvorkehrungen

- Deno-Debug-Start verwendet keine `--allow-all`-Rechte mehr, sondern eingeschränkte Rechte für Workspace/localhost.
- Devcontainer läuft standardmäßig als non-root Benutzer (`node`).
- Zusätzliche Container-Härtung aktiv: `no-new-privileges`, `cap-drop=ALL`, PID/CPU/RAM-Limits.

## Security safeguards

- Deno debug launch no longer uses `--allow-all`; it now uses restricted permissions for workspace/localhost only.
- The devcontainer now runs as a non-root user (`node`) by default.
- Additional container hardening is enabled: `no-new-privileges`, `cap-drop=ALL`, and PID/CPU/RAM limits.
