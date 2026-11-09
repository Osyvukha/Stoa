// Shared behaviour for all prototype screens
const STORES = [
  "Korinthou 15, Patras",
  "Vouliagmenis 45, Glyfada",
  "Kifisias 120, Marousi",
  "Patission 88, Athens",
  "Mesogeion 210, Cholargos",
  "Tsimiski 32, Thessaloniki",
];

function renderNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  nav.innerHTML = `
    <div class="navbar__brand">
      <a class="logo" href="index.html" style="color:inherit;text-decoration:none"><img src="assets/logo.svg" width="18" height="21" alt="">AB</a>
      <i class="ti ti-arrow-bar-to-left"></i>
    </div>
    <div class="navbar__label">Main Menu</div>
    <a class="navlink" href="#"><i class="ti ti-search"></i>Orders</a>
    <a class="navlink active" href="index.html"><i class="ti ti-calendar"></i>Capacity</a>
    <a class="navlink" href="#"><i class="ti ti-shopping-cart"></i>In-store picking</a>
    <hr>
    <div class="navbar__label">Tools</div>
    <div class="navlink"><i class="ti ti-world"></i><span class="grow">Language</span>
      <select class="mini-select"><option>Eng</option><option>Ελ</option></select></div>
    <a class="navlink" href="#"><i class="ti ti-logout"></i>Sign Out</a>`;
}

function renderStoreSelect(current) {
  const sel = document.getElementById("store-select");
  if (!sel) return;
  sel.innerHTML = ["All stores", ...STORES]
    .map((s) => `<option ${s === current ? "selected" : ""}>${s}</option>`)
    .join("");
  sel.addEventListener("change", () => {
    location.href = sel.value === "All stores"
      ? "index.html"
      : "store.html?store=" + encodeURIComponent(sel.value);
  });
}

function initSegmented() {
  document.querySelectorAll(".segmented").forEach((group) => {
    group.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      group.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
    });
  });
}

// Single-select chip groups (date row, modal reasons)
function initChipGroup(group, onChange) {
  group.addEventListener("click", (e) => {
    const c = e.target.closest(".chip");
    if (!c || c.disabled) return;
    group.querySelectorAll(".chip").forEach((x) => x.classList.toggle("checked", x === c));
    onChange && onChange(c);
  });
}

function chip(label, { checked = false, disabled = false } = {}) {
  return `<button type="button" class="chip ${checked ? "checked" : ""}" ${disabled ? "disabled" : ""}><i class="ti ti-check"></i>${label}</button>`;
}

function renderDays() {
  const el = document.getElementById("days");
  if (!el) return;
  const days = ["Today", "Fri 16", "Sat 17", "Sun 18", "Mon 19", "Tue 20", "Wed 21"];
  el.innerHTML = days.map((d, i) => chip(d, { checked: i === 0, disabled: d === "Sun 18" })).join("");
  initChipGroup(el);
}

let toastTimer;
function toast(msg, type = "success") {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.className = "toast " + (type === "info" ? "info" : "");
  t.innerHTML = `<i class="ti ${type === "info" ? "ti-info-circle" : "ti-circle-check"}"></i><span>${msg}</span>`;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  initSegmented();
  renderDays();
  document.querySelectorAll("[data-dismiss]").forEach((b) =>
    b.addEventListener("click", () => b.closest(b.dataset.dismiss).remove())
  );
});
