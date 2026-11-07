const BASE_SHIFTS = [
  { id: 'a', name: 'Shift A (FT)', hours: '08:00 – 12:00', pickers: 3, slots: [
    ['08:00 – 09:00 (FT)', 3, 90, 80, 5, 92, 3], ['09:00 – 10:00', 3, 80, 70, 5, 104, 12],
    ['10:00 – 11:00', 3, 50, 50, 0, 61, 2], ['11:00 – 12:00', 3, 90, 80, 5, 118, 22] ] },
  { id: 'b', name: 'Shift B', hours: '12:00 – 16:00', pickers: 4, slots: [
    ['12:00 – 13:00', 3, 100, 50, 20, 143, 25], ['13:00 – 14:00', 3, 110, 100, 5, 97, 9],
    ['14:00 – 15:00', 3, 40, 40, 0, 46, 1], ['15:00 – 16:00', 3, 80, 70, 5, 85, 6] ] },
  { id: 'c', name: 'Shift C', hours: '16:00 – 19:00', pickers: 2, slots: [
    ['16:00 – 17:00', 3, 50, 50, 0, 58, 4], ['17:00 – 18:00', 3, 90, 80, 5, 112, 15],
    ['18:00 – 19:00', 3, 100, 50, 20, 131, 20] ] }
];
/* Example data. Every store's slots add up to its row in the All stores table. */
const STORES = [
  { name: 'Korinthou 15, Patras', cap: 0, booked: 0, avail: 0, fullSlots: 0, fc: 420, ex: 'No capacity', exClass: '', status: 'No pickers', tone: 'none', off: true },
  { name: 'Vouliagmenis 45, Glyfada', cap: 760, booked: 745, avail: 15, fullSlots: 6, fc: 980, ex: '+29%', exClass: 'extra-high', status: 'Almost full', tone: 'full' },
  { name: 'Kifisias 120, Marousi', cap: 880, booked: 790, avail: 90, fullSlots: 3, fc: 1047, ex: '+19%', exClass: 'extra-high', status: 'High demand', tone: 'low' },
  { name: 'Patission 88, Athens', cap: 640, booked: 560, avail: 80, fullSlots: 2, fc: 690, ex: '+8%', exClass: 'extra-mid', status: 'High demand', tone: 'low' },
  { name: 'Mesogeion 210, Cholargos', cap: 700, booked: 490, avail: 210, fullSlots: 0, fc: 610, ex: '−13%', exClass: 'extra-ok', status: 'On track', tone: 'ok' },
  { name: 'Tsimiski 32, Thessaloniki', cap: 820, booked: 520, avail: 300, fullSlots: 0, fc: 640, ex: '−22%', exClass: 'extra-ok', status: 'On track', tone: 'ok' },
  { name: 'Alexandras 50, Athens', cap: 640, booked: 610, avail: 30, fullSlots: 4, fc: 702, ex: '+10%', exClass: 'extra-mid', status: 'High demand', tone: 'low' },
  { name: 'Kifisias 300, Kifisia', cap: 720, booked: 700, avail: 20, fullSlots: 7, fc: 860, ex: '+19%', exClass: 'extra-high', status: 'Almost full', tone: 'full' },
  { name: 'Vasilissis Sofias 12, Athens', cap: 680, booked: 400, avail: 280, fullSlots: 0, fc: 520, ex: '−24%', exClass: 'extra-ok', status: 'On track', tone: 'ok' },
  { name: 'Ethnikis Antistaseos 8, Nea Smyrni', cap: 600, booked: 540, avail: 60, fullSlots: 2, fc: 650, ex: '+8%', exClass: 'extra-mid', status: 'High demand', tone: 'low' },
  { name: 'Egnatias 154, Thessaloniki', cap: 600, booked: 590, avail: 10, fullSlots: 8, fc: 720, ex: '+20%', exClass: 'extra-high', status: 'Almost full', tone: 'full' },
  { name: 'Iroon Polytechniou 55, Piraeus', cap: 560, booked: 380, avail: 180, fullSlots: 0, fc: 470, ex: '−16%', exClass: 'extra-ok', status: 'On track', tone: 'ok' },
  { name: 'Thiseos 100, Kallithea', cap: 620, booked: 500, avail: 120, fullSlots: 1, fc: 600, ex: '−3%', exClass: 'extra-ok', status: 'On track', tone: 'ok' },
  { name: 'Marathonos 20, Pallini', cap: 520, booked: 470, avail: 50, fullSlots: 3, fc: 575, ex: '+11%', exClass: 'extra-mid', status: 'High demand', tone: 'low' },
  { name: 'Dimokratias 15, Larissa', cap: 600, booked: 420, avail: 180, fullSlots: 0, fc: 500, ex: '−17%', exClass: 'extra-ok', status: 'On track', tone: 'ok' },
  { name: '25is Avgoustou 30, Heraklion', cap: 660, booked: 650, avail: 10, fullSlots: 9, fc: 780, ex: '+18%', exClass: 'extra-high', status: 'Almost full', tone: 'full' },
  { name: 'Akti Dymaion 60, Patras', cap: 540, booked: 360, avail: 180, fullSlots: 0, fc: 430, ex: '−20%', exClass: 'extra-ok', status: 'On track', tone: 'ok' },
  { name: 'Irakleiou 400, Nea Ionia', cap: 580, booked: 520, avail: 60, fullSlots: 3, fc: 640, ex: '+10%', exClass: 'extra-mid', status: 'High demand', tone: 'low' },
  { name: 'Gounari 4, Ioannina', cap: 480, booked: 300, avail: 180, fullSlots: 0, fc: 350, ex: '−27%', exClass: 'extra-ok', status: 'On track', tone: 'ok' },
  { name: 'Lampraki 200, Glyfada', cap: 700, booked: 690, avail: 10, fullSlots: 8, fc: 830, ex: '+19%', exClass: 'extra-high', status: 'Almost full', tone: 'full' },
  { name: 'Agiou Dimitriou 81, Kalamata', cap: 500, booked: 330, avail: 170, fullSlots: 0, fc: 410, ex: '−18%', exClass: 'extra-ok', status: 'On track', tone: 'ok' }
];
const COLLECT_ONLY = ['Korinthou 15', 'Marathonos 20', 'Iroon Polytechniou 55', 'Gounari 4'];
const DELIVERY_ONLY = ['25is Avgoustou 30', 'Alexandras 50', 'Irakleiou 400', 'Dimokratias 15', 'Agiou Dimitriou 81'];
STORES.forEach(s => {
  s.ful = COLLECT_ONLY.some(n => s.name.startsWith(n)) ? ['Collect'] : DELIVERY_ONLY.some(n => s.name.startsWith(n)) ? ['Delivery'] : ['Delivery', 'Collect'];
});
const RANK = { 'No pickers': 0, 'Almost full': 1, 'High demand': 2, 'On track': 3 };
STORES.sort((a, b) => (RANK[a.status] - RANK[b.status]) || ((b.cap ? b.booked / b.cap : 0) - (a.cap ? a.booked / a.cap : 0)));
const ALL_TOTALS = ['cap', 'booked', 'avail', 'fc'].reduce((t, k) => (t[k] = STORES.reduce((s, x) => s + x[k], 0), t), {});

