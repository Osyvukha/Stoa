# Stoa · clickable prototype

Static HTML, CSS and JS. No build step, no dependencies.

## Run
- Open `index.html` in a browser, or run `python3 -m http.server` in this folder.
- GitHub Pages: upload the files to the repo (root or `/docs`), then Settings → Pages → deploy from branch `main`.
- The **Screens** button (bottom left) lists every screen. Routes are hash-based, for example `#/r19/default`, `#/r2/expanded`, `#/r9/split`.

## Files
- `data.js` mock data (one source of truth, copied from Figma)
- `styles.css` all design tokens in `:root`; switch teal/green via `--brand` and `--primary`
- `app.js` routing and interactions
- Fonts: Inter loads from Google Fonts. Euclid Flex is not included; headings fall back to Inter until the font files are supplied.

## Assumptions (not defined in Figma, please confirm)
- FTE panel opens by clicking the FTE number in the All stores table.
- Channel split opens from the "Channel split" button on store detail (Bd. Unirii 35).
- Timeslot details open by clicking the time range in the store table.
- Channel split limit rule: Glovo + Wolt limits must fit in the pool left after the own-channel reserve (600 × (1 − reserve %)).
- "Resume when queue is under" default (30) is a placeholder.
- Bd. Unirii 35 KPIs other than utilization and vs. forecast are "—" (no values in Figma).
- Store detail exists only for Bd. Timișoara 26 and Bd. Unirii 35. Other stores show a notice.
- Not clickable (not designed): menu items other than Capacity, Collect, Release unused orders, attention-card action buttons, Bulk upload and Export.
- Table pages 2–11 are empty; Service filter has no data effect.

## Update: extended prototype (placeholder content)
- Left menu collapses to a 64 px icon rail (arrow button in the logo). The choice is remembered in localStorage. On mobile the menu stays a drawer.
- All stores: 260 stores. The first 10 are the Figma fixtures; the other 250 are generated (PLACEHOLDER, deterministic). Pagination (10/25), search, Region, Type and Service filters work with real counts.
- Store detail works for every store (`#/store/<id>/collapsed|expanded|split|fte|timeslot/<n>`). Closed stores show a closed state with 0 capacity. Period (7 days) and Service (Delivery/Collect) change numbers deterministically.
- Timeslot drawer works for any slot with Capacity, Resources, Orders and Marketplace tabs. Only Bd. Timișoara 26 12:00 – 13:00 uses Figma numbers; the other tabs are placeholders.
- Placeholder pages not designed in Figma: `#/orders`, `#/picking`, `#/couriers`.
- Action buttons: Reopen shows a toast, Set FTE opens the FTE panel, Review and Add picker open the store, Manage opens order restriction. Export downloads a CSV. Bulk upload FTE opens a drawer (file is not parsed). Release unused orders works.
- Assumptions: all of the above beyond the Figma frames is invented and needs design confirmation.

## QA summary (prototype pass, 2026-11-23)
Fixed: focus now returns to the trigger after a drawer closes; Unirii KPIs and chips match Figma (8 / 32s / 465 / 77% / −4%; Committed 251 · 76%); the chart "Committed" chip is committed-only for every store; orange badge contrast raised to 4.5:1 (#b34700); restriction "resume" default is 20.
Known gaps vs Figma (not fixed): the bar-track and input-border colours are 1.2–3:1 as designed.

## Update: fidelity pass (2026-11-24)
- Bd. Unirii 35 (R17) now uses the shift-grouped table: Shift A / B / C bands with Pickers inputs (3 / 4 / 2), Time slot, Delivery inputs, group header "Fulfilment capacity (Orders)", Total, Committed (chevron, "N marketplace · P%", hover tooltip by channel), Reserved, Available badge, Orders forecast with "+x% extra". Shift A and B are open, C is collapsed, the first row's breakdown is open. Shift A rows and Shift B values come from Figma; Shift C rows are PLACEHOLDER. Editing Pickers or Delivery enables Save changes (client-side only). Generated stores keep the hourly table.
- Channel split, Set FTE (incl. error and saved), Alert thresholds (priority selects, descriptions) and Order restriction (orange alert box) rebuilt to the Figma frames. Error seeds: FTE Fri 4.5 / Sat 9.0 / Sun 2.5; split reserve 30, Glovo 450, Wolt 120.
- Unirii hides the "Needs attention" card (the R17 frame has none).
- QA suite: all five timing-flaky checks now wait for their condition. Period test no longer expects a hash change.

## Figma alignment pass (24 Nov 2026)
Checked against Figma frames at 1440 px with a blur-tolerant pixel diff (see PROTO-VS-FIGMA.md).
- Drawer chrome is shared: 60 px header, 16 px title, 520 px wide, scrim #11181C at 42%, borders #d0d4d9.
- Menu, KPI cards (icons, trend icons), Needs attention rows (58 px), Stores table (fixed columns, 56 px rows) and pager follow Figma.
- Sign-in is the split layout (desktop) and a card on teal (mobile).
- Store pages use 24 px between sections; All stores uses 16 px.
- Input borders follow Figma (#d0d4d9, about 1.4:1 on white). This fails WCAG 1.4.11; kept as designed.
