// Single source of truth for mock data. Copied from Figma "Stoa - Draft 4 11.26.2026" (working page).
window.DATA = {
  // used/cap = capacity use today; earned/target in lei (strings as shown in Figma); prep = min/item
  stores: [
    { name: "Calea Floreasca 133", sub: "Sector 1 · Hub", status: "CLOSED", fte: 0, used: null, cap: null, forecast: 420, vs: null, prep: null, earned: null, target: null },
    { name: "Șos. Colentina 410", sub: "Sector 2 · Store", status: "CLOSED", fte: 0, used: null, cap: null, forecast: 350, vs: null, prep: null, earned: null, target: null },
    { name: "Bd. Timișoara 26", sub: "Sector 6 · Hub", status: "OPEN", fte: 3.5, used: 410, cap: 500, forecast: 490, vs: -2, prep: 1.9, earned: "13.3M", target: "14.8M", detail: "timisoara" },
    { name: "Șos. Pipera 45", sub: "Sector 2 · Hub", status: "OPEN", fte: 5.0, used: 745, cap: 760, forecast: 980, vs: 29, prep: 1.3, earned: "18.7M", target: "20.8M" },
    { name: "Calea Victoriei 200", sub: "Sector 1 · Hub", status: "OPEN", fte: 6.0, used: 690, cap: 700, forecast: 833, vs: 19, prep: 1.1, earned: "21.2M", target: "23.5M" },
    { name: "Bd. Iuliu Maniu 300", sub: "Sector 6 · Store", status: "OPEN", fte: 3.5, used: 700, cap: 720, forecast: 857, vs: 19, prep: 1.4, earned: "15.8M", target: "17.5M" },
    { name: "Șos. Ștefan cel Mare 12", sub: "Sector 2 · Store", status: "IDLE", fte: 2.0, used: 210, cap: 640, forecast: 563, vs: -12, prep: 1.5, earned: "5.3M", target: "5.8M" },
    { name: "Șos. Mihai Bravu 20", sub: "Sector 2 · Store", status: "OPEN", fte: 2.5, used: 470, cap: 520, forecast: 561, vs: 8, prep: 1.7, earned: "12.8M", target: "14.2M" },
    { name: "Calea Rahovei 266", sub: "Sector 5 · Store", status: "IDLE", fte: 1.5, used: 90, cap: 300, forecast: 210, vs: -30, prep: 1.3, earned: "3.1M", target: "3.5M" },
    { name: "Bd. Unirii 35", sub: "Sector 3 · Store", status: "OPEN", fte: 3.0, used: 510, cap: 600, forecast: 558, vs: -7, prep: 1.4, earned: "10.2M", target: "11.3M" }
  ],
  regions: ["All", "Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6"],
  // [label, value, change vs the same time yesterday, direction 1 up / 0 down]
  kpisAll: [
    ["Capacity use", "82%", "+4%", 1], ["Forecast vs capacity", "+12%", "+3%", 1], ["Revenue vs target", "−10%", "−2%", 1],
    ["Available FTE", "96.5", "+8.5", 1], ["Best store · Victoriei", "128k lei", "+6%", 1]
  ],
  // priority: high | med | low. type keys match the filter pills. Actions: Reopen / Update / Manage / Review / Add picker
  alerts: [
    { p: "high", type: "closed", t: "Closed 7 h · limit 6 h", s: "Calea Floreasca 133 · Sector 1 · Hub", a: "Reopen" },
    { p: "high", type: "fte", t: "Closed · FTE set to 0", s: "Șos. Colentina 410 · Sector 2 · Store", a: "Set pickers (FTE)" },
    { p: "med", type: "prod", t: "Prep 1.9 min/item, norm 1.2", s: "Bd. Timișoara 26 · Sector 6 · Hub", a: "Manage", restricted: true },
    { p: "med", type: "prepup", t: "Prep up 1.2 → 1.7 min/item in 2 h", s: "Șos. Mihai Bravu 20 · Sector 2 · Store", a: "Review" },
    { p: "med", type: "fill", t: "Capacity 100% full by 10:00", s: "Șos. Pipera 45 · Sector 2 · Hub", a: "Review" },
    { p: "med", type: "fill", t: "Capacity 95% full by 11:00", s: "Șos. Mihai Bravu 20 · Sector 2 · Store", a: "Review" },
    { p: "med", type: "fc", t: "Forecast +19% vs capacity", s: "Calea Victoriei 200 · Sector 1 · Hub", a: "Review" },
    { p: "med", type: "fc", t: "Forecast +19% vs capacity", s: "Bd. Iuliu Maniu 300 · Sector 6 · Store", a: "Review" },
    { p: "med", type: "fc", t: "Forecast +29% vs capacity", s: "Șos. Pipera 45 · Sector 2 · Hub", a: "Review" },
    { p: "med", type: "fc", t: "Forecast +20% vs capacity", s: "Bd. Timișoara 26 · Sector 6 · Hub", a: "Review" },
    { p: "med", type: "fill", t: "Approaching capacity 98% · 12:00 – 13:00", s: "Bd. Timișoara 26 · Sector 6 · Hub", a: "Add picker" },
    { p: "low", type: "idle", t: "Idle since 10:00, 67% unused", s: "Șos. Ștefan cel Mare 12 · Sector 2 · Store", a: "Set pickers (FTE)" },
    { p: "low", type: "idle", t: "Idle since 10:30, 70% unused", s: "Calea Rahovei 266 · Sector 5 · Store", a: "Set pickers (FTE)" }
  ],
  alertTypes: [["all", "All"], ["closed", "Store closed"], ["fte", "FTE zero"], ["prod", "Slow preparation"], ["prepup", "Prep time rising"], ["fill", "Fast fill"], ["fc", "Forecast above capacity"], ["idle", "Idle capacity"]],
  // Notification settings rows: [label, value, unit, priority, description, shown]
  thresholds: [
    ["Store closed", 6, "h", "High", "Notification after closed for (hours)", true], ["FTE zero", 0, "FTE", "High", "Notification when FTE is at or below", true],
    ["Slow preparation", 1.8, "min/item", "Medium", "Prep time above (min/item)", true], ["Prep time rising", 0.5, "min/item", "Medium", "Prep time rises by (min/item)", true],
    ["Fast fill", 20, "%", "Medium", "Filling faster than plan (%)", true], ["Forecast above capacity", 10, "%", "Medium", "Notification when forecast is over by (%)", true],
    ["Idle capacity", 30, "min", "Low", "Notification when unused for (minutes)", false]
  ],
  // One own-channel protection threshold per account (%). Marketplaces are Open/Closed only.
  account: { protect: 20, perFte: 200, norm: 1.2 },
  // Bd. Timișoara 26, today: capacity, committed, available (reserved = cap - committed - available), forecast
  timisoara: {
    slots: [
      { r: "08:00–09:00", cap: 100, com: 65, av: 25, fc: 96 }, { r: "09:00–10:00", cap: 80, com: 58, av: 13, fc: 86 },
      { r: "10:00–11:00", cap: 60, com: 42, av: 0, fc: 64 }, { r: "11:00–12:00", cap: 80, com: 52, av: 20, fc: 84 },
      { r: "12:00–13:00", cap: 80, com: 72, av: 2, fc: 76, internal: { "Same day": 43 }, market: { Wolt: 17, Bolt: 6, Glovo: 6 } },
      { r: "13:00–14:00", cap: 100, com: 60, av: 30, fc: 84 }
    ],
    // Set FTE drawer, Mon 23 – Sun 29 Nov: FTE per shift, forecast per day
    week: [
      { fte: [1.5, 1.5, 1.5, 1.5, 2.0, 2.0, 1.0], fc: [255, 240, 245, 260, 350, 400, 170] },
      { fte: [1.5, 1.5, 1.5, 2.0, 2.0, 2.5, 1.0], fc: [250, 245, 240, 270, 340, 380, 160] }
    ],
    shiftFte: [1.5, 2.0]
  },
  days: ["Today", "Fri 27 Nov", "Sat 28 Nov", "Sun 29 Nov", "Mon 30 Nov", "Tue 1 Dec", "Wed 2 Dec"],
  week: ["Mon 23 Nov", "Tue 24 Nov", "Wed 25 Nov", "Thu 26 Nov", "Fri 27 Nov", "Sat 28 Nov", "Sun 29 Nov"]
};

