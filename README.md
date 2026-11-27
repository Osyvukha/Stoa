# Stoa · clickable prototype

Static HTML, CSS and JS. No build step, no dependencies. Synced with Figma page "Stoa - Draft 4 11.26.2026" on 2026-11-26.

**Guardrails and wording added in the latest round**
- Set pickers (FTE) drawer: always the next 7 days starting today (Thu 26 Nov, Fri 27 Nov, Sat 28, Sun 29, Mon 30 Nov, Tue 1, Wed 2 Dec; plain day labels, no tags); no past days. Description "Enter FTE for this shift for the next 7 days, starting today. Slot capacity in the store view is planned per slot and can differ." Est. capacity shows the arithmetic in each row ("1.5 × 200 = 300", plain text, FTE shown with one decimal); columns Day 112 / FTE 112 / Est. capacity 136 / Forecast · load 112 of a 472px grid. Load = forecast / (FTE × per-FTE). Above 100% the overbooked row keeps a white background; the FTE field gets a red border and a 12px red message directly under it, aligned with the FTE column: "Overbooked by N orders. Marketplaces will close earlier."; est. capacity and load text turn red and the row grows (no bottom alert, no icon). After Save the green banner keeps "Changes saved / FTE updated. Capacity recalculated." and adds red "Still overbooked on <day> by N orders." lines. Save stays enabled.
- Account settings, Own-channel protection threshold: when the typed value is valid and different, a live line "Would close N more slots in M stores" / "Would reopen N slots in M stores" (all stores, Delivery, today, same slot rule). Save with a changed threshold opens a confirm modal ("Change protection threshold from 20% to 30%?", "N slots in M stores will close for marketplaces. This applies to all your stores.", Cancel / Apply to all stores); focus starts on Cancel, Tab is trapped, Escape closes it. Apply saves, closes the modal and the drawer, then a toast "Threshold changed from 20% to 30%" with Undo appears centred in the content area, 32px from the bottom; Undo restores the previous value and shows no drawer. Other settings still save directly. Copy says "all your stores"; the 260-store list is fixture data.
- Slot drawer closed alert: "Closed at {100-prot}% full, now {util}%. {available} left for your own channel. Protection threshold: {prot}%." the last sentence is a link to Account settings. "Reserved" has an info tooltip "Held for a customer, not yet confirmed. Counts as used capacity." (title + aria) in the drawer legend and the slot table header. The RESTRICTED tag is amber.
- All stores badges have tooltips: Open stores with high use "No slot above {100-prot}% full. Tightest slot: N%"; Closed badges "Protection threshold {prot}%. Closes marketplaces above {100-prot}% full. Change in Settings". Consistency rule: a store's busiest slot is never below the store's own use, so a store can only be Open at a threshold when its use is within the limit (Pipera 45 at 10% is now "Closed for 1 slot", tightest slot 98%).
- Period dropdown: Today (Thu 26 Nov), Tomorrow (Fri 27 Nov), Sat 28 Nov ... Wed 2 Dec.
- Notifications drawer: flat list (message, store on the second line, RESTRICTED amber tag, action). No intermediate steps: Set pickers (FTE) opens the drawer directly; Reopen acts immediately (store back to Open, closed alert removed) and shows the toast "<store> reopened" with Undo.
- Figma 11.27 sync: KPI cards 56px (7-card store view 70px) with 9px bold title (-2%), 20px value, 11px trend, value row pinned to the bottom; the white header band ends 12px below the KPI cards (156 / 170px) with 80/86px page bottom padding. The Stores list FTE values are plain regular text; the Marketplaces badge "Closed for all slots" is now "Closed" ("Closed for N slots" unchanged). 16px between fields (Stores toolbar, header filters, notification settings rows).
- Notification settings exist on two levels (Figma 486:15408 / 1092:17165): account level "Notification settings · All your stores" (description "Manage active notifications, trigger thresholds and priority levels."), store level "Notification settings · <store name>" (description "Override the account notification settings for this store only."), reached from Store settings; store changes stay local to that store. Rows, helper texts, values, priorities and switches follow Figma (Idle capacity is off); no section heading; 520px drawer, sticky footer, Save disabled until a change.

## Run
- Open `index.html` in a browser, or run `python3 -m http.server` in this folder.
- The **Screens** button (bottom left) lists every route. Routes are hash-based, for example `#/r19/default`.
- Files: `data.js` (mock data), `styles.css` (tokens in `:root`), `app.js` (routing, interactions), `qa/run_checks.py` (tests). Inter loads from Google Fonts; Euclid Flex is not included.

## Screens
One route per screen on the Figma working page (23). Not reproduced on purpose: the Archive and the four requirement/document frames.

**Notifications (R19–R20)**

- `#/r19/default` R19 · All stores · 13 notifications (default)
- `#/r19/one` R19 · All stores · 1 notification
- `#/r19/zero` R19 · All stores · 0 notifications
- `#/r19/collapsed` R19 · All stores · 13 notifications · collapsed
- `#/r19/one-collapsed` R19 · All stores · 1 notification · collapsed
- `#/r19/alerts-drawer` R19–R20 · Notifications drawer over All stores
- `#/r20/thresholds` R20 · Notification thresholds · settings

**Same-day control and settings (R6–R7, R55)**

- `#/r6/main` R6–R7 · Main · FTE column with 7-day sparkline (panel closed)
- `#/r55/account-settings` R55 · Account settings panel

