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
