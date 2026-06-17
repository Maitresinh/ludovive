# Colyseus Visibility Spike

This spike evaluates whether Thaumacord can use Colyseus-style rooms while still sending different filtered payloads to different clients.

It is isolated from `apps/server` because Colyseus 0.17 currently expects Zod 4 as an optional peer dependency, while the Thaumacord server uses Zod 3.

Run:

```bash
npm install
npm test
```

Current result:

- The visibility test passes.
- Colyseus can be used with targeted per-client messages for Thaumacord read models.
- This spike does not yet test Colyseus reconnection.
- `npm audit` currently reports vulnerabilities in the Colyseus dependency tree; reassess before adoption.