function spread(total, weights) {
  const sum = weights.reduce((a, b) => a + b, 0);
  const out = weights.map(w => sum ? Math.floor(total * w / sum) : 0);
  let rest = total - out.reduce((a, b) => a + b, 0);
  for (let i = 0; rest > 0; i = (i + 1) % out.length) { if (weights[i]) { out[i]++; rest--; } }
  return out;
}
function shiftsFor(store) {
  const copy = BASE_SHIFTS.map(s => ({ ...s, slots: s.slots.map(r => [...r]) }));
  if (store.name.startsWith('Kifisias')) return copy;
  const rows = copy.flatMap(s => s.slots);
  const weights = rows.map(r => r[2]);
  const caps = spread(store.cap, weights), fcs = spread(store.fc, weights);
  const fullSet = new Set([2, 6, 8, 0, 4, 9].slice(0, store.fullSlots));
  const openWeights = caps.map((c, i) => fullSet.has(i) ? 0 : c);
  const left = spread(store.avail, openWeights);
  rows.forEach((r, i) => {
    const booked = caps[i] - left[i], reserved = Math.round(booked * .08);
    r[2] = caps[i]; r[3] = booked - reserved; r[4] = reserved; r[5] = fcs[i];
    if (store.off) r[6] = null;
  });
  if (store.off) copy.forEach(s => { s.pickers = 0; });
  return copy;
}
let SHIFTS = [];
let currentStore = null;
const REASONS = ['Staff shortage', 'Vehicle issue', 'High demand', 'Store event', 'Other'];
const $ = id => document.getElementById(id);
const icon = n => `<svg class="icon"><use href="#i-${n}"/></svg>`;

