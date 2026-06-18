# UI Control Model

Thaumacord should not expose raw JSON as the table interface. JSON is a developer/debug surface only.

The operational UI is generated from the imported module:

- phases decide which controls are visible;
- actions provide player-facing verbs;
- mechanics provide the workflow and input shape;
- resources/components/statuses provide labels, bounds, and visibility;
- session roles decide who can validate, override, or inject game elements.

## Control Families

- `exchange`: buy, sell, give, barter, accept, refuse.
- `petition` and `vote`: submit request, call vote, cast vote, close vote, apply result.
- `contest`: declare attempt, record leaders, record commitments, reveal, choose outcome.
- `live-administration`: conduct or record a guided scene, then validate effects.
- `timed-income`: run income, draw cards, refresh allowances, apply phase grants.
- `information-action`: send private clue, reveal favor/status, ask oracle/assistant.
- `card-or-object`: draw, give, reveal, discard, exhaust, cancel.
- `economic-simulation`: enter orders, publish price, inject shock, show aggregates.

## Putsch Demo Controls

- Market: sell/buy weapons, ammunition, drugs, copper shares.
- Coup: declare coup, choose defender, select two leaders, record commitments, resolve success/failure.
- Minister Council: record attendees, embezzlement, decisions, apply money and council-state effects.

## Long Live The King Controls

- Setup: distribute initial Intrigue and Status cards.
- Audience: guided by the King/chamberlain in app, or played live and recorded afterward.
- Diplomacy: gifts and trades.
- Council: petitions, votes, decision cards, final ruling.

## Rule

Every new imported game should add data to module actions/mechanics first. UI code should render controls from that data whenever possible, and only add custom components when a reusable mechanic family needs a better widget.
