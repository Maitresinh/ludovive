# Gesture Catalog

This catalog keeps Android gesture adapters, module declarations, and server validation aligned.

The server resolves a gesture only when a module action declares the same `gesture` and the action is currently available for the participant.

## Current Gestures

| Gesture | Meaning | Current Sources | Module Examples |
| --- | --- | --- | --- |
| `touch-phones` | Two phones touch or confirm proximity. | Nearby adapter, manual fallback, later NFC/QR. | `putsch-lite.trade-copper-shares`, `long-live-the-king-lite.transfer-gold` |
| `pour-liquid` | Pouring gesture from one phone toward another, like pouring a drink. | Nearby adapter placeholder, motion sensors later. | `putsch-lite.sell-weapons`, `putsch-lite.trade-arms-caches` |
| `shake-phones` | Phones touch and move like a handshake. | Nearby adapter placeholder. | Planned for alliance, deal, or truce confirmations. |
| `tap-stack` | Phone taps a stack, card, table marker, or shared prop. | Touch UI/manual fallback. | Planned for market lots and physical props. |
| `palm-cover` | Player covers the screen/phone to make a discreet transfer. | Touch UI/manual fallback. | `putsch-lite.sell-drugs` |
| `ballot-drop` | Phone is lowered like a ballot into an urn. | Touch UI/manual fallback. | `putsch-lite.vote-minister-council` |
| `strike-phone` | A phone performs an attack/strike motion toward another phone/table target. | Nearby adapter plus sensors later. | `putsch-lite.attempt-coup`, `wolfpack-lite.fire-torpedo` |
| `parry-phone` | Phone blocks or parries an incoming strike gesture. | Nearby adapter plus sensors later. | `putsch-lite.defend-coup` |
| `phone-face-down` | Phone placed face down to confirm a hidden/quiet action. | Sensor/manual fallback. | `wolfpack-lite.quiet-engines` |
| `tilt-phone-forward` | Phone tilted forward. | Sensor/manual fallback. | `wolfpack-lite.change-depth` |
| `slow-phone-arc` | Slow arc sweep. | Sensor/manual fallback. | `wolfpack-lite.sonar-sweep` |
| `hold-phone-up` | Phone held up to signal or broadcast. | Sensor/manual fallback. | `wolfpack-lite.issue-order` |
| `slide-resource-to-edge` | Sliding motion/resource commit. | Touch UI/manual fallback. | `wolfpack-lite.load-torpedo` |

## Rules

- Critical gestures must always have `fallback: "manual-confirmation"`.
- Nearby-derived gestures are input signals, not rules decisions.
- The server remains authoritative and validates source device, participant binding, role, phase, resources, and action availability.
- `actor: "any"` and `actor: "*"` both mean the action is not role-restricted.

## Next Work

- Add confidence and confirmation policy to module schema if playtests require it.