/* ------------------------------------------------------------------
   PLACEHOLDER DATA (not from Figma): 250 generated stores, deterministic
   (seeded PRNG), so pagination, search and filters have real counts.
   The first 10 stores are the real Figma fixtures and are untouched.
------------------------------------------------------------------- */
(function (D) {
  function rng(seed) { let a = seed >>> 0; return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  D.rng = rng;
  D.hash = function (s) { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const streets = ["Calea Dorobanților", "Bd. Decebal", "Șos. Olteniței", "Str. Lipscani", "Calea Griviței", "Bd. Basarab", "Șos. Berceni", "Str. Mihai Eminescu", "Bd. Regina Elisabeta", "Calea Călărași", "Șos. Virtuții", "Bd. Pache Protopopescu", "Str. Vitan", "Bd. Ion Mihalache", "Șos. Alexandriei", "Calea Moșilor", "Bd. Dacia", "Str. Fabrica de Glucoză", "Șos. Panduri", "Bd. Chișinău", "Str. Cernădești", "Bd. Mircea Vodă", "Șos. Giurgiului", "Str. Popa Savu", "Bd. Carol I", "Șos. Mihai Bravu", "Calea Plevnei", "Bd. Metalurgiei", "Str. Aviatorilor", "Bd. Timișoara"];
  const fixtures = D.stores.map((s, i) => Object.assign({}, s, { id: i, region: s.sub.split(" · ")[0], kind: s.sub.split(" · ")[1] }));
  const used = new Set(fixtures.map(s => s.name));
  const R = rng(2611), out = fixtures.slice();
  while (out.length < 260) {
    const name = streets[Math.floor(R() * streets.length)] + " " + (1 + Math.floor(R() * 320));
    if (used.has(name)) continue; used.add(name);
    const sector = 1 + Math.floor(R() * 6), kind = R() < 0.38 ? "Hub" : "Store", roll = R();
    const status = roll < 0.07 ? "CLOSED" : roll < 0.2 ? "IDLE" : "OPEN";
    const s = { id: out.length, name, region: "Sector " + sector, kind, sub: "Sector " + sector + " · " + kind, status };
    if (status === "CLOSED") { Object.assign(s, { fte: 0, cap: null, used: null, forecast: Math.round((200 + R() * 260) / 10) * 10, vs: null, prod: null }); }
    else {
      const fte = Math.round((status === "IDLE" ? 1 + R() * 1.5 : 2 + R() * 4.5) * 2) / 2;
      const cap = Math.max(100, Math.round(fte * (120 + R() * 40) / 10) * 10);
      const u = status === "IDLE" ? 0.2 + R() * 0.2 : 0.5 + R() * 0.5;
      const usedN = Math.min(cap, Math.round(cap * u)), vs = Math.round(R() * 60 - 30), k = 0.0225 + R() * 0.009;
      Object.assign(s, { fte, cap, used: usedN, vs, forecast: Math.round(cap * (1 + vs / 100)), prod: Math.round(58 + R() * 40), k, ratio: 1.08 + R() * 0.07 });
    }
    out.push(s);
  }
  // Marketplace rule (one account-level protection threshold, default 20%): a time slot is Closed when its use is above 100% - threshold.
  const hot = s => !s.cap || s.used / s.cap > (100 - D.account.protect) / 100;
  // Keep the placeholder fleet in line with Figma's "205 of 260 stores open on all marketplaces": exactly 55 stores closed on at least one marketplace.
  { let n = out.filter(hot).length; const want = 55;
    for (const s of out.slice(10)) { if (n === want) break; if (n > want && s.cap && hot(s)) { s.used = Math.round(s.cap * .75); n--; } else if (n < want && s.cap && !hot(s) && s.status === "OPEN") { s.used = Math.round(s.cap * .9); n++; } }
    for (const s of out.slice(10)) { if (n <= want) break; if (!s.cap && s.status === "CLOSED") { /* closed stores stay closed */ } } }
  out.forEach(s => {
    if (s.earned === undefined && s.cap) { const e = s.used * s.k; s.earned = e.toFixed(1) + "M"; s.target = (e * s.ratio).toFixed(1) + "M"; }
    else if (s.earned === undefined) { s.earned = null; s.target = null; }
  });
  D.all = out;
  const PREP = { "Bd. Timișoara 26": 1.9, "Șos. Pipera 45": 1.3, "Calea Victoriei 200": 1.1, "Bd. Iuliu Maniu 300": 1.4, "Șos. Ștefan cel Mare 12": 1.5, "Șos. Mihai Bravu 20": 1.7, "Calea Rahovei 266": 1.3, "Bd. Unirii 35": 1.4 };
  out.forEach(s => { if (s.prep === undefined) s.prep = s.cap ? Math.round((1 + D.rng(D.hash(s.name))() * 0.9) * 10) / 10 : null; });
})(window.DATA);
