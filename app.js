/* Stoa prototype · vanilla JS, hash routes named after Figma frames (see README).
   Numbers marked PLACEHOLDER in README are generated, not from Figma. */
(function () {
  const D = window.DATA, ALL = D.all;
  const $app = document.getElementById("app"), $tip = document.getElementById("tip");

  // Exact Stoa logo from Figma (Logo/Stoa final): green tile + outlined Euclid Flex Bold wordmark. Wordmark colour follows CSS `color`.
  const LOGO_TILE = `<path d="M0 7.2C0 4.32812 2.32812 2 5.2 2H18.8C21.6719 2 24 4.32812 24 7.2V20.8C24 23.6719 21.6719 26 18.8 26H1.2C0.537259 26 0 25.4627 0 24.8V7.2Z" fill="#007A13"/><path d="M9.4 7.2H6.2C5.64772 7.2 5.2 7.64772 5.2 8.2V19.8C5.2 20.3523 5.64772 20.8 6.2 20.8H9.4C9.95228 20.8 10.4 20.3523 10.4 19.8V8.2C10.4 7.64772 9.95228 7.2 9.4 7.2Z" fill="#fff"/><path d="M17.8 15.6H6.2C5.64772 15.6 5.2 16.0477 5.2 16.6V19.8C5.2 20.3523 5.64772 20.8 6.2 20.8H17.8C18.3523 20.8 18.8 20.3523 18.8 19.8V16.6C18.8 16.0477 18.3523 15.6 17.8 15.6Z" fill="#fff"/><path d="M17.8 7.2H13C12.4477 7.2 12 7.64772 12 8.2V13C12 13.5523 12.4477 14 13 14H17.8C18.3523 14 18.8 13.5523 18.8 13V8.2C18.8 7.64772 18.3523 7.2 17.8 7.2Z" fill="#fff"/>`;
  const LOGO_WORD = `<path fill="currentColor" d="M36.9992 22.312C35.9037 22.312 34.9157 22.1213 34.0352 21.74C33.1616 21.3587 32.4405 20.8144 31.872 20.1072C31.3104 19.3931 30.9533 18.5472 30.8008 17.5696L33.4008 17.1744C33.6227 18.0619 34.0768 18.7483 34.7632 19.2336C35.4565 19.7189 36.2539 19.9616 37.1552 19.9616C37.6891 19.9616 38.1917 19.8784 38.6632 19.712C39.1347 19.5456 39.516 19.3029 39.8072 18.984C40.1053 18.6651 40.2544 18.2733 40.2544 17.8088C40.2544 17.6008 40.2197 17.4101 40.1504 17.2368C40.0811 17.0565 39.9771 16.8971 39.8384 16.7584C39.7067 16.6197 39.5333 16.4949 39.3184 16.384C39.1104 16.2661 38.8677 16.1656 38.5904 16.0824L34.7216 14.9384C34.3888 14.8413 34.0283 14.7131 33.64 14.5536C33.2587 14.3872 32.8947 14.1619 32.548 13.8776C32.2083 13.5864 31.9275 13.2189 31.7056 12.7752C31.4907 12.3245 31.3832 11.7699 31.3832 11.1112C31.3832 10.1475 31.6259 9.33973 32.1112 8.688C32.6035 8.02933 33.2621 7.53707 34.0872 7.2112C34.9192 6.88533 35.8413 6.72587 36.8536 6.7328C37.8797 6.73973 38.7949 6.91653 39.5992 7.2632C40.4035 7.60293 41.076 8.09867 41.6168 8.7504C42.1576 9.40213 42.5389 10.1891 42.7608 11.1112L40.0672 11.5792C39.9563 11.0523 39.7413 10.6051 39.4224 10.2376C39.1104 9.8632 38.7256 9.57893 38.268 9.3848C37.8173 9.19067 37.3355 9.08667 36.8224 9.0728C36.3232 9.06587 35.8587 9.14213 35.4288 9.3016C35.0059 9.45413 34.6627 9.676 34.3992 9.9672C34.1427 10.2584 34.0144 10.5981 34.0144 10.9864C34.0144 11.3539 34.1253 11.6555 34.3472 11.8912C34.5691 12.12 34.8429 12.3037 35.1688 12.4424C35.5016 12.5741 35.8379 12.6851 36.1776 12.7752L38.8608 13.524C39.2283 13.6211 39.6408 13.7528 40.0984 13.9192C40.556 14.0856 40.9963 14.3179 41.4192 14.616C41.8421 14.9141 42.1888 15.3059 42.4592 15.7912C42.7365 16.2765 42.8752 16.8936 42.8752 17.6424C42.8752 18.4189 42.7123 19.1019 42.3864 19.6912C42.0675 20.2736 41.6341 20.7589 41.0864 21.1472C40.5387 21.5355 39.9112 21.8267 39.204 22.0208C38.5037 22.2149 37.7688 22.312 36.9992 22.312ZM51.5015 22C50.7596 22.1387 50.0316 22.1976 49.3175 22.1768C48.6103 22.1629 47.9759 22.0347 47.4143 21.792C46.8527 21.5424 46.4263 21.1507 46.1351 20.6168C45.8786 20.1315 45.7434 19.6357 45.7295 19.1296C45.7156 18.6235 45.7087 18.0515 45.7087 17.4136V7.648H48.2047V17.268C48.2047 17.7187 48.2082 18.1139 48.2151 18.4536C48.229 18.7933 48.3018 19.0707 48.4335 19.2856C48.6831 19.7016 49.0818 19.9339 49.6295 19.9824C50.1772 20.0309 50.8012 20.0032 51.5015 19.8992V22ZM43.6703 12.7336V10.768H51.5015V12.7336H43.6703ZM58.1008 22.312C56.9776 22.312 55.9965 22.0589 55.1576 21.5528C54.3187 21.0467 53.6669 20.3499 53.2024 19.4624C52.7448 18.568 52.516 17.5419 52.516 16.384C52.516 15.2053 52.7517 14.1723 53.2232 13.2848C53.6947 12.3973 54.3499 11.704 55.1888 11.2048C56.0277 10.7056 56.9984 10.456 58.1008 10.456C59.2309 10.456 60.2155 10.7091 61.0544 11.2152C61.8933 11.7213 62.5451 12.4216 63.0096 13.316C63.4741 14.2035 63.7064 15.2261 63.7064 16.384C63.7064 17.5488 63.4707 18.5784 62.9992 19.4728C62.5347 20.3603 61.8829 21.0571 61.044 21.5632C60.2051 22.0624 59.224 22.312 58.1008 22.312ZM58.1008 19.9616C59.0992 19.9616 59.8411 19.6288 60.3264 18.9632C60.8117 18.2976 61.0544 17.4379 61.0544 16.384C61.0544 15.2955 60.8083 14.4288 60.316 13.784C59.8237 13.1323 59.0853 12.8064 58.1008 12.8064C57.4283 12.8064 56.8736 12.9589 56.4368 13.264C56.0069 13.5621 55.688 13.9816 55.48 14.5224C55.272 15.0563 55.168 15.6768 55.168 16.384C55.168 17.4725 55.4141 18.3427 55.9064 18.9944C56.4056 19.6392 57.1371 19.9616 58.1008 19.9616ZM68.9306 22.312C68.1194 22.312 67.433 22.1595 66.8714 21.8544C66.3098 21.5424 65.8834 21.1299 65.5922 20.6168C65.3079 20.1037 65.1658 19.5387 65.1658 18.9216C65.1658 18.3808 65.2559 17.8955 65.4362 17.4656C65.6165 17.0288 65.8938 16.6544 66.2682 16.3424C66.6426 16.0235 67.1279 15.7635 67.7242 15.5624C68.1749 15.4168 68.7018 15.2851 69.305 15.1672C69.9151 15.0493 70.5738 14.9419 71.281 14.8448C71.9951 14.7408 72.7405 14.6299 73.517 14.512L72.6226 15.0216C72.6295 14.2451 72.4562 13.6731 72.1026 13.3056C71.749 12.9381 71.1527 12.7544 70.3138 12.7544C69.8077 12.7544 69.3189 12.8723 68.8474 13.108C68.3759 13.3437 68.0466 13.7493 67.8594 14.3248L65.5714 13.6072C65.8487 12.6573 66.3757 11.8947 67.1522 11.3192C67.9357 10.7437 68.9895 10.456 70.3138 10.456C71.3122 10.456 72.1893 10.6189 72.945 10.9448C73.7077 11.2707 74.2727 11.8045 74.6402 12.5464C74.8413 12.9416 74.9626 13.3472 75.0042 13.7632C75.0458 14.1723 75.0666 14.6195 75.0666 15.1048V22H72.8722V19.5664L73.2362 19.9616C72.7301 20.7728 72.1373 21.3691 71.4578 21.7504C70.7853 22.1248 69.9429 22.312 68.9306 22.312ZM69.4298 20.3152C69.9983 20.3152 70.4837 20.2147 70.8858 20.0136C71.2879 19.8125 71.6069 19.5664 71.8426 19.2752C72.0853 18.984 72.2482 18.7101 72.3314 18.4536C72.4631 18.1347 72.5359 17.7707 72.5498 17.3616C72.5706 16.9456 72.581 16.6093 72.581 16.3528L73.3506 16.5816C72.5949 16.6995 71.9466 16.8035 71.4058 16.8936C70.865 16.9837 70.4005 17.0704 70.0122 17.1536C69.6239 17.2299 69.2807 17.3165 68.9826 17.4136C68.6914 17.5176 68.4453 17.6389 68.2442 17.7776C68.0431 17.9163 67.8871 18.0757 67.7762 18.256C67.6722 18.4363 67.6202 18.6477 67.6202 18.8904C67.6202 19.1677 67.6895 19.4139 67.8282 19.6288C67.9669 19.8368 68.1679 20.0032 68.4314 20.128C68.7018 20.2528 69.0346 20.3152 69.4298 20.3152Z"/>`;
  const logo = (h, cls) => `<svg class="stoa-logo ${cls || ""}" height="${h}" viewBox="0 0 77 28" fill="none" role="img" aria-label="Stoa">${LOGO_TILE}${LOGO_WORD}</svg>`;
  const logoMark = (s) => `<svg class="stoa-mark" width="${s}" height="${s}" viewBox="0 2 24 24" fill="none" role="img" aria-label="Stoa">${LOGO_TILE}</svg>`;
  // ---------- icons ----------
  const svg = (p, s = 18, w = 2) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    down: svg('<path d="m6 9 6 6 6-6"/>'), up: svg('<path d="m6 15 6-6 6 6"/>'), right: svg('<path d="m9 6 6 6-6 6"/>'), x: svg('<path d="M18 6 6 18M6 6l12 12"/>', 20),
    gear: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>', 20),
    dots: svg('<circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/>', 20),
    warn: svg('<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>', 16), circ: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16h.01"/>', 16),
    clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', 16), check: svg('<path d="m5 12 5 5 9-10"/>', 16),
    menu: svg('<path d="M4 6h16M4 12h16M4 18h16"/>'),
    colL: svg('<path d="M20 12H9M9 12l4-4M9 12l4 4M4 5v14"/>', 20), colR: svg('<path d="M4 12h11M15 12l-4-4M15 12l-4 4M20 5v14"/>', 20),
    tUp: svg('<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>', 14), tDown: svg('<path d="M3 7l6 6 4-4 8 8M15 17h6v-6"/>', 14),
    kGauge: svg('<circle cx="12" cy="12" r="8" stroke-dasharray="3 3"/>', 16), kCart: svg('<path d="M3 4h3l2 12h10l2-8H7"/><circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/>', 16), kUser: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>', 16), kRef: svg('<path d="M20 11a8 8 0 0 0-14-4M4 5v3h3M4 13a8 8 0 0 0 14 4M20 19v-3h-3"/>', 16), kTray: svg('<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 14h5l1 2h4l1-2h5"/>', 16), kCheck: svg('<path d="m5 12 5 5 9-10"/>', 16)
  };
  const prioIcon = { high: I.circ, med: I.warn, low: I.clock };
  const MENU = [
    ["capacity", "Capacity", "r19/default", svg('<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>')],
    ["orders", "Orders", "orders", svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>')],
    ["picking", "In-store picking", "picking", svg('<path d="M3 4h3l2 12h10l2-8H7"/><circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/>')],
    ["couriers", "Couriers", "couriers", svg('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>')]
  ];

  // ---------- routes ----------
  const ROUTES = [
    ["All stores", [["r19/default", "R19 · 12 alerts"], ["r19/collapsed", "R19 · 12 alerts · collapsed"], ["r19/one", "R19 · 1 alert"], ["r19/one-collapsed", "R19 · 1 alert · collapsed"], ["r19/zero", "R19 · 0 alerts"], ["r19/bulk-upload", "Bulk upload FTE"]]],
    ["Alerts and rules", [["r19/alerts-drawer", "R19–R20 · Alerts drawer"], ["r20/thresholds", "R20 · Alert thresholds"], ["r21/restriction", "R21 · Order restriction"]]],
    ["Same-day control (FTE)", [["r6/main", "R6 · FTE column"], ["r6/panel", "R6 · FTE panel"], ["r6/panel-error", "R6 · FTE panel · error"], ["r6/panel-saved", "R6 · FTE panel · saved"]]],
    ["Channel split", [["r9/split", "R9 · Channel split"], ["r9/split-error", "R9 · Channel split · error"], ["r9/split-saved", "R9 · Channel split · saved"]]],
    ["Store detail", [["r7/other-days", "R7 · Other days"], ["r2/collapsed", "R2 · Collapsed chart"], ["r2/expanded", "R2 · Expanded chart"], ["r2/timeslot", "R2 · Timeslot details"], ["r17/expanded", "R17 · Bd. Unirii 35 · expanded"], ["store/12/expanded", "Generated store · expanded"], ["store/12/timeslot/1", "Generated store · timeslot"], ["store/0/collapsed", "Closed store"], ["store/12/split", "Generated store · channel split"]]],
    ["Other pages (placeholder)", [["orders", "Orders"], ["picking", "In-store picking"], ["couriers", "Couriers"]]],
    ["Access", [["r24/signin", "R24 · Sign in"]]]
  ];

  const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

  const S = {
    menuPop: false, mobileMenu: false, protoOpen: false, menuCollapsed: lsGet("stoa.menu") === "collapsed",
    q: "", region: "All", type: "All", service: "Delivery", page: 1, per: 10,
    attOpenStore: true, sf: {}, so: {}, fteSaved: {}, sfd: {}, spSaved: {}, reopened: {}, sort: { stores: null, slots: null }, alertFilter: "all", expanded: new Set(), released: {}, ordFilter: "All",
    th: D.thresholds.map(t => String(t[1])), thBase: null, rsOn: true, rsResume: "20", rsBase: null, resumed: false,
    sp: null, spBase: null, fteStoreId: 9, fteWeek: null, fte: null, fteBase: null, tab: "Capacity", hl: -1, day: 0,
    chart: "collapsed", curId: 2, bulk: { name: "", saved: false },
    shiftOpen: { 0: true, 1: true, 2: false }, pk: {}, dlv: {}, tdirty: false, thp: D.thresholds.map(t => t[3])
  };
  S.thBase = JSON.stringify([S.th, S.thp]); S.rsBase = JSON.stringify([S.rsOn, S.rsResume]);

  // ---------- route parsing ----------
  const route = () => { const r = (location.hash || "").replace(/^#\/?/, ""); return r || "r19/default"; };
  const go = r => { location.hash = "#/" + r; };
  function parse(r) {
    const P = { r, page: "all", key: "default", id: null, chart: null, drawer: null, slot: null, forceDay: false };
    let m;
    if (r === "orders" || r === "picking" || r === "couriers") return Object.assign(P, { page: r });
    if (r.startsWith("r24/")) return Object.assign(P, { page: "signin" });
    if (/^r19\/(default|collapsed|one|one-collapsed|zero)$/.test(r)) return Object.assign(P, { key: r.slice(4) });
    const allD = { "r19/alerts-drawer": "alerts", "r20/thresholds": "thresholds", "r21/restriction": "restriction", "r6/panel": "fte", "r6/panel-error": "fte-error", "r6/panel-saved": "fte-saved", "r19/bulk-upload": "bulk", "r6/main": null };
    if (r in allD) return Object.assign(P, { drawer: allD[r] });
    if (r === "r2/collapsed" || r === "r2/expanded") return Object.assign(P, { page: "store", id: 2, chart: r.slice(3) });
    if (r === "r2/timeslot") return Object.assign(P, { page: "store", id: 2, chart: "collapsed", drawer: "timeslot", slot: 4 });
    if (r === "r7/other-days") return Object.assign(P, { page: "store", id: 2, chart: "collapsed", forceDay: true });
    if (r === "r17/expanded" || r === "r17/collapsed") return Object.assign(P, { page: "store", id: 9, chart: r.slice(4) });
    if (/^r9\/split(-error|-saved)?$/.test(r)) return Object.assign(P, { page: "store", id: 9, chart: "expanded", drawer: r.slice(3) });
    if ((m = r.match(/^store\/(\d+)\/(collapsed|expanded|split|split-error|split-saved|fte|fte-error|fte-saved|timeslot\/(\d+))$/)) && +m[1] < ALL.length) {
      const o = { page: "store", id: +m[1] };
      if (m[2] === "collapsed" || m[2] === "expanded") o.chart = m[2]; else if (m[3] !== undefined) { o.drawer = "timeslot"; o.slot = +m[3]; } else o.drawer = m[2];
      return Object.assign(P, o);
    }
    return null;
  }
  const storeRoute = (id, chart) => (id === 2 ? "r2/" : id === 9 ? "r17/" : `store/${id}/`) + (chart || "collapsed");
  const splitRoute = (id, v) => id === 9 ? "r9/split" + (v || "") : `store/${id}/split${v || ""}`;
  const slotRoute = (id, i) => id === 2 && i === 4 ? "r2/timeslot" : `store/${id}/timeslot/${i}`;
  const closeTarget = P => P && P.page === "store" ? storeRoute(P.id, P.chart || S.chart) : "r19/default";

  // ---------- model helpers ----------
  const DAYF = [1, .96, 1.04, .93, 1.08, 1.15, .82];
  const HOURS = ["08:00–09:00", "09:00–10:00", "10:00–11:00", "11:00–12:00", "12:00–13:00", "13:00–14:00"];
  const SHAPE = [1.05, .95, .8, .95, .95, 1.1];
  const IN_W = { "Same day": .6, "Fast delivery": .25, "Next day": .15 };
  const MK_W = { Wolt: .3, Foodora: .22, Skroutz: .18, Box: .1, Bolt: .1, Glovo: .1 };
  const PERIODS = D.fte.map((d, i) => i === 0 ? "Today" : d[0]);
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const signed = n => (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n);
  const range = r => r.replace("–", " – ");
  const codeOf = s => "S" + String(s.id + 1).padStart(3, "0");
  const sum = (a, k) => a.reduce((x, y) => x + (y[k] || 0), 0);
  const total = o => Object.values(o).reduce((a, b) => a + b, 0);

  function distribute(tot, weights, R) {
    const keys = Object.keys(weights), w = keys.map(k => weights[k] * (.8 + R() * .4)), s = w.reduce((a, b) => a + b, 0);
    const raw = w.map(x => x / s * tot), base = raw.map(Math.floor); let rem = tot - base.reduce((a, b) => a + b, 0);
    raw.map((x, i) => [x - base[i], i]).sort((a, b) => b[0] - a[0]).forEach(([, i]) => { if (rem > 0) { base[i]++; rem--; } });
    const out = {}; keys.forEach((k, i) => { if (base[i] > 0) out[k] = base[i]; }); return out;
  }
  function breakdown(s, collect, R) {
    if (collect) { s.internal = s.com ? { Collect: s.com } : {}; s.market = {}; return; }
    const it = Math.round(s.com * (.5 + R() * .2));
    s.internal = distribute(it, IN_W, R); s.market = distribute(s.com - it, MK_W, R);
  }
  function genHourly(st, day, collect, R) {
    const f = collect ? .3 : 1, df = DAYF[day], u = st.cap ? st.used / st.cap : 0;
    return HOURS.map((r, i) => {
      if (!st.cap) return { r, cap: 0, com: 0, res: 0, av: 0, fc: Math.round(st.forecast * f * SHAPE[i] / 5.8 * df), closed: true };
      const cap = Math.max(20, Math.round(st.cap * .85 * f * SHAPE[i] / 5.8 / 20) * 20);
      const util = Math.min(1, Math.max(.15, u * df * (collect ? .6 : 1) + (R() - .5) * .24)), res = Math.round(cap * .08);
      const com = Math.min(cap - res, Math.round(cap * util)), av = cap - com - res;
      return { r, cap, com, res, av, fc: Math.max(0, Math.round(cap * (1 + (st.vs || 0) / 100) * (.97 + R() * .06))), closed: av === 0 };
    });
  }
  function buildModel(id) {
    const st = ALL[id], day = S.day, collect = S.service === "Collect";
    const fixture = (id === 2 || id === 9) && day === 0 && !collect;
    const R = D.rng(D.hash(id + "|" + day + "|" + S.service));
    let slots;
    if (id === 9) {
      const f = collect ? .3 : 1, df = DAYF[day];
      slots = [];
      D.unirii.shifts.forEach((sh, si) => sh.slots.forEach(w => {
        let o;
        if (fixture) o = Object.assign({}, w, { closed: false });
        else { const cap = Math.max(5, Math.round(w.cap * f / 5) * 5), res = Math.round(w.res * f), com = Math.min(cap - res, Math.round(w.com * f * df)); o = { r: w.r, cap, fc: Math.round(w.fc * f * df), com, res, av: cap - com - res, closed: false, dl: w.dl }; }
        o.shift = si; slots.push(o);
      }));
      if (fixture) slots.forEach((w, i) => {
        if (i === 0) { w.internal = { "Fast delivery": 8 }; w.market = { Wolt: 2, Foodora: 1, Skroutz: 1, Box: 1, Bolt: 1 }; }
        else if (i === 5) { w.internal = { "Same day": 24 }; w.market = { Wolt: 6, Foodora: 4, Skroutz: 3, Box: 1, Bolt: 1, Glovo: 1 }; }
        else { w.market = distribute(w.mkt, MK_W, D.rng(D.hash("un" + i))); w.internal = w.com - w.mkt > 0 ? { [i % 3 === 0 ? "Fast delivery" : "Same day"]: w.com - w.mkt } : {}; }
      });
    } else if (fixture && id === 2) slots = D.timisoara.slots.map(s => Object.assign({}, s, { res: s.cap - s.com - s.av, closed: !!s.closed }));
    else slots = genHourly(st, day, collect, R);
    if (id !== 9) slots.forEach((s, i) => { const v = S.sf[`${id}:${day}:${S.service}:${i}`]; if (v === undefined) return; const n = parseFloat(String(v).replace(",", ".")); if (isNaN(n) || n < 0 || n > 8) return; s.cap = Math.round(n * 40); s.av = Math.max(0, s.cap - s.com - s.res); s.closed = false; });
    slots.forEach(s => { if (!s.internal) breakdown(s, collect, R); });
    const cs = id === 9 ? slots.filter(x => x.shift === 0) : slots;
    const capT = sum(cs, "cap"), fcT = sum(cs, "fc"), comT = sum(cs, "com"), resT = sum(cs, "res");
    const kind = id === 9 ? "unirii" : "hourly", util = pct(comT + (kind === "unirii" ? resT : 0), capT);
    const closed = !st.cap;
    const kr = D.rng(D.hash(id + "k" + day + S.service)), d = () => 1 + Math.floor(kr() * 3);
    let kpis;
    if (fixture && id === 2) kpis = D.kpisStore;
    else if (fixture && id === 9) kpis = [["Available pickers", "8", "+1", 1], ["Avg. prep time / item", "32s", "+2s", 1], ["Items to prepare", "465", "+12%", 1], ["Capacity utilization", "77%", "+4%", 1], ["vs. forecast", "−4%", "+3%", 1]];
    else if (closed) kpis = [["Available pickers", "0", "", 1], ["Avg. prep time / item", "—", "", 1], ["Items to prepare", "0", "", 1], ["Capacity utilization", "—", "", 1], ["vs. forecast", "—", "", 1]];
    else {
      const pick = Math.max(1, Math.round(st.fte * 1.55 * (collect ? .4 : 1)));
      const vsF = capT ? Math.round((fcT / capT - 1) * 100) : 0;
      kpis = [["Available pickers", String(fixture ? 6 : pick), "+" + d(), 1], ["Avg. prep time / item", (24 + D.hash(id) % 13) + "s", "+" + d() + "s", 1], ["Items to prepare", String(Math.round(comT * 1.11)), "+" + d() + "%", 1],
        ["Capacity utilization", (fixture && id === 9 ? 85 : util) + "%", "+" + d() + "%", 1], ["vs. forecast", (fixture && id === 9 ? "−7" : signed(vsF).replace("-", "−")) + "%", "+" + d() + "%", 1]];
    }
    const comPct = pct(comT, capT);
    return { id, st, kind, slots, cslots: cs, fixture, closed, collect, capT, fcT, comT, resT, util, comPct, kpis, title: kind === "unirii" ? "Shift A · 08–12" : "08–14" };
  }
  function storeAlerts(m) {
    const st = m.st;
    if (m.fixture && st.id === 2) return { count: 9, list: [{ p: "med", t: "Productivity 62% of plan", s: "Medium priority", a: "Review" }, { p: "med", t: "Forecast +20% vs capacity", s: "13:00 – 14:00 · +20 orders", a: "Review" }, { p: "med", t: "Approaching capacity", s: "12:00 – 13:00 · 90% full", a: "Add picker" }] };
    let list = D.alerts.filter(a => a.s.split(" · ")[0] === st.name).map(a => ({ p: a.p, t: a.t, s: a.p === "high" ? "High priority" : a.p === "med" ? "Medium priority" : "Low priority", a: st.status === "CLOSED" && /^Closed/.test(a.t) ? "Reopen" : a.a }));
    if (!list.length) {
      if (st.status === "CLOSED") list.push({ p: "high", t: "Closed · FTE set to 0", s: "High priority", a: "Reopen" });
      if (st.status === "IDLE") list.push({ p: "low", t: "Idle capacity", s: "Low priority", a: "Set FTE" });
      if (st.vs >= 15) list.push({ p: "med", t: "Forecast " + st.vs + "% above capacity", s: "Medium priority", a: "Review" });
      if (st.cap && pct(st.used, st.cap) >= 95) list.push({ p: "med", t: "Approaching capacity", s: "Medium priority", a: "Add picker" });
    }
    return { count: list.length, list };
  }
  function rowView(s) {
    const f = S.service === "Collect" ? .3 : 1, df = DAYF[S.day];
    if (!s.cap) return Object.assign({}, s, { forecast: Math.round(s.forecast * f * df) });
    if (f === 1 && df === 1) return s;
    const cap = Math.max(10, Math.round(s.cap * f / 10) * 10), used = Math.min(cap, Math.round(s.used * f * df)), forecast = Math.round(s.forecast * f * df);
    return Object.assign({}, s, { cap, used, forecast, vs: Math.round((forecast / cap - 1) * 100) });
  }
  const matches = s => { const q = S.q.trim().toLowerCase(); return (!q || s.name.toLowerCase().includes(q) || codeOf(s).toLowerCase() === q) && (S.region === "All" || s.region === S.region) && (S.type === "All" || s.kind === S.type); };
  const fteWeekFor = id => {
    const sv = S.fteSaved[id], ov = w => sv ? w.map((d, i) => [d[0], sv[i], d[2]]) : w;
    if (id === 9) return ov(D.fte.map(d => d.slice()));
    const st = ALL[id], R = D.rng(D.hash("fte" + id));
    return ov(D.fte.map((d, i) => { const base = st.fte || 2, f = i === 0 ? (st.fte || 0) : Math.min(8, Math.max(0, Math.round((base + (R() - .4) * 1.5 + (i === 4 || i === 5 ? .5 : 0)) * 2) / 2)); return [d[0], f, Math.round((st.cap ? f * 200 : st.forecast) * (.78 + R() * .2))]; }));
  };
  const splitBase = id => {
    const st = ALL[id], T = id === 9 ? 600 : (st.cap || 400), r10 = x => Math.round(x / 10) * 10;
    if (id === 9) { const sv = S.spSaved[id]; return Object.assign({}, D.split, sv ? { reservePct: +sv.reserve, glovoLimit: +sv.glovo, woltLimit: +sv.wolt } : {}); }
    const own = r10(.1 * T), glovo = r10(.32 * T), wolt = r10(.18 * T), unused = own, free = T - glovo - wolt - own - unused;
    const sv = S.spSaved[id];
    return { poolTotal: T, poolUsed: glovo + wolt + own, glovo, wolt, free, own, unused, reservePct: sv ? +sv.reserve : 20, glovoLimit: sv ? +sv.glovo : r10(.33 * T), woltLimit: sv ? +sv.wolt : r10(.25 * T) };
  };
  const splitView = id => { const b = splitBase(id); if (S.released[id]) { b.free += b.unused; b.unused = 0; } return b; };

  // route enter: seed demo states
  let lastRoute = null, curP = null;
  function enter(P) {
    const r = P.r; if (r === lastRoute) return;
    const prev = lastRoute || "", wasFte = /(^r6\/panel|\/fte)/.test(prev), wasSplit = /(r9\/split|\/split)/.test(prev);
    if (P.page === "store") { if (S.curId !== P.id) { S.expanded = new Set(P.id === 9 ? [0] : []); S.shiftOpen = { 0: true, 1: true, 2: false }; S.pk = {}; S.dlv = {}; S.tdirty = false; } S.curId = P.id; if (P.chart) S.chart = P.chart; if (P.forceDay && S.day === 0) S.day = 1; }
    if (P.page === "store" && P.drawer && P.drawer.startsWith("fte")) S.fteStoreId = P.id;
    if (P.drawer && P.drawer.startsWith("fte")) {
      if (!wasFte || S.fteWeek === null || S.fteLoaded !== S.fteStoreId || (P.drawer === "fte-saved" && !S.keepSave)) { S.fteWeek = fteWeekFor(S.fteStoreId); S.fte = S.fteWeek.map(d => (+d[1]).toFixed(1)); S.fteBase = JSON.stringify(S.fte); S.fteLoaded = S.fteStoreId; }
      if (P.drawer === "fte-error") { S.fte[4] = "4.5"; S.fte[5] = "9.0"; S.fte[6] = "2.5"; }
      if (P.drawer === "fte-saved" && !S.keepSave) { S.fte[5] = "4.5"; S.fteBase = JSON.stringify(S.fte); }
    }
    if (P.drawer && P.drawer.startsWith("split")) {
      const id = P.id, b = splitBase(id);
      if (!wasSplit || (P.drawer === "split-saved" && !S.keepSave)) { S.sp = { reserve: String(b.reservePct), glovo: String(b.glovoLimit), wolt: String(b.woltLimit) }; S.spBase = JSON.stringify(S.sp); }
      if (P.drawer === "split-saved" && !S.keepSave) S.spBase = JSON.stringify(S.sp);
      if (P.drawer === "split-error") S.sp = { reserve: "30", glovo: String(Math.round(b.poolTotal * .75)), wolt: String(Math.round(b.poolTotal * .2)) };
    }
    if (P.drawer === "thresholds") { S.th = D.thresholds.map(t => String(t[1])); S.thp = D.thresholds.map(t => t[3]); S.thBase = JSON.stringify([S.th, S.thp]); }
    if (P.drawer === "restriction") { S.rsOn = true; S.rsResume = "20"; S.rsBase = JSON.stringify([S.rsOn, S.rsResume]); S.resumed = false; }
    if (P.drawer === "bulk" && prev !== "r19/bulk-upload") S.bulk = { name: "", saved: false };
    if (P.drawer === "timeslot" && !/timeslot/.test(prev)) { S.tab = "Capacity"; S.sfd = {}; }
    if (P.drawer !== "timeslot") S.sfd = {}; S.menuPop = false; S.mobileMenu = false; S.protoOpen = false; S.keepSave = false; $tip.style.display = "none";
    lastRoute = r;
  }

  // ---------- small UI helpers ----------
  const periodSelect = () => `<select id="period" class="select" data-k="period" aria-label="Period">${PERIODS.map((x, i) => `<option value="${i}" ${i === S.day ? "selected" : ""}>${x}</option>`).join("")}</select>`;
  const badgeFor = (av, tot) => av === 0 ? `<span class="badge b-red">Full</span>` : `<span class="badge ${av / tot <= .25 ? "b-orange" : "b-green"}">${av} left</span>`;
  const bar = p => `<span class="bar ${p >= 90 ? "full" : ""}"><i style="width:${Math.min(p, 100)}%"></i></span>`;
  function toast(msg) {
    const c = document.getElementById("toasts"); if (!c) return;
    const d = document.createElement("div"); d.className = "toast"; d.setAttribute("role", "status"); d.textContent = msg; c.appendChild(d); setTimeout(() => d.remove(), 3500);
  }
  const ph = `<div class="ph-note" role="note">Placeholder content. This page is not designed in Figma yet.</div>`;

  const kpiIcon = (t, i) => /pickers|FTE/i.test(t) ? I.kUser : /prep time/i.test(t) ? I.kRef : /items/i.test(t) ? I.kTray : /forecast/i.test(t) ? I.kCart : /productiv/i.test(t) ? I.kCheck : /utiliz/i.test(t) ? I.kGauge : [I.kGauge, I.kCart, I.kUser, I.kCheck][i % 4];
  // ---------- shell ----------
  function shell(inner, title, controls, kpis, active, cls) {
    active = active || "capacity";
    const col = S.menuCollapsed;
    return `<div class="app">
      ${S.mobileMenu ? '<div class="nav-scrim" data-act="menu-close"></div>' : ""}<nav class="menu ${S.mobileMenu ? "open" : ""} ${col ? "collapsed" : ""}" aria-label="Main">
        <div class="logo"><span class="brand">${col ? logoMark(24) : logo(28, "on-dark")}</span><button class="xbtn menu-toggle" style="color:#fff" data-act="menu-toggle" aria-label="${col ? "Expand menu" : "Collapse menu"}" aria-expanded="${!col}" ${col ? 'title="Expand menu"' : ""}>${col ? I.colR : I.colL}</button></div>
        <div class="label">Main Menu</div>
        ${MENU.map(([k, l, to, ic]) => `<button class="item ${active === k ? "active" : ""}" ${active === k ? 'aria-current="page"' : ""} data-act="nav" data-to="${to}" data-tip="${l}" aria-label="${l}" ${col ? `title="${l}"` : ""}>${ic}<span class="lbl">${l}</span></button>`).join("")}
        <hr><div class="label">Tools</div>
        <div class="item lang" data-tip="Language" ${col ? 'title="Language"' : ""}>${svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>')}<span class="lbl">Language</span><select aria-label="Language"><option>Eng</option><option>Ro</option></select></div>
        <button class="item" data-act="signout" data-tip="Sign Out" aria-label="Sign Out" ${col ? 'title="Sign Out"' : ""}>${svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>')}<span class="lbl">Sign Out</span></button>
      </nav>
      <main class="main">
        <header class="top">
          <div class="top-row"><div style="display:flex;gap:12px;align-items:center"><button class="burger" data-act="menu-open" aria-label="Open menu">${I.menu}</button><h1>${title}</h1></div><div class="top-controls">${controls}</div></div>
          <div class="kpis">${kpis.map((k, i) => `<div class="kpi"><div class="t"><span>${k[0]}</span><span class="kic">${kpiIcon(k[0], i)}</span></div><div class="v"><b>${k[1]}</b>${k[2] ? `<span class="${k[3] ? "up" : "down"}">${k[3] ? I.tUp : I.tDown} ${k[2]}</span>` : ""}</div></div>`).join("")}</div>
        </header>
        <div class="content ${cls || ""}">${inner}</div>
      </main></div>`;
  }

  // Store search (combobox): type to filter by name, region or type; pick with click, Enter or arrow keys.
  const fold = t => String(t).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const storeItems = q => { const f = fold(q.trim()); const all = [{ id: "__all", name: "All stores", sub: "" }].concat(ALL.map(s => ({ id: String(s.id), name: s.name, sub: s.sub }))); return (f ? all.filter(x => fold(x.name + " " + x.sub).includes(f)) : all).slice(0, 40); };
  const storeLis = (q, act) => { const it = storeItems(q); return it.length ? it.map((x, i) => `<li role="option" id="store-o${i}" data-val="${x.id}" aria-selected="${i === act}" class="${i === act ? "act" : ""}"><span>${x.name}</span>${x.sub ? `<small>${x.sub}</small>` : ""}</li>`).join("") : `<li class="none" role="presentation">No stores found</li>`; };
  const storeCombo = id => `<div class="combo" data-combo="${id}"><svg class="combo-ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="store" class="select wide combo-in" role="combobox" aria-expanded="false" aria-controls="store-list" aria-autocomplete="list" autocomplete="off" spellcheck="false" placeholder="Search store name or ID" aria-label="Store" value="${ALL[id].name}"><ul id="store-list" role="listbox" aria-label="Stores" hidden></ul></div>`;
  // ---------- attention card ----------
  const idByName = n => ALL.findIndex(s => s.name === n);
  function alertBtn(a, id) { return `<button class="act" data-act="alert" data-a="${a.a}" data-id="${id}">${a.a}</button>`; }
  function attention(list, open, count, ctxId) {
    const body = !open ? "" : count === 0 ? `<p class="empty">No alerts right now</p>` : `<div class="att-list">${list.slice(0, 3).map(a0 => { const a = a0.a === "Manage" ? Object.assign({}, a0, { a: "Review" }) : a0; return `<div class="alert-row"><span class="ico ${a.p}">${prioIcon[a.p]}</span><div class="txt"><b>${a.t}</b><span>${a.s.split(" · ")[0]}</span></div>${alertBtn(a, ctxId !== undefined ? ctxId : idByName(a.s.split(" · ")[0]))}</div>`; }).join("")}</div>`;
    return `<section class="card" aria-labelledby="att-h"><div class="att-head"><button class="toggle" data-act="att-toggle" aria-expanded="${open}">${open ? I.down : I.right}<h5 id="att-h">Needs attention</h5><span class="count">${count}</span></button>${count >= 3 ? '<button class="link" data-act="alerts">View all</button>' : ""}</div>${body}</section>`;
  }

  // ---------- sorting ----------
  const SORT_ICON = { none: svg('<path d="m8 9 4-4 4 4M8 15l4 4 4-4"/>', 14), asc: svg('<path d="m6 15 6-6 6 6"/>', 14), desc: svg('<path d="m6 9 6 6 6-6"/>', 14) };
  const sortTh = (t, k, label) => { const c = S.sort[t], st = c && c.k === k ? c.dir : "none"; return `<th aria-sort="${st === "none" ? "none" : st === "asc" ? "ascending" : "descending"}"><button type="button" class="sort ${st}" data-act="sort" data-t="${t}" data-k="${k}" aria-label="Sort by ${label}">${label}${SORT_ICON[st]}</button></th>`; };
  const revNum = r => { if (r == null) return null; const m = String(r).match(/([\d.]+)\s*([kmKM]?)/); return m ? parseFloat(m[1]) * ({ k: 1e3, m: 1e6 }[m[2].toLowerCase()] || 1) : null; };
  const STAT_RANK = { OPEN: 0, IDLE: 1, CLOSED: 2 };
  const storeKeys = { status: r => STAT_RANK[r.status], util: r => (r.cap ? r.used / r.cap : null), prod: r => (r.prod == null ? null : r.prod), rev: r => revNum(r.rev) };
  // Sorts a copy; rows with no value always go last. Stable (ties keep the original order).
  const sortBy = (items, getter, cur) => { if (!cur) return items; const d = cur.dir === "asc" ? 1 : -1; return items.map((x, i) => [x, i]).sort((a, b) => { const va = getter(a[0]), vb = getter(b[0]); if (va == null && vb == null) return a[1] - b[1]; if (va == null) return 1; if (vb == null) return -1; return va === vb ? a[1] - b[1] : (va - vb) * d; }).map(p => p[0]); };
  // ---------- All stores ----------
  function pageItems(cur, n) {
    if (n <= 7) return Array.from({ length: n }, (_, i) => i + 1);
    if (cur <= 4) return [1, 2, 3, 4, 5, "…", n];
    if (cur >= n - 3) return [1, "…", n - 4, n - 3, n - 2, n - 1, n];
    return [1, "…", cur - 1, cur, cur + 1, "…", n];
  }
  function allStores(P) {
    const key = P.key, open = !(key === "collapsed" || key === "one-collapsed");
    const list = key.startsWith("one") ? [D.alerts[2]] : key === "zero" ? [] : D.alerts;
    const rows = ALL.filter(matches), totalN = rows.length, pages = Math.max(1, Math.ceil(totalN / S.per));
    if (S.page > pages) S.page = pages;
    const from = (S.page - 1) * S.per, shown = sortBy(rows.map(rowView), storeKeys[(S.sort.stores || {}).k], S.sort.stores).slice(from, from + S.per);
    const tr = shown.map(s => {
      const p = s.cap ? pct(s.used, s.cap) : 0;
      return `<tr><td><button class="store-name" data-act="store" data-id="${s.id}">${s.name}</button><span class="sub">${s.sub}</span></td>
      <td><span class="badge ${s.status === "OPEN" ? "b-green" : s.status === "IDLE" ? "b-orange" : "b-red"}">${s.status}</span></td>
      <td><button class="fte-btn" data-act="fte" data-id="${s.id}" aria-label="Set FTE for ${s.name}, currently ${s.fte.toFixed(1)}">${s.fte === 0 ? "0" : s.fte.toFixed(1)}</button></td>
      <td>${s.cap ? `${s.used} of ${s.cap} · ${p}%${bar(p)}` : `<span class="sub" style="font-size:14px">No capacity</span>`}</td>
      <td>${s.forecast}<span class="sub ${s.vs > 0 ? "warn" : ""}">${s.vs === null ? "No capacity" : `${signed(s.vs)}% capacity`}</span></td>
      <td class="${s.prod && s.prod < 70 ? "pos" : ""}">${s.prod ? s.prod + "%" : "—"}</td><td>${s.rev || "—"}</td></tr>`;
    }).join("");
    const empty = shown.length === 0 ? `<tr><td colspan="7" class="empty" style="text-align:center;padding:32px">No stores match the filters</td></tr>` : "";
    const pg = pageItems(S.page, pages).map(n => n === "…" ? "…" : `<button class="pg ${S.page === n ? "on" : ""}" data-act="page" data-n="${n}" ${S.page === n ? 'aria-current="page"' : ""}>${n}</button>`).join(" ");
    const df = DAYF[S.day], uBase = Math.min(99, Math.round(82 * df * (S.service === "Collect" ? .85 : 1)));
    const kp = [["Capacity utilization", uBase + "%", D.kpisAll[0][2], 1], D.kpisAll[1], D.kpisAll[2], D.kpisAll[3]];
    const inner = attention(list, open, list.length) + `
      <section class="card" aria-labelledby="st-h">
        <div style="display:flex;justify-content:space-between;align-items:center;position:relative"><h5 id="st-h">Stores (${totalN})</h5>
          <button class="xbtn" data-act="menu-pop" aria-label="More actions" aria-haspopup="menu" aria-expanded="${S.menuPop}">${I.dots}</button>
          ${S.menuPop ? `<div class="menu-pop" role="menu"><button role="menuitem" data-act="bulk">Bulk upload FTE</button><button role="menuitem" data-act="export">Export</button></div>` : ""}</div>
        <div class="tools"><input class="input grow" data-k="q" placeholder="Search store name or ID" value="${S.q}" aria-label="Search store name or ID">
          <select class="select" data-k="region" aria-label="Region">${D.regions.map(x => `<option ${S.region === x ? "selected" : ""} value="${x}">Region: ${x}</option>`).join("")}</select>
          <select class="select" data-k="type" aria-label="Type">${["All", "Hub", "Store"].map(x => `<option ${S.type === x ? "selected" : ""} value="${x}">Type: ${x}</option>`).join("")}</select>
          <select class="select" data-k="service" aria-label="Service">${["Delivery", "Collect"].map(x => `<option ${S.service === x ? "selected" : ""} value="${x}">Service: ${x}</option>`).join("")}</select></div>
        <div class="tscroll"><table class="stores"><colgroup><col style="width:25%"><col style="width:14%"><col style="width:7%"><col style="width:17%"><col style="width:12%"><col style="width:11%"><col style="width:14%"></colgroup><thead><tr><th>Store</th>${sortTh("stores", "status", "Status")}<th>FTE</th>${sortTh("stores", "util", "Utilization")}<th>Orders forecast</th>${sortTh("stores", "prod", "Productivity")}${sortTh("stores", "rev", "Revenue, lei")}</tr></thead><tbody>${tr}${empty}</tbody></table></div>
        <div class="pager"><span>${shown.length ? `${from + 1}–${from + shown.length} of ${totalN}` : `0 of ${totalN}`}</span><div class="pager-r"><div class="pages"><button class="pg" data-act="page" data-n="${Math.max(1, S.page - 1)}" aria-label="Previous page" ${S.page === 1 ? "disabled" : ""}>${svg('<path d="m15 6-6 6 6 6"/>', 14)}</button>${pg}<button class="pg" data-act="page" data-n="${Math.min(pages, S.page + 1)}" aria-label="Next page" ${S.page === pages ? "disabled" : ""}>${svg('<path d="m9 6 6 6-6 6"/>', 14)}</button></div><span class="per">Per page <select class="select sm" data-k="per" aria-label="Per page"><option ${S.per === 10 ? "selected" : ""}>10</option><option ${S.per === 25 ? "selected" : ""}>25</option></select></span></div></div>
      </section>`;
    return shell(inner, "Capacity", `<label for="period">Period</label>${periodSelect()}`, kp);
  }
  function exportCsv() {
    const rows = ALL.filter(matches).map(rowView), q = v => `"${String(v).replace(/"/g, '""')}"`;
    const head = ["Store", "Region", "Type", "Status", "FTE", "Capacity", "Used", "Orders forecast", "Productivity %", "Revenue, lei"];
    const csv = [head.map(q).join(",")].concat(rows.map(s => [s.name, s.region, s.kind, s.status, s.fte, s.cap === null ? "" : s.cap, s.used === null ? "" : s.used, s.forecast, s.prod === null ? "" : s.prod, s.rev || ""].map(q).join(","))).join("\r\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); a.download = "stoa-stores.csv";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast("Export started");
  }

  // ---------- Store detail ----------
  let curSlots = [];
  function chartBlock(m, expanded) {
    const sl = m.cslots || m.slots, max = Math.max(1, ...sl.map(s => Math.max(s.cap, s.fc))), wide = m.kind === "unirii" ? 720 : 560;
    curSlots = sl;
    const cols = sl.map((s, i) => `<div class="col ${S.hl === i ? "hl" : ""}" data-i="${i}" tabindex="0" aria-label="${s.r}: capacity ${s.cap}, forecast ${s.fc}"><i class="c" style="height:${s.cap / max * 100}px"></i><i class="f" style="height:${s.fc / max * 100}px"></i></div>`).join("");
    const comChip = m.comT;
    return `<section class="card ${expanded ? "" : "cc"}" aria-labelledby="ch-h"><div class="chart-head"><button class="toggle" data-act="chart-toggle" aria-expanded="${expanded}">${expanded ? I.down : I.right}<h5 id="ch-h">Orders capacity vs. forecast · ${m.title}</h5></button>
      <div class="chips"><span><span class="sw cap"></span>Capacity${expanded ? "" : " · " + m.title.replace("Shift A · ", "")} <b>${m.capT}</b></span><span><span class="sw fc"></span>Forecast${expanded ? "" : " · " + m.title.replace("Shift A · ", "")} <b>${m.fcT}</b></span><span style="color:#b45309"><span class="dash"></span>Committed${expanded ? "" : " · " + m.title.replace("Shift A · ", "")} <b>${comChip} · ${m.comPct}%</b></span></div></div>
      ${expanded ? `<div class="chart-scroll"><div class="chart" style="min-width:${wide}px">${cols}</div><div class="x-labels" style="min-width:${wide}px">${sl.map(s => `<span>${s.r}</span>`).join("")}</div></div>` : ""}</section>`;
  }
  function breakdownRow(s, collect, u) {
    const it = total(s.internal), mk = total(s.market), ent = o => Object.entries(o).map(([k, v]) => `${k} <b>${v}</b>`).join(" · ") || "—";
    if (u) return `<tr class="expand"><td colspan="5"></td><td colspan="4"><div class="box u"><div class="row"><b>${collect ? "Collect" : "Internal"}</b><span>${ent(s.internal)}</span></div>${collect ? "" : `<div class="row"><b>Marketplace</b><span>${ent(s.market)}</span></div>`}</div></td></tr>`;
    return `<tr class="expand"><td colspan="8"><div class="box"><span class="sub">Committed orders (${s.com})</span><div class="row"><b>${collect ? "Collect" : "Internal"} ${it}</b><span>${ent(s.internal)}</span></div>${collect ? "" : `<div class="row"><b>Marketplace ${mk}</b><span>${ent(s.market)}</span></div>`}</div></td></tr>`;
  }
  const svcHead = (m, editable) => `<div class="store-head"><h5 id="tb-h" style="font-size:18px">${m.st.name}</h5>
      <div class="seg" role="group" aria-label="Service"><button class="${m.collect ? "" : "on"}" aria-pressed="${!m.collect}" data-act="svc" data-v="Delivery">Delivery</button><button class="${m.collect ? "on" : ""}" aria-pressed="${m.collect}" data-act="svc" data-v="Collect">Collect</button></div>
      <span class="grow"></span>${m.collect || m.closed ? "" : `<button class="btn outline" data-act="split">Channel split</button>`}${editable ? `<button class="btn filled" data-act="save-table" ${S.tdirty ? "" : "disabled"}>Save changes</button>` : ""}</div>`;
  function committedCell(s, i, m) {
    const open = S.expanded.has(i), mk = total(s.market), tip = (o) => Object.entries(o).map(([k, v]) => `<div class="r in"><span>${k}</span><b>${v}</b></div>`).join("");
    return `<td><div class="cm"><button class="cm-b" data-act="row" data-i="${i}" aria-expanded="${open}" aria-label="Toggle committed orders for ${range(s.r)}">${s.com}${open ? I.down : I.right}</button>${m.collect || !s.com ? "" : `<span class="mk">${mk} marketplace · ${pct(mk, s.com)}%</span>`}
      <div class="cm-tip" role="tooltip"><div class="r h"><b>Committed</b><b>${s.com}</b></div><div class="r"><span>${m.collect ? "Collect" : "Internal"}</span></div>${tip(s.internal)}${m.collect ? "" : `<div class="r"><span>Marketplace</span></div>${tip(s.market)}`}</div></div></td>`;
  }
  function uniriiTable(m) {
    let body = "";
    D.unirii.shifts.forEach((g, si) => {
      const open = S.shiftOpen[si], pk = S.pk[si] !== undefined ? S.pk[si] : g.pickers;
      body += `<tr class="band"><td><button class="shift-t" data-act="shift" data-s="${si}" aria-expanded="${open}" aria-label="${g.n}, ${g.r}">${open ? I.down : I.right}<span><b>${g.n}</b><span class="sub">${g.r}</span></span></button></td><td><input class="input num sm" type="number" min="0" max="20" data-k="pk:${si}" value="${pk}" aria-label="Pickers, ${g.n}"></td><td colspan="7"></td></tr>`;
      if (!open) return;
      m.slots.forEach((s, i) => {
        if (s.shift !== si) return;
        const dl = S.dlv[i] !== undefined ? S.dlv[i] : s.dl, extra = s.fc > s.cap ? `<span class="sub extra">+${pct(s.fc - s.cap, s.cap)}% extra</span>` : "";
        body += `<tr><td></td><td></td><td><button class="timeslot" data-act="timeslot" data-i="${i}">${range(s.r)}</button></td><td><input class="input num sm" type="number" min="0" max="99" data-k="dl:${i}" value="${dl}" aria-label="Delivery, ${range(s.r)}"></td><td>${s.cap}</td>${committedCell(s, i, m)}<td>${s.res}</td><td>${badgeFor(s.av, s.cap)}</td><td>${s.fc}${extra}</td></tr>${S.expanded.has(i) ? breakdownRow(s, m.collect, true) : ""}`;
      });
    });
    return `<section class="card sd" aria-labelledby="tb-h">${svcHead(m, true)}<div class="tscroll"><table class="shifts"><thead><tr class="grp"><th colspan="4"></th><th colspan="4" class="gh">Fulfilment capacity (Orders)</th><th></th></tr>
      <tr><th>Shift</th><th>Pickers</th><th>Time slot</th><th>Delivery</th><th>Total</th><th>Committed</th><th>Reserved</th><th>Available</th><th>Orders forecast</th></tr></thead><tbody>${body}</tbody></table></div></section>`;
  }
  function storeTable(m) {
    if (m.kind === "unirii") return uniriiTable(m);
    const slotKeys = { cap: x => x.s.cap, util: x => (x.s.cap ? (x.s.com + x.s.res) / x.s.cap : null), mk: x => (x.s.cap ? x.s.av / x.s.cap : -1) };
    const ordered = sortBy(m.slots.map((s, i) => ({ s, i })), slotKeys[(S.sort.slots || {}).k], S.sort.slots);
    const SH = h => h < 12 ? ["Shift A", 8, 12] : h < 16 ? ["Shift B", 12, 16] : ["Shift C", 16, 20], hh = n => String(n).padStart(2, "0") + ":00";
    const slotRow = ({ s, i }) => {
      const p = pct(s.com + s.res, s.cap), open = S.expanded.has(i), fteV = (s.cap / 40).toFixed(1);
      const last = !s.cap ? '<span class="badge b-red">Closed</span>' : s.av === 0 ? '<span class="badge b-red">Full</span>' : s.av / s.cap <= .1 ? `<span class="badge b-orange">${s.av} left</span>` : '<span class="badge b-green">Open</span>';
      return `<tr><td>${range(s.r)}</td><td>${fteV}</td><td>${s.cap}</td><td>${s.com}</td><td>${s.av}</td><td><span class="ut"><span>${p}%</span>${bar(p)}</span></td><td>${last}</td><td><span class="row-act"><button class="chev" data-act="row" data-i="${i}" aria-expanded="${open}" aria-label="Toggle committed orders for ${range(s.r)}">${open ? I.up : I.down}</button><button class="view-link" data-act="timeslot" data-i="${i}" aria-label="View details for ${range(s.r)}">View</button></span></td></tr>${open ? breakdownRow(s, m.collect) : ""}`;
    };
    let rows = "";
    if (S.sort.slots) rows = ordered.map(slotRow).join("");
    else {
      const groups = [];
      ordered.forEach(x => { const g = SH(parseInt(x.s.r.slice(0, 2), 10)); let o = groups.find(q => q.n === g[0]); if (!o) groups.push(o = { n: g[0], a: g[1], z: g[2], it: [] }); o.it.push(x); });
      groups.forEach(g => {
        const open = S.so[g.n] !== false, staffed = g.it.filter(x => x.s.cap > 0), lastEnd = parseInt(g.it[g.it.length - 1].s.r.slice(0, 2), 10) + 1;
        const info = !staffed.length ? "Not staffed" : lastEnd < g.z || staffed.length < g.it.length ? `Staffed ${hh(g.a)} – ${hh(Math.min(g.z, lastEnd))} only · ${hh(Math.min(g.z, lastEnd))} – ${hh(g.z)} not staffed` : `Staffed ${hh(g.a)} – ${hh(g.z)} · ${g.z - g.a} h`;
        rows += `<tr class="sgrp"><td><button class="shift-t" data-act="sgrp" data-s="${g.n}" aria-expanded="${open}" aria-label="${g.n}, ${hh(g.a)} – ${hh(g.z)}">${open ? I.down : I.right}<span><b>${g.n}</b><span class="sub">${hh(g.a)} – ${hh(g.z)}</span></span></button></td><td colspan="7" class="sg-info">${info}</td></tr>`;
        if (open) rows += g.it.map(slotRow).join("");
      });
    }
    return `<section class="card sd" aria-labelledby="tb-h">${svcHead(m)}
      <div class="tscroll"><table class="slots"><colgroup><col style="width:13%"><col style="width:11%"><col style="width:14%"><col style="width:15%"><col style="width:14%"><col style="width:12%"><col style="width:11%"><col style="width:10%"></colgroup><thead><tr><th>Timeslot</th><th>FTE per hour</th>${sortTh("slots", "cap", "Orders capacity")}<th>Committed orders</th><th>Available orders</th>${sortTh("slots", "util", "Utilization")}${sortTh("slots", "mk", m.collect ? "Status" : "Marketplace")}<th></th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
  }
  function storeDetail(P) {
    const m = buildModel(P.id), expanded = (P.chart || S.chart) === "expanded", al = storeAlerts(m);
    const closedBanner = ""; // Figma (final): no banner on a closed store; the Needs attention card carries the Reopen action
    const controls = `<label for="store">Store</label>${storeCombo(m.id)}<label for="period">Period</label>${periodSelect()}`;
    return shell((m.fixture && m.id === 9 ? "" : attention(al.list, S.attOpenStore, al.count, m.id)) + closedBanner + chartBlock(m, expanded) + storeTable(m), "Capacity", controls, m.kpis, "capacity", "sp");
  }

  // ---------- placeholder pages ----------
  const CHANNELS = ["Fast delivery", "Same day", "Next day", "Collect", "Wolt", "Foodora", "Glovo", "Skroutz", "Bolt", "Box"];
  const NAMES = ["Andrei Popa", "Maria Ionescu", "Mihai Radu", "Elena Dumitru", "Alex Stan", "Ioana Marin", "Vlad Georgescu", "Ana Barbu", "Radu Matei", "Cristina Lungu", "Daniel Neagu", "Laura Preda", "Bogdan Toma", "Sorina Dinu"];
  const pick = (R, a) => a[Math.floor(R() * a.length)];
  const openStores = ALL.filter(s => s.cap);
  const stBadge = s => `<span class="badge ${/Delivered|Ready|Active|On shift|Handed over/.test(s) ? "b-green" : /Late|Delayed|Waiting/.test(s) ? "b-red" : "b-orange"}">${s}</span>`;
  const storeLink = id => `<button class="store-name" data-act="store" data-id="${id}">${ALL[id].name}</button>`;
  function ordersPage() {
    const R = D.rng(4242), df = DAYF[S.day];
    const rows = Array.from({ length: 48 }, (_, i) => { const st = pick(R, openStores), ch = pick(R, CHANNELS), status = pick(R, ["Picking", "Picking", "Ready", "On route", "On route", "Delivered", "Delivered", "Delivered", "Late"]); return { n: 52000 + i * 7, st, ch, slot: HOURS[Math.floor(R() * 6)].replace("–", " – "), items: 3 + Math.floor(R() * 33), status, val: Math.round((45 + R() * 575) * df) }; });
    const f = S.ordFilter, list = rows.filter(r => f === "All" || r.status === f), cnt = s => rows.filter(r => r.status === s).length;
    const kp = [["Open orders", String(rows.filter(r => r.status !== "Delivered").length * 4), "+6%", 1], ["Late orders", String(cnt("Late") * 2), "+2", 0], ["Avg. delivery time", Math.round(41 / df) + " min", "−1 min", 1], ["Cancelled today", String(Math.round(9 * df)), "+1", 0]];
    const inner = ph + `<section class="card"><h5 style="margin-bottom:12px">Orders</h5><div class="pills" role="group" aria-label="Status">${["All", "Picking", "Ready", "On route", "Delivered", "Late"].map(k => `<button class="pill ${f === k ? "on" : ""}" aria-pressed="${f === k}" data-act="ofilter" data-k="${k}">${k}${k === "All" ? "" : " · " + cnt(k)}</button>`).join("")}</div>
      <div class="tscroll"><table><thead><tr><th>Order</th><th>Store</th><th>Channel</th><th>Timeslot</th><th>Items</th><th>Status</th><th>Value, lei</th></tr></thead><tbody>${list.slice(0, 15).map(r => `<tr><td>#${r.n}</td><td>${storeLink(r.st.id)}</td><td>${r.ch}</td><td>${r.slot}</td><td>${r.items}</td><td>${stBadge(r.status)}</td><td>${r.val}</td></tr>`).join("")}</tbody></table></div>
      <div class="pager"><span>Showing ${Math.min(15, list.length)} of ${list.length}</span></div></section>`;
    return shell(inner, "Orders", `<label for="period">Period</label>${periodSelect()}`, kp, "orders");
  }
  function pickingPage() {
    const R = D.rng(5151), df = DAYF[S.day];
    const rows = Array.from({ length: 14 }, (_, i) => ({ name: NAMES[i], st: pick(R, openStores), zone: pick(R, ["Fresh", "Dry goods", "Frozen", "Beverages", "Household"]), orders: 1 + Math.floor(R() * 5), ph: Math.round((52 + R() * 60) * df), status: pick(R, ["Active", "Active", "Active", "Break", "Waiting"]) }));
    const kp = [["Active pickers", String(Math.round(131 * df)), "+8", 1], ["Items picked / hour", String(Math.round(84 * df)), "+3%", 1], ["Orders in progress", String(Math.round(212 * df)), "+12", 1], ["Picking accuracy", "98.4%", "−0.2%", 0]];
    const inner = ph + `<section class="card"><h5 style="margin-bottom:12px">Pickers on shift</h5><div class="tscroll"><table><thead><tr><th>Picker</th><th>Store</th><th>Zone</th><th>Orders</th><th>Items / hour</th><th>Status</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r.name}</td><td>${storeLink(r.st.id)}</td><td>${r.zone}</td><td>${r.orders}</td><td>${r.ph}</td><td>${stBadge(r.status)}</td></tr>`).join("")}</tbody></table></div></section>`;
    return shell(inner, "In-store picking", `<label for="period">Period</label>${periodSelect()}`, kp, "picking");
  }
  function couriersPage() {
    const R = D.rng(6262), df = DAYF[S.day];
    const rows = Array.from({ length: 14 }, (_, i) => { const status = pick(R, ["On route", "On route", "At store", "Delayed", "Available"]); return { name: NAMES[13 - i], partner: pick(R, ["Own fleet", "Wolt", "Foodora", "Glovo", "Bolt"]), st: pick(R, openStores), status, eta: status === "Available" ? "—" : (4 + Math.floor(R() * 24)) + " min" }; });
    const kp = [["Active couriers", String(Math.round(318 * df)), "+14", 1], ["Avg. wait at store", Math.round(6 / df) + " min", "−1 min", 1], ["Orders on route", String(Math.round(204 * df)), "+9", 1], ["On-time rate", "93%", "−1%", 0]];
    const inner = ph + `<section class="card"><h5 style="margin-bottom:12px">Couriers</h5><div class="tscroll"><table><thead><tr><th>Courier</th><th>Partner</th><th>Store</th><th>Status</th><th>ETA</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r.name}</td><td>${r.partner}</td><td>${storeLink(r.st.id)}</td><td>${stBadge(r.status === "Available" ? "Active" : r.status)}</td><td>${r.eta}</td></tr>`).join("")}</tbody></table></div></section>`;
    return shell(inner, "Couriers", `<label for="period">Period</label>${periodSelect()}`, kp, "couriers");
  }

  // ---------- drawers ----------
  const drawerShell = (title, body, footer, label, extraHeader) => `<div class="scrim" data-act="close"></div><aside class="drawer" tabindex="-1" role="dialog" aria-modal="true" aria-label="${label || title}"><header><h2>${title}</h2><span style="display:flex;gap:8px">${extraHeader || ""}<button class="xbtn" data-act="close" aria-label="Close">${I.x}</button></span></header>${body}${footer || ""}</aside>`;
  const savedAlert = (msg) => `<div class="alert-box green saved" role="status"><svg class="al-ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div><b>Changes saved</b><p>${msg}</p></div></div>`;
  const saved = savedAlert("Your changes are now live.");

  function alertsDrawer() {
    const list = D.alerts.filter(a => S.alertFilter === "all" || a.type === S.alertFilter);
    return drawerShell(`Needs attention (${D.alerts.length})`, `<div class="body"><div class="pills" role="group" aria-label="Alert type">${D.alertTypes.map(([k, l]) => `<button class="pill ${S.alertFilter === k ? "on" : ""}" aria-pressed="${S.alertFilter === k}" data-act="afilter" data-k="${k}">${S.alertFilter === k ? svg('<path d="m5 12 5 5 9-10"/>', 14, 2.5) : ""}${l}</button>`).join("")}</div>
      ${list.map(a => `<div class="alert-row ${a.restricted ? "rs" : ""}"><span class="ico ${a.p}">${prioIcon[a.p]}</span><div class="txt"><b>${a.t}</b><span>${a.s}</span></div>${a.restricted ? '<span class="restricted">RESTRICTED</span>' : ""}${alertBtn(a, idByName(a.s.split(" · ")[0]))}</div>`).join("")}</div>`,
      "",
      "Needs attention", `<button class="xbtn" data-act="thresholds" aria-label="Alert settings">${I.gear}</button>`);
  }
  const stHead = (id, right) => `<div class="st-head"><div><h3>${ALL[id].name}</h3><span class="sub">${ALL[id].sub}</span></div>${right || ""}</div>`;
  const numAttr = (k, v, bad, label) => `class="input num ${bad ? "err" : ""}" data-k="${k}" inputmode="decimal" value="${v}" aria-label="${label}" ${bad ? `aria-invalid="true" aria-describedby="err-${k.replace(/\W/g, "-")}"` : ""}`;
  const numOf = v => parseFloat(String(v).replace(",", "."));
  const badInt = v => badNum(v) || !/^\d+$/.test(String(v).trim()) || +v > 1000;
  const badNum = v => { v = String(v).trim().replace(",", "."); return v === "" || isNaN(+v) || +v < 0; };
  function thresholdsDrawer() {
    const dirty = JSON.stringify([S.th, S.thp]) !== S.thBase, bad = S.th.some(badInt);
    return drawerShell("Alert thresholds", `<div class="body"><p class="desc">Set when each alert type is raised and how it is prioritised.</p>
      <div class="th-row th-h"><span>Alert type</span><span>Threshold</span><span>Priority</span></div>
      ${D.thresholds.map((t, i) => `<div class="th-row"><div><span class="lbl">${t[0]}</span><span class="sub">${t[4]}</span></div><span class="ctl"><input ${numAttr("th:" + i, S.th[i], badInt(S.th[i]), t[0] + " threshold, " + t[2])}>${badInt(S.th[i]) ? `<span class="err-msg" id="err-th-${i}">Enter a whole number up to 1000</span>` : ""}</span><select class="select" data-k="thp:${i}" aria-label="${t[0]} priority">${["High", "Medium", "Low"].map(p => `<option ${S.thp[i] === p ? "selected" : ""}>${p}</option>`).join("")}</select>${i === 2 ? '<button class="link strong" data-act="restrict">Restrict orders</button>' : ""}</div>`).join("")}</div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-th" ${dirty && !bad ? "" : "disabled"}>Save changes</button></footer>`);
  }
  function restrictDrawer() {
    const dirty = JSON.stringify([S.rsOn, S.rsResume]) !== S.rsBase, bad = badNum(S.rsResume);
    const info = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>';
    return drawerShell("Order restriction", `<div class="body"><p class="desc">Restrict new orders automatically when productivity is below plan and a backlog builds, instead of letting the queue snowball.</p>
      ${S.resumed ? `<div class="alert-box blue" role="status" style="margin:0 0 20px"><span>Orders resumed</span></div>` : `<div class="rs-box" role="status"><span class="ic">${info}</span><div><b>Orders restricted</b><span>Productivity is below plan and a backlog is building.</span></div></div>`}
      <div class="set-row"><div id="rs-l"><span class="lbl">Restrict new orders automatically</span><span class="sub">Applies while the backlog is above the limit</span></div><button class="switch" role="switch" aria-checked="${S.rsOn}" aria-labelledby="rs-l" data-act="rs-toggle"></button></div>
      <div class="set-row"><div><label class="lbl" for="rs-r">Resume when queue is under</label><span class="sub">Queue size (orders)</span>${bad ? '<span class="err-msg">Enter a valid value</span>' : ""}</div><input id="rs-r" ${numAttr("rs:resume", S.rsResume, bad, "Resume when queue is under")} ${S.rsOn ? "" : "disabled"}></div>
      <div class="set-row"><div><span class="lbl">Manual override</span><span class="sub">Resume orders now, ignoring the rule</span></div><button class="btn outline" data-act="resume-now">Resume orders now</button></div></div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-rs" ${dirty && !bad ? "" : "disabled"}>Save changes</button></footer>`);
  }
  function fteDrawer(P) {
    const week = S.fteWeek, vals = S.fte.map(v => badNum(v) || numOf(v) > 8 ? null : numOf(v)), base = JSON.parse(S.fteBase), K = D.fteCapacityPerFte;
    const invalid = vals.some(v => v === null), dirty = JSON.stringify(S.fte) !== S.fteBase;
    const short = d => d[0].split(" ").slice(0, 2).join(" ");
    const rows = week.map((d, i) => { const v = vals[i], cap = v === null ? null : v * K;
      return `<div class="fte-row"><span class="day">${d[0]}</span><span><input ${numAttr("fte:" + i, S.fte[i], v === null, "FTE on " + d[0])}>${v === null ? `<span class="err-msg" id="err-fte-${i}">Enter a valid value</span>` : ""}</span><span>${cap === null ? "—" : cap}</span><span>${d[2]} · ${cap === null || !cap ? "—" : pct(d[2], cap) + "%"}</span></div>`; }).join("");
    const sumv = vals.reduce((a, b) => a + b, 0), loads = week.map((d, i) => vals[i] ? pct(d[2], vals[i] * K) : 0), hi = loads.indexOf(Math.max(...loads));
    const stat = (l, v) => `<div><span>${l}</span><b>${v}</b></div>`;
    return drawerShell("Set FTE", `${P.drawer === "fte-saved" ? saved : ""}<div class="body">${stHead(S.fteStoreId, `<div class="today"><span class="sub">Today</span><b>${(+base[0]).toFixed(1)} FTE</b></div>`)}
      <p class="desc">Enter FTE availability for the week ${short(week[0])} – ${week[6][0].replace(/^\w+ /, "")}. Estimated capacity is ${K} orders per FTE.</p>
      <div class="copy-btns"><button class="btn" data-act="copy-all">Copy Monday to all days</button><button class="btn" data-act="copy-week">Copy Monday to weekdays</button></div>
      <div class="fte-row fte-h"><span>Day</span><span>FTE (0–8)</span><span>Est. capacity</span><span>Forecast · load</span></div>${rows}
      <div class="sum">${invalid ? stat("7-day total", "—") + stat("Average", "—") + stat("Highest load", "—") : stat("7-day total", sumv.toFixed(1) + " FTE days") + stat("Average", (sumv / 7).toFixed(1) + " FTE") + stat("Highest load", short(week[hi]) + " · " + loads[hi] + "%")}</div>
      ${invalid ? '<p class="desc" style="margin-top:12px">Totals show once all values are valid.</p>' : ""}</div>`,
      `<footer class="actions"><button class="btn" data-act="close">${/-saved$/.test(P.drawer || "") ? "Close" : "Cancel"}</button><button class="btn filled" data-act="save-fte" ${dirty && !invalid ? "" : "disabled"}>Save changes</button></footer>`);
  }
  function splitErr(id) {
    const T = splitBase(id).poolTotal, g = +S.sp.glovo, w = +S.sp.wolt, rs = +S.sp.reserve, bad = k => badNum(S.sp[k]);
    const pool = Math.round(T * (1 - (isNaN(rs) ? 0 : rs) / 100)), over = !bad("glovo") && !bad("wolt") && g + w > pool;
    return { over, pool, g: bad("glovo") ? "Enter a valid value" : over && g >= w ? "Exceeds the limit" : "", w: bad("wolt") ? "Enter a valid value" : over && w > g ? "Exceeds the limit" : "", r: bad("reserve") || rs > 100 ? "Enter a valid value" : "" };
  }
  function splitDrawer(P) {
    const id = P.id, p = splitView(id), e = splitErr(id), dirty = JSON.stringify(S.sp) !== S.spBase, valid = !e.over && !e.g && !e.w && !e.r, rel = S.released[id], T = p.poolTotal;
    const sv = JSON.parse(S.spBase), sub = k => (S.sp[k] === sv[k] && !badNum(S.sp[k]) && +S.sp[k] > 0) ? `${pct(p[k], +sv[k])}% of cap` : `Saved: ${sv[k]}`;
    const pr = ([l, v, c]) => `<div class="pr"><div><span>${l}</span><b>${v}</b></div><span class="bar2"><i style="width:${v / T * 100}%;background:${c}"></i></span></div>`;
    const lim = (k, label, err, withSub) => `<div class="set-row"><div><label class="lbl" for="sp-${k}">${label}</label>${withSub ? `<span class="sub">${sub(k === "g" ? "glovo" : "wolt")}</span>` : ""}</div><span class="ctl"><input id="sp-${k}" ${numAttr("sp:" + (k === "r" ? "reserve" : k === "g" ? "glovo" : "wolt"), S.sp[k === "r" ? "reserve" : k === "g" ? "glovo" : "wolt"], !!err, label)}>${err ? `<span class="err-msg" id="err-sp-${k === "r" ? "reserve" : k === "g" ? "glovo" : "wolt"}">${err}</span>` : ""}</span></div>`;
    return drawerShell("Channel split", `${P.drawer === "split-saved" ? savedAlert("Your channel split changes are now live.") : ""}<div class="body">${stHead(id)}
      <div class="gcard"><div class="gc-h"><b>Shared pool today</b><span class="sub">${p.poolUsed} of ${T} used · ${pct(p.poolUsed, T)}%</span></div><div role="img" aria-label="Pool usage">${[["Glovo", p.glovo, "#c2410c"], ["Wolt", p.wolt, "#1c7ed6"], ["Free for marketplaces", p.free, "#868e96"], ["Own channels", p.own, "#2f9e44"], ["Unused protected", p.unused, "#2f9e44"]].map(pr).join("")}</div></div>
      <div class="gcard"><div class="gc-h lim"><b>Limits</b></div>${lim("r", "Reserve for own channels (%)", e.r, false)}${lim("g", "Glovo", e.g, true)}${lim("w", "Wolt", e.w, true)}
        <div class="rel"><span class="sub">${p.unused ? p.unused + " orders unused" : "No unused orders"}</span><button class="btn outline" data-act="release" ${p.unused ? "" : "disabled"}>Release unused orders</button></div></div></div>`,
      `<footer class="actions"><button class="btn" data-act="close">${/-saved$/.test(P.drawer || "") ? "Close" : "Cancel"}</button><button class="btn filled" data-act="save-sp" ${dirty && valid ? "" : "disabled"}>Save changes</button></footer>`);
  }
  function bulkDrawer() {
    return drawerShell("Bulk upload FTE", `${S.bulk.saved ? saved : ""}<div class="body"><p style="margin-top:0;color:var(--dimmed)">Upload a CSV with store and FTE columns. The file is not parsed in this prototype.</p>
      <div class="field"><label for="bulk-f">File</label><input id="bulk-f" type="file" class="input" style="padding-top:5px" data-k="bulk:file" accept=".csv,.xlsx"></div>
      ${S.bulk.name ? `<div class="kv"><span>Selected file</span><b>${S.bulk.name}</b></div>` : ""}</div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-bulk" ${S.bulk.name && !S.bulk.saved ? "" : "disabled"}>Save changes</button></footer>`);
  }
  // timeslot drawer (any store, any slot)
  // "FTE for this hour" card (Figma R2 timeslot drawer): editable FTE for this slot; capacity = FTE x 40 orders.
  const OPF = 40;
  const slotShift = r => { const h = parseInt(String(r).slice(0, 2), 10); return h < 12 ? ["Shift A", "08:00 – 12:00"] : h < 16 ? ["Shift B", "12:00 – 16:00"] : ["Shift C", "16:00 – 20:00"]; };
  const slotKey = P => `${P.id}:${S.day}:${S.service}:${P.slot}`;
  const slotFooter = (P, s) => { const d = S.sfd[slotKey(P)], n = d === undefined ? NaN : parseFloat(String(d).replace(",", ".")), ok = !isNaN(n) && n >= 0 && n <= 8 && Math.abs(n - s.cap / OPF) > 1e-9;
    return `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-slot" ${ok ? "" : "disabled"}>Save changes</button></footer>`; };
  const fteCard = (P, s) => {
    const key = `${P.id}:${S.day}:${S.service}:${P.slot}`, raw = S.sfd[key] !== undefined ? S.sfd[key] : (s.cap / OPF).toFixed(1), n = parseFloat(String(raw).replace(",", ".")), bad = isNaN(n) || n < 0 || n > 8, [sh, sr] = slotShift(s.r);
    return `<h6 class="fte-title">FTE for this slot</h6><div class="ts-card fte-card"><div class="fte-line"><input class="input num ${bad ? "err" : ""}" data-k="sf:${key}" data-step=".5" inputmode="decimal" value="${raw}" aria-label="FTE for this slot" ${bad ? 'aria-invalid="true"' : ""}><span class="sub">${bad ? "Enter a value from 0 to 8" : `× ${OPF} orders per FTE = ${Math.round(n * OPF)} orders capacity`}</span></div><p class="sub fte-note">${sh} · ${sr} · changes this slot only</p></div>`;
  };
  function timeslotDrawer(P) {
    const m = buildModel(P.id), s = m.slots[Math.min(P.slot, m.slots.length - 1)], collect = m.collect;
    if (collect && S.tab === "Marketplace") S.tab = "Capacity";
    const R = D.rng(D.hash(P.id + "ts" + P.slot + S.day + S.service));
    const pc = pct(s.com, s.cap), pr = pct(s.res, s.cap), pa = Math.max(0, 100 - pc - pr), util = pct(s.com + s.res, s.cap);
    const tabs = [["Capacity", "Capacity"], ["Resources", "Resources"], ["Orders", `Orders (${s.com})`]].concat(collect ? [] : [["Marketplace", "Marketplace"]]);
    const intT = total(s.internal), mkT = total(s.market), tot = Math.max(1, intT + mkT), ip = Math.round(intT / tot * 100), mp = collect || !mkT ? 0 : 100 - ip;
    const prepS = parseInt(String((m.kpis[1] || [])[1]), 10) || 29, itemsN = Math.round(s.com * 1.11), k = { workload: Math.round(itemsN * prepS / 60).toLocaleString("en-US") + " min", items: itemsN, prep: prepS + " s" };
    const group = (cls, color, label, o) => `<h6 class="ts-grp"><i style="background:${color}"></i>${label} (${total(o)})</h6>${Object.entries(o).map(([n, v]) => `<div class="ts-row"><span>${n}</span><b>${v}</b></div>`).join("") || '<div class="ts-row"><span>No orders</span><b>0</b></div>'}`;
    let body;
    if (S.tab === "Capacity") body = `<div class="ts-top"><div class="ts-ring"><b>${util}%</b><span>Utilization</span></div>
        <div class="ts-leg">${[["#005555", "Committed", s.com, pc + "%"], ["#6a9f9f", "Reserved", s.res, pr + "%"], ["#2f9e44", "Available", s.av, pa + "%"], ["#868e96", "Total capacity", s.cap, ""]].map(([c, l, v, p]) => l === "Total capacity" ? `<div><i style="background:${c}"></i><span>${l} <em class="buf">Includes 10% buffer</em></span><b style="grid-column:3/5;text-align:right">${v} orders</b></div>` : `<div><i style="background:${c}"></i><span>${l}</span><b>${v} orders</b><em>${p}</em></div>`).join("")}</div></div>
      <div class="ts-stats"><div><span>Picking workload</span><b>${k.workload}</b></div><div><span>Items</span><b>${k.items}</b></div><div><span>Avg. prep time / item</span><b>${k.prep}</b></div></div>
      <div class="ts-card"><h6>Committed by order type</h6><div class="ts-split" role="img" aria-label="Internal ${collect ? 100 : ip} percent"><span style="width:${collect ? 100 : ip}%;background:#005555">${collect ? 100 : ip}%</span>${mp ? `<span style="width:${mp}%;background:#c2410c">${mp}%</span>` : ""}</div>
        ${group("", "#005555", collect ? "Collect orders" : "Internal orders", s.internal)}${collect ? "" : group("", "#c2410c", "Marketplace orders", s.market)}</div>
      ${fteCard(P, s)}`;
    else if (S.tab === "Resources") {
      const need = Math.max(1, Math.ceil(s.com / OPF)), fteS = s.cap / OPF, sched = m.kind === "unirii" ? Math.max(0, Math.min(8, Math.round(need * (.85 + R() * .4)))) : fteS, short = Math.max(0, Math.ceil(need - sched));
      const roles = ["Picker", "Picker", "Packer", "Shift lead"], ppl = Array.from({ length: Math.round(sched) }, (_, i) => ({ n: NAMES[(D.hash(P.id) + i * 3) % NAMES.length], role: roles[i % 4], load: Math.round(55 + R() * 45) }));
      body = `<div class="ts-stats"><div><span>On shift</span><b>${Number.isInteger(sched) ? sched : sched.toFixed(1)}</b></div><div><span>Needed</span><b>${need}</b></div><div><span>Orders / picker</span><b>${sched ? (s.com / sched).toFixed(1) : "—"}</b></div></div>
        ${short ? `<div class="alert-box red" style="margin:0 0 12px" role="status"><span>Short by ${short} ${short === 1 ? "picker" : "pickers"} for this slot</span></div>` : ""}
        <div class="ts-card"><h6>Team on this slot</h6>${ppl.map(p => `<div class="ts-row" style="align-items:center;gap:12px"><span style="flex:1">${p.n}<span class="sub">${p.role}</span></span><span style="width:110px">${bar(p.load)}</span><b style="width:40px;text-align:right">${p.load}%</b></div>`).join("") || '<div class="ts-row"><span>No pickers scheduled</span></div>'}</div>`;
    } else if (S.tab === "Orders") {
      const chans = Object.entries(Object.assign({}, s.internal, s.market)).flatMap(([c, n]) => Array(n).fill(c)), n = Math.min(12, chans.length);
      const states = collect ? ["Ready for pickup", "Picking", "Waiting"] : ["Handed over", "Ready", "Picking", "Waiting"];
      const rows = Array.from({ length: n }, (_, i) => ({ id: 61000 + (D.hash(P.id + "o" + i) % 9000), ch: chans[Math.floor(i * chans.length / Math.max(1, n))], it: 4 + Math.floor(R() * 28), st: states[Math.min(states.length - 1, Math.floor(i * states.length / Math.max(1, n)))] }));
      body = `<div class="ts-card"><h6>Orders in this slot</h6>${rows.map(r => `<div class="ts-row" style="align-items:center"><span>#${r.id}<span class="sub">${r.ch} · ${r.it} items</span></span>${stBadge(r.st === "Ready for pickup" ? "Ready" : r.st)}</div>`).join("") || '<div class="ts-row"><span>No orders yet</span></div>'}${chans.length > n ? `<div class="ts-row"><span class="sub">Showing ${n} of ${chans.length}</span></div>` : ""}</div>`;
    } else {
      body = `<div class="ts-card"><h6>Marketplace limits</h6>${Object.keys(MK_W).map(c => { const u = s.market[c] || 0, lim = Math.max(u, Math.max(2, Math.round(s.cap * MK_W[c] * .5))), p = pct(u, lim); return `<div class="ts-row" style="align-items:center;gap:12px"><span style="width:84px">${c}</span><span style="flex:1">${bar(p)}</span><b style="width:64px;text-align:right">${u} / ${lim}</b>${p >= 85 ? `<span class="badge b-orange">Near limit</span>` : `<span class="badge b-green">Open</span>`}</div>`; }).join("")}</div>`;
    }
    return drawerShell("Timeslot details: " + range(s.r), `<div class="body"><div class="tabs" role="tablist">${tabs.map(([t, l]) => `<button role="tab" aria-selected="${S.tab === t}" data-act="tab" data-t="${t}">${l}</button>`).join("")}</div>${body}</div>`, slotFooter(P, s), "Timeslot details");
  }

  // ---------- sign in ----------
  function signin() {
    const tick = svg('<path d="m5 12 5 5 9-10"/>', 14, 2.5);
    return `<div class="signin"><aside class="si-left"><div class="si-logo">${logo(51, "on-dark")}</div>
      <div class="si-copy"><h1>Plan every timeslot with confidence.</h1><p>Capacity, couriers and demand for your store — in one place.</p><ul>${["See free slots per timeslot and day", "Match couriers to forecast demand", "Fix full slots before customers notice"].map(t => `<li><span class="si-tick">${tick}</span>${t}</li>`).join("")}</ul></div></aside>
      <main class="si-right"><form class="card si-card" data-act-submit="signin"><div class="si-brand">${logo(28, "on-light")}</div><h2>Sign in</h2><p class="si-sub">Capacity, couriers and demand for your store — in one place.</p>
      <div class="field"><label for="em">Email</label><input id="em" class="input md" type="email" autocomplete="username" value="manager.store@stoa.io"></div>
      <div class="field"><label for="pw">Password</label><span class="pw"><input id="pw" class="input md" type="password" autocomplete="current-password" value="password">${"" }<span class="eye" aria-hidden="true">${svg('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>', 16)}</span></span></div>
      <div class="si-row"><label class="chk"><input type="checkbox" checked><span class="box">${tick}</span>Remember me</label><button type="button" class="link" data-act="forgot">Forgot password?</button></div>
      <button class="btn filled lg" type="submit">Sign in</button><p class="si-note">Need access? Ask your area manager to add you.</p></form></main></div>`;
  }

  // ---------- render ----------
  function drawerFor(P) {
    switch (P.drawer) {
      case "alerts": return alertsDrawer();
      case "thresholds": return thresholdsDrawer();
      case "restriction": return restrictDrawer();
      case "fte": case "fte-error": case "fte-saved": return fteDrawer(P);
      case "split": case "split-error": case "split-saved": return splitDrawer(P);
      case "timeslot": return timeslotDrawer(P);
      case "bulk": return bulkDrawer();
    }
    return "";
  }
  function pageFor(P) {
    if (P.page === "signin") return signin();
    if (P.page === "store") return storeDetail(P);
    if (P.page === "orders") return ordersPage();
    if (P.page === "picking") return pickingPage();
    if (P.page === "couriers") return couriersPage();
    return allStores(P);
  }
  function protoSwitcher() {
    return `<div class="proto"><button data-act="proto" aria-expanded="${S.protoOpen}">Screens</button>${S.protoOpen ? `<div class="list">${ROUTES.map(([g, l]) => `<h6>${g}</h6>${l.map(([k, n]) => `<a href="#/${k}" ${k === route() ? 'aria-current="page" style="font-weight:700"' : ""}>${n}</a>`).join("")}`).join("")}</div>` : ""}</div>`;
  }
  let triggerEl = null, trigKey = null;
  function render() {
    let r = route(), P = parse(r);
    if (!P) { r = "r19/default"; history.replaceState(null, "", "#/" + r); P = parse(r); }
    curP = P; enter(P);
    const dr = drawerFor(P);
    $app.innerHTML = pageFor(P) + `<div id="drawer-root">${dr}</div>` + protoSwitcher();
    if (dr) { const d = $app.querySelector(".drawer"), c = d; if (c && !(document.activeElement.closest && document.activeElement.closest(".drawer"))) c.focus(); }
    else if (triggerEl && document.contains(triggerEl)) { try { triggerEl.focus(); } catch (e) {} }
    else if (trigKey && !document.activeElement.closest(".menu")) { const c = [...$app.querySelectorAll("[data-act='" + trigKey.act + "']")].find(e => e.textContent.trim() === trigKey.text && (e.dataset.id || "") === trigKey.id && (e.dataset.n || "") === trigKey.n); if (c) { try { c.focus(); } catch (e) {} } trigKey = null; }
    document.body.style.overflow = dr ? "hidden" : "";
  }
  function renderDrawer() {
    const a = document.activeElement, k = a && a.dataset && a.dataset.k, pos = a && a.selectionStart;
    const root = document.getElementById("drawer-root"); if (!root || !curP) return;
    root.innerHTML = drawerFor(curP);
    if (k) { const n = root.querySelector(`[data-k="${k}"]`); if (n) { n.focus(); try { n.setSelectionRange(pos, pos); } catch (e) {} } }
  }
  const resetErrRoute = (from, to) => { if (route() === from) { history.replaceState(null, "", "#/" + to); lastRoute = to; curP = parse(to); } };

  // ---------- events ----------
  function alertAction(a, id) {
    const P = curP;
    if (a === "Reopen") {
      if (id >= 0 && ALL[id] && !ALL[id].cap) { const st = ALL[id]; Object.assign(st, { status: "OPEN", fte: 2, used: 0, cap: 400, vs: Math.round((st.forecast / 400 - 1) * 100), prod: 70, rev: "0k" }); D.alerts = D.alerts.filter(x => x.s.split(" · ")[0] !== st.name || !/^Closed/.test(x.t)); toast(st.name + " reopened"); render(); }
      else toast("Store reopened");
      return;
    }
    if (a === "Manage") { go("r21/restriction"); return; }
    if (id < 0 || isNaN(id)) { toast("Store not found"); return; }
    if (a === "Set FTE") { S.fteStoreId = id; go(P.page === "store" && P.id === id && id !== 2 && id !== 9 ? `store/${id}/fte` : P.page === "store" ? `store/${id}/fte` : "r6/panel"); return; }
    go(storeRoute(id, "expanded"));
  }
  document.addEventListener("click", ev => {
    const t = ev.target.closest("[data-act]"), col = ev.target.closest(".col");
    if (!t && !ev.target.closest(".menu-pop") && S.menuPop) { S.menuPop = false; render(); return; }
    if (col && !t) { showTip(col); return; }
    if (!t) { if (!ev.target.closest(".proto") && S.protoOpen) { S.protoOpen = false; render(); } return; }
    const a = t.dataset.act; triggerEl = t; if (!t.closest(".drawer")) trigKey = { act: a, text: t.textContent.trim(), id: t.dataset.id || "", n: t.dataset.n || "" };
    const r = route(), P = curP;
    switch (a) {
      case "noop": break;
      case "nav": go(t.dataset.to); break;
      case "signout": go("r24/signin"); break;
      case "forgot": toast("Password reset is not part of this prototype"); break;
      case "menu-open": S.mobileMenu = true; render(); document.querySelector(".menu .menu-toggle")?.focus(); break;
      case "menu-close": S.mobileMenu = false; render(); document.querySelector("[data-act=menu-open]")?.focus(); break;
      case "menu-toggle":
        if (matchMedia("(max-width: 900px)").matches) S.mobileMenu = false; else { S.menuCollapsed = !S.menuCollapsed; lsSet("stoa.menu", S.menuCollapsed ? "collapsed" : "expanded"); }
        render(); { const b = document.querySelector(".menu-toggle"); if (b) b.focus(); } break;
      case "proto": S.protoOpen = !S.protoOpen; render(); break;
      case "att-toggle":
        if (P.page === "all") { const m = { default: "collapsed", collapsed: "default", one: "one-collapsed", "one-collapsed": "one", zero: "zero" }; go("r19/" + m[P.key]); }
        else { S.attOpenStore = !S.attOpenStore; render(); }
        break;
      case "alerts": go("r19/alerts-drawer"); break;
      case "thresholds": go("r20/thresholds"); break;
      case "restrict": go("r21/restriction"); break;
      case "menu-pop": S.menuPop = !S.menuPop; render(); break;
      case "bulk": S.menuPop = false; go("r19/bulk-upload"); break;
      case "export": S.menuPop = false; exportCsv(); render(); break;
      case "page": S.page = +t.dataset.n; render(); break;
      case "store": go(storeRoute(+t.dataset.id, "collapsed")); break;
      case "fte": S.fteStoreId = +t.dataset.id; go("r6/panel"); break;
      case "alert": alertAction(t.dataset.a, +t.dataset.id); break;
      case "ofilter": S.ordFilter = t.dataset.k; render(); break;
      case "svc": S.service = t.dataset.v; render(); break;
      case "chart-toggle": go(storeRoute(P.id, (P.chart || S.chart) === "expanded" ? "collapsed" : "expanded")); break;
      case "row": { const i = +t.dataset.i; S.expanded.has(i) ? S.expanded.delete(i) : S.expanded.add(i); render(); break; }
      case "timeslot": go(slotRoute(P.id, +t.dataset.i)); break;
      case "split": go(splitRoute(P.id)); break;
      case "tab": S.tab = t.dataset.t; renderDrawer(); break;
      case "afilter": S.alertFilter = t.dataset.k; renderDrawer(); break;
      case "close": go(closeTarget(P)); break;
      case "rs-toggle": S.rsOn = !S.rsOn; renderDrawer(); break;
      case "resume-now": S.resumed = true; renderDrawer(); break;
      case "shift": S.shiftOpen[t.dataset.s] = !S.shiftOpen[t.dataset.s]; render(); break;
      case "save-table": S.tdirty = false; toast("Changes saved"); render(); break;
      case "save-th": S.thBase = JSON.stringify([S.th, S.thp]); renderDrawer(); break;
      case "save-rs": S.rsBase = JSON.stringify([S.rsOn, S.rsResume]); renderDrawer(); break;
      case "save-fte": S.fteBase = JSON.stringify(S.fte); S.fteSaved[S.fteStoreId] = S.fte.map(numOf); ALL[S.fteStoreId].fte = numOf(S.fte[0]); S.keepSave = true; go(P.page === "store" ? `store/${P.id}/fte-saved` : "r6/panel-saved"); break;
      case "save-sp": S.spBase = JSON.stringify(S.sp); S.spSaved[P.id] = Object.assign({}, S.sp); S.keepSave = true; go(splitRoute(P.id, "-saved")); break;
      case "save-bulk": S.bulk.saved = true; renderDrawer(); break;
      case "save-slot": { const k = slotKey(P), v = S.sfd[k]; if (v !== undefined) { S.sf[k] = v; delete S.sfd[k]; } toast("Changes saved"); go(closeTarget(curP)); break; }
      case "sgrp": S.so[t.dataset.s] = S.so[t.dataset.s] === false; render(); break;
      case "sort": { const tb = t.dataset.t, k = t.dataset.k, c = S.sort[tb]; S.sort[tb] = !c || c.k !== k ? { k, dir: "asc" } : c.dir === "asc" ? { k, dir: "desc" } : null; if (tb === "stores") S.page = 1; render(); break; }
      case "release": S.released[P.id] = true; renderDrawer(); toast("Unused orders released"); break;
      case "copy-all": S.fte = S.fte.map(() => S.fte[0]); renderDrawer(); break;
      case "copy-week": S.fte = S.fte.map((v, i) => i < 5 ? S.fte[0] : v); renderDrawer(); break;
    }
  });
  // Store combobox behaviour
  (() => {
    let act = 0;
    const parts = el => { const c = el.closest("[data-combo]"); return c && { c, inp: c.querySelector("input"), ul: c.querySelector("ul") }; };
    const open = (p, q) => { act = 0; p.ul.innerHTML = storeLis(q, 0); p.ul.hidden = false; p.inp.setAttribute("aria-expanded", "true"); };
    const close = p => { p.ul.hidden = true; p.inp.setAttribute("aria-expanded", "false"); p.inp.removeAttribute("aria-activedescendant"); p.inp.value = ALL[+p.c.dataset.combo].name; };
    const pick = (p, val) => { if (val === undefined) return; if (val === "__all") go("r19/default"); else go(storeRoute(+val, (curP && curP.chart) || S.chart)); };
    const mark = p => { p.ul.querySelectorAll("li[role=option]").forEach((li, i) => { li.classList.toggle("act", i === act); li.setAttribute("aria-selected", i === act); if (i === act) { p.inp.setAttribute("aria-activedescendant", li.id); li.scrollIntoView({ block: "nearest" }); } }); };
    document.addEventListener("focusin", ev => { if (!ev.target.classList || !ev.target.classList.contains("combo-in")) return; const p = parts(ev.target); ev.target.select(); open(p, ""); });
    document.addEventListener("input", ev => { if (!ev.target.classList || !ev.target.classList.contains("combo-in")) return; const p = parts(ev.target); open(p, ev.target.value); });
    document.addEventListener("mousedown", ev => { const li = ev.target.closest && ev.target.closest("#store-list li[data-val]"); if (li) { ev.preventDefault(); pick(parts(li), li.dataset.val); } });
    document.addEventListener("focusout", ev => { if (ev.target.classList && ev.target.classList.contains("combo-in")) close(parts(ev.target)); });
    document.addEventListener("keydown", ev => {
      if (!ev.target.classList || !ev.target.classList.contains("combo-in")) return; const p = parts(ev.target); const n = p.ul.querySelectorAll("li[data-val]").length;
      if (ev.key === "ArrowDown") { ev.preventDefault(); if (p.ul.hidden) open(p, ""); else { act = Math.min(n - 1, act + 1); mark(p); } }
      else if (ev.key === "ArrowUp") { ev.preventDefault(); act = Math.max(0, act - 1); mark(p); }
      else if (ev.key === "Enter") { ev.preventDefault(); const li = p.ul.querySelectorAll("li[data-val]")[act]; if (li) pick(p, li.dataset.val); }
      else if (ev.key === "Escape") { ev.stopPropagation(); close(p); p.inp.blur(); }
    }, true);
  })();
  // Number steppers: the chevrons in .input.num are a background icon; make them work (click top half = +1, bottom half = -1, ArrowUp/Down too).
  const stepNum = (el, dir) => {
    const min = el.min !== "" ? +el.min : -Infinity, max = el.max !== "" ? +el.max : Infinity;
    const cur = parseFloat(String(el.value).replace(",", ".")); const base = isNaN(cur) ? 0 : cur;
    const stp = +el.dataset.step || 1, nv = Math.round(Math.min(max, Math.max(min, base + dir * stp)) * 100) / 100;
    el.value = String(nv);
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  };
  const inStepZone = (el, ev) => { const r = el.getBoundingClientRect(); return ev.clientX >= r.right - 28 && ev.clientX <= r.right; };
  document.addEventListener("mousedown", ev => {
    const el = ev.target; if (!el.classList || !el.classList.contains("num") || el.disabled || !inStepZone(el, ev)) return;
    ev.preventDefault();
    const r = el.getBoundingClientRect(); const dir = ev.clientY < r.top + r.height / 2 ? 1 : -1;
    const k = el.dataset.k; stepNum(el, dir);
    const n = k && document.querySelector(`[data-k="${k}"]`); if (n) n.focus();
  });
  document.addEventListener("mousemove", ev => {
    const el = ev.target; if (el.classList && el.classList.contains("num")) el.style.cursor = inStepZone(el, ev) ? "pointer" : "";
  });
  document.addEventListener("keydown", ev => {
    const el = ev.target; if (!el.classList || !el.classList.contains("num") || (ev.key !== "ArrowUp" && ev.key !== "ArrowDown")) return;
    ev.preventDefault(); const k = el.dataset.k; stepNum(el, ev.key === "ArrowUp" ? 1 : -1);
    const n = k && document.querySelector(`[data-k="${k}"]`); if (n) n.focus();
  });
  document.addEventListener("input", ev => {
    const k = ev.target.dataset && ev.target.dataset.k; if (!k) return;
    const v = ev.target.value;
    if (k === "q") { S.q = v; S.page = 1; render(); const n = $app.querySelector('[data-k="q"]'); n.focus(); n.setSelectionRange(v.length, v.length); return; }
    if (k.startsWith("th:")) S.th[+k.slice(3)] = v;
    else if (k === "rs:resume") S.rsResume = v;
    else if (k.startsWith("sp:")) { S.sp[k.slice(3)] = v; if (/split-(saved|error)$/.test(route())) resetErrRoute(route(), route().replace(/-(saved|error)$/, "")); }
    else if (k.startsWith("sf:")) S.sfd[k.slice(3)] = v;
    else if (k.startsWith("fte:")) { S.fte[+k.slice(4)] = v; if (/(panel|fte)-(saved|error)$/.test(route())) resetErrRoute(route(), route().replace(/-(saved|error)$/, "").replace(/panel$/, "panel")); }
    else return;
    renderDrawer();
  });
  document.addEventListener("change", ev => {
    const k = ev.target.dataset && ev.target.dataset.k; if (!k) return;
    const v = ev.target.value, P = curP;
    if (k === "bulk:file") { S.bulk.name = ev.target.files[0] ? ev.target.files[0].name : ""; S.bulk.saved = false; renderDrawer(); }
    else if (k.startsWith("thp:")) { S.thp[+k.slice(4)] = v; renderDrawer(); }
    else if (k.startsWith("pk:")) { S.pk[+k.slice(3)] = v; S.tdirty = true; render(); }
    else if (k.startsWith("dl:")) { S.dlv[+k.slice(3)] = v; S.tdirty = true; render(); }
    else if (k === "region") { S.region = v; S.page = 1; render(); }
    else if (k === "type") { S.type = v; S.page = 1; render(); }
    else if (k === "service") { S.service = v; render(); }
    else if (k === "per") { S.per = +v; S.page = 1; render(); }
    else if (k === "store") { if (v === "__all") go("r19/default"); else go(storeRoute(+v, P.chart || S.chart)); }
    else if (k === "period") { S.day = +v; if (route() === "r7/other-days" && S.day === 0) go("r2/collapsed"); else render(); }
  });
  document.addEventListener("submit", ev => { if (ev.target.dataset.actSubmit === "signin") {
      ev.preventDefault(); const f = ev.target, em = f.querySelector("#em"), pw = f.querySelector("#pw"); let bad = null;
      f.querySelectorAll(".si-err").forEach(n => n.remove());
      [[em, "Enter your email", !/^\S+@\S+\.\S+$/.test(em.value.trim())], [pw, "Enter your password", !pw.value]].forEach(([inp, msg, isBad]) => {
        inp.classList.toggle("err", isBad); inp.toggleAttribute("aria-invalid", isBad);
        if (isBad) { const sp = document.createElement("span"); sp.className = "err-msg si-err"; sp.id = "err-" + inp.id; sp.textContent = msg; inp.setAttribute("aria-describedby", sp.id); (inp.closest(".pw") || inp).after(sp); bad = bad || inp; }
      });
      if (bad) { bad.focus(); return; }
      go("r19/default");
    } });
  document.addEventListener("keydown", ev => {
    if (ev.key === "Escape") {
      if (S.mobileMenu) { S.mobileMenu = false; render(); document.querySelector("[data-act=menu-open]")?.focus(); return; }
      if (S.menuPop || S.protoOpen) { S.menuPop = S.protoOpen = false; render(); return; }
      $tip.style.display = "none";
      if (document.querySelector(".drawer")) go(closeTarget(curP));
    }
    if (ev.key === "Tab") {
      const d = document.querySelector(".drawer"); if (!d) return;
      const f = [...d.querySelectorAll("button:not([disabled]),input:not([disabled]),select,[tabindex]")].filter(x => x.offsetParent !== null);
      if (!f.length) return; const first = f[0], last = f[f.length - 1];
      if (!d.contains(document.activeElement)) { first.focus(); ev.preventDefault(); }
      else if (ev.shiftKey && document.activeElement === first) { last.focus(); ev.preventDefault(); }
      else if (!ev.shiftKey && document.activeElement === last) { first.focus(); ev.preventDefault(); }
    }
    if ((ev.key === "Enter" || ev.key === " ") && ev.target.classList && ev.target.classList.contains("col")) { ev.preventDefault(); showTip(ev.target); }
  });
  // tooltip: hover (desktop), tap (mobile), focus
  function showTip(col) {
    const i = +col.dataset.i, s = curSlots[i]; if (!s) return;
    S.hl = i; document.querySelectorAll(".col").forEach(c => c.classList.toggle("hl", +c.dataset.i === i));
    $tip.innerHTML = `<div><span><span class="sw" style="background:var(--brand)"></span>Capacity</span><b>${s.cap}</b></div><div><span><span class="sw" style="background:var(--forecast)"></span>Forecast</span><b>${s.fc}</b></div>`;
    const b = col.getBoundingClientRect();
    $tip.style.display = "block"; $tip.style.left = b.left + b.width / 2 + "px"; $tip.style.top = b.top + 6 + "px";
  }
  document.addEventListener("mouseover", ev => { const c = ev.target.closest(".col"); if (c && matchMedia("(hover:hover)").matches) showTip(c); });
  document.addEventListener("mouseout", ev => { const c = ev.target.closest(".col"); if (c && !c.contains(ev.relatedTarget)) { $tip.style.display = "none"; S.hl = -1; c.classList.remove("hl"); } });
  document.addEventListener("focusin", ev => { const c = ev.target.closest && ev.target.closest(".col"); if (c) showTip(c); });
  document.addEventListener("focusout", ev => { if (ev.target.classList && ev.target.classList.contains("col")) { $tip.style.display = "none"; ev.target.classList.remove("hl"); } });

  window.addEventListener("hashchange", () => { $tip.style.display = "none"; S.hl = -1; render(); });
  render();
})();