function numberInput(id, value, label, kind) {
  return `<div class="number" data-kind="${kind}"><input id="${id}" type="text" inputmode="numeric" value="${value}" data-saved="${value}" aria-label="${label}">
    <div class="steps"><button type="button" data-step="1" tabindex="-1" aria-label="Increase ${label}">${icon('chev-up')}</button><button type="button" data-step="-1" tabindex="-1" aria-label="Decrease ${label}">${icon('chev-down')}</button></div></div>`;
}
function badge(left, cap) {
  if (!cap) return '<span class="badge none">No capacity</span>';
  if (left <= 0) return '<span class="badge full">Full</span>';
  return `<span class="badge ${left >= 20 ? 'ok' : 'low'}">${left} left</span>`;
}
function extraClass(p) { return p >= 20 ? 'extra-high' : p >= 9 ? 'extra-mid' : 'extra-ok'; }

function renderRows() {
  $('rows').innerHTML = SHIFTS.map(s => `
  <tr class="shift-row" data-shift="${s.id}">
    <td class="shift-cell"><div class="shift-inner">
      <button class="toggle" type="button" data-toggle="${s.id}" aria-expanded="${!!s.open}" aria-label="${s.name} time slots">${icon('chev-down')}</button>
      <span class="two-line">${s.name}<small>${s.hours}</small></span>
    </div></td>
    <td>${numberInput('pickers-' + s.id, s.pickers, s.name + ' pickers', 'pickers')}</td>
    <td colspan="7"><span class="unsaved" id="unsaved-${s.id}" hidden></span></td>
  </tr>` + s.slots.map((r, i) => {
    const left = r[2] - r[3] - r[4];
    return `<tr data-slot-of="${s.id}"${s.open ? '' : ' hidden'}>
      <td class="blank"></td><td class="blank"></td><td class="c-time">${r[0]}</td>
      <td class="c-row c-del" data-label="Delivery:">${numberInput(`delivery-${s.id}-${i}`, r[1], `Delivery ${r[0]}`, 'delivery')}</td>
      <td class="c-group">Capacity (orders)</td><td class="c-row" data-label="Total:">${r[2]}</td><td class="c-row" data-label="Used:">${r[3]}</td><td class="c-row" data-label="Reserved:">${r[4]}</td><td class="c-avail">${badge(left, r[2])}</td>
      <td class="c-row c-fc" data-label="Orders forecast:"><span class="two-line">${r[5]}${r[6] == null ? '' : `<small class="${extraClass(r[6])}">+${r[6]}% extra</small>`}</span></td>
    </tr>`; }).join('')).join('');
}

$('reasons').innerHTML = REASONS.map(r => `<button class="chip" type="button" data-reason="${r}" aria-pressed="false">${icon('check')}${r}</button>`).join('');

/* Single-select groups: shows selection only, the example data stays the same. */
document.querySelectorAll('[data-single]').forEach(g => g.addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b || b.disabled) return;
  g.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
}));

/* Store page controls, as in Figma "Store page — Controls states":
   1 Delivery · Internal · Today → Fast | Same day
   2 Delivery · Internal · other day → Next day only
   3 Delivery · External (Bolt, Wolt) → Today only, Same day only
   4 Collect → no order source or delivery type */