**Store detail (R2, R6–R7)**

- `#/r2/collapsed` R2 · Committed breakdown
- `#/r2/timeslot` R2 · Time slot details drawer
- `#/r2/expanded` R2 · Capacity vs. forecast · expanded
- `#/r2/closed` R2 · Closed store
- `#/r6/set-fte` R6–R7 · Set FTE for a shift (opened from Store detail)
- `#/r6/set-fte-error` R6–R7 · Set FTE for a shift · error
- `#/r6/set-fte-saved` R6–R7 · Set FTE for a shift · saved

**Design options (R39, R40)**

- `#/r39/option4` R39 · Option 4 status column
- `#/r39/option2` R39 · Option 2 header chips
- `#/r39/option5` R39 · Option 5 slim banner
- `#/r40/a` R40 · Variant A
- `#/r40/b` R40 · Variant B

**Access and roles (R24–R25)**

- `#/r24/signin` R24–R25 · Desktop · Sign in
- `#/r24/signin-mobile` R24–R25 · Mobile · Sign in

**Extra states and placeholders (no Figma frame)**

- `#/r2/store-settings` Store settings panel (store detail)
- `#/r21/restriction` Order restriction
- `#/store/12/collapsed` Generated store (placeholder data)
- `#/orders` Orders
- `#/picking` In-store picking
- `#/couriers` Couriers

## Product rules reflected
- Notifications drawer: the header button is labelled "Settings" (same teal gear style as the top-bar Settings) and opens the Notification settings panel.
- Terms: Notifications, Notification settings, time slot, Settings (first item of the Filters row on every screen), Account settings, Store settings, Set pickers (FTE) (shift rows and notification rows; drawer title Set pickers (FTE)).
- One account-level own-channel protection threshold (default 20%). Marketplaces are Open or Closed only. A slot is Closed when its use is above 100% minus the threshold. Closed stores show Closed in every slot. All stores badge: Open / "Closed for N slots" / "Closed for all slots" (N = number of that store's slots whose use is above the limit; the Figma fixtures get slot capacities/use that produce the Figma counts: Timisoara 3, Pipera 3, Victoriei 4, Maniu 3, Bravu 3, Unirii 2, Stefan and Rahovei Open).
- FTE is edited per shift only, in the Set FTE drawer: steps of 0.5, error "Steps of 0.5", saved state, no maximum.
- Time slot drawer: Total capacity, Committed, Reserved, Available, Forecast as order counts, "Committed by type" (Wolt/Bolt/Glovo) inside the Capacity tab; tabs are Capacity / Resources / Orders (N), no Marketplace tab; no FTE card, no picking block; Closed slots show a red "Marketplaces closed for this time slot" alert (static text) under the tabs. Slot tables (header "Marketplace(s)"; All stores keeps "Marketplaces") have a Reserved orders column (140/150/130/140/220/120/92).
- All stores columns: Store / Marketplaces / FTE / Capacity use / Orders forecast / Prep, min/item / Earned / target, lei. Store table columns are proportional (17/18/17/22/16.5/9.5%) and fill the card; FTE and Update sit at the right edge. No three-dots menu.
- Count badges are neutral grey (--badge-neutral-bg/-fg); status badges keep their colours. Reserved = --reserved indigo, Internal orders = --internal cyan. Time slot drawer tabs are equal-width with a teal active underline.
- KPI arrow and % = change vs the same time yesterday. Screens fit their content, min height 900.
- Removed: FTE panel from the All stores table, Channel split, per-channel limits, Bd. Unirii 35 special data.

## Data
260 stores: 10 Figma fixtures plus 250 generated (PLACEHOLDER, deterministic; 55 closed on at least one marketplace, 22 closed stores). 13 notifications. Only Bd. Timisoara 26 uses Figma slot numbers (capacity 500, used 410 = 82%, forecast 490 (−2%), FTE 3.5 = Shift A 1.5 + Shift B 2.0, prep 1.9 min/item, Closed for 3 slots; slot forecasts 96/86/64/84/76/84 sum to 490, a Figma chart shows 82 and 87 for the last two slots).

## Assumptions (please confirm)
- Orders, Picking, Couriers pages, Store settings, Order restriction and the generated-store page have no Figma frame.
- Idle capacity notification type is hidden by default (Show switch off), as in Figma.
- Set pickers (FTE) on a notification opens the Set pickers (FTE) drawer for the first shift; Manage opens Order restriction.
- Mobile sign-in is shown in a 375x812 frame (iframe) on desktop.
- Menu items other than Capacity, Collect and Release unused orders are not clickable.

## QA
`python3 qa/run_checks.py` (needs Python Playwright + chromium; `--shots DIR` saves screenshots). Checks every route at 1440 and 375 (render, text, no retired wording, no horizontal scroll, height >= 900, no console errors) plus interactions. Last run: 567 passed, 0 failed.

- Figma sync 27 Nov (latest): Timișoara alerts read "Slot forecast +20% vs capacity" / "Slot approaching capacity" (store view subtitles start with "Slot"); chart legend and slot drawer chips read "Committed"; the notifications drawer shows "FTE set to 0" for Colentina; Account settings title is "Account settings · All your stores". The Figma Cancel / Save changes footer in the time slot drawer (563:31268) sits below the visible frame and is not mirrored (nothing editable there).
