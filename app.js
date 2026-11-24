/* Stoa prototype · vanilla JS, hash routes named after Figma frames (see README). */
(function () {
  const D = window.DATA;
  const $app = document.getElementById("app");
  const $tip = document.getElementById("tip");

  // ---------- icons ----------
  const svg = (p, s = 18, w = 2) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    down: svg('<path d="m6 9 6 6 6-6"/>'), right: svg('<path d="m9 6 6 6-6 6"/>'), x: svg('<path d="M18 6 6 18M6 6l12 12"/>', 20),
    gear: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>', 20),
    dots: svg('<circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/>', 20),
    warn: svg('<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>', 16), circ: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16h.01"/>', 16),
    clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', 16), check: svg('<path d="m5 12 5 5 9-10"/>', 16),
    menu: svg('<path d="M4 6h16M4 12h16M4 18h16"/>'), back: svg('<path d="M15 6l-6 6 6 6"/>', 20)
  };
  const prioIcon = { high: I.circ, med: I.warn, low: I.clock };

  // ---------- routes ----------
  const ROUTES = [
    ["All stores", [["r19/default", "R19 · 12 alerts"], ["r19/collapsed", "R19 · 12 alerts · collapsed"], ["r19/one", "R19 · 1 alert"], ["r19/one-collapsed", "R19 · 1 alert · collapsed"], ["r19/zero", "R19 · 0 alerts"]]],
    ["Alerts and rules", [["r19/alerts-drawer", "R19–R20 · Alerts drawer"], ["r20/thresholds", "R20 · Alert thresholds"], ["r21/restriction", "R21 · Order restriction"]]],
    ["Same-day control (FTE)", [["r6/main", "R6 · FTE column"], ["r6/panel", "R6 · FTE panel"], ["r6/panel-error", "R6 · FTE panel · error"], ["r6/panel-saved", "R6 · FTE panel · saved"]]],
    ["Channel split", [["r9/split", "R9 · Channel split"], ["r9/split-error", "R9 · Channel split · error"], ["r9/split-saved", "R9 · Channel split · saved"]]],
    ["Store detail", [["r7/other-days", "R7 · Other days"], ["r2/collapsed", "R2 · Collapsed chart"], ["r2/expanded", "R2 · Expanded chart"], ["r2/timeslot", "R2 · Timeslot details"], ["r17/expanded", "R17 · Bd. Unirii 35 · expanded"]]],
    ["Access", [["r24/signin", "R24 · Sign in"]]]
  ];
  const KNOWN = new Set(ROUTES.flatMap(([, l]) => l.map(([r]) => r)).concat(["r17/collapsed"]));

  const S = {
    menuPop: false, mobileMenu: false, protoOpen: false,
    q: "", region: "All", type: "All", service: "Delivery", page: 1,
    attOpenStore: true, alertFilter: "all", expanded: new Set([4]), unusedReleased: false,
    th: D.thresholds.map(t => String(t[1])), thBase: null, rsOn: true, rsResume: "30", rsBase: null, resumed: false,
    sp: null, spBase: null, fte: null, fteBase: null, fteStore: "Bd. Unirii 35", tab: "Capacity", hl: -1
  };
  const resetForms = () => {
    S.th = D.thresholds.map(t => String(t[1])); S.thBase = JSON.stringify(S.th);
    S.rsOn = true; S.rsResume = "30"; S.rsBase = JSON.stringify([S.rsOn, S.rsResume]); S.resumed = false;
    const p = D.split; S.sp = { reserve: String(p.reservePct), glovo: String(p.glovoLimit), wolt: String(p.woltLimit) }; S.spBase = JSON.stringify(S.sp);
    S.fte = D.fte.map(d => String(d[1])); S.fteBase = JSON.stringify(S.fte);
  };
  resetForms();

  const route = () => { const r = (location.hash || "").replace(/^#\/?/, ""); return r || "r19/default"; };
  const go = r => { location.hash = "#/" + r; };
  const parts = r => r.split("/");

  // route enter: seed demo states
  let lastRoute = null;
  function enter(r) {
    if (r === lastRoute) return;
    const wasPanel = lastRoute && lastRoute.startsWith("r6/panel"), wasSplit = lastRoute && lastRoute.startsWith("r9/split");
    if (r === "r6/panel" && !wasPanel) { S.fte = D.fte.map(d => String(d[1])); S.fteBase = JSON.stringify(S.fte); }
    if (r === "r6/panel-error") { S.fte = D.fte.map(d => String(d[1])); S.fte[5] = "9"; }
    if (r === "r9/split" && !wasSplit) { const p = D.split; S.sp = { reserve: String(p.reservePct), glovo: String(p.glovoLimit), wolt: String(p.woltLimit) }; S.spBase = JSON.stringify(S.sp); S.unusedReleased = false; }
    if (r === "r9/split-error") S.sp = { reserve: "20", glovo: "450", wolt: "150" };
    if (r === "r20/thresholds") { S.th = D.thresholds.map(t => String(t[1])); S.thBase = JSON.stringify(S.th); }
    if (r === "r21/restriction") { S.rsOn = true; S.rsResume = "30"; S.rsBase = JSON.stringify([S.rsOn, S.rsResume]); S.resumed = false; }
    if (r === "r2/timeslot") S.tab = "Capacity";
    S.menuPop = false; S.mobileMenu = false; $tip.style.display = "none";
    lastRoute = r;
  }

  // ---------- helpers ----------
  const pct = (a, b) => Math.round(a / b * 100);
  const signed = n => (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n);
  const badgeFor = (av, tot) => av === 0 ? `<span class="badge b-red">Full</span>` : `<span class="badge ${av / tot <= .25 ? "b-orange" : "b-green"}">${av} left</span>`;
  const bar = (p) => `<span class="bar ${p >= 90 ? "full" : ""}"><i style="width:${Math.min(p, 100)}%"></i></span>`;
  const range = r => r.replace("–", " – ");
  const rangeChart = r => r;

  // ---------- shell ----------
  function shell(inner, title, controls, kpis, mobileMenu) {
    return `<div class="app">
      <nav class="menu ${S.mobileMenu ? "open" : ""}" aria-label="Main">
        <div class="logo"><span><span class="logo-tile"><svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M5 3h5v12h9v5H5z"/><rect x="12" y="6" width="6" height="6" rx="1"/></svg></span>Stoa</span><button class="xbtn" style="color:#fff" data-act="menu-close" aria-label="Close menu">${I.back}</button></div>
        <div class="label">Main Menu</div>
        <button class="item active" aria-current="page" data-act="home">${svg('<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>')}Capacity</button>
        <button class="item" aria-disabled="true">${svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>')}Orders</button>
        <button class="item" aria-disabled="true">${svg('<path d="M3 4h3l2 12h10l2-8H7"/><circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/>')}In-store picking</button>
        <button class="item" aria-disabled="true">${svg('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>')}Couriers</button>
        <hr><div class="label">Tools</div>
        <div class="item" style="cursor:default">${svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>')}Language<select aria-label="Language"><option>Eng</option><option>Ro</option></select></div>
        <button class="item" data-act="signout">${svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>')}Sign Out</button>
      </nav>
      <main class="main">
        <header class="top">
          <div class="top-row"><div style="display:flex;gap:12px;align-items:center"><button class="burger" data-act="menu-open" aria-label="Open menu">${I.menu}</button><h1>${title}</h1></div><div class="top-controls">${controls}</div></div>
          <div class="kpis">${kpis.map(k => `<div class="kpi"><div class="t">${k[0]}</div><div class="v"><b>${k[1]}</b>${k[2] ? `<span class="${k[3] ? "up" : "down"}">${k[3] ? "↗" : "↘"} ${k[2]}</span>` : ""}</div></div>`).join("")}</div>
        </header>
        <div class="content">${inner}</div>
      </main></div>`;
  }

  // ---------- attention card ----------
  function attention(list, open, toggleAct, countOverride, mode) {
    const n = countOverride !== undefined ? countOverride : list.length;
    const body = !open ? "" : n === 0 ? `<p class="empty">No alerts right now</p>` : `<div class="att-list">${list.slice(0, 3).map(a => `<div class="alert-row"><span class="ico ${a.p}">${prioIcon[a.p]}</span><div class="txt"><b>${a.t}</b><span>${a.s.split(" · ")[0]}</span></div><button class="act" data-act="noop">${a.a}</button></div>`).join("")}</div>`;
    return `<section class="card" aria-labelledby="att-h"><div class="att-head"><button class="toggle" data-act="${toggleAct}" aria-expanded="${open}">${open ? I.down : I.right}<h5 id="att-h">Needs attention</h5><span class="count">${n}</span></button><button class="link" data-act="alerts">View all</button></div>${body}</section>`;
  }

  // ---------- All stores ----------
  function filteredStores() {
    return D.stores.filter(s => (!S.q || s.name.toLowerCase().includes(S.q.toLowerCase())) && (S.region === "All" || s.sub.startsWith(S.region)) && (S.type === "All" || s.sub.endsWith(S.type)));
  }
  function allStores(r) {
    const [, st] = parts(r);
    const key = r.startsWith("r19/") ? st : "default";
    const open = !(key === "collapsed" || key === "one-collapsed");
    const list = key.startsWith("one") ? [D.alerts[2]] : key === "zero" ? [] : D.alerts;
    const rows = filteredStores();
    const filtered = S.q || S.region !== "All" || S.type !== "All";
    const total = filtered ? rows.length : 260;
    const pages = filtered ? 1 : 11;
    const shown = S.page === 1 ? rows : [];
    const tr = shown.map(s => {
      const p = s.cap ? pct(s.used, s.cap) : 0;
      return `<tr><td><button class="store-name" data-act="store" data-name="${s.name}">${s.name}</button><span class="sub">${s.sub}</span></td>
      <td><span class="badge ${s.status === "OPEN" ? "b-green" : s.status === "IDLE" ? "b-orange" : "b-red"}">${s.status}</span></td>
      <td><button class="fte-btn" data-act="fte" data-name="${s.name}" aria-label="Set FTE for ${s.name}, currently ${s.fte.toFixed(1)}">${s.fte % 1 ? s.fte.toFixed(1) : s.fte === 0 ? "0" : s.fte.toFixed(1)}</button></td>
      <td>${s.cap ? `${s.used} of ${s.cap} · ${p}%${bar(p)}` : `<span class="sub" style="font-size:14px">No capacity</span>`}</td>
      <td>${s.forecast}<span class="sub ${s.vs > 0 ? "warn" : ""}">${s.vs === null ? "No capacity" : `${signed(s.vs)}% capacity`}</span></td>
      <td class="${s.prod && s.prod < 70 ? "pos" : ""}">${s.prod ? s.prod + "%" : "—"}</td><td>${s.rev || "—"}</td></tr>`;
    }).join("");
    const empty = shown.length === 0 ? `<tr><td colspan="7" class="empty" style="text-align:center;padding:32px">${filtered ? "No stores match the filters" : "Only page 1 has data in this prototype"}</td></tr>` : "";
    const pg = [1, 2, 3, 4, 5].filter(n => n <= pages).map(n => `<button class="pg ${S.page === n ? "on" : ""}" data-act="page" data-n="${n}" ${S.page === n ? 'aria-current="page"' : ""}>${n}</button>`).join("") + (pages > 5 ? ` … <button class="pg ${S.page === 11 ? "on" : ""}" data-act="page" data-n="11">11</button>` : "");
    const inner = attention(list, open, "att-toggle", list.length) + `
      <section class="card" aria-labelledby="st-h">
        <div style="display:flex;justify-content:space-between;align-items:center;position:relative"><h5 id="st-h">Stores (${total})</h5>
          <button class="xbtn" data-act="menu-pop" aria-label="More actions" aria-haspopup="menu" aria-expanded="${S.menuPop}">${I.dots}</button>
          ${S.menuPop ? `<div class="menu-pop" role="menu"><button role="menuitem" data-act="noop">Bulk upload FTE</button><button role="menuitem" data-act="noop">Export</button></div>` : ""}</div>
        <div class="tools"><input class="input grow" data-k="q" placeholder="Search store name or ID" value="${S.q}" aria-label="Search store name or ID">
          <select class="select" data-k="region" aria-label="Region">${D.regions.map(x => `<option ${S.region === x ? "selected" : ""} value="${x}">Region: ${x}</option>`).join("")}</select>
          <select class="select" data-k="type" aria-label="Type">${["All", "Hub", "Store"].map(x => `<option ${S.type === x ? "selected" : ""} value="${x}">Type: ${x}</option>`).join("")}</select>
          <select class="select" data-k="service" aria-label="Service">${["Delivery", "Collect"].map(x => `<option ${S.service === x ? "selected" : ""} value="${x}">Service: ${x}</option>`).join("")}</select></div>
        <div class="tscroll"><table><thead><tr><th>Store</th><th>Status</th><th>FTE</th><th>Utilization</th><th>Orders forecast</th><th>Productivity</th><th>Revenue, lei</th></tr></thead><tbody>${tr}${empty}</tbody></table></div>
        <div class="pager"><span>${shown.length ? `1–${shown.length} of ${total}` : `0 of ${total}`}</span><div class="pages"><button class="pg" data-act="page" data-n="${Math.max(1, S.page - 1)}" aria-label="Previous page">‹</button>${pg}<button class="pg" data-act="page" data-n="${Math.min(pages, S.page + 1)}" aria-label="Next page">›</button></div><span>Per page <select class="select" style="height:28px" aria-label="Per page"><option>10</option><option>25</option></select></span></div>
      </section>`;
    return shell(inner, "Capacity", `<label for="period">Period</label><select id="period" class="select"><option>Today</option><option>Other days</option></select>`, D.kpisAll);
  }

  // ---------- Store detail ----------
  function chartBlock(kind, expanded) {
    const sl = kind === "unirii" ? D.unirii.slots : D.timisoara.slots;
    const cap = sl.reduce((a, s) => a + s.cap, 0), fc = sl.reduce((a, s) => a + s.fc, 0);
    const com = sl.reduce((a, s) => a + s.com, 0), res = kind === "unirii" ? sl.reduce((a, s) => a + s.res, 0) : sl.reduce((a, s) => a + (s.cap - s.com - s.av), 0);
    const util = pct(com + (kind === "unirii" ? res : 0), cap);
    const title = kind === "unirii" ? "Shift A · 08–12" : "08–14";
    const max = Math.max(...sl.map(s => Math.max(s.cap, s.fc)));
    const wide = kind === "unirii" ? 720 : 560;
    const cols = sl.map((s, i) => `<div class="col ${S.hl === i ? "hl" : ""}" data-i="${i}" data-kind="${kind}" tabindex="0" aria-label="${s.r}: capacity ${s.cap}, forecast ${s.fc}"><i class="c" style="height:${s.cap / max * 100}px"></i><i class="f" style="height:${s.fc / max * 100}px"></i></div>`).join("");
    return `<section class="card" aria-labelledby="ch-h"><div class="chart-head"><button class="toggle" data-act="chart-toggle" aria-expanded="${expanded}">${expanded ? I.down : I.right}<h5 id="ch-h">Capacity vs. forecast (orders) · ${title}</h5></button>
      <div class="chips"><span><span class="sw cap"></span>Capacity <b>${cap}</b></span><span><span class="sw fc"></span>Forecast <b>${fc}</b></span><span style="color:#b45309"><span class="dash"></span>Committed <b>${com + (kind === "unirii" ? res : 0)} · ${util}%</b></span></div></div>
      ${expanded ? `<div class="chart-scroll"><div class="chart" style="min-width:${wide}px">${cols}</div><div class="x-labels" style="min-width:${wide}px">${sl.map(s => `<span>${rangeChart(s.r)}</span>`).join("")}</div></div>` : ""}</section>`;
  }

  function storeTable(kind) {
    let rows = "";
    if (kind === "timisoara") {
      rows = D.timisoara.slots.map((s, i) => {
        const res = s.cap - s.com - s.av, p = pct(s.com + res, s.cap), open = S.expanded.has(i);
        let ex = "";
        if (open) {
          ex = s.internal ? `<tr class="expand"><td colspan="6"><div class="box"><span class="sub">Committed orders (${s.com})</span><div class="row"><b>Internal ${Object.values(s.internal).reduce((a, b) => a + b, 0)}</b><span>${Object.entries(s.internal).map(([k, v]) => `${k} <b>${v}</b>`).join(" · ")}</span></div><div class="row"><b>Marketplace ${Object.values(s.market).reduce((a, b) => a + b, 0)}</b><span>${Object.entries(s.market).map(([k, v]) => `${k} <b>${v}</b>`).join(" · ")}</span></div></div></td></tr>`
            : `<tr class="expand"><td colspan="6"><div class="box"><span class="sub">Committed orders (${s.com})</span><div class="row"><span>Channel breakdown is not available for this slot in the design.</span></div></div></td></tr>`;
        }
        return `<tr><td><button class="timeslot" data-act="timeslot" data-i="${i}">${range(s.r)}</button></td><td>${s.cap}</td><td>${s.com}</td><td>${s.av}</td><td>${p}%${bar(p)}</td><td>${s.closed ? '<span class="badge b-red">Closed</span>' : '<span class="badge b-green">Open</span>'}</td><td><button class="chev" data-act="row" data-i="${i}" aria-expanded="${open}" aria-label="Toggle committed orders for ${range(s.r)}">${open ? I.down : I.right}</button></td></tr>${ex}`;
      }).join("");
    } else {
      rows = D.unirii.slots.map((s, i) => {
        const p = pct(s.com + s.res, s.cap);
        return `<tr><td>${range(s.r)}</td><td>${s.cap}</td><td>${s.com}</td><td>${s.av}</td><td>${p}%${bar(p)}</td><td>${badgeFor(s.av, s.cap)}</td><td></td></tr>`;
      }).join("");
    }
    const name = kind === "unirii" ? "Bd. Unirii 35" : "Bd. Timișoara 26";
    return `<section class="card" aria-labelledby="tb-h"><div class="store-head"><h5 id="tb-h" style="font-size:18px">${name}</h5>
      <div class="seg" role="group" aria-label="Service"><button class="on" aria-pressed="true" data-act="noop">Delivery</button><button aria-pressed="false" data-act="noop">Collect</button></div>
      <button class="btn outline" data-act="split">Channel split</button><span class="grow"></span><button class="btn filled" disabled>Save changes</button></div>
      <div class="tscroll"><table><thead><tr><th>Timeslot</th><th>Orders capacity</th><th>Committed orders</th><th>Available orders</th><th>Utilization</th><th>${kind === "unirii" ? "Status" : "Marketplace"}</th><th></th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
  }

  function storeDetail(r, kind) {
    const [, st] = parts(r);
    const expanded = st === "expanded";
    const al = kind === "timisoara" ? [
      { p: "med", t: "Productivity 62% of plan", s: "Medium priority", a: "Review" },
      { p: "med", t: "Forecast +20% vs capacity", s: "13:00 – 14:00 · +20 orders", a: "Review" },
      { p: "med", t: "Approaching capacity", s: "12:00 – 13:00 · 90% full", a: "Add picker" }] : [];
    const att = attention(al, S.attOpenStore, "att-toggle", kind === "timisoara" ? 9 : 0);
    const opts = D.stores.map(s => `<option value="${s.name}" ${(kind === "unirii" ? s.name === "Bd. Unirii 35" : s.name === "Bd. Timișoara 26") ? "selected" : ""}>${s.name}</option>`).join("");
    const controls = `<label for="store">Store</label><select id="store" class="select wide" data-k="store">${opts}</select><label for="period">Period</label><select id="period" class="select" data-k="period"><option ${r.startsWith("r7") ? "" : "selected"}>Today</option><option ${r.startsWith("r7") ? "selected" : ""}>Other days</option></select>`;
    const kp = kind === "unirii" ? D.kpisStore.map((k, i) => i < 3 ? [k[0], "—", "", 1] : i === 3 ? ["Capacity utilization", "85%", "+2%", 1] : i === 4 ? ["vs. forecast", "−7%", "+1%", 1] : k) : D.kpisStore;
    return shell(att + chartBlock(kind, expanded) + storeTable(kind), "Capacity", controls, kp);
  }

  function otherStore(idx) {
    const s = D.stores[idx] || D.stores[0];
    const controls = `<label for="store">Store</label><select id="store" class="select wide" data-k="store">${D.stores.map(x => `<option ${x.name === s.name ? "selected" : ""}>${x.name}</option>`).join("")}</select>`;
    return shell(`<div class="notice"><h5>${s.name}</h5><p>Store detail is designed for Bd. Timișoara 26 and Bd. Unirii 35 only.</p><button class="btn filled" data-act="home">Back to all stores</button></div>`, "Capacity", controls, D.kpisStore);
  }

  // ---------- drawers ----------
  const drawerShell = (title, body, footer, label, extraHeader) => `<div class="scrim" data-act="close"></div><aside class="drawer" role="dialog" aria-modal="true" aria-label="${label || title}"><header><h2>${title}</h2><span style="display:flex;gap:8px">${extraHeader || ""}<button class="xbtn" data-act="close" aria-label="Close">${I.x}</button></span></header>${body}${footer || ""}</aside>`;
  const saved = `<div class="alert-box green" role="status"><span>Changes saved</span><button class="link" data-act="close" style="color:inherit;font-weight:700">Close</button></div>`;

  function alertsDrawer() {
    const list = D.alerts.filter(a => S.alertFilter === "all" || a.type === S.alertFilter);
    return drawerShell(`Needs attention (${D.alerts.length})`, `<div class="body"><div class="pills" role="group" aria-label="Alert type">${D.alertTypes.map(([k, l]) => `<button class="pill ${S.alertFilter === k ? "on" : ""}" aria-pressed="${S.alertFilter === k}" data-act="afilter" data-k="${k}">${S.alertFilter === k ? "✓ " : ""}${l}</button>`).join("")}</div>
      ${list.map(a => `<div class="alert-row"><span class="ico ${a.p}">${prioIcon[a.p]}</span><div class="txt"><b>${a.t}</b><span>${a.s}</span></div>${a.restricted ? '<span class="restricted">RESTRICTED</span>' : ""}<button class="act" data-act="noop">${a.a}</button></div>`).join("")}</div>`,
      `<footer><b style="font-size:12px">Priority</b><div class="legend"><div><span style="color:var(--red-fg)">${I.circ}</span><b>High</b><span>Store closed or FTE set to 0</span></div><div><span style="color:var(--orange-fg)">${I.warn}</span><b>Medium</b><span>Low productivity, fast fill or forecast above capacity</span></div><div><span style="color:var(--brand)">${I.clock}</span><b>Low</b><span>Idle capacity</span></div></div></footer>`,
      "Needs attention", `<button class="xbtn" data-act="thresholds" aria-label="Alert settings">${I.gear}</button>`);
  }

  function thresholdsDrawer() {
    const dirty = JSON.stringify(S.th) !== S.thBase;
    const bad = S.th.some(v => v.trim() === "" || isNaN(+v) || +v < 0);
    return drawerShell("Alert thresholds", `<div class="body"><p style="color:var(--dimmed);margin-top:0">Alerts appear when a store passes these limits.</p><div class="rows">${D.thresholds.map((t, i) => `<div class="trow"><span>${t[0]}</span><span style="display:flex;gap:6px;align-items:center"><input class="input ${S.th[i].trim() === "" || isNaN(+S.th[i]) ? "err" : ""}" data-k="th:${i}" inputmode="decimal" value="${S.th[i]}" aria-label="${t[0]} (${t[2]})"><span class="sub">${t[2]}</span></span><span class="badge ${t[3] === "High" ? "b-red" : t[3] === "Medium" ? "b-orange" : "b-green"}" style="justify-self:start">${t[3]}</span></div>`).join("")}</div>
      <p style="margin-top:20px"><button class="link" data-act="restrict" style="text-decoration:underline">Restrict orders</button></p></div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-th" ${dirty && !bad ? "" : "disabled"}>Save changes</button></footer>`);
  }

  function restrictDrawer() {
    const dirty = JSON.stringify([S.rsOn, S.rsResume]) !== S.rsBase;
    const bad = S.rsResume.trim() === "" || isNaN(+S.rsResume) || +S.rsResume < 0;
    return drawerShell("Order restriction", `<div class="body">${S.resumed ? `<div class="alert-box blue" role="status" style="margin:0 0 12px"><span>Orders resumed</span></div>` : ""}<div class="toggle-sw"><span id="rs-l"><b>Restrict new orders automatically</b><span class="sub">Pauses new orders when the queue is too long</span></span><button class="switch" role="switch" aria-checked="${S.rsOn}" aria-labelledby="rs-l" data-act="rs-toggle"></button></div>
      <div class="field"><label for="rs-r">Resume when queue is under</label><input id="rs-r" class="input ${bad ? "err" : ""}" data-k="rs:resume" inputmode="decimal" value="${S.rsResume}" ${S.rsOn ? "" : "disabled"}>${bad ? '<div class="err-msg">Enter a valid value</div>' : '<div class="hint">Orders in the queue</div>'}</div>
      <div class="field"><label>Manual override</label><button class="btn" data-act="resume-now">Resume orders now</button></div></div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-rs" ${dirty && !bad ? "" : "disabled"}>Save changes</button></footer>`);
  }

  function fteDrawer(r) {
    const vals = S.fte.map(v => v.trim() === "" || isNaN(+v) || +v < 0 || +v > 8 ? null : +v);
    const invalid = vals.some(v => v === null);
    const dirty = JSON.stringify(S.fte) !== S.fteBase;
    const rows = D.fte.map((d, i) => {
      const v = vals[i], cap = v === null ? null : v * D.fteCapacityPerFte;
      return `<div class="trow" style="grid-template-columns:110px 110px 1fr"><span>${d[0]}</span><span><input class="input ${v === null ? "err" : ""}" style="width:90px" data-k="fte:${i}" inputmode="decimal" value="${S.fte[i]}" aria-label="FTE on ${d[0]}" ${v === null ? 'aria-invalid="true"' : ""}>${v === null ? '<div class="err-msg">Enter a valid value</div>' : ""}</span><span class="sub" style="font-size:12px">${cap === null ? "—" : `Capacity ${cap} · load ${d[2]} · ${pct(d[2], cap)}%`}</span></div>`;
    }).join("");
    const tf = invalid ? "—" : vals.reduce((a, b) => a + b, 0).toFixed(1), tc = invalid ? "—" : vals.reduce((a, b) => a + b, 0) * D.fteCapacityPerFte;
    const showSaved = r === "r6/panel-saved";
    return drawerShell("Set FTE", `${showSaved ? saved : ""}<div class="body"><p style="margin-top:0"><b>${S.fteStore}</b><br><span class="sub">Estimated capacity is ${D.fteCapacityPerFte} orders per FTE. Allowed 0–8.</span></p>
      <p style="display:flex;gap:16px"><button class="link" data-act="copy-all">Copy Monday to all days</button><button class="link" data-act="copy-week">Copy Monday to weekdays</button></p>${rows}
      <div class="trow" style="grid-template-columns:110px 110px 1fr;font-weight:700"><span>Total</span><span>${tf}</span><span>Capacity ${tc}</span></div></div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-fte" ${dirty && !invalid ? "" : "disabled"}>Save changes</button></footer>`);
  }

  function splitErr() {
    const g = +S.sp.glovo, w = +S.sp.wolt, rs = +S.sp.reserve;
    const bad = k => S.sp[k].trim() === "" || isNaN(+S.sp[k]) || +S.sp[k] < 0;
    const pool = Math.round(D.split.poolTotal * (1 - (isNaN(rs) ? 0 : rs) / 100));
    const over = !bad("glovo") && !bad("wolt") && g + w > pool;
    return { over, pool, g: bad("glovo") ? "Enter a valid value" : over && g >= w ? "Exceeds the limit" : "", w: bad("wolt") ? "Enter a valid value" : over && w > g ? "Exceeds the limit" : "", r: bad("reserve") || rs > 100 ? "Enter a valid value" : "" };
  }
  function splitDrawer(r) {
    const p = D.split, e = splitErr();
    const dirty = JSON.stringify(S.sp) !== S.spBase, valid = !e.over && !e.g && !e.w && !e.r;
    const u = pct(p.poolUsed, p.poolTotal);
    const seg = (n, c) => `<i style="width:${n / p.poolTotal * 100}%;background:${c}"></i>`;
    return drawerShell("Channel split", `${r === "r9/split-saved" ? saved : ""}<div class="body"><p style="margin-top:0"><b>Bd. Unirii 35</b></p>
      <div style="display:flex;justify-content:space-between"><span>Shared pool</span><b>${p.poolUsed} of ${p.poolTotal} used · ${u}%</b></div>
      <div class="pool" role="img" aria-label="Pool usage">${seg(p.glovo, "var(--brand)")}${seg(p.wolt, "#37b24d")}${seg(p.free, "#b2eebb")}</div>
      <div class="kv"><span><i style="background:var(--brand)"></i>Glovo</span><b>${p.glovo}</b></div><div class="kv"><span><i style="background:#37b24d"></i>Wolt</span><b>${p.wolt}</b></div><div class="kv"><span><i style="background:#b2eebb"></i>Free for marketplaces</span><b>${p.free}</b></div><div class="kv"><span><i style="background:#868e96"></i>Own channels</span><b>${p.own}</b></div><div class="kv"><span><i style="background:#ced4da"></i>Unused protected</span><b>${p.unused}</b></div>
      <h6 style="margin:20px 0 8px;font-size:14px">Limits</h6>
      <div class="field"><label for="sp-r">Reserve for own channels, %</label><input id="sp-r" class="input ${e.r ? "err" : ""}" data-k="sp:reserve" inputmode="decimal" value="${S.sp.reserve}">${e.r ? `<div class="err-msg">${e.r}</div>` : ""}</div>
      <div class="field"><label for="sp-g">Glovo limit</label><input id="sp-g" class="input ${e.g ? "err" : ""}" data-k="sp:glovo" inputmode="decimal" value="${S.sp.glovo}">${e.g ? `<div class="err-msg">${e.g}</div>` : ""}</div>
      <div class="field"><label for="sp-w">Wolt limit</label><input id="sp-w" class="input ${e.w ? "err" : ""}" data-k="sp:wolt" inputmode="decimal" value="${S.sp.wolt}">${e.w ? `<div class="err-msg">${e.w}</div>` : ""}</div>
      <p><b>${p.unused} orders unused</b> <button class="btn light" data-act="noop" title="Not designed yet">Release unused orders</button></p></div>`,
      `<footer class="actions"><button class="btn" data-act="close">Cancel</button><button class="btn filled" data-act="save-sp" ${dirty && valid ? "" : "disabled"}>Save changes</button></footer>`);
  }

  function timeslotDrawer() {
    const s = D.timisoara.slots[4], res = s.cap - s.com - s.av;
    const tabs = ["Capacity", "Resources", "Orders", "Marketplace"];
    const a = s.com / s.cap * 100, b = res / s.cap * 100;
    const body = S.tab === "Capacity" ? `<div class="donut" style="background:conic-gradient(var(--brand) 0 ${a}%, #37b24d ${a}% ${a + b}%, #b2eebb ${a + b}% 100%)" data-label="${pct(s.com + res, s.cap)}%" role="img" aria-label="Utilization ${pct(s.com + res, s.cap)} percent"></div>
      <div class="kv"><span><i style="background:var(--brand)"></i>Committed</span><b>${s.com}</b></div><div class="kv"><span><i style="background:#37b24d"></i>Reserved</span><b>${res}</b></div><div class="kv"><span><i style="background:#b2eebb"></i>Available</span><b>${s.av}</b></div><div class="kv"><span>Capacity</span><b>${s.cap}</b></div><div class="kv"><span>Utilization</span><b>${pct(s.com + res, s.cap)}%</b></div>`
      : `<p class="empty">This tab is not designed yet.</p>`;
    return drawerShell("Timeslot details · " + range(s.r), `<div class="body"><div class="tabs" role="tablist">${tabs.map(t => `<button role="tab" aria-selected="${S.tab === t}" data-act="tab" data-t="${t}">${t}</button>`).join("")}</div>${body}</div>`, "", "Timeslot details");
  }

  // ---------- sign in ----------
  function signin() {
    return `<div class="signin"><form class="card" data-act-submit="signin"><h2 style="margin-bottom:4px"><span class="logo-tile"><svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M5 3h5v12h9v5H5z"/><rect x="12" y="6" width="6" height="6" rx="1"/></svg></span>Stoa</h2><p style="color:var(--dimmed);margin:0 0 20px">Sign in to continue</p>
      <div class="field"><label for="em">Email</label><input id="em" class="input" type="email" autocomplete="username"></div><div class="field"><label for="pw">Password</label><input id="pw" class="input" type="password" autocomplete="current-password"></div><button class="btn filled" style="width:100%" type="submit">Sign in</button></form></div>`;
  }

  // ---------- render ----------
  function drawerFor(r) {
    if (r === "r19/alerts-drawer") return alertsDrawer();
    if (r === "r20/thresholds") return thresholdsDrawer();
    if (r === "r21/restriction") return restrictDrawer();
    if (r.startsWith("r6/panel")) return fteDrawer(r);
    if (r.startsWith("r9/split")) return splitDrawer(r);
    if (r === "r2/timeslot") return timeslotDrawer();
    return "";
  }
  function pageFor(r) {
    const [g] = parts(r);
    if (g === "r24") return signin();
    if (g === "r17") return storeDetail(r, "unirii");
    if (r.startsWith("r9/")) return storeDetail("r17/expanded", "unirii");
    if (g === "r2" && r !== "r2/timeslot" || g === "r7") return storeDetail(g === "r7" ? "r2/collapsed" : r, "timisoara");
    if (r === "r2/timeslot") return storeDetail("r2/collapsed", "timisoara");
    if (g === "store") return otherStore(+parts(r)[1]);
    return allStores(r.startsWith("r19/") && !r.includes("drawer") ? r : "r19/default");
  }
  function protoSwitcher() {
    return `<div class="proto"><button data-act="proto" aria-expanded="${S.protoOpen}">Screens</button>${S.protoOpen ? `<div class="list">${ROUTES.map(([g, l]) => `<h6>${g}</h6>${l.map(([k, n]) => `<a href="#/${k}" ${k === route() ? 'aria-current="page" style="font-weight:700"' : ""}>${n}</a>`).join("")}`).join("")}</div>` : ""}</div>`;
  }
  let triggerEl = null;
  function render() {
    let r = route();
    if (!KNOWN.has(r) && !/^store\/\d+$/.test(r)) { r = "r19/default"; history.replaceState(null, "", "#/" + r); }
    enter(r);
    const dr = drawerFor(r);
    $app.innerHTML = pageFor(r) + `<div id="drawer-root">${dr}</div>` + protoSwitcher();
    if (dr) { const d = $app.querySelector(".drawer"); const c = d.querySelector(".xbtn[data-act=close]"); if (c && !document.activeElement.closest?.(".drawer")) c.focus(); }
    else if (triggerEl && document.contains(triggerEl)) { try { triggerEl.focus(); } catch (e) {} }
    document.body.style.overflow = dr ? "hidden" : "";
  }
  function renderDrawer() {
    const a = document.activeElement, k = a && a.dataset && a.dataset.k, pos = a && a.selectionStart;
    const root = document.getElementById("drawer-root"); if (!root) return;
    root.innerHTML = drawerFor(route());
    if (k) { const n = root.querySelector(`[data-k="${k}"]`); if (n) { n.focus(); try { n.setSelectionRange(pos, pos); } catch (e) {} } }
  }
  const closeTarget = () => { const r = route(); if (r.startsWith("r9/")) return "r17/expanded"; if (r === "r2/timeslot") return "r2/collapsed"; return "r19/default"; };

  // ---------- events ----------
  document.addEventListener("click", ev => {
    const t = ev.target.closest("[data-act]"); const col = ev.target.closest(".col");
    if (!t && !ev.target.closest(".menu-pop") && S.menuPop) { S.menuPop = false; render(); return; }
    if (col && !t) { showTip(col, true); return; }
    if (!t) { if (!ev.target.closest(".proto") && S.protoOpen) { S.protoOpen = false; render(); } return; }
    const a = t.dataset.act; triggerEl = t;
    const r = route();
    switch (a) {
      case "noop": break;
      case "home": go("r19/default"); break;
      case "signout": go("r24/signin"); break;
      case "menu-open": S.mobileMenu = true; render(); break;
      case "menu-close": S.mobileMenu = false; render(); break;
      case "proto": S.protoOpen = !S.protoOpen; render(); break;
      case "att-toggle": {
        if (r.startsWith("r19/")) { const m = { default: "collapsed", collapsed: "default", one: "one-collapsed", "one-collapsed": "one", zero: "zero" }; go("r19/" + m[parts(r)[1]]); }
        else { S.attOpenStore = !S.attOpenStore; render(); }
        break;
      }
      case "alerts": go("r19/alerts-drawer"); break;
      case "thresholds": go("r20/thresholds"); break;
      case "restrict": go("r21/restriction"); break;
      case "menu-pop": S.menuPop = !S.menuPop; render(); break;
      case "page": S.page = +t.dataset.n; render(); break;
      case "store": { const s = D.stores.findIndex(x => x.name === t.dataset.name); const d = D.stores[s].detail; go(d === "timisoara" ? "r2/collapsed" : d === "unirii" ? "r17/expanded" : "store/" + s); break; }
      case "fte": S.fteStore = t.dataset.name; go("r6/panel"); break;
      case "chart-toggle": { const [g, st] = parts(r); go(g + "/" + (st === "expanded" ? "collapsed" : "expanded")); break; }
      case "row": { const i = +t.dataset.i; S.expanded.has(i) ? S.expanded.delete(i) : S.expanded.add(i); render(); break; }
      case "timeslot": go("r2/timeslot"); break;
      case "split": go("r9/split"); break;
      case "tab": S.tab = t.dataset.t; renderDrawer(); break;
      case "afilter": S.alertFilter = t.dataset.k; renderDrawer(); break;
      case "close": go(closeTarget()); break;
      case "rs-toggle": S.rsOn = !S.rsOn; renderDrawer(); break;
      case "resume-now": S.resumed = true; renderDrawer(); break;
      case "save-th": S.thBase = JSON.stringify(S.th); renderDrawer(); break;
      case "save-rs": S.rsBase = JSON.stringify([S.rsOn, S.rsResume]); renderDrawer(); break;
      case "save-fte": S.fteBase = JSON.stringify(S.fte); go("r6/panel-saved"); break;
      case "save-sp": S.spBase = JSON.stringify(S.sp); go("r9/split-saved"); break;
      case "copy-all": S.fte = S.fte.map(() => S.fte[0]); renderDrawer(); break;
      case "copy-week": S.fte = S.fte.map((v, i) => i < 5 ? S.fte[0] : v); renderDrawer(); break;
    }
  });
  document.addEventListener("input", ev => {
    const k = ev.target.dataset && ev.target.dataset.k; if (!k) return;
    const v = ev.target.value;
    if (k === "q") { S.q = v; S.page = 1; render(); const n = $app.querySelector('[data-k="q"]'); n.focus(); n.setSelectionRange(v.length, v.length); return; }
    if (k.startsWith("th:")) S.th[+k.slice(3)] = v;
    else if (k === "rs:resume") S.rsResume = v;
    else if (k.startsWith("sp:")) S.sp[k.slice(3)] = v;
    else if (k.startsWith("fte:")) { S.fte[+k.slice(4)] = v; if (route() === "r6/panel-saved" || route() === "r6/panel-error") history.replaceState(null, "", "#/r6/panel"), lastRoute = "r6/panel"; }
    else return;
    if (route() === "r9/split-saved" || route() === "r9/split-error") { history.replaceState(null, "", "#/r9/split"); lastRoute = "r9/split"; }
    renderDrawer();
  });
  document.addEventListener("change", ev => {
    const k = ev.target.dataset && ev.target.dataset.k; if (!k) return;
    const v = ev.target.value;
    if (k === "region") { S.region = v; S.page = 1; render(); }
    else if (k === "type") { S.type = v; S.page = 1; render(); }
    else if (k === "service") { S.service = v; render(); }
    else if (k === "store") { const s = D.stores.findIndex(x => x.name === v); const d = D.stores[s].detail; const st = parts(route())[1]; go(d === "timisoara" ? "r2/" + (st === "expanded" ? "expanded" : "collapsed") : d === "unirii" ? "r17/expanded" : "store/" + s); }
    else if (k === "period") go(v === "Other days" ? "r7/other-days" : "r2/collapsed");
  });
  document.addEventListener("submit", ev => { if (ev.target.dataset.actSubmit === "signin") { ev.preventDefault(); go("r19/default"); } });
  document.addEventListener("keydown", ev => {
    if (ev.key === "Escape") {
      if (S.menuPop || S.protoOpen) { S.menuPop = S.protoOpen = false; render(); return; }
      $tip.style.display = "none";
      if (document.querySelector(".drawer")) go(closeTarget());
    }
    if (ev.key === "Tab") {
      const d = document.querySelector(".drawer"); if (!d) return;
      const f = [...d.querySelectorAll("button:not([disabled]),input:not([disabled]),select,[tabindex]")].filter(x => x.offsetParent !== null);
      if (!f.length) return; const first = f[0], last = f[f.length - 1];
      if (!d.contains(document.activeElement)) { first.focus(); ev.preventDefault(); }
      else if (ev.shiftKey && document.activeElement === first) { last.focus(); ev.preventDefault(); }
      else if (!ev.shiftKey && document.activeElement === last) { first.focus(); ev.preventDefault(); }
    }
    if ((ev.key === "Enter" || ev.key === " ") && ev.target.classList && ev.target.classList.contains("col")) { ev.preventDefault(); showTip(ev.target, true); }
  });
  // tooltip: hover (desktop), tap (mobile), focus
  function showTip(col, pin) {
    const kind = col.dataset.kind, i = +col.dataset.i;
    const s = (kind === "unirii" ? D.unirii.slots : D.timisoara.slots)[i];
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