const ctl = { ful: 'Delivery', src: 'Internal orders', type: 'Fast delivery', period: 'Today' };
function segment(id, options, value, key) {
  const el = $(id);
  el.innerHTML = options.map(o => `<button type="button" aria-pressed="${o === value}">${o}</button>`).join('');
  el.classList.toggle('single', options.length === 1);
  el.onclick = e => {
    const b = e.target.closest('button');
    if (!b || b.getAttribute('aria-pressed') === 'true') return;
    ctl[key] = b.textContent;
    renderControls();
  };
}
function renderControls() {
  if (!currentStore) return;
  const fulOpts = currentStore.ful;
  if (!fulOpts.includes(ctl.ful)) ctl.ful = fulOpts[0];
  const srcOpts = ctl.period === 'Today' ? ['Internal orders', 'External orders'] : ['Internal orders'];
  if (!srcOpts.includes(ctl.src)) ctl.src = srcOpts[0];
  const typeOpts = ctl.src === 'External orders' ? ['Same day delivery']
    : ctl.period === 'Today' ? ['Fast delivery', 'Same day delivery'] : ['Next day delivery'];
  if (!typeOpts.includes(ctl.type)) ctl.type = typeOpts[0];
  segment('seg-ful', fulOpts, ctl.ful, 'ful');
  segment('seg-src', srcOpts, ctl.src, 'src');
  segment('seg-type', typeOpts, ctl.type, 'type');
  const collect = ctl.ful === 'Collect';
  $('seg-src').hidden = collect;
  $('seg-type').hidden = collect;
}

$('menu-toggle').addEventListener('click', () => {
  const c = $('app').classList.toggle('collapsed');
  $('menu-toggle').setAttribute('aria-label', c ? 'Expand menu' : 'Collapse menu');
});
document.querySelectorAll('[data-soon]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault(); toast('This prototype covers the Capacity screen only.');
}));

/* Select: Mantine Select anatomy with a custom dropdown */
$('store').dataset.options = ['All stores', ...STORES.map(s => s.name).sort((a, b) => a.localeCompare(b))].join('|');
document.querySelectorAll('.select').forEach(root => {
  const options = root.dataset.options.split('|');
  root.innerHTML = `<button class="select-control" id="${root.id}-control" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="${root.id}-list" aria-label="${root.dataset.label}"><span class="select-value">${options[0]}</span>${icon('chev-down')}</button>
    <ul class="select-list" id="${root.id}-list" role="listbox" aria-label="${root.dataset.label}" hidden>${options.map((o, i) => `<li role="option" aria-selected="${i === 0}">${icon('check')}<span>${o}</span></li>`).join('')}</ul>`;
  const control = root.querySelector('button'), list = root.querySelector('ul'), items = [...list.children];
  let active = 0;
  const mark = i => { active = (i + items.length) % items.length; items.forEach((x, n) => x.classList.toggle('active', n === active)); };
  const setOpen = open => {
    list.hidden = !open; control.setAttribute('aria-expanded', open);
    if (open) mark(items.findIndex(x => x.getAttribute('aria-selected') === 'true'));
  };
  const choose = i => {
    items.forEach((x, n) => x.setAttribute('aria-selected', n === i));
    control.querySelector('.select-value').textContent = options[i];
    setOpen(false); control.focus();
    root.dispatchEvent(new CustomEvent('choose', { detail: options[i] }));
  };
  root.setValue = v => {
    const i = options.indexOf(v);
    items.forEach((x, n) => x.setAttribute('aria-selected', n === i));
    control.querySelector('.select-value').textContent = v;
  };
  control.addEventListener('click', () => setOpen(list.hidden));
  items.forEach((x, i) => x.addEventListener('click', () => choose(i)));
  control.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !list.hidden) { e.preventDefault(); e.stopPropagation(); setOpen(false); }
    else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (list.hidden) setOpen(true); else mark(active + (e.key === 'ArrowDown' ? 1 : -1));
    } else if ((e.key === 'Enter' || e.key === ' ') && !list.hidden) { e.preventDefault(); choose(active); }
  });
  document.addEventListener('click', e => { if (!root.contains(e.target)) setOpen(false); });
});

