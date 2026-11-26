# Stoa · clickable prototype

Static HTML, CSS and JS. No build step, no dependencies. Synced with Figma page "Stoa - Draft 4 11.26.2026" on 2026-11-26.

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
- Terms: Notifications, Notification settings, time slot, Settings (first item of the Filters row on every screen), Account settings, Store settings, Update (shift rows and notification rows).
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
- Update on a notification opens Set FTE for the first shift; Manage opens Order restriction.
- Mobile sign-in is shown in a 375x812 frame (iframe) on desktop.
- Menu items other than Capacity, Collect and Release unused orders are not clickable.

## QA
`python3 qa/run_checks.py` (needs Python Playwright + chromium; `--shots DIR` saves screenshots). Checks every route at 1440 and 375 (render, text, no retired wording, no horizontal scroll, height >= 900, no console errors) plus interactions. Last run: 395 passed, 0 failed.
