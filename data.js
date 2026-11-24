// Single source of truth for mock data. Copied from Figma / prototype-flow-map.md §5.
window.DATA = {
  stores: [
    { name: "Calea Floreasca 133", sub: "Sector 1 · Hub", status: "CLOSED", fte: 0, used: null, cap: null, forecast: 420, vs: null, prod: null, rev: null },
    { name: "Șos. Colentina 410", sub: "Sector 2 · Store", status: "CLOSED", fte: 0, used: null, cap: null, forecast: 350, vs: null, prod: null, rev: null },
    { name: "Bd. Timișoara 26", sub: "Sector 6 · Hub", status: "OPEN", fte: 4.5, used: 590, cap: 600, forecast: 720, vs: 20, prod: 62, rev: "40.5k", detail: "timisoara" },
    { name: "Șos. Pipera 45", sub: "Sector 2 · Hub", status: "OPEN", fte: 5.0, used: 745, cap: 760, forecast: 980, vs: 29, prod: 91, rev: "57k" },
    { name: "Calea Victoriei 200", sub: "Sector 1 · Hub", status: "OPEN", fte: 6.0, used: 690, cap: 700, forecast: 833, vs: 19, prod: 97, rev: "64.5k" },
    { name: "Bd. Iuliu Maniu 300", sub: "Sector 6 · Store", status: "OPEN", fte: 3.5, used: 700, cap: 720, forecast: 857, vs: 19, prod: 88, rev: "48k" },
    { name: "Șos. Ștefan cel Mare 12", sub: "Sector 2 · Store", status: "IDLE", fte: 2.0, used: 210, cap: 640, forecast: 563, vs: -12, prod: 71, rev: "16k" },
    { name: "Șos. Mihai Bravu 20", sub: "Sector 2 · Store", status: "OPEN", fte: 2.5, used: 470, cap: 520, forecast: 561, vs: 8, prod: 93, rev: "39k" },
    { name: "Calea Rahovei 266", sub: "Sector 5 · Store", status: "IDLE", fte: 1.5, used: 90, cap: 300, forecast: 210, vs: -30, prod: 80, rev: "9.5k" },
    { name: "Bd. Unirii 35", sub: "Sector 3 · Store", status: "OPEN", fte: 3.0, used: 510, cap: 600, forecast: 558, vs: -7, prod: 85, rev: "31k", detail: "unirii" }
  ],
  regions: ["All", "Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6"],
  kpisAll: [
    ["Capacity utilization", "82%", "+4%", 1], ["Forecast vs capacity", "+12%", "+3%", 1],
    ["Available FTE", "96.5", "+8.5", 1], ["Productivity", "94%", "−3%", 0]
  ],
  kpisStore: [
    ["Available pickers", "7", "+1", 1], ["Avg. prep time / item", "29s", "+1s", 1], ["Items to prepare", "388", "+6%", 1],
    ["Capacity utilization", "68%", "+2%", 1], ["vs. forecast", "−2%", "+1%", 1]
  ],
  // priority: high | med | low. type keys match the filter pills.
  alerts: [
    { p: "high", type: "closed", t: "Closed 7 h · limit 6 h", s: "Calea Floreasca 133 · Sector 1 · Hub", a: "Reopen" },
    { p: "high", type: "fte", t: "Closed · FTE set to 0", s: "Șos. Colentina 410 · Sector 2 · Store", a: "Set FTE" },
    { p: "med", type: "prod", t: "Productivity 62% of plan", s: "Bd. Timișoara 26 · Sector 6 · Hub", a: "Manage", restricted: true },
    { p: "med", type: "fill", t: "Capacity 100% full by 10:00", s: "Șos. Pipera 45 · Sector 2 · Hub", a: "Review" },
    { p: "med", type: "fill", t: "Capacity 95% full by 11:00", s: "Șos. Mihai Bravu 20 · Sector 2 · Store", a: "Review" },
    { p: "med", type: "fc", t: "Forecast 19% above capacity", s: "Calea Victoriei 200 · Sector 1 · Hub", a: "Review" },
    { p: "med", type: "fc", t: "Forecast 19% above capacity", s: "Bd. Iuliu Maniu 300 · Sector 6 · Store", a: "Review" },
    { p: "med", type: "fc", t: "Forecast 29% above capacity", s: "Șos. Pipera 45 · Sector 2 · Hub", a: "Review" },
    { p: "med", type: "fc", t: "Forecast 20% above capacity", s: "Bd. Timișoara 26 · Sector 6 · Hub", a: "Review" },
    { p: "med", type: "fill", t: "Approaching capacity 90% · 12:00 – 13:00", s: "Bd. Timișoara 26 · Sector 6 · Hub", a: "Add picker" },
    { p: "low", type: "idle", t: "Idle since Mon 10:00, 67% unused", s: "Șos. Ștefan cel Mare 12 · Sector 2 · Store", a: "Set FTE" },
    { p: "low", type: "idle", t: "Idle since Mon 10:30, 70% unused", s: "Calea Rahovei 266 · Sector 5 · Store", a: "Set FTE" }
  ],
  alertTypes: [["all", "All"], ["closed", "Store closed"], ["fte", "FTE zero"], ["prod", "Low productivity"], ["fill", "Fast fill"], ["fc", "Forecast above capacity"], ["idle", "Idle capacity"]],
  // [label, value, unit, priority, description]
  thresholds: [
    ["Store closed", 6, "h", "High", "Alert after closed for (hours)"], ["FTE zero", 0, "FTE", "High", "Alert when FTE is at or below"], ["Low productivity", 10, "%", "Medium", "Alert when below plan by (%)"],
    ["Fast fill", 20, "%", "Medium", "Alert when filling faster than plan (%)"], ["Forecast above capacity", 10, "%", "Medium", "Alert when forecast is over by (%)"], ["Idle capacity", 30, "min", "Low", "Alert when unused for (minutes)"]
  ],
  // Bd. Timișoara 26: capacity, committed, available, forecast (placeholder). reserved = cap - committed - available
  timisoara: {
    slots: [
      { r: "08:00–09:00", cap: 100, com: 65, av: 25, fc: 96 }, { r: "09:00–10:00", cap: 80, com: 58, av: 13, fc: 86 },
      { r: "10:00–11:00", cap: 60, com: 42, av: 0, fc: 64, closed: true }, { r: "11:00–12:00", cap: 80, com: 52, av: 20, fc: 84 },
      { r: "12:00–13:00", cap: 80, com: 72, av: 2, fc: 82, picking: { workload: "1,024 min", items: 465, prep: "32 s" }, internal: { "Same day": 43 }, market: { Wolt: 9, Foodora: 6, Skroutz: 5, Box: 3, Bolt: 3, Glovo: 3 } },
      { r: "13:00–14:00", cap: 100, com: 60, av: 30, fc: 87 }
    ]
  },
  // Bd. Unirii 35 · shifts with overlapping windows (Figma R17). Row: [window, total, forecast, committed, reserved, marketplace, delivery]
  // Shift C rows are placeholders (the Figma frame shows Shift C collapsed).
  unirii: (function () {
    const mk = rows => rows.map(([r, cap, fc, com, res, mkt, dl]) => ({ r, cap, fc, com, res, mkt, dl, av: cap - com - res }));
    const A = mk([
      ["08:00–09:00", 20, 18, 14, 2, 6, 1], ["08:00–10:30", 50, 46, 38, 6, 15, 2], ["08:00–12:00", 80, 76, 60, 10, 24, 3], ["08:30–09:30", 20, 22, 16, 2, 6, 1],
      ["09:00–10:00", 20, 17, 12, 2, 5, 1], ["09:00–11:30", 50, 52, 40, 6, 16, 2], ["10:00–11:00", 20, 19, 20, 0, 8, 1], ["10:00–12:00", 40, 36, 24, 5, 10, 2],
      ["11:00–12:00", 20, 21, 17, 2, 7, 1], ["11:30–12:00", 10, 9, 10, 0, 4, 1]]);
    const B = mk([["12:00–13:00", 100, 95, 90, 5, 36, 3], ["13:00–14:00", 100, 105, 70, 10, 28, 3], ["14:00–15:00", 40, 38, 32, 8, 12, 3], ["15:00–16:00", 80, 77, 60, 10, 24, 3]]);
    const C = mk([["16:00–17:00", 60, 58, 36, 6, 14, 2], ["17:00–18:00", 60, 64, 44, 6, 18, 2], ["18:00–19:00", 40, 38, 22, 4, 8, 2]]);
    return { shifts: [{ n: "Shift A", r: "08:00 – 12:00", pickers: 3, slots: A }, { n: "Shift B", r: "12:00 – 16:00", pickers: 4, slots: B }, { n: "Shift C", r: "16:00 – 19:00", pickers: 2, slots: C }], slots: A };
  })(),
  split: { poolTotal: 600, poolUsed: 360, glovo: 190, wolt: 110, free: 180, own: 60, unused: 60, reservePct: 20, glovoLimit: 200, woltLimit: 150 },
  fte: [
    ["Mon 23 Nov", 3.0, 510], ["Tue 24 Nov", 3.0, 480], ["Wed 25 Nov", 3.0, 490], ["Thu 26 Nov", 3.0, 520],
    ["Fri 27 Nov", 3.5, 640], ["Sat 28 Nov", 4.0, 760], ["Sun 29 Nov", 2.0, 330]
  ],
  fteCapacityPerFte: 200
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
    if (status === "CLOSED") { Object.assign(s, { fte: 0, cap: null, used: null, forecast: Math.round((200 + R() * 260) / 10) * 10, vs: null, prod: null, rev: null }); }
    else {
      const fte = Math.round((status === "IDLE" ? 1 + R() * 1.5 : 2 + R() * 4.5) * 2) / 2;
      const cap = Math.max(100, Math.round(fte * (120 + R() * 40) / 10) * 10);
      const u = status === "IDLE" ? 0.2 + R() * 0.2 : 0.5 + R() * 0.5;
      const usedN = Math.min(cap, Math.round(cap * u)), vs = Math.round(R() * 60 - 30);
      Object.assign(s, { fte, cap, used: usedN, vs, forecast: Math.round(cap * (1 + vs / 100)), prod: Math.round(58 + R() * 40), rev: String(Math.round(usedN * (55 + R() * 25) / 500) / 2) + "k" });
    }
    out.push(s);
  }
  D.all = out;
})(window.DATA);