/* Table */
const deliveryInputs = () => [...document.querySelectorAll('.number[data-kind="delivery"] input')];
const isChanged = i => Number(i.value) !== Number(i.dataset.saved);
const changedDelivery = () => deliveryInputs().filter(isChanged);

const isZero = i => i.value !== '' && Number(i.value) === 0;

function applyGreyOut() {
  SHIFTS.forEach(s => {
    const off = isZero($('pickers-' + s.id));
    document.querySelector(`.shift-row[data-shift="${s.id}"]`).classList.toggle('off', off);
    document.querySelectorAll(`[data-slot-of="${s.id}"]`).forEach(row => {
      const inp = row.querySelector('input');
      row.classList.toggle('off', off || isZero(inp));
      /* No pickers means no delivery to edit. A slot at 0 stays editable so it can be reopened. */
      inp.disabled = off;
      row.querySelectorAll('.steps button').forEach(b => { b.disabled = off; });
    });
  });
}

function setShift(s, open) {
  s.open = open;
  document.querySelector(`[data-toggle="${s.id}"]`).setAttribute('aria-expanded', open);
  document.querySelectorAll(`[data-slot-of="${s.id}"]`).forEach(r => { r.hidden = !open; });
}

function refresh() {
  applyGreyOut();
  document.querySelectorAll('.number input').forEach(i => i.parentElement.classList.toggle('changed', isChanged(i)));
  SHIFTS.forEach(s => {
    const n = deliveryInputs().filter(i => i.id.startsWith(`delivery-${s.id}-`) && isChanged(i)).length;
    const el = $('unsaved-' + s.id);
    el.hidden = s.open || !n;
    el.textContent = `${n} unsaved ${n === 1 ? 'change' : 'changes'}`;
  });
}
$('rows').addEventListener('click', e => {
  const t = e.target.closest('[data-toggle]');
  if (t) {
    const s = SHIFTS.find(x => x.id === t.dataset.toggle);
    setShift(s, !s.open);
    refresh();
    return;
  }
  const b = e.target.closest('[data-step]');
  if (b) {
    const inp = b.closest('.number').querySelector('input');
    inp.value = Math.max(0, (parseInt(inp.value, 10) || 0) + Number(b.dataset.step));
    refresh();
  }
});
$('rows').addEventListener('input', e => {
  if (!e.target.matches('.number input')) return;
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
  refresh();
});
$('rows').addEventListener('focusout', e => {
  if (e.target.matches('.number input') && e.target.value === '') { e.target.value = e.target.dataset.saved; refresh(); }
});
$('rows').addEventListener('keydown', e => {
  if (!e.target.matches('.number input') || !['ArrowUp', 'ArrowDown'].includes(e.key)) return;
  e.preventDefault();
  e.target.value = Math.max(0, (parseInt(e.target.value, 10) || 0) + (e.key === 'ArrowUp' ? 1 : -1));
  refresh();
});

function commit() {
  document.querySelectorAll('.number input').forEach(i => { i.value = Number(i.value); i.dataset.saved = i.value; });
  SHIFTS.forEach(s => {
    s.pickers = Number($('pickers-' + s.id).value);
    s.slots.forEach((r, n) => { r[1] = Number($(`delivery-${s.id}-${n}`).value); });
  });
  refresh();
}
function toast(text, success) {
  $('toast-text').textContent = text;
  $('toast').classList.toggle('success', !!success);
  $('toast-icon').innerHTML = `<use href="#i-${success ? 'check' : 'info'}"/>`;
  $('toast').hidden = false;
  clearTimeout(toast.t);
  toast.t = setTimeout(() => { $('toast').hidden = true; }, 4000);
}

$('save').addEventListener('click', () => {
  const n = changedDelivery().length;
  if (n) return openDrawer(n);
  const others = [...document.querySelectorAll('.number[data-kind="pickers"] input')].some(isChanged);
  if (others) { commit(); toast('Changes saved.', true); }
  else toast('No changes to save. Change a Delivery number first.');
});

