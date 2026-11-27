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

  const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

  // ---------- routes (one per Figma screen on "Stoa - Draft 4 11.26.2026", plus a few extra states) ----------
  const ROUTES = [
    ["Notifications (R19–R20)", [["r19/default", "R19 · All stores · 13 notifications (default)"], ["r19/one", "R19 · All stores · 1 notification"], ["r19/zero", "R19 · All stores · 0 notifications"], ["r19/collapsed", "R19 · All stores · 13 notifications · collapsed"], ["r19/one-collapsed", "R19 · All stores · 1 notification · collapsed"], ["r19/alerts-drawer", "R19–R20 · Notifications drawer over All stores"], ["r20/thresholds", "R20 · Notification thresholds · settings"]]],
    ["Same-day control and settings (R6–R7, R55)", [["r6/main", "R6–R7 · Main · FTE column with 7-day sparkline (panel closed)"], ["r55/account-settings", "R55 · Account settings panel"]]],
    ["Store detail (R2, R6–R7)", [["r2/collapsed", "R2 · Committed breakdown"], ["r2/timeslot", "R2 · Time slot details drawer"], ["r2/expanded", "R2 · Capacity vs. forecast · expanded"], ["r2/closed", "R2 · Closed store"], ["r6/set-fte", "R6–R7 · Set FTE for a shift (opened from Store detail)"], ["r6/set-fte-error", "R6–R7 · Set FTE for a shift · error"], ["r6/set-fte-saved", "R6–R7 · Set FTE for a shift · saved"]]],
    ["Design options (R39, R40)", [["r39/option4", "R39 · Option 4 status column"], ["r39/option2", "R39 · Option 2 header chips"], ["r39/option5", "R39 · Option 5 slim banner"], ["r40/a", "R40 · Variant A"], ["r40/b", "R40 · Variant B"]]],
    ["Access and roles (R24–R25)", [["r24/signin", "R24–R25 · Desktop · Sign in"], ["r24/signin-mobile", "R24–R25 · Mobile · Sign in"]]],
    ["Extra states and placeholders (no Figma frame)", [["r2/store-settings", "Store settings panel (store detail)"], ["r21/restriction", "Order restriction"], ["store/12/collapsed", "Generated store (placeholder data)"], ["orders", "Orders"], ["picking", "In-store picking"], ["couriers", "Couriers"]]]
  ];
  const EMBED = /[?&]embed\b/.test(location.search);

  const S = {
    mobileMenu: false, protoOpen: false, menuCollapsed: lsGet("stoa.menu") === "collapsed",
    q: "", service: "All", page: 1, per: 10, mkOnly: false, attOpenStore: true, alertFilter: "all", ordFilter: "All",
    so: {}, sort: { k: null, d: null }, day: 0, chart: "collapsed", curId: 2, tab: "Capacity", stack: [], hl: -1, reopened: {},
    app: { prot: String(D.account.protect), th: D.thresholds.map(t => String(t[1])), thp: D.thresholds.map(t => t[3]), shw: D.thresholds.map(t => t[5]), touched: false },
    st: null, setBase: null, storeSet: {}, ss: null, ssBase: null,
    rsOn: true, rsResume: "20", rsBase: null, resumed: false,
    cf: null, fteSaved: {}, shiftOv: {}, fte: null, fteBase: null, fteKey: null, keepSave: false
  };
  S.rsBase = JSON.stringify([S.rsOn, S.rsResume]);

  // ---------- route parsing ----------
  const route = () => { const r = (location.hash || "").replace(/^#\/?/, ""); return r || "r19/default"; };
  const go = r => { location.hash = "#/" + r; };
  function parse(r) {
    const P = { r, page: "all", key: "default", id: null, chart: null, drawer: null, slot: null, shift: 0, fstate: "", variant: null, pin: false };
    let m;
    if (r === "orders" || r === "picking" || r === "couriers") return Object.assign(P, { page: r });
    if (r === "r24/signin") return Object.assign(P, { page: "signin" });
    if (r === "r24/signin-mobile") return Object.assign(P, { page: "signin-mobile" });
    if (/^r19\/(default|collapsed|one|one-collapsed|zero)$/.test(r)) return Object.assign(P, { key: r.slice(4) });
    const allD = { "r19/alerts-drawer": "alerts", "r20/thresholds": "notif", "r55/account-settings": "account", "r21/restriction": "restriction", "r6/main": null };
    if (r in allD) return Object.assign(P, { drawer: allD[r] });
    const vr = { "r39/option2": "o2", "r39/option4": "o4", "r39/option5": "o5" };
    if (r in vr) return Object.assign(P, { variant: vr[r] });
    if (r === "r40/a" || r === "r40/b") return Object.assign(P, { page: "store", id: 2, chart: "expanded", variant: r.slice(4), pin: true });
    if (r === "r2/collapsed" || r === "r2/expanded") return Object.assign(P, { page: "store", id: 2, chart: r.slice(3), pin: r === "r2/expanded" });
    if (r === "r2/timeslot") return Object.assign(P, { page: "store", id: 2, chart: "collapsed", drawer: "timeslot", slot: 4 });
    if (r === "r2/closed") return Object.assign(P, { page: "store", id: 1, chart: "collapsed" });
    if (r === "r2/store-settings") return Object.assign(P, { page: "store", id: 2, drawer: "store" });
    if ((m = r.match(/^r6\/set-fte(-error|-saved)?$/))) return Object.assign(P, { page: "store", id: 2, chart: "collapsed", drawer: "fte", shift: 0, fstate: m[1] ? m[1].slice(1) : "" });
    if ((m = r.match(/^store\/(\d+)\/(collapsed|expanded|settings|timeslot\/(\d+)|set-fte\/([01])(-error|-saved)?)$/)) && +m[1] < ALL.length) {
      const o = { page: "store", id: +m[1] };
      if (m[2] === "collapsed" || m[2] === "expanded") o.chart = m[2];
      else if (m[2] === "settings") o.drawer = "store";
      else if (m[3] !== undefined) { o.drawer = "timeslot"; o.slot = +m[3]; }
      else { o.drawer = "fte"; o.shift = +m[4]; o.fstate = m[5] ? m[5].slice(1) : ""; }
      return Object.assign(P, o);
    }
    return null;
  }
  const storeRoute = (id, chart) => { chart = chart || "collapsed"; return id === 2 ? "r2/" + chart : id === 1 && chart === "collapsed" ? "r2/closed" : `store/${id}/${chart}`; };
  const fteRoute = (id, sh, st) => (id === 2 && sh === 0 ? "r6/set-fte" : `store/${id}/set-fte/${sh}`) + (st ? "-" + st : "");
  const slotRoute = (id, i) => id === 2 && i === 4 ? "r2/timeslot" : `store/${id}/timeslot/${i}`;
  const settingsRoute = id => id === 2 ? "r2/store-settings" : `store/${id}/settings`;
  const closeTarget = P => S.stack.length ? S.stack.pop() : P && P.page === "store" ? storeRoute(P.id, P.chart || S.chart) : "r19/default";

  // ---------- model helpers ----------
  const DAYF = [1, .96, 1.04, .93, 1.08, 1.15, .82];
  const HOURS = ["08:00–09:00", "09:00–10:00", "10:00–11:00", "11:00–12:00", "12:00–13:00", "13:00–14:00"];
  const SHAPE = [1.05, .95, .8, .95, .95, 1.1];
  const SHIFTS = [{ n: "Shift A", r: "08:00 – 12:00", ch: "08:00–12:00", from: 0, to: 4 }, { n: "Shift B", r: "12:00 – 16:00", ch: "12:00–16:00", from: 4, to: 6 }];
  const IN_W = { "Same day": .6, "Fast delivery": .25, "Next day": .15 };
  const MK_W = { Wolt: .6, Bolt: .2, Glovo: .2 };
  const PERIODS = ["Today (Thu 26 Nov)", "Tomorrow (Fri 27 Nov)", ...D.days.slice(2)];
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const signed = n => (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n);
  const range = r => r.replace("–", " – ");
  const codeOf = s => "S" + String(s.id + 1).padStart(3, "0");
  const sum = (a, k) => a.reduce((x, y) => x + (y[k] || 0), 0);
  const total = o => Object.values(o).reduce((a, b) => a + b, 0);
  const snap = v => Math.round(v * 2) / 2;
  const f1 = v => v === 0 ? "0" : Number(v).toFixed(1);

  // Marketplace rule: ONE own-channel protection threshold per account (default 20%). A time slot is Closed for marketplaces
  // when its capacity use is above 100% minus the threshold (above 80% for 20%), even if it is not full. Closed stores are Closed in every slot.
  const prot = () => +S.app.prot;
  const mkLimit = () => 100 - prot();
  const slotClosed = s => !s.cap || (s.cap - s.av) / s.cap * 100 > mkLimit();
  // All stores: N = number of the store's own slots (Delivery, today) whose use is above 100% - threshold, so the badge and the store page agree.
  // The Figma fixtures get slot capacities/use chosen so that the rule gives the counts shown in Figma (FIXN, 6 slots per day).
  const slotCache = {};
  const baseSlots = st => { const k = [st.id, st.cap, st.used, st.forecast, st.vs].join("|"); return slotCache[k] || (slotCache[k] = st.id === 2 ? D.timisoara.slots : genSlots(st, 0, false, D.rng(D.hash(st.id + "|0|All")))); };
  const closedN = st => {
    if (!st.cap) return "all";
    const sl = baseSlots(st), n = sl.filter(slotClosed).length; return n === sl.length ? "all" : n;
  };
  const tightest = st => Math.max(0, ...baseSlots(st).filter(x => x.cap).map(x => pct(x.cap - x.av, x.cap)));
  const mkBadge = st => {
    const n = closedN(st), tipC = `Protection threshold ${prot()}%. Closes marketplaces above ${mkLimit()}% full. Change in Settings`;
    if (n === "all") return `<span class="badge sm b-red" title="${tipC}">Closed for all slots</span>`;
    if (n) return `<span class="badge sm b-orange" title="${tipC}">Closed for ${n} ${n === 1 ? "slot" : "slots"}</span>`;
    const tip = st.cap && pct(st.used, st.cap) > mkLimit() ? ` title="No slot above ${mkLimit()}% full. Tightest slot: ${tightest(st)}%"` : "";
    return `<span class="badge sm b-green"${tip}>Open</span>`;
  };
  // Threshold guardrail: how many Delivery slots (today, all stores) change state if the threshold moves from -> to, using the same rule as slotClosed.
  const closedAt = (s, th) => !s.cap || (s.cap - s.av) / s.cap * 100 > 100 - th;
  function thImpact(from, to) {
    let n = 0, m = 0;
    Object.values(ALL).forEach(st => { if (!st.cap) return; const sl = baseSlots(st), a = sl.filter(x => closedAt(x, from)).length, b = sl.filter(x => closedAt(x, to)).length; if (a !== b) { n += Math.abs(b - a); m++; } });
    return { n, m, close: to > from };
  }
  const plural = (n, w) => n + " " + w + (n === 1 ? "" : "s");
  const impactText = im => im.close ? `Would close ${plural(im.n, "more slot")} in ${plural(im.m, "store")}` : `Would reopen ${plural(im.n, "slot")} in ${plural(im.m, "store")}`;
  const RES_TIP = "Orders held for a customer but not yet confirmed. They count as used capacity.";
  const infoIc = `<button type="button" class="info" title="${RES_TIP}" aria-label="Reserved: ${RES_TIP}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg></button>`;
  const slowPrep = () => +S.app.th[2];
  const TYPE_IDX = { closed: 0, fte: 1, prod: 2, prepup: 3, fill: 4, fc: 5, idle: 6 };
  const akey = a => a.t + "|" + a.s;
  const activeAlerts = () => D.alerts.filter(a => (!S.app.touched || S.app.shw[TYPE_IDX[a.type]]));

  function alloc(tot, weights) {
    const sw = weights.reduce((a, b) => a + b, 0), raw = weights.map(w => w / sw * tot), base = raw.map(Math.floor); let rem = tot - base.reduce((a, b) => a + b, 0);
    raw.map((x, i) => [x - base[i], i]).sort((a, b) => b[0] - a[0]).forEach(([, i]) => { if (rem > 0) { base[i]++; rem--; } });
    return base;
  }
  function distribute(tot, weights, R) {
    const keys = Object.keys(weights), w = keys.map(k => weights[k] * (.8 + R() * .4)), base = alloc(tot, w);
    const out = {}; keys.forEach((k, i) => { if (base[i] > 0) out[k] = base[i]; }); return out;
  }
  // Internal delivery types are mutually exclusive per slot: Fast delivery = morning slot (starts before 12:00), Same day = afternoon slot,
  // Next day = any slot on tomorrow or later days.
  const internalType = (s, day) => day > 0 ? "Next day" : parseInt(s.r, 10) < 12 ? "Fast delivery" : "Same day";
  function breakdown(s, collect, R, day) {
    if (collect) { s.internal = s.com ? { Collect: s.com } : {}; s.market = {}; return; }
    const it = Math.round(s.com * (.5 + R() * .2));
    s.internal = it > 0 ? { [internalType(s, day)]: it } : {}; s.market = distribute(s.com - it, MK_W, R);
  }
  const FIXN = { 3: 3, 4: 4, 5: 3, 6: 0, 7: 3, 8: 0, 9: 2 }; // closed slots per Figma fixture (All stores badge)
  function genSlotsRaw(st, day, collect, R) {
    const f = collect ? .3 : 1, df = DAYF[day];
    if (!st.cap) { const fcs = alloc(Math.round(st.forecast * f * df), SHAPE); return HOURS.map((r, i) => ({ r, cap: 0, com: 0, res: 0, av: 0, fc: fcs[i] })); }
    const u = st.used / st.cap;
    return HOURS.map((r, i) => {
      const cap = Math.max(20, Math.round(st.cap * .85 * f * SHAPE[i] / 5.8 / 20) * 20);
      const util = Math.min(1, Math.max(.15, u * df * (collect ? .6 : 1) + (R() - .5) * .24)), res = Math.round(cap * .08);
      const com = Math.min(cap - res, Math.round(cap * util)), av = cap - com - res;
      return { r, cap, com, res, av, fc: Math.max(0, Math.round(cap * (1 + (st.vs || 0) / 100) * (.97 + R() * .06))) };
    }).map((s, _, all) => {
      if (FIXN[st.id] === undefined || day !== 0 || collect || all.forced) return s;
      all.forced = true; const n = FIXN[st.id];
      const order = all.map((x, j) => [j, (x.com + x.res) / x.cap]).sort((a, b) => b[1] - a[1]).map(x => x[0]);
      all.forEach((x, j) => {
        const rank = order.indexOf(j), mx = Math.floor(x.cap * .8);
        if (rank < n) { const need = Math.min(x.cap, mx + 1 + Math.round(x.cap * .02 * (n - rank))); x.com = Math.min(x.cap - x.res, need - x.res); }
        else if (x.com + x.res > mx) x.com = Math.max(0, mx - x.res);
        x.av = x.cap - x.com - x.res;
      });
      return s;
    }).map((s, _, all) => {
      // Keep the All stores counts coherent: stores at or below 80% use have no closed slot at the default 20% threshold,
      // stores above 80% have at least one (their busiest slot).
      if (FIXN[st.id] !== undefined && day === 0 && !collect) return s;
      const hot = pct(st.used, st.cap) > 80;
      if (!hot) { const mx = Math.floor(s.cap * .8); if (s.com + s.res > mx) { s.com = Math.max(0, mx - s.res); s.av = s.cap - s.com - s.res; } }
      return s;
    }).map((s, i, all) => {
      if (pct(st.used, st.cap) > 80 && FIXN[st.id] === undefined && day === 0 && !collect && i === all.reduce((b, x, j) => x.cap > all[b].cap ? j : b, 0) && !all.some(x => (x.cap - x.av) / x.cap * 100 > 80)) {
        const need = Math.floor(s.cap * .8) + 1; s.com = Math.min(s.cap - s.res, need - s.res); s.av = s.cap - s.com - s.res;
      }
      return s;
    });
  }
  // Consistency rule: a store can only be Open at a threshold if its use is within the limit, so its busiest slot is never
  // below the store's own use (store use <= tightest slot use). Raise the busiest slot when the generator left it lower.
  function genSlots(st, day, collect, R) {
    const out = genSlotsRaw(st, day, collect, R);
    if (day === 0 && !collect && st.cap) {
      const su = st.used / st.cap, useOf = x => (x.cap - x.av) / x.cap;
      const cand = out.filter(x => x.cap > 0); const top = cand.reduce((b, x) => useOf(x) > useOf(b) ? x : b, cand[0]);
      if (top && useOf(top) < su) { const need = Math.min(top.cap, Math.ceil(su * top.cap)); top.com = Math.max(top.com, need - top.res); top.av = top.cap - top.com - top.res; }
    }
    return out;
  }
  const earnedK = (id, st) => { const per = 55 + D.hash(id) % 25, e = Math.round(st.used * per / 100) / 10; return [e.toFixed(1) + "k", (Math.round(e * 1.12 * 10) / 10).toFixed(1) + "k"]; };
  function buildModel(id) {
    const st = ALL[id], day = S.day, collect = S.service === "Collect";
    const fixture = id === 2 && day === 0 && !collect;
    const R = D.rng(D.hash(id + "|" + day + "|" + S.service));
    const slots = fixture ? D.timisoara.slots.map(s => Object.assign({}, s, { res: s.cap - s.com - s.av })) : genSlots(st, day, collect, R);
    slots.forEach(s => { if (!s.internal) breakdown(s, collect, R, day); });
    const capT = sum(slots, "cap"), fcT = sum(slots, "fc"), comT = sum(slots, "com"), closed = !st.cap, util = pct(comT + sum(slots, "res"), capT);
    const kr = D.rng(D.hash(id + "k" + day + S.service)), d = () => 1 + Math.floor(kr() * 3);
    let kpis;
    if (fixture) kpis = [["Available pickers", "7", "+1", 1], ["Productivity, picks/h", "46", "+3", 1], ["Items to prepare", "388", "+6%", 1], ["Prep time, min/item", "1.9", "+0.1", 1], ["Capacity use", "82%", "+2%", 1], ["Forecast vs capacity", "−2%", "+1%", 1], ["Earned, lei · target 40.5k", "36.2k", "", 1]];
    else if (closed) kpis = [["Available pickers", "0", "", 1], ["Productivity, picks/h", "—", "", 1], ["Items to prepare", "0", "", 1], ["Prep time, min/item", "—", "", 1], ["Capacity use", "—", "", 1], ["Forecast vs capacity", "—", "", 1], ["Earned, lei · target —", "—", "", 1]];
    else {
      const pick = Math.max(1, Math.round(st.fte * 1.55 * (collect ? .4 : 1))), vsF = capT ? Math.round((fcT / capT - 1) * 100) : 0, [ek, tk] = earnedK(id, st);
      kpis = [["Available pickers", String(pick), "+" + d(), 1], ["Productivity, picks/h", String(36 + (D.hash(id) % 15)), "+" + d(), 1], ["Items to prepare", String(Math.round(comT * 1.11)), "+" + d() + "%", 1], ["Prep time, min/item", st.prep.toFixed(1), "+0." + d(), 1],
        ["Capacity use", util + "%", "+" + d() + "%", 1], ["Forecast vs capacity", signed(vsF) + "%", "+" + d() + "%", 1], ["Earned, lei · target " + tk, ek, "", 1]];
    }
    return { id, st, slots, fixture, closed, collect, capT, fcT, comT, comPct: pct(comT, capT), kpis };
  }
  function storeAlerts(m) {
    const st = m.st;
    if (m.fixture) return { count: 3, list: [{ p: "med", t: "Prep 1.9 min/item, norm 1.2", s: "Medium priority", a: "Review" }, { p: "med", t: "Forecast +20% vs capacity", s: "13:00 – 14:00 · +20 orders", a: "Review" }, { p: "med", t: "Approaching capacity", s: "12:00 – 13:00 · 98% full", a: "Add picker" }] };
    let list = activeAlerts().filter(a => a.s.split(" · ")[0] === st.name).map(a => ({ p: a.p, t: a.t, s: a.p === "high" ? "High priority" : a.p === "med" ? "Medium priority" : "Low priority", a: a.a }));
    if (!list.length) {
      if (st.status === "CLOSED") list.push({ p: "high", t: "Closed · FTE set to 0", s: "High priority", a: "Reopen" });
      if (st.status === "IDLE") list.push({ p: "low", t: "Idle capacity", s: "Low priority", a: "Set pickers (FTE)" });
      if (st.vs >= 15) list.push({ p: "med", t: "Forecast +" + st.vs + "% vs capacity", s: "Medium priority", a: "Review" });
      if (st.cap && pct(st.used, st.cap) >= 95) list.push({ p: "med", t: "Approaching capacity", s: "Medium priority", a: "Add picker" });
    }
    return { count: list.length, list };
  }
  const SVC_F = { "Fast delivery": .15, "Same day": .45, "Next day": .25, Collect: .3 };
  function rowView(s) {
    const f = SVC_F[S.service] || 1, df = DAYF[S.day];
    if (!s.cap) return Object.assign({}, s, { forecast: Math.round(s.forecast * f * df) });
    if (f === 1 && df === 1) return s;
    const cap = Math.max(10, Math.round(s.cap * f / 10) * 10), used = Math.min(cap, Math.round(s.used * f * df)), forecast = Math.round(s.forecast * f * df);
    return Object.assign({}, s, { cap, used, forecast, vs: Math.round((forecast / cap - 1) * 100) });
  }
  const matches = s => { const q = S.q.trim().toLowerCase(); return !q || s.name.toLowerCase().includes(q) || codeOf(s).toLowerCase() === q; };

  // ---------- shift FTE (edited per shift only; one value per shift per day, steps of 0.5, no maximum) ----------
  const perFte = id => +((S.storeSet[id] || {}).perFte) || D.account.perFte;
  const baseShiftFte = (id, sh) => id === 2 ? D.timisoara.shiftFte[sh] : ALL[id].cap ? Math.round(ALL[id].fte) / 2 : 0;
  function shiftWeek(id, sh) {
    const key = id + ":" + sh;
    if (S.fteSaved[key]) return S.fteSaved[key];
    if (id === 2) { const w = D.timisoara.week[sh]; return w.fte.map((v, i) => ({ fte: v, fc: w.fc[i] })); }
    const st = ALL[id], b = baseShiftFte(id, sh);
    return DAYF.map(f => ({ fte: st.cap ? snap(b * f) : 0, fc: Math.round(st.forecast / 2 * f) }));
  }
  const shiftToday = (id, sh) => {
    if (S.day > 0) return shiftWeek(id, sh)[S.day].fte;
    const ov = S.shiftOv[id + ":" + sh]; return ov !== undefined ? ov : baseShiftFte(id, sh);
  };
  const validFte = v => { v = String(v).trim().replace(",", "."); if (v === "" || isNaN(+v) || +v < 0) return false; return Math.abs(+v * 2 - Math.round(+v * 2)) < 1e-9; };

  // route enter: seed demo states
  let lastRoute = null, curP = null;
  const isSettings = d => d === "account" || d === "notif";
  function enter(P, pp) {
    const r = P.r; if (r === lastRoute) return;
    if (P.page === "store") { S.curId = P.id; if (P.chart) S.chart = P.chart; }
    if (P.drawer === "fte") {
      const key = P.id + ":" + P.shift, same = pp && pp.drawer === "fte" && pp.id === P.id && pp.shift === P.shift;
      if (!same || S.fteKey !== key || P.fstate === "error" || (P.fstate === "saved" && !S.keepSave)) {
        S.fteKey = key; S.fte = shiftWeek(P.id, P.shift).map(d => d.fte.toFixed(1)); S.fteBase = JSON.stringify(S.fte);
        if (P.fstate === "error") S.fte[2] = "2.3";
        if (P.fstate === "saved" && !S.keepSave) { S.fte[1] = "2.5"; S.fte[2] = "2.5"; S.fteBase = JSON.stringify(S.fte); }
      }
    }
    if (isSettings(P.drawer) && !(pp && isSettings(pp.drawer))) { S.st = { prot: S.app.prot, th: S.app.th.slice(), thp: S.app.thp.slice(), shw: S.app.shw.slice() }; S.setBase = JSON.stringify(S.st); }
    if (P.drawer === "store" && !(pp && pp.drawer === "store" && pp.id === P.id)) { const c = S.storeSet[P.id] || {}; S.ss = { perFte: String(c.perFte || D.account.perFte), norm: String(c.norm || D.account.norm) }; S.ssBase = JSON.stringify(S.ss); }
    if (P.drawer === "restriction") { S.rsOn = true; S.rsResume = "20"; S.rsBase = JSON.stringify([S.rsOn, S.rsResume]); S.resumed = false; }
    if (P.drawer === "timeslot" && !(pp && pp.drawer === "timeslot")) S.tab = "Capacity";
    if (!P.drawer) S.stack = [];
    S.mobileMenu = false; S.protoOpen = false; S.keepSave = false; $tip.style.display = "none";
    lastRoute = r;
  }

  // ---------- small UI helpers ----------
  const periodSelect = () => `<select id="period" class="select" data-k="period" aria-label="Period">${PERIODS.map((x, i) => `<option value="${i}" ${i === S.day ? "selected" : ""}>${x}</option>`).join("")}</select>`;
  const bar = p => `<span class="bar ${p >= 90 ? "full" : ""}"><i style="width:${Math.min(p, 100)}%"></i></span>`;
  // toasts sit centred in the visible area (right of the sidebar, left of an open drawer), 32px from the bottom
  function placeToasts(c) {
    const m = document.querySelector(".menu"), dr = document.querySelector(".drawer"), desk = innerWidth > 900;
    c.style.left = (desk && m ? Math.round(m.getBoundingClientRect().right) : 0) + "px"; c.style.right = (dr ? Math.round(innerWidth - dr.getBoundingClientRect().left) : 0) + "px";
  }
  function toast(msg) {
    const c = document.getElementById("toasts"); if (!c) return; placeToasts(c);
    const d = document.createElement("div"); d.className = "toast"; d.setAttribute("role", "status"); d.textContent = msg; c.appendChild(d); setTimeout(() => d.remove(), 3500);
  }
  function toastUndo(msg, label, fn) {
    const c = document.getElementById("toasts"); if (!c) return; placeToasts(c);
    const d = document.createElement("div"); d.className = "toast has-act"; d.setAttribute("role", "status");
    const sp = document.createElement("span"); sp.textContent = msg; const b = document.createElement("button"); b.type = "button"; b.className = "toast-act"; b.textContent = label;
    b.addEventListener("click", () => { fn(); d.remove(); }); d.append(sp, b); c.appendChild(d); setTimeout(() => d.remove(), 8000);
  }
  // Confirm modal (alertdialog) with its own focus trap; focus returns to the opener
  let modalOpener = null, modalCfg = null;
  const $modal = document.createElement("div"); $modal.id = "modal-root"; document.body.appendChild($modal);
  function openModal(cfg) {
    modalCfg = cfg; modalOpener = document.activeElement;
    $modal.innerHTML = `<div class="modal-scrim"></div><div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="m-t" aria-describedby="m-d" tabindex="-1"><h2 id="m-t">${cfg.title}</h2><p id="m-d">${cfg.body}</p><div class="m-actions"><button type="button" class="btn" data-m="cancel">Cancel</button><button type="button" class="btn filled" data-m="apply">${cfg.ok}</button></div></div>`;
    $modal.querySelector('[data-m="cancel"]').focus();
  }
  function closeModal(apply) {
    const cfg = modalCfg; modalCfg = null; $modal.innerHTML = "";
    if (apply && cfg) cfg.onOk(); else if (modalOpener && document.contains(modalOpener)) { try { modalOpener.focus(); } catch (e) {} }
    modalOpener = null;
  }
  $modal.addEventListener("click", ev => { const b = ev.target.closest("[data-m]"); if (b) closeModal(b.dataset.m === "apply"); else if (ev.target.classList.contains("modal-scrim")) closeModal(false); });
  const ph = `<div class="ph-note" role="note">Placeholder content. This page is not designed in Figma yet.</div>`;
  const settingsBtn = () => `<button class="settings-btn" data-act="settings">${I.gear}<span>Settings</span></button>`;

  // ---------- shell ----------
  const delta = k => k[2] ? (k[3] === 2 ? `<span class="neutral">${k[2]}</span>` : `<span class="${/^[−-]/.test(k[2]) ? "down" : "up"}" title="Change against the same time yesterday">${/^[−-]/.test(k[2]) ? I.tDown : I.tUp} ${k[2]}<span class="sr"> against the same time yesterday</span></span>`) : "";
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
          <div class="kpis k${kpis.length}">${kpis.map(k => `<div class="kpi${k[0].length > 20 ? " wrap" : ""}"><div class="t"><span>${k[0].replace("/", "/<wbr>")}</span></div><div class="v"><b>${k[1]}</b>${delta(k)}</div></div>`).join("")}</div>
        </header>
        <div class="content ${cls || ""}">${inner}</div>
      </main></div>`;
  }

  // ---------- attention card ----------
  const idByName = n => ALL.findIndex(s => s.name === n);
  const CONFIRM = { "Reopen": ["Reopen", "Reopen"], "Set pickers (FTE)": ["Set pickers (FTE) for", "Set pickers (FTE)"] };
  function alertBtn(a, id, key) {
    const c = CONFIRM[a.a], nm = ALL[id] ? ALL[id].name : "";
    if (c && key && S.cf === key) return `<span class="cf" role="group" aria-label="Confirm ${a.a}"><span class="cf-q">${c[0]} ${nm}?</span><button type="button" class="btn sm" data-act="cf-no" data-key="${key}">Cancel</button><button type="button" class="btn filled sm" data-act="cf-yes" data-a="${a.a}" data-id="${id}">${c[1]}</button></span>`;
    return `<button class="act" data-act="alert" data-a="${a.a}" data-id="${id}" ${key ? `data-key="${key}"` : ""}>${a.a}</button>`;
  }
  function attention(list, open, count, ctxId) {
    const body = !open ? "" : count === 0 ? `<p class="empty">No notifications right now</p>` : `<div class="att-list">${list.slice(0, 3).map(a0 => { const a = a0.a === "Manage" ? Object.assign({}, a0, { a: "Review" }) : a0; return `<div class="alert-row"><span class="ico ${a.p}">${prioIcon[a.p]}</span><div class="txt"><b>${a.t}</b><span>${ctxId !== undefined ? a.s : a.s.split(" · ")[0]}</span></div>${alertBtn(a, ctxId !== undefined ? ctxId : idByName(a.s.split(" · ")[0]), "c" + a.t + "|" + a.s)}</div>`; }).join("")}</div>`;
    return `<section class="card" aria-labelledby="att-h"><div class="att-head"><button class="toggle" data-act="att-toggle" aria-expanded="${open}">${open ? I.down : I.right}<h5 id="att-h">Needs attention</h5><span class="count">${count}</span></button>${count >= 3 ? '<button class="link" data-act="alerts">View all</button>' : ""}</div>${body}</section>`;
  }

  // ---------- All stores ----------
  const openAllCount = () => ALL.filter(s => closedN(s) === 0).length;
  // Sorting (All stores): one active column; asc -> desc -> none. Rows without a value ('—', 'No capacity') are always last, ties by store name.
  const earnNum = e => { if (!e) return null; const m = /^([\d.]+)\s*([MkK]?)/.exec(e); return m ? parseFloat(m[1]) * (/M/.test(m[2]) ? 1000 : 1) : null; };
  const SORT_KEY = {
    mk: v => { const n = closedN(ALL[v.id]); return n === "all" ? 99 : n; },
    fte: v => v.fte,
    use: v => v.cap ? pct(v.used, v.cap) : null,
    fc: v => v.forecast,
    prep: v => v.prep ? v.prep : null,
    earn: v => earnNum(v.earned)
  };
  const sortRows = rows => {
    const k = S.sort.k, d = S.sort.d; if (!k || !d) return rows; const f = SORT_KEY[k], dir = d === "asc" ? 1 : -1;
    return rows.map((v, i) => [v, f(v), i]).sort((a, b) => {
      if ((a[1] === null) !== (b[1] === null)) return a[1] === null ? 1 : -1;
      if (a[1] !== b[1] && a[1] !== null) return (a[1] - b[1]) * dir;
      return a[0].name.localeCompare(b[0].name) || a[2] - b[2];
    }).map(x => x[0]);
  };
  const SORT_I = { none: svg('<path d="m8 9 4-4 4 4M8 15l4 4 4-4"/>', 14), asc: svg('<path d="m6 15 6-6 6 6"/>', 14), desc: svg('<path d="m6 9 6 6 6-6"/>', 14) };
  const sortTh = (label, k) => { const st = S.sort.k === k ? S.sort.d : null; return `<th aria-sort="${st === "asc" ? "ascending" : st === "desc" ? "descending" : "none"}"><button class="th-sort ${st ? "on" : ""}" data-act="sort" data-k="${k}">${label}<span class="si" aria-hidden="true">${SORT_I[st || "none"]}</span></button></th>`; };
  function allStores(P) {
    const key = P.key, open = !(key === "collapsed" || key === "one-collapsed"), v = P.variant, withMk = !v || v === "o4";
    const act = activeAlerts(), list = key.startsWith("one") ? act.slice(0, 1) : key === "zero" ? [] : act;
    const rows = ALL.filter(s => matches(s) && (!S.mkOnly || closedN(s) !== 0)), totalN = rows.length, pages = Math.max(1, Math.ceil(totalN / S.per));
    if (S.page > pages) S.page = pages;
    const from = (S.page - 1) * S.per, shown = sortRows(rows.map(rowView)).slice(from, from + S.per), th = slowPrep();
    const tr = shown.map(s => {
      const p = s.cap ? pct(s.used, s.cap) : 0;
      return `<tr><td><button class="store-name" data-act="store" data-id="${s.id}">${s.name}</button><span class="sub">${s.sub}</span></td>${withMk ? `<td>${mkBadge(s)}</td>` : ""}
      <td class="fte-v">${s.fte === 0 ? "0" : s.fte.toFixed(1)}</td>
      <td>${s.cap ? `${s.used} of ${s.cap} · ${p}%${bar(p)}` : `<span class="sub" style="font-size:14px">No capacity</span>`}</td>
      <td>${s.forecast}<span class="sub ${s.vs > 0 ? "warn" : ""}">${s.vs === null ? "No capacity" : `${signed(s.vs)}% capacity`}</span></td>
      <td class="${s.prep && s.prep >= th ? "pos" : ""}">${s.prep ? s.prep.toFixed(1) : "—"}</td><td>${s.earned ? `${s.earned} / ${s.target}` : "—"}</td></tr>`;
    }).join("");
    const cols = withMk ? [201, 180, 70, 154, 121, 121, 153] : [226, 70, 194, 150, 150, 210];
    const colg = `<colgroup>${cols.map(w => `<col style="width:${w}px">`).join("")}</colgroup>`;
    const nc = cols.length;
    const empty = shown.length === 0 ? `<tr><td colspan="${nc}" class="empty" style="text-align:center;padding:32px">No stores match the filters</td></tr>` : "";
    const pg = pageItems(S.page, pages).map(n => n === "…" ? "…" : `<button class="pg ${S.page === n ? "on" : ""}" data-act="page" data-n="${n}" ${S.page === n ? 'aria-current="page"' : ""}>${n}</button>`).join(" ");
    const df = DAYF[S.day], uBase = Math.min(99, Math.round(82 * df * (S.service === "Collect" ? .85 : 1)));
    const kp = [["Capacity use", uBase + "%", D.kpisAll[0][2], 1]].concat(D.kpisAll.slice(1));
    const oa = openAllCount(), heading = `<h5 id="st-h">Stores (${ALL.length})</h5>`
      + (v === "o4" ? `<span class="hd-note">Marketplaces open: ${oa} / ${ALL.length}</span>` : "")
      + (v === "o2" ? `<span class="hd-note">Stores open on</span><span class="chip-o">Glovo 240</span><span class="chip-o">Wolt 228</span><span class="chip-o">Bolt 219</span>` : "");
    const banner = v === "o5" ? `<div class="slim"><span>${oa} of ${ALL.length} stores open on all marketplaces · ${ALL.length - oa} closed on at least one</span><button class="link strong" data-act="show-closed" aria-pressed="${S.mkOnly}">${S.mkOnly ? "Show all" : "Show them"}</button></div>` : "";
    const attList = P.r === "r6/main" ? list.map(x => x.t === "Closed · FTE set to 0" ? Object.assign({}, x, { t: "FTE set to 0" }) : x) : list;
    const inner = (key === "zero" ? "" : attention(attList, open, list.length)) + `
      <section class="card" aria-labelledby="st-h">
        <div class="st-title">${heading}</div>
        <div class="tools"><input class="input grow" data-k="q" placeholder="Search store name or ID" value="${S.q}" aria-label="Search store name or ID">
          <select class="select" data-k="service" aria-label="Service">${["All", "Fast delivery", "Same day", "Next day", "Collect"].map(x => `<option ${S.service === x ? "selected" : ""} value="${x}">Service: ${x}</option>`).join("")}</select></div>
        ${banner}
        <div class="tscroll"><table class="stores st2${withMk ? " has-mk" : ""}">${colg}<thead><tr><th>Store</th>${withMk ? sortTh("Marketplaces", "mk") : ""}${sortTh("FTE", "fte")}${sortTh("Capacity use", "use")}${sortTh("Orders forecast", "fc")}${sortTh("Prep, min/item", "prep")}${sortTh("Earned / target, lei", "earn")}</tr></thead><tbody>${tr}${empty}</tbody></table></div>
        <div class="pager"><span>${shown.length ? `${from + 1}–${from + shown.length} of ${totalN}` : `0 of ${totalN}`}</span><div class="pager-r"><div class="pages"><button class="pg" data-act="page" data-n="${Math.max(1, S.page - 1)}" aria-label="Previous page" ${S.page === 1 ? "disabled" : ""}>${svg('<path d="m15 6-6 6 6 6"/>', 14)}</button>${pg}<button class="pg" data-act="page" data-n="${Math.min(pages, S.page + 1)}" aria-label="Next page" ${S.page === pages ? "disabled" : ""}>${svg('<path d="m9 6 6 6-6 6"/>', 14)}</button></div><span class="per">Per page <select class="select sm" data-k="per" aria-label="Per page"><option ${S.per === 10 ? "selected" : ""}>10</option><option ${S.per === 25 ? "selected" : ""}>25</option></select></span></div></div>
      </section>`;
    return shell(inner, "Capacity", `${settingsBtn()}<label for="period">Period</label>${periodSelect()}`, kp);
  }

  // ---------- Store detail ----------
  let curSlots = [];
  function chartBlock(m, expanded, variant) {
    const sfx = curP && curP.drawer === "timeslot" ? " · 08–14" : ""; // Figma 563:31268 shows the period in the collapsed chips behind the drawer
    const sl = m.slots, max = Math.max(1, ...sl.map(s => Math.max(s.cap, s.fc))), wide = 560;
    curSlots = sl;
    const cols = sl.map((s, i) => `<div class="col ${S.hl === i ? "hl" : ""}" data-i="${i}" tabindex="0" aria-label="${s.r}: capacity ${s.cap}, forecast ${s.fc}"><i class="c" style="height:${s.cap / max * 70}px"></i><i class="f" style="height:${s.fc / max * 70}px"></i></div>`).join("");
    const ttl = "Orders capacity vs. forecast" + (variant ? " · 08–14" : "");
    return `<section class="card ${expanded ? "" : "cc"}" aria-labelledby="ch-h"><div class="chart-head"><button class="toggle" data-act="chart-toggle" aria-expanded="${expanded}">${expanded ? I.down : I.right}<h5 id="ch-h">${ttl}</h5></button>
      <div class="chips"><span><span class="sw cap"></span>Capacity${sfx} <b>${m.capT}</b></span><span><span class="sw fc"></span>Forecast${sfx} <b>${m.fcT}</b></span><span style="color:#b34700"><span class="dash"></span>Committed${sfx} <b>${m.comT} · ${m.comPct}%</b></span></div></div>
      ${expanded ? `<div class="chart-scroll"><div class="chart" style="min-width:${wide}px">${cols}</div><div class="x-labels" style="min-width:${wide}px">${sl.map(s => `<span>${s.r}</span>`).join("")}</div></div>` : ""}</section>`;
  }
  const svcHead = m => `<div class="store-head"><h5 id="tb-h" style="font-size:18px">${m.st.name}</h5>
      <div class="seg" role="group" aria-label="Service"><button class="${m.collect ? "" : "on"}" aria-pressed="${!m.collect}" data-act="svc" data-v="All">Delivery</button><button class="${m.collect ? "on" : ""}" aria-pressed="${m.collect}" data-act="svc" data-v="Collect">Collect</button></div></div>`;
  const mkCell = (s, collect) => collect ? "—" : slotClosed(s) ? '<span class="badge sm b-red">Closed</span>' : '<span class="badge sm b-green">Open</span>';
  function storeTable(m, variant) {
    const id = m.id, slotRow = (s, i) => {
      const used = s.cap - s.av, p = pct(used, s.cap);
      return `<tr><td><button class="timeslot" data-act="timeslot" data-i="${i}">${range(s.r)}</button></td><td>${s.com}</td><td>${s.res}</td><td>${s.av}</td><td>${s.cap ? `<span class="cu">${used} of ${s.cap} · ${p}%${bar(p)}</span>` : "—"}</td><td>${mkCell(s, m.collect)}</td><td></td></tr>`;
    };
    let rows = "";
    SHIFTS.forEach((g, si) => {
      const open = S.so[g.n] !== false, fv = shiftToday(id, si);
      rows += `<tr class="band"><td colspan="6"><button class="shift-t" data-act="sgrp" data-s="${g.n}" aria-expanded="${open}" aria-label="${g.n}, ${g.r}">${open ? I.down : I.right}<span><span class="sn">${g.n}</span><span class="sub">${g.r}</span></span></button></td><td class="fcell"><span class="fv">${f1(fv)}</span><button class="upd" data-act="update-shift" data-s="${si}" aria-label="Set pickers (FTE) for ${g.n}">Set pickers (FTE)</button></td></tr>`;
      if (open) rows += m.slots.map((s, i) => [s, i]).slice(g.from, g.to).map(([s, i]) => slotRow(s, i)).join("");
    });
    const mkRow = variant === "a" ? `<div class="mk-row"><span class="mk-l">Marketplaces</span><span class="mk-i"><b>Glovo</b><span class="badge b-green">Open</span></span><span class="mk-i"><b>Wolt</b><span class="badge b-orange">Partial</span></span><span class="mk-i"><b>Bolt</b><span class="badge b-red">Closed</span></span></div>` : "";
    return `<section class="card sd" aria-labelledby="tb-h">${svcHead(m)}${mkRow}
      <div class="tscroll"><table class="t-slots"><colgroup><col style="width:14.11%"><col style="width:13.62%"><col style="width:14.61%"><col style="width:14.11%"><col style="width:17.45%"><col style="width:12.1%"><col style="width:13.99%"></colgroup><thead><tr><th>Time slot</th><th>Committed orders</th><th><span class="th-in">Reserved orders${infoIc}</span></th><th>Available orders</th><th>Capacity use</th><th>Marketplace(s)</th><th class="r">FTE</th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
  }
  const mkStatusCard = m => `<section class="card" aria-labelledby="ms-h"><h5 id="ms-h" class="ms-t">Marketplace status · ${m.st.name}</h5><div class="ms-grid">${[["Glovo", "Open", "green", 3], ["Wolt", "Partial", "orange", 3], ["Bolt", "Closed", "red", 0]].map(([n, l, c, k]) => `<div class="ms-c"><div><b>${n}</b> <span class="badge b-${c}">${l}</span></div><span class="sub">${k} of 6 slots open</span></div>`).join("")}</div></section>`;
  function storeDetail(P) {
    const m = buildModel(P.id), expanded = (P.chart || S.chart) === "expanded", al = storeAlerts(m), v = P.variant;
    const controls = `${settingsBtn()}<label for="store">Store</label>${storeCombo(m.id)}<label for="period">Period</label>${periodSelect()}`;
    return shell(attention(al.list, S.attOpenStore, al.count, m.id) + chartBlock(m, expanded, !!v) + (v === "b" ? mkStatusCard(m) : "") + storeTable(m, v), "Capacity", controls, m.kpis, "capacity", "sp");
  }

  // Store search (combobox): type to filter by name, region or type; pick with click, Enter or arrow keys.
  const fold = t => String(t).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const storeItems = q => { const f = fold(q.trim()); const all = [{ id: "__all", name: "All stores", sub: "" }].concat(ALL.map(s => ({ id: String(s.id), name: s.name, sub: s.sub }))); return (f ? all.filter(x => fold(x.name + " " + x.sub).includes(f)) : all).slice(0, 40); };
  const storeLis = (q, act) => { const it = storeItems(q); return it.length ? it.map((x, i) => `<li role="option" id="store-o${i}" data-val="${x.id}" aria-selected="${i === act}" class="${i === act ? "act" : ""}"><span>${x.name}</span>${x.sub ? `<small>${x.sub}</small>` : ""}</li>`).join("") : `<li class="none" role="presentation">No stores found</li>`; };
  const storeCombo = id => `<div class="combo" data-combo="${id}"><svg class="combo-ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="store" class="select wide combo-in" role="combobox" aria-expanded="false" aria-controls="store-list" aria-autocomplete="list" autocomplete="off" spellcheck="false" placeholder="Search store name or ID" aria-label="Store" value="${ALL[id].name}"><ul id="store-list" role="listbox" aria-label="Stores" hidden></ul></div>`;

  function pageItems(cur, n) {
    if (n <= 7) return Array.from({ length: n }, (_, i) => i + 1);
    if (cur <= 4) return [1, 2, 3, 4, 5, "…", n];
    if (cur >= n - 3) return [1, "…", n - 4, n - 3, n - 2, n - 1, n];
    return [1, "…", cur - 1, cur, cur + 1, "…", n];
  }

  // ---------- placeholder pages (orders / picking / couriers) ----------

  // ---------- placeholder pages ----------
  const CHANNELS = ["Fast delivery", "Same day", "Next day", "Collect", "Wolt", "Glovo", "Bolt"];
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
      <div class="tscroll"><table><thead><tr><th>Order</th><th>Store</th><th>Channel</th><th>Time slot</th><th>Items</th><th>Status</th><th>Value, lei</th></tr></thead><tbody>${list.slice(0, 15).map(r => `<tr><td>#${r.n}</td><td>${storeLink(r.st.id)}</td><td>${r.ch}</td><td>${r.slot}</td><td>${r.items}</td><td>${stBadge(r.status)}</td><td>${r.val}</td></tr>`).join("")}</tbody></table></div>
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
    const rows = Array.from({ length: 14 }, (_, i) => { const status = pick(R, ["On route", "On route", "At store", "Delayed", "Available"]); return { name: NAMES[13 - i], partner: pick(R, ["Own fleet", "Wolt", "Glovo", "Bolt"]), st: pick(R, openStores), status, eta: status === "Available" ? "—" : (4 + Math.floor(R() * 24)) + " min" }; });
    const kp = [["Active couriers", String(Math.round(318 * df)), "+14", 1], ["Avg. wait at store", Math.round(6 / df) + " min", "−1 min", 1], ["Orders on route", String(Math.round(204 * df)), "+9", 1], ["On-time rate", "93%", "−1%", 0]];
    const inner = ph + `<section class="card"><h5 style="margin-bottom:12px">Couriers</h5><div class="tscroll"><table><thead><tr><th>Courier</th><th>Partner</th><th>Store</th><th>Status</th><th>ETA</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r.name}</td><td>${r.partner}</td><td>${storeLink(r.st.id)}</td><td>${stBadge(r.status === "Available" ? "Active" : r.status)}</td><td>${r.eta}</td></tr>`).join("")}</tbody></table></div></section>`;
    return shell(inner, "Couriers", `<label for="period">Period</label>${periodSelect()}`, kp, "couriers");
  }

  // ---------- drawers ----------
  const drawerShell = (title, body, footer, label, extraHeader) => `<div class="scrim" data-act="close"></div><aside class="drawer" tabindex="-1" role="dialog" aria-modal="true" aria-label="${label || title}"><header><h2>${title}</h2><span style="display:flex;gap:8px;align-items:center">${extraHeader || ""}<button class="xbtn" data-act="close" aria-label="Close">${I.x}</button></span></header>${body}${footer || ""}</aside>`;
  const savedAlert = (title, msg, extra) => `<div class="alert-box green saved" role="status"><svg class="al-ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><div><b>${title}</b><p>${msg}</p>${extra || ""}</div></div>`;

  // Notifications drawer ("Needs attention") with a Settings button (opens Notification settings)
  function alertsDrawer() {
    const act = activeAlerts(), list = act.filter(a => S.alertFilter === "all" || a.type === S.alertFilter);
    return drawerShell(`Needs attention (${act.length})`, `<div class="body"><div class="pills" role="group" aria-label="Notification type">${D.alertTypes.map(([k, l]) => `<button class="pill ${S.alertFilter === k ? "on" : ""}" aria-pressed="${S.alertFilter === k}" data-act="afilter" data-k="${k}">${S.alertFilter === k ? svg('<path d="m5 12 5 5 9-10"/>', 14, 2.5) : ""}${l}</button>`).join("")}</div>
      ${list.map(a => `<div class="alert-row ${a.restricted ? "rs" : ""}"><span class="ico ${a.p}">${prioIcon[a.p]}</span><div class="txt"><b>${a.t}</b><span>${a.s}</span></div>${a.restricted ? '<span class="restricted">RESTRICTED</span>' : ""}${alertBtn(a, idByName(a.s.split(" · ")[0]), "d" + akey(a))}</div>`).join("") || '<p class="empty">No notifications of this type</p>'}</div>`,
      "", "Needs attention", `<button class="settings-btn ns-btn" data-act="notif-settings">${I.gear}<span>Settings</span></button>`);
  }

  // Settings side panel: Account settings (Capacity + Notifications), Notification settings (Notifications only), Store settings
  const thErr = (v, i) => { const u = D.thresholds[i][2]; return badNum(v) || (u === "min/item" ? +String(v).replace(",", ".") > 10 : (!/^\d+$/.test(String(v).trim()) || +v > 1000)); };
  const protBad = v => !/^\d+$/.test(String(v).trim()) || +v > 100;
  function notifSection(st) {
    return `<h6 class="sec">Notifications</h6><p class="desc" style="margin-bottom:4px">Manage active notifications, trigger thresholds and priority levels.</p><p class="desc" style="margin-bottom:16px">Applies to all your stores.</p>
      <div class="th-row th-h"><span>Notification type</span><span>Threshold</span><span>Priority</span><span class="r">Show</span></div>
      ${D.thresholds.map((t, i) => { const off = !st.shw[i], bad = !off && thErr(st.th[i], i);
        return `<div class="th-row ${off ? "off" : ""}"><div><span class="lbl">${t[0]}</span><span class="sub">${t[4]}</span>${t[0] === "Slow preparation" ? '<button class="link strong" data-act="restrict">Restrict orders</button>' : ""}</div><span class="ctl"><input ${numAttr("th:" + i, st.th[i], bad, t[0] + " threshold, " + t[2])} ${t[2] === "min/item" ? 'data-step=".1"' : ""} ${off ? "disabled" : ""}>${bad ? `<span class="err-msg" id="err-th-${i}">${t[2] === "min/item" ? "Enter up to 10" : "Whole number"}</span>` : ""}</span><select class="select" data-k="thp:${i}" aria-label="${t[0]} priority" ${off ? "disabled" : ""}>${["High", "Medium", "Low"].map(p => `<option ${st.thp[i] === p ? "selected" : ""}>${p}</option>`).join("")}</select><button class="switch" role="switch" aria-checked="${!off}" aria-label="Show ${t[0]} notifications" data-act="th-show" data-i="${i}"></button></div>`; }).join("")}`;
  }
  function settingsDrawer(P) {
    const st = S.st, acc = P.drawer === "account", dirty = JSON.stringify(st) !== S.setBase;
    const bad = protBad(st.prot) || st.th.some((v, i) => st.shw[i] && thErr(v, i));
    const pBad = protBad(st.prot), pChanged = !pBad && +st.prot !== +S.app.prot;
    const live = pChanged ? impactText(thImpact(+S.app.prot, +st.prot)) : "";
    const cap = acc ? `<h6 class="sec first">Capacity</h6><div class="cap-row pt"><div id="pt-l"><span class="lbl">Own-channel protection threshold, %</span><span class="sub">Marketplaces close when less than this share of capacity is left. Applies to all stores and slots</span></div><span class="ctl"><input ${numAttr("prot", st.prot, pBad, "Own-channel protection threshold, %")} aria-describedby="pt-l pt-meta">${pBad ? '<span class="err-msg">Enter 0–100</span>' : ""}</span></div><div class="pt-meta" id="pt-meta"><span class="pt-live" role="status" aria-live="polite">${live}</span></div>` : "";
    return drawerShell(acc ? "Account settings" : "Notification settings", `<div class="body set-body">${cap}${notifSection(st)}</div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-settings" ${dirty && !bad ? "" : "disabled"}>Save changes</button></footer>`);
  }
  function storeSettingsDrawer(P) {
    const ss = S.ss, dirty = JSON.stringify(ss) !== S.ssBase, b1 = !(+ss.perFte > 0) || !/^\d+$/.test(ss.perFte.trim()), b2 = badNum(ss.norm) || +ss.norm.replace(",", ".") > 10;
    return drawerShell("Store settings", `<div class="body set-body"><div class="st-head" style="margin-top:0"><div><h3>${ALL[P.id].name}</h3><span class="sub">${ALL[P.id].sub}</span></div></div>
      <h6 class="sec first">FTE</h6><div class="cap-row"><div><label class="lbl" for="ss-f">Orders per FTE</label><span class="sub">Account default: ${D.account.perFte}. Used to estimate capacity when you update a shift.</span></div><span class="ctl"><input id="ss-f" ${numAttr("ss:perFte", ss.perFte, b1, "Orders per FTE")}>${b1 ? '<span class="err-msg">Whole number</span>' : ""}</span></div>
      <h6 class="sec">Norms</h6><div class="cap-row"><div><label class="lbl" for="ss-n">Prep time norm, min/item</label><span class="sub">Account default: ${D.account.norm}</span></div><span class="ctl"><input id="ss-n" ${numAttr("ss:norm", ss.norm, b2, "Prep time norm, min/item")} data-step=".1">${b2 ? '<span class="err-msg">Enter up to 10</span>' : ""}</span></div></div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-store-settings" ${dirty && !b1 && !b2 ? "" : "disabled"}>Save changes</button></footer>`);
  }

  const numAttr = (k, v, bad, label) => `class="input num ${bad ? "err" : ""}" data-k="${k}" inputmode="decimal" value="${v}" aria-label="${label}" ${bad ? `aria-invalid="true" aria-describedby="err-${k.replace(/\W/g, "-")}"` : ""}`;
  const numOf = v => parseFloat(String(v).replace(",", "."));
  const badInt = (v, i) => badNum(v) || (i != null && D.thresholds[i] && D.thresholds[i][2] === "min/item" ? +String(v).replace(",", ".") > 10 : (!/^\d+$/.test(String(v).trim()) || +v > 1000));
  const badNum = v => { v = String(v).trim().replace(",", "."); return v === "" || isNaN(+v) || +v < 0; };
  function restrictDrawer() {
    const dirty = JSON.stringify([S.rsOn, S.rsResume]) !== S.rsBase, bad = badNum(S.rsResume);
    const info = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>';
    return drawerShell("Order restriction", `<div class="body"><p class="desc">Restrict new orders automatically when prep time is above the limit and a backlog builds, instead of letting the queue snowball.</p>
      ${S.resumed ? `<div class="alert-box blue" role="status" style="margin:0 0 20px"><span>Orders resumed</span></div>` : `<div class="rs-box" role="status"><span class="ic">${info}</span><div><b>Orders restricted</b><span>Prep time is above the limit and a backlog is building.</span></div></div>`}
      <div class="set-row"><div id="rs-l"><span class="lbl">Restrict new orders automatically</span><span class="sub">Applies while the backlog is above the limit</span></div><button class="switch" role="switch" aria-checked="${S.rsOn}" aria-labelledby="rs-l" data-act="rs-toggle"></button></div>
      <div class="set-row"><div><label class="lbl" for="rs-r">Resume when queue is under</label><span class="sub">Queue size (orders)</span>${bad ? '<span class="err-msg">Enter a valid value</span>' : ""}</div><input id="rs-r" ${numAttr("rs:resume", S.rsResume, bad, "Resume when queue is under")} ${S.rsOn ? "" : "disabled"}></div>
      <div class="set-row"><div><span class="lbl">Manual override</span><span class="sub">Resume orders now, ignoring the rule</span></div><button class="btn outline" data-act="resume-now">Resume orders now</button></div></div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-rs" ${dirty && !bad ? "" : "disabled"}>Save changes</button></footer>`);
  }

  // Set FTE drawer: ONE FTE value per shift per day, steps of 0.5, no maximum per day.
  function fteDrawer(P) {
    const sh = SHIFTS[P.shift], week = shiftWeek(P.id, P.shift), K = perFte(P.id), saved = P.fstate === "saved";
    const ok = S.fte.map(validFte), invalid = ok.some(x => !x), dirty = JSON.stringify(S.fte) !== S.fteBase;
    const over = [];
    const rows = D.week.map((d, i) => { const v = ok[i] ? numOf(S.fte[i]) : null, cap = v === null ? null : Math.round(v * K), fc = week[i].fc, ob = cap !== null && fc > cap;
      if (ob) over.push({ d, n: fc - cap });
      return `<div class="fte-row ${ob ? "over" : ""} "><span class="day">${d}</span><span><input ${numAttr("fte:" + i, S.fte[i], !ok[i] || ob, "FTE on " + d)} data-step=".5">${ok[i] ? "" : `<span class="err-msg" id="err-fte-${i}">Steps of 0.5</span>`}</span><span class="calc">${cap === null ? "—" : `${v} FTE × ${K} = <b>${cap}</b>`}</span><span class="load">${fc} · ${cap ? pct(fc, cap) + "%" : "—"}</span>${ob ? `<span class="ov-msg err-msg" id="err-fte-${i}">Overbooked by ${fc - cap} orders. Marketplaces will close earlier.</span>` : ""}</div>`; }).join("");
    return drawerShell("Set pickers (FTE)", `${saved ? savedAlert("Changes saved", "FTE updated. Capacity recalculated.") : ""}<div class="body"><h3 class="sft">${sh.n} · ${sh.ch}</h3>
      <p class="desc">Enter FTE for this shift for the next 7 days, starting today. Slot capacity in the store view is planned per slot and can differ.</p>
      <div class="fte-row fte-h"><span>Day</span><span>FTE</span><span>Est. capacity</span><span>Forecast · load</span></div>${rows}</div>`,
      `<footer class="actions"><button class="btn" data-act="close">${saved ? "Close" : "Cancel"}</button><button class="btn filled" data-act="save-fte" ${dirty && !invalid ? "" : "disabled"}>Save changes</button></footer>`);
  }

  // Time slot details drawer: five order counts (no percentages), committed-by-type breakdown. No FTE card, no picking block.
  const slotShiftName = i => i < 4 ? SHIFTS[0].n : SHIFTS[1].n;
  function timeslotDrawer(P) {
    const m = buildModel(P.id), idx = Math.min(P.slot, m.slots.length - 1), s = m.slots[idx], collect = m.collect;
    if (S.tab !== "Capacity" && S.tab !== "Resources" && S.tab !== "Orders") S.tab = "Capacity";
    const R = D.rng(D.hash(P.id + "ts" + P.slot + S.day + S.service));
    const tabs = [["Capacity", "Capacity"], ["Resources", "Resources"], ["Orders", `Orders (${s.com})`]];
    const intT = total(s.internal), mkT = total(s.market), tot = Math.max(1, intT + mkT), ip = Math.round(intT / tot * 100), mp = collect || !mkT ? 0 : 100 - ip;
    const util = pct(s.cap - s.av, s.cap);
    const group = (color, label, o) => `<h6 class="ts-grp"><i style="background:${color}"></i>${label} (${total(o)})</h6>${Object.entries(o).map(([n, v]) => `<div class="ts-row"><span>${n}</span><b>${v}</b></div>`).join("") || '<div class="ts-row"><span>No orders</span><b>0</b></div>'}`;
    let body;
    if (S.tab === "Capacity") body = `${!collect && s.cap > 0 && slotClosed(s) ? `<div class="ts-alert" role="status"><svg class="al-ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.01"/></svg><div><b>Marketplaces closed for this time slot</b><p>Closed at ${mkLimit()}% full, now ${util}%. ${s.av} left for your own channel.</p><button type="button" class="link sm" data-act="account-settings">Protection threshold ${prot()}%</button></div></div>` : ""}<div class="ts-sum"><div class="ts-head"><b>${s.cap ? util + "%" : "—"}</b><span>Capacity use</span></div>
        <div class="ts-bar" role="img" aria-label="Committed ${s.com}, reserved ${s.res}, available ${s.av} of ${s.cap} orders">${(() => { let left = 100; return [["com", s.com], ["res", s.res], ["av", s.av]].map(([c, v]) => { const w = s.cap > 0 ? Math.max(0, Math.min(left, v / s.cap * 100)) : 0; left -= w; return w > 0 ? `<i class="sq ${c}" style="width:${w.toFixed(3)}%"></i>` : ""; }).join(""); })()}</div>
        <div class="ts-leg">${[["sq tot", "Total capacity", s.cap], ["sq com", "Committed", s.com], ["sq res", "Reserved" + "\u0001", s.res], ["sq av", "Available", s.av], ["sq fc", "Forecast", s.fc]].map(([c, l, v]) => `<div><i class="${c}"></i><span>${l.replace("\u0001", "")}${l.includes("\u0001") ? infoIc : ""}</span><b>${v} orders</b></div>`).join("")}</div></div>
      <div class="ts-card"><h6>Committed by type</h6>${s.com ? `<div class="ts-split" role="img" aria-label="Internal ${collect ? 100 : ip} percent"><span style="width:${collect ? 100 : ip}%;background:var(--internal)">${collect ? 100 : ip}%</span>${mp ? `<span style="width:${mp}%;background:#c65200">${mp}%</span>` : ""}</div>` : '<p class="sub" style="margin:8px 0">No committed orders in this time slot</p>'}
        ${s.com ? group("var(--internal)", collect ? "Collect orders" : "Internal orders", s.internal) + (collect ? "" : group("#c65200", "Marketplace orders", s.market)) : ""}</div>`;
    else if (S.tab === "Resources") {
      const fte = shiftToday(P.id, idx < 4 ? 0 : 1), need = Math.max(1, Math.ceil(s.com / 40)), short = s.cap ? Math.max(0, Math.ceil(need - fte * 2)) : 0;
      const roles = ["Picker", "Picker", "Packer", "Shift lead"], ppl = Array.from({ length: Math.round(fte * 2) }, (_, i) => ({ n: NAMES[(D.hash(P.id) + i * 3) % NAMES.length], role: roles[i % 4], load: Math.round(55 + R() * 45) }));
      body = `<div class="ts-stats"><div><span>${slotShiftName(idx)} FTE</span><b>${f1(fte)}</b></div><div><span>Needed</span><b>${need}</b></div><div><span>Orders / picker</span><b>${ppl.length ? (s.com / ppl.length).toFixed(1) : "—"}</b></div></div>
        ${short ? `<div class="alert-box red" style="margin:0 0 12px" role="status"><span>Short by ${short} ${short === 1 ? "picker" : "pickers"} for this time slot</span></div>` : ""}
        <div class="ts-card"><h6>Team on this time slot</h6>${ppl.map(p => `<div class="ts-row" style="align-items:center;gap:12px"><span style="flex:1">${p.n}<span class="sub">${p.role}</span></span><span style="width:110px">${bar(p.load)}</span><b style="width:40px;text-align:right">${p.load}%</b></div>`).join("") || '<div class="ts-row"><span>No pickers scheduled</span></div>'}</div>`;
    } else if (S.tab === "Orders") {
      const chans = Object.entries(Object.assign({}, s.internal, s.market)).flatMap(([c, n]) => Array(n).fill(c)), n = Math.min(12, chans.length);
      const states = collect ? ["Ready for pickup", "Picking", "Waiting"] : ["Handed over", "Ready", "Picking", "Waiting"];
      const rows = Array.from({ length: n }, (_, i) => ({ id: 61000 + (D.hash(P.id + "o" + i) % 9000), ch: chans[Math.floor(i * chans.length / Math.max(1, n))], it: 4 + Math.floor(R() * 28), st: states[Math.min(states.length - 1, Math.floor(i * states.length / Math.max(1, n)))] }));
      body = `<div class="ts-card"><h6>Orders in this time slot</h6>${rows.map(r => `<div class="ts-row" style="align-items:center"><span>#${r.id}<span class="sub">${r.ch} · ${r.it} items</span></span>${stBadge(r.st === "Ready for pickup" ? "Ready" : r.st)}</div>`).join("") || '<div class="ts-row"><span>No orders yet</span></div>'}${chans.length > n ? `<div class="ts-row"><span class="sub">Showing ${n} of ${chans.length}</span></div>` : ""}</div>`;
    }
    return drawerShell("Time slot details: " + range(s.r), `<div class="body"><div class="tabs" role="tablist">${tabs.map(([t, l]) => `<button role="tab" aria-selected="${S.tab === t}" data-act="tab" data-t="${t}">${l}</button>`).join("")}</div>${body}</div>`, "", "Time slot details");
  }

  // ---------- sign in ----------
  function signin() {
    const tick = svg('<path d="m5 12 5 5 9-10"/>', 14, 2.5);
    return `<div class="signin"><aside class="si-left"><div class="si-logo">${logo(51, "on-dark")}</div>
      <div class="si-copy"><h1>Plan every time slot with confidence.</h1><p>Capacity, couriers and demand for your store — in one place.</p><ul>${["See free slots per time slot and day", "Match couriers to forecast demand", "Fix full slots before customers notice"].map(t => `<li><span class="si-tick">${tick}</span>${t}</li>`).join("")}</ul></div></aside>
      <main class="si-right"><form class="card si-card" data-act-submit="signin"><div class="si-brand">${logo(28, "on-light")}</div><h2>Sign in</h2><p class="si-sub">Capacity, couriers and demand for your store — in one place.</p>
      <div class="field"><label for="em">Email</label><input id="em" class="input md" type="email" autocomplete="username" value="manager.store@stoa.io"></div>
      <div class="field"><label for="pw">Password</label><span class="pw"><input id="pw" class="input md" type="password" autocomplete="current-password" value="password"><span class="eye" aria-hidden="true">${svg('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>', 16)}</span></span></div>
      <div class="si-row"><label class="chk"><input type="checkbox" checked><span class="box">${tick}</span>Remember me</label><button type="button" class="link" data-act="forgot">Forgot password?</button></div>
      <button class="btn filled lg" type="submit">Sign in</button><p class="si-note">Need access? Ask your area manager to add you.</p></form></main></div>`;
  }
  // Mobile frame (375 x 812): the same sign-in page in an iframe, so its own mobile layout applies at 375 px.
  const signinMobile = () => `<div class="phone-stage"><iframe class="phone" title="Mobile sign in (375 × 812)" src="index.html?embed=1#/r24/signin" width="375" height="812"></iframe></div>`;

  // ---------- render ----------
  function drawerFor(P) {
    switch (P.drawer) {
      case "alerts": return alertsDrawer();
      case "account": case "notif": return settingsDrawer(P);
      case "store": return storeSettingsDrawer(P);
      case "restriction": return restrictDrawer();
      case "fte": return fteDrawer(P);
      case "timeslot": return timeslotDrawer(P);
    }
    return "";
  }
  function pageFor(P) {
    if (P.page === "signin") return signin();
    if (P.page === "signin-mobile") return signinMobile();
    if (P.page === "store") return storeDetail(P);
    if (P.page === "orders") return ordersPage();
    if (P.page === "picking") return pickingPage();
    if (P.page === "couriers") return couriersPage();
    return allStores(P);
  }
  function protoSwitcher() {
    if (EMBED) return "";
    return `<div class="proto"><button data-act="proto" aria-expanded="${S.protoOpen}">Screens</button>${S.protoOpen ? `<div class="list">${ROUTES.map(([g, l]) => `<h6>${g}</h6>${l.map(([k, n]) => `<a href="#/${k}" ${k === route() ? 'aria-current="page" style="font-weight:700"' : ""}>${n}</a>`).join("")}`).join("")}</div>` : ""}</div>`;
  }
  let triggerEl = null, trigKey = null;
  function render() {
    let r = route(), P = parse(r);
    if (!P) { r = "r19/default"; history.replaceState(null, "", "#/" + r); P = parse(r); }
    const pp = curP; curP = P; enter(P, pp);
    const dr = drawerFor(P);
    $app.innerHTML = pageFor(P) + `<div id="drawer-root">${dr}</div>` + protoSwitcher();
    if (dr) { const c = $app.querySelector(".drawer"); if (c && !(document.activeElement.closest && document.activeElement.closest(".drawer"))) c.focus(); }
    else if (triggerEl && document.contains(triggerEl)) { try { triggerEl.focus(); } catch (e) {} }
    else if (trigKey && !document.activeElement.closest(".menu")) { const c = [...$app.querySelectorAll("[data-act='" + trigKey.act + "']")].find(e => e.textContent.trim() === trigKey.text && (e.dataset.id || "") === trigKey.id && (e.dataset.n || "") === trigKey.n && (e.dataset.s || "") === trigKey.s); if (c) { try { c.focus(); } catch (e) {} } trigKey = null; }
    document.body.style.overflow = dr ? "hidden" : "";
    { const tc = document.getElementById("toasts"); if (tc) placeToasts(tc); }
    if (P.pin) { const c = $app.querySelector('.col[data-i="1"]'); if (c) showTip(c); }
  }
  function renderDrawer() {
    const a = document.activeElement, k = a && a.dataset && a.dataset.k, pos = a && a.selectionStart;
    const root = document.getElementById("drawer-root"); if (!root || !curP) return;
    root.innerHTML = drawerFor(curP);
    if (k) { const n = root.querySelector(`[data-k="${k}"]`); if (n) { n.focus(); try { n.setSelectionRange(pos, pos); } catch (e) {} } }
  }
  const refreshView = () => { if (document.querySelector(".drawer")) renderDrawer(); else render(); };
  const resetErrRoute = (from, to) => { if (route() === from) { history.replaceState(null, "", "#/" + to); lastRoute = to; curP = parse(to); } };

  // ---------- events ----------
  const push = () => { S.stack.push(route()); };
  function alertAction(a, id) {
    if (a === "Reopen") {
      if (id >= 0 && ALL[id] && !ALL[id].cap) { const st = ALL[id]; Object.assign(st, { status: "OPEN", fte: 2, used: 0, cap: 400, vs: Math.round((st.forecast / 400 - 1) * 100), prep: 1.2, earned: "0.0M", target: "10.0M" }); D.alerts = D.alerts.filter(x => x.s.split(" · ")[0] !== st.name || !/^Closed/.test(x.t)); toast(st.name + " reopened"); render(); }
      else toast("Store reopened");
      return;
    }
    if (a === "Manage") { push(); go("r21/restriction"); return; }
    if (id < 0 || isNaN(id)) { toast("Store not found"); return; }
    if (a === "Set pickers (FTE)") { push(); go(fteRoute(id, 0)); return; }
    go(storeRoute(id, "expanded"));
  }
  document.addEventListener("click", ev => {
    const t = ev.target.closest("[data-act]"), col = ev.target.closest(".col");
    if (col && !t) { showTip(col); return; }
    if (!t) { if (!ev.target.closest(".proto") && S.protoOpen) { S.protoOpen = false; render(); } return; }
    const a = t.dataset.act; if (!t.closest(".drawer") && a !== "close") triggerEl = t; if (!t.closest(".drawer") && a !== "close") trigKey = { act: a, text: t.textContent.trim(), id: t.dataset.id || "", n: t.dataset.n || "", s: t.dataset.s || "" };
    const r = route(), P = curP;
    switch (a) {
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
      case "alerts": push(); go("r19/alerts-drawer"); break;
      case "notif-settings": push(); go("r20/thresholds"); break;
      case "account-settings": push(); go("r55/account-settings"); break;
      case "settings": push(); go(P.page === "store" ? settingsRoute(P.id) : "r55/account-settings"); break;
      case "restrict": push(); go("r21/restriction"); break;
      case "sort": { const k = t.dataset.k; if (S.sort.k !== k) S.sort = { k, d: "asc" }; else if (S.sort.d === "asc") S.sort.d = "desc"; else S.sort = { k: null, d: null }; S.page = 1; render(); break; }
      case "page": S.page = +t.dataset.n; render(); break;
      case "store": go(storeRoute(+t.dataset.id, "collapsed")); break;
      case "alert": {
        const a = t.dataset.a, key = t.dataset.key;
        if (CONFIRM[a] && key) { S.cf = key; refreshView(); const n = document.querySelector('[data-act="cf-no"]'); if (n) n.focus(); break; }
        alertAction(a, +t.dataset.id); break;
      }
      case "cf-no": { const key = S.cf; S.cf = null; refreshView(); const b = [...document.querySelectorAll('[data-act="alert"]')].find(x => x.dataset.key === key); if (b) b.focus(); break; }
      case "cf-yes": S.cf = null; alertAction(t.dataset.a, +t.dataset.id); break;
      case "ofilter": S.ordFilter = t.dataset.k; render(); break;
      case "svc": S.service = t.dataset.v; render(); break;
      case "show-closed": S.mkOnly = !S.mkOnly; S.page = 1; render(); break;
      case "chart-toggle": go(storeRoute(P.id, (P.chart || S.chart) === "expanded" ? "collapsed" : "expanded")); break;
      case "timeslot": push(); go(slotRoute(P.id, +t.dataset.i)); break;
      case "update-shift": push(); go(fteRoute(P.id, +t.dataset.s)); break;
      case "tab": S.tab = t.dataset.t; renderDrawer(); break;
      case "afilter": S.alertFilter = t.dataset.k; renderDrawer(); break;
      case "close": go(closeTarget(P)); break;
      case "rs-toggle": S.rsOn = !S.rsOn; renderDrawer(); break;
      case "resume-now": S.resumed = true; renderDrawer(); break;
      case "th-show": { const i = +t.dataset.i; S.st.shw[i] = !S.st.shw[i]; renderDrawer(); break; }
      case "save-settings": {
        const nw = { prot: S.st.prot.trim(), th: S.st.th.slice(), thp: S.st.thp.slice(), shw: S.st.shw.slice(), touched: JSON.stringify(S.st.shw) !== JSON.stringify(D.thresholds.map(t => t[5])) };
        const from = +S.app.prot, to = +nw.prot, target = closeTarget(P);
        if (from === to) { S.app = nw; toast("Changes saved"); go(target); break; }
        const im = thImpact(from, to), body = `${plural(im.n, "slot")} in ${plural(im.m, "store")} will ${im.close ? "close" : "reopen"} for marketplaces. This applies to all your stores.`;
        openModal({ title: `Change protection threshold from ${from}% to ${to}%?`, body, ok: "Apply to all stores", onOk: () => {
          const prevProt = S.app.prot; S.app = nw; go(target);
          toastUndo(`Threshold changed from ${from}% to ${to}%`, "Undo", () => { S.app = Object.assign({}, S.app, { prot: prevProt }); render(); });
        } });
        break;
      }
      case "save-store-settings": S.storeSet[P.id] = { perFte: S.ss.perFte.trim(), norm: S.ss.norm.trim() }; toast("Changes saved"); go(closeTarget(P)); break;
      case "save-rs": S.rsBase = JSON.stringify([S.rsOn, S.rsResume]); renderDrawer(); break;
      case "save-fte": {
        const key = P.id + ":" + P.shift, old = shiftWeek(P.id, P.shift), nw = S.fte.map((v, i) => ({ fte: numOf(v), fc: old[i].fc }));
        if (nw[0].fte !== old[0].fte) S.shiftOv[key] = nw[0].fte; // index 0 = today
        S.fteSaved[key] = nw; S.fteBase = JSON.stringify(S.fte); S.keepSave = true; go(fteRoute(P.id, P.shift, "saved")); break;
      }
      case "sgrp": S.so[t.dataset.s] = S.so[t.dataset.s] === false; render(); break;
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
    if (k.startsWith("th:")) S.st.th[+k.slice(3)] = v;
    else if (k === "prot") S.st.prot = v;
    else if (k === "ss:perFte") S.ss.perFte = v;
    else if (k === "ss:norm") S.ss.norm = v;
    else if (k === "rs:resume") S.rsResume = v;
    else if (k.startsWith("fte:")) { S.fte[+k.slice(4)] = v; if (/set-fte-(saved|error)$/.test(route())) resetErrRoute(route(), route().replace(/-(saved|error)$/, "")); }
    else return;
    renderDrawer();
  });
  document.addEventListener("change", ev => {
    const k = ev.target.dataset && ev.target.dataset.k; if (!k) return;
    const v = ev.target.value, P = curP;
    if (k.startsWith("thp:")) { S.st.thp[+k.slice(4)] = v; renderDrawer(); }
    else if (k === "service") { S.service = v; render(); }
    else if (k === "per") { S.per = +v; S.page = 1; render(); }
    else if (k === "store") { if (v === "__all") go("r19/default"); else go(storeRoute(+v, P.chart || S.chart)); }
    else if (k === "period") { S.day = +v; render(); }
  });
  document.addEventListener("submit", ev => { if (ev.target.dataset.actSubmit === "signin") {
      ev.preventDefault(); const f = ev.target, em = f.querySelector("#em"), pw = f.querySelector("#pw"); let bad = null;
      f.querySelectorAll(".si-err").forEach(n => n.remove());
      [[em, "Enter your email", !/^\S+@\S+\.\S+$/.test(em.value.trim())], [pw, "Enter your password", !pw.value]].forEach(([inp, msg, isBad]) => {
        inp.classList.toggle("err", isBad); inp.toggleAttribute("aria-invalid", isBad);
        if (isBad) { const sp = document.createElement("span"); sp.className = "err-msg si-err"; sp.id = "err-" + inp.id; sp.textContent = msg; inp.setAttribute("aria-describedby", sp.id); (inp.closest(".pw") || inp).after(sp); bad = bad || inp; }
      });
      if (bad) { bad.focus(); return; }
      if (EMBED) { toast("Signed in (demo)"); return; }
      go("r19/default");
    } });
  document.addEventListener("keydown", ev => {
    if (modalCfg) {
      if (ev.key === "Escape") { ev.preventDefault(); ev.stopPropagation(); closeModal(false); return; }
      if (ev.key === "Tab") { const f = [...$modal.querySelectorAll("button")], first = f[0], last = f[f.length - 1], a = document.activeElement;
        if (!$modal.contains(a)) { first.focus(); ev.preventDefault(); } else if (ev.shiftKey && a === first) { last.focus(); ev.preventDefault(); } else if (!ev.shiftKey && a === last) { first.focus(); ev.preventDefault(); } }
      return;
    }
    if (ev.key === "Escape") {
      if (S.mobileMenu) { S.mobileMenu = false; render(); document.querySelector("[data-act=menu-open]")?.focus(); return; }
      if (S.protoOpen) { S.protoOpen = false; render(); return; }
      $tip.style.display = "none";
      if (document.querySelector(".drawer")) go(closeTarget(curP));
    }
    if (ev.key === "Tab") {
      const d = document.querySelector(".drawer"); if (!d) return;
      const f = [...d.querySelectorAll("button:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]")].filter(x => x.offsetParent !== null);
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
    $tip.style.display = "block"; const tw = 170; const right = b.left + b.width / 2 + 36 + 10 + tw < innerWidth; $tip.style.left = (right ? b.left + b.width / 2 + 36 + 10 : b.left + b.width / 2 - 36 - 10 - tw) + "px"; $tip.style.top = b.top + 8 + "px"; $tip.classList.toggle("flip", !right);
  }
  document.addEventListener("mouseover", ev => { const c = ev.target.closest(".col"); if (c && matchMedia("(hover:hover)").matches) showTip(c); });
  document.addEventListener("mouseout", ev => { const c = ev.target.closest(".col"); if (c && !c.contains(ev.relatedTarget)) { $tip.style.display = "none"; S.hl = -1; c.classList.remove("hl"); } });
  document.addEventListener("focusin", ev => { const c = ev.target.closest && ev.target.closest(".col"); if (c) showTip(c); });
  document.addEventListener("focusout", ev => { if (ev.target.classList && ev.target.classList.contains("col")) { $tip.style.display = "none"; ev.target.classList.remove("col-f"); } });

  window.addEventListener("hashchange", () => { $tip.style.display = "none"; S.hl = -1; render(); });
  render();
})();
