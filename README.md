# nextDockerCloud
 nextcloud

## Sicherheitsvorkehrungen

- Deno-Debug-Start verwendet keine `--allow-all`-Rechte mehr, sondern eingeschränkte Rechte für Workspace/localhost.
- Devcontainer läuft standardmäßig als non-root Benutzer (`node`).
- Zusätzliche Container-Härtung aktiv: `no-new-privileges`, `cap-drop=ALL`, PID/CPU/RAM-Limits.