/* Drawer */
const selected = () => [...$('reasons').querySelectorAll('[aria-pressed="true"]')].map(b => b.dataset.reason);
function syncDetails() {
  const other = selected().includes('Other');
  $('details-req').hidden = !other;
  if (!other || $('details').value.trim()) { $('details-error').hidden = true; $('details').classList.remove('invalid'); }
}
function openDrawer(n) {
  $('toast').hidden = true;
  $('changed-count').textContent = `${n} ${n === 1 ? 'slot' : 'slots'} changed`;
  document.body.classList.add('open');
  document.documentElement.style.overflow = 'hidden';
  $('app').inert = true; $('drawer').inert = false;
  $('drawer-title').focus();
}
function closeDrawer() {
  document.body.classList.remove('open');
  document.documentElement.style.overflow = '';
  $('app').inert = false; $('drawer').inert = true;
  $('save').focus();
}
function resetForm() {
  $('reasons').querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', 'false'));
  $('details').value = '';
  $('reason-error').hidden = true;
  syncDetails();
}
$('reasons').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true');
  if (selected().length) $('reason-error').hidden = true;
  syncDetails();
});
$('details').addEventListener('input', syncDetails);
['drawer-close', 'drawer-cancel', 'overlay'].forEach(id => $(id).addEventListener('click', closeDrawer));
document.addEventListener('keydown', e => {
  if (!document.body.classList.contains('open')) return;
  if (e.key === 'Escape') return closeDrawer();
  if (e.key !== 'Tab') return;
  const items = [...$('drawer').querySelectorAll('button, textarea')].filter(x => !x.disabled);
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && (document.activeElement === first || document.activeElement === $('drawer-title'))) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
$('reason-form').addEventListener('submit', e => {
  e.preventDefault();
  const reasons = selected();
  const noReason = !reasons.length;
  const noDetails = reasons.includes('Other') && !$('details').value.trim();
  $('reason-error').hidden = !noReason;
  $('details-error').hidden = !noDetails;
  $('details').classList.toggle('invalid', noDetails);
  if (noReason) return $('reasons').querySelector('button').focus();
  if (noDetails) return $('details').focus();
  const n = changedDelivery().length;
  commit();
  closeDrawer();
  resetForm();
  toast(`Saved ${n} delivery ${n === 1 ? 'change' : 'changes'}. Reason: ${reasons.join(', ')}.`, true);
});
/* Mobile: burger menu, and only Shift A starts open as in Figma */
const mobile = matchMedia('(max-width: 760px)');
function setMenu(open) {
  $('app').classList.toggle('menu-open', open);
  document.documentElement.style.overflow = open ? 'hidden' : '';
  (open ? $('menu-close') : $('burger')).focus({ preventScroll: true });
}
$('burger').addEventListener('click', () => setMenu(true));
$('menu-close').addEventListener('click', () => setMenu(false));
document.querySelectorAll('.menu a.nav').forEach(a => a.addEventListener('click', () => { if (mobile.matches) setMenu(false); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('app').classList.contains('menu-open')) setMenu(false); });
function applyDefaults() {
  $('app').classList.remove('menu-open', 'collapsed');
  if (!document.body.classList.contains('open')) document.documentElement.style.overflow = '';
  if (!SHIFTS.length) return;
  setShift(SHIFTS[0], true);
  setShift(SHIFTS[1], !mobile.matches);
  setShift(SHIFTS[2], false);
  refresh();
}
mobile.addEventListener('change', applyDefaults);

/* All stores overview, then a selected store */
const fmt = n => n.toLocaleString('en-US');
function setKpis(v) {
  $('kpi-cap').textContent = fmt(v.cap); $('kpi-booked').textContent = fmt(v.booked);
  $('kpi-avail').textContent = fmt(v.avail); $('kpi-fc').textContent = fmt(v.fc);
}
$('store-rows').innerHTML = STORES.map((s, i) => `
  <tr class="store-row${s.off ? ' off' : ''}">
    <td class="s-name"><button class="store-link" type="button" data-open-store="${i}">${s.name}</button></td>
    <td class="c-row" data-label="Fulfilment:">${s.ful.join(', ')}</td>
    <td class="c-row" data-label="Used:"><div class="booked"><span>${s.cap ? `${fmt(s.booked)} of ${fmt(s.cap)}` : '–'}</span><div class="bar"><i style="width:${s.cap ? Math.round(s.booked / s.cap * 100) : 0}%"></i></div></div></td>
    <td class="c-row" data-label="Available:">${s.avail}</td>
    <td class="c-row" data-label="Full slots:">${s.cap ? `${s.fullSlots} of 11` : '–'}</td>
    <td class="c-row" data-label="Orders forecast:"><span class="two-line">${fmt(s.fc)}<small class="${s.exClass}">${s.ex}${s.off ? '' : '<span class="vs"> vs capacity</span>'}</small></span></td>
    <td class="s-status"><span class="badge ${s.tone}">${s.status}</span></td>
  </tr>`).join('');

$('stores-title').textContent = `Stores (${STORES.length})`;
const storesScroll = document.querySelector('.stores-scroll');
const updateFade = () => $('stores-frame').classList.toggle('at-end', storesScroll.scrollTop + storesScroll.clientHeight >= storesScroll.scrollHeight - 2);
storesScroll.addEventListener('scroll', updateFade, { passive: true });
function fitStores() {
  storesScroll.style.maxHeight = '';
  if (mobile.matches || $('stores-view').hidden) return;
  const top = storesScroll.getBoundingClientRect().top + window.scrollY;
  storesScroll.style.maxHeight = Math.max(320, innerHeight - top - 48) + 'px';
  const over = document.documentElement.scrollHeight - innerHeight;
  if (over > 0) storesScroll.style.maxHeight = Math.max(320, storesScroll.clientHeight - over) + 'px';
  updateFade();
}
window.addEventListener('resize', fitStores);

function showStore(store) {
  currentStore = store;
  $('app').classList.toggle('overview', !store);
  $('stores-view').hidden = !!store;
  if ($('store-controls')) $('store-controls').hidden = !store;
  $('store-view').hidden = !store;
  $('store').setValue(store ? store.name : 'All stores');
  setKpis(store || ALL_TOTALS);
  if (store) {
    $('store-title').textContent = store.name;
    $('store-ful').querySelector('b').textContent = store.ful.join(', ');
    renderControls();
    store.shifts = store.shifts || shiftsFor(store);
    SHIFTS = store.shifts;
    renderRows();
    applyDefaults();
  } else {
    SHIFTS = [];
    $('rows').innerHTML = '';
  }
  $('toast').hidden = true;
  window.scrollTo(0, 0);
  if (!store) { storesScroll.scrollTop = 0; requestAnimationFrame(fitStores); }
}
let pendingStore;
const hasEdits = () => [...document.querySelectorAll('#rows .number input')].some(isChanged);
function requestStore(store) {
  if (store === currentStore) return;
  if (!hasEdits()) return showStore(store);
  pendingStore = store;
  $('store').setValue(currentStore.name);
  $('confirm').hidden = false;
  $('app').inert = true;
  $('confirm-keep').focus();
}
function closeConfirm() { $('confirm').hidden = true; $('app').inert = false; $('store-control').focus(); }
$('confirm-keep').addEventListener('click', closeConfirm);
$('confirm-discard').addEventListener('click', () => { closeConfirm(); showStore(pendingStore); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('confirm').hidden) closeConfirm(); });
$('store').addEventListener('choose', e => requestStore(STORES.find(s => s.name === e.detail) || null));
$('store-rows').addEventListener('click', e => {
  const b = e.target.closest('[data-open-store]');
  if (b) requestStore(STORES[Number(b.dataset.openStore)]);
});
$('period').addEventListener('choose', e => { ctl.period = e.detail; renderControls(); });
/* Mobile keeps the switches above the card, desktop inside it under the toolbar */
function placeControls() {
  const c = $('store-controls'), paper = $('store-view');
  if (mobile.matches) paper.before(c); else paper.querySelector('.ful-row').after(c);
  c.hidden = !currentStore;
}
mobile.addEventListener('change', placeControls);
const deep = new URLSearchParams(location.search).get('store');
showStore(STORES.find(s => s.name === deep) || null);
placeControls();
