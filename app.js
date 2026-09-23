const suppliers = [
  { id: "aah", label: "AAH" },
  { id: "alliance", label: "Alliance" },
  { id: "bs", label: "B&S" },
  { id: "ethigen", label: "Ethigen" },
  { id: "otcd", label: "OTCD" },
  { id: "phoenix", label: "Phoenix" },
  { id: "trident", label: "Trident" },
  { id: "lexon", label: "Lexon" }
];

const catalogue = [
  { id: "p1", name: "Bendroflumethiazide 2.5mg tabs (28)", pip: "1082536", initialQuantity: 28, tariff: 0.58, selectedSupplier: null, prices: { aah: 0.19, alliance: 0.12, bs: 0.05, ethigen: null, otcd: 0.06, phoenix: 0.05, trident: 0.05, lexon: 0.17 } },
  { id: "p2", name: "Atendronic acid Once Weekly 70mg tabs (4)", pip: "1119197", initialQuantity: 31, tariff: 0.95, selectedSupplier: null, prices: { aah: 0.75, alliance: 0.68, bs: 0.43, ethigen: null, otcd: 0.65, phoenix: 0.46, trident: 0.44, lexon: 0.51 } },
  { id: "p3", name: "Ascorbic acid 50mg tabs (28)", pip: "1118116", initialQuantity: 22, tariff: 41.81, selectedSupplier: null, prices: { aah: 27.36, alliance: 24.21, bs: 0.49, ethigen: null, otcd: 27.59, phoenix: 41.56, trident: 21.18, lexon: 43.98 } },
  { id: "p4", name: "Alfacalcidol 0.25mcg caps (30)", pip: "1084706", initialQuantity: 30, tariff: 3.93, selectedSupplier: null, prices: { aah: 1.08, alliance: 1.19, bs: 0.70, ethigen: null, otcd: 1.19, phoenix: 0.86, trident: 1.05, lexon: 0.97 } },
  { id: "p5", name: "Alfuzosin 2.5mg tabs (60)", pip: "1129741", initialQuantity: 4, tariff: 1.30, selectedSupplier: null, prices: { aah: 0.87, alliance: 1.09, bs: 0.80, ethigen: null, otcd: 1.09, phoenix: 0.78, trident: 0.80, lexon: 6.51 } },
  { id: "p6", name: "Alfacalcidol 0.5mcg caps (30)", pip: "1098110", initialQuantity: 10, tariff: 7.61, selectedSupplier: null, prices: { aah: 1.77, alliance: 2.19, bs: 1.66, ethigen: null, otcd: 1.12, phoenix: 2.02, trident: 1.68, lexon: 1.73 } },
  { id: "p7", name: "Alfuzosin XL 10mg tabs (30)", pip: "1129725", initialQuantity: 9, tariff: 12.51, selectedSupplier: null, prices: { aah: 2.94, alliance: 2.95, bs: 1.49, ethigen: null, otcd: 2.95, phoenix: 3.26, trident: 3.32, lexon: 6.53 } },
  { id: "p8", name: "Codeine linctus (200ml)", pip: "1030949", initialQuantity: 18, tariff: 2.40, selectedSupplier: null, prices: { aah: 1.80, alliance: null, bs: 2.26, ethigen: null, otcd: null, phoenix: 2.48, trident: null, lexon: 16.00 } },
  { id: "p9", name: "Itracozole 100mg caps (15)", pip: "1116367", initialQuantity: 15, tariff: 4.70, selectedSupplier: null, prices: { aah: 2.43, alliance: 2.62, bs: 2.94, ethigen: null, otcd: 2.62, phoenix: 12.38, trident: 2.44, lexon: 6.98 } },
  { id: "p10", name: "Balneum cream (50g)", pip: "3509544", initialQuantity: 17, tariff: 2.85, selectedSupplier: null, prices: { aah: 2.85, alliance: 2.85, bs: 2.79, ethigen: null, otcd: null, phoenix: 2.78, trident: null, lexon: null } },
  { id: "p11", name: "Optive 0.5% eye drops (10ml) *PI*", pip: "5702279", initialQuantity: 26, tariff: 6.12, selectedSupplier: null, prices: { aah: 6.68, alliance: null, bs: 6.29, ethigen: null, otcd: 7.45, phoenix: 6.92, trident: 7.05, lexon: 7.07 } },
  { id: "p12", name: "Angitil SR 90mg caps (56)", pip: "2129955", initialQuantity: 32, tariff: 7.03, selectedSupplier: null, prices: { aah: 6.75, alliance: 7.03, bs: 6.50, ethigen: null, otcd: null, phoenix: 6.85, trident: null, lexon: null } },
  { id: "p13", name: "Aripro emollient aerosol spray (250ml)", pip: "3673894", initialQuantity: 29, tariff: 5.90, selectedSupplier: null, prices: { aah: 6.60, alliance: null, bs: null, ethigen: null, otcd: null, phoenix: 6.53, trident: null, lexon: null } },
  { id: "p14", name: "Alendronic acid+colecalciferol 70mg/70mcg tabs (4)", pip: "1218825", initialQuantity: 3, tariff: 22.80, selectedSupplier: null, prices: { aah: 22.80, alliance: 6.99, bs: null, ethigen: null, otcd: 6.99, phoenix: 8.76, trident: null, lexon: null } },
  { id: "p15", name: "prosyn 500mg tabs (56)", pip: "2200301", initialQuantity: 7, tariff: 8.56, selectedSupplier: null, prices: { aah: 7.53, alliance: 7.49, bs: null, ethigen: null, otcd: null, phoenix: 7.45, trident: null, lexon: null } },
  { id: "p16", name: "Alendronic acid 70mg/100ml unit dose oral soln SF (4)", pip: "1160597", initialQuantity: 41, tariff: 29.71, selectedSupplier: null, prices: { aah: 26.07, alliance: 27.77, bs: 9.16, ethigen: null, otcd: 10.74, phoenix: 14.79, trident: null, lexon: 7.89 } },
  { id: "p17", name: "Activa unisex patterned sock lge cl2 (2)", pip: "3570058", initialQuantity: 2, tariff: 10.15, selectedSupplier: null, prices: { aah: 10.55, alliance: 10.61, bs: null, ethigen: null, otcd: null, phoenix: 11.11, trident: null, lexon: null } },
  { id: "p18", name: "SMA PRO follow on milk powder (800g)", pip: "3473915", initialQuantity: 2, tariff: 11.00, selectedSupplier: null, prices: { aah: 11.60, alliance: null, bs: null, ethigen: null, otcd: null, phoenix: 11.29, trident: null, lexon: null } },
  { id: "p19", name: "Activa leg ulcer liner pack c/toe 10mmHg XXlge black (3)", pip: "3870847", initialQuantity: 35, tariff: 18.84, selectedSupplier: null, prices: { aah: 16.15, alliance: 16.24, bs: null, ethigen: null, otcd: null, phoenix: 17.00, trident: null, lexon: null } },
  { id: "p20", name: "Aquacel Ag Ribbon 2cmx45cm", pip: "2926434", initialQuantity: 1, tariff: 22.00, selectedSupplier: null, prices: { aah: 24.23, alliance: 25.50, bs: 24.30, ethigen: null, otcd: 22.40, phoenix: null, trident: null, lexon: null } },
  { id: "p21", name: "Beambridge Leg bag 6-95 long tube 750ml (10)", pip: "3739752", initialQuantity: 46, tariff: 32.64, selectedSupplier: null, prices: { aah: 29.86, alliance: null, bs: null, ethigen: null, otcd: null, phoenix: 26.80, trident: null, lexon: null } },
  { id: "p22", name: "Actilymph b/knee op/toe std black lge cl2 (2)", pip: "3428364", initialQuantity: 27, tariff: 31.41, selectedSupplier: null, prices: { aah: 26.94, alliance: 27.10, bs: null, ethigen: null, otcd: null, phoenix: 28.36, trident: null, lexon: null } },
  { id: "p23", name: "Assura Inspire 12136 midi transp colobag 35mm (30)", pip: "2596419", initialQuantity: 39, tariff: 87.59, selectedSupplier: null, prices: { aah: 86.29, alliance: 85.59, bs: null, ethigen: null, otcd: null, phoenix: 86.29, trident: null, lexon: null } },
  { id: "p24", name: "Clonidine 100mcg tablets (100)", pip: "1290279", initialQuantity: 1, tariff: 10.05, concessionPrice: true, selectedSupplier: "ethigen", prices: { aah: 8.12, alliance: 8.24, bs: 10.22, ethigen: 8.06, otcd: 8.28, phoenix: 8.18, trident: 10.42, lexon: 8.34 } },
  { id: "p25", name: "Affend XL 18mg tablets PR (30)", pip: "4229340", initialQuantity: 1, tariff: 10.90, concessionPrice: true, selectedSupplier: "aah", prices: { aah: 8.74, alliance: 13.08, bs: 8.88, ethigen: 8.82, otcd: 11.24, phoenix: 8.76, trident: null, lexon: 8.94 } },
  { id: "p26", name: "Amoxicillin 500mg capsules (21)", pip: "0018399", initialQuantity: 3, tariff: 8.75, concessionPrice: true, selectedSupplier: "bs", prices: { aah: 7.04, alliance: 9.24, bs: 6.98, ethigen: 7.10, otcd: 7.08, phoenix: 7.16, trident: 9.31, lexon: 7.02 } },
  { id: "u1", name: "Unknown Product 1", pip: "14928", initialQuantity: 12, tariff: null, selectedSupplier: null, prices: { aah: null, alliance: null, bs: null, ethigen: null, otcd: null, phoenix: null, trident: null, lexon: null } },
  { id: "u2", name: "Unknown Product 1", pip: "700229", initialQuantity: 1, tariff: null, selectedSupplier: null, prices: { aah: null, alliance: null, bs: null, ethigen: null, otcd: null, phoenix: null, trident: null, lexon: null } },
  { id: "u3", name: "Unknown Product 1", pip: "1234567", initialQuantity: 28, tariff: null, selectedSupplier: null, prices: { aah: null, alliance: null, bs: null, ethigen: null, otcd: null, phoenix: null, trident: null, lexon: null } }
];

const unavailable = {};
const initialBasketQuantities = [2, 3, 6, 9, 5, 4, 6, 2, 8, 3, 5, 7, 4, 6, 9, 2, 5, 3, 6, 4];

const state = {
  basket: catalogue.map((product, index) => createBasketItem(
    product,
    product.initialQuantity || initialBasketQuantities[index % initialBasketQuantities.length],
    product.selectedSupplier
  )),
  search: { name: "", pip: "", quantity: 1, selectedProductId: null },
  basketFilter: "",
  basketSort: { key: null, direction: null },
  advancedSort: { key: null, direction: null, label: "" },
  advancedSortPanelOpen: false,
  sortLoading: false,
  editingId: null,
  drawerDraft: null,
  selectedLineIds: [],
  addProductVisible: true
};

const els = {
  addProductPanel: document.querySelector("#addProductPanel"),
  toggleAddProduct: document.querySelector("#toggleAddProduct"),
  nameSearch: document.querySelector("#nameSearch"),
  quantityInput: document.querySelector("#quantityInput"),
  decreaseQuantity: document.querySelector("#decreaseQuantity"),
  increaseQuantity: document.querySelector("#increaseQuantity"),
  orderUpload: document.querySelector("#orderUpload"),
  uploadOrderWidget: document.querySelector(".upload-order-widget"),
  uploadOrderButton: document.querySelector("#uploadOrderButton"),
  downloadOrderTemplate: document.querySelector("#downloadOrderTemplate"),
  searchResults: document.querySelector("#searchResults"),
  productList: document.querySelector("#productList"),
  sortStatus: document.querySelector("#sortStatus"),
  advancedSortToggle: document.querySelector("#advancedSortToggle"),
  advancedSortPanel: document.querySelector("#advancedSortPanel"),
  resetAdvancedSort: document.querySelector("#resetAdvancedSort"),
  emptyState: document.querySelector("#emptyState"),
  basketFilter: document.querySelector("#basketFilter"),
  placeOrderButton: document.querySelector("#placeOrderButton"),
  removeSelectedButton: document.querySelector("#removeSelectedButton"),
  totalProducts: document.querySelector("#totalProducts"),
  totalValue: document.querySelector("#totalValue"),
  potentialSavings: document.querySelector("#potentialSavings"),
  drawer: document.querySelector("#productDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerNavigation: document.querySelector("#drawerNavigation"),
  drawerContent: document.querySelector("#drawerContent"),
  orderModal: document.querySelector("#orderModal"),
  orderModalTitle: document.querySelector("#orderModalTitle"),
  orderModalSummary: document.querySelector("#orderModalSummary"),
  orderSuccessModal: document.querySelector("#orderSuccessModal"),
  toastRegion: document.querySelector("#toastRegion")
};

let pendingConfirmationAction = null;
let uploadConfirmed = false;
let advancedSortRunId = 0;

function createBasketItem(product, quantity, selectedSupplier) {
  const recommended = getRecommendedSupplier(product);
  const selectedOffer = supplierOffers(product).find((offer) =>
    offer.supplierId === (selectedSupplier || recommended?.supplierId)
    && isSelectableOffer(product, offer)
  ) || recommended;
  return {
    lineId: `${product.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    productId: product.id,
    name: product.name,
    pip: product.pip,
    quantity,
    tariff: product.tariff,
    concessionPrice: Boolean(product.concessionPrice),
    prices: { ...product.prices },
    supplierPipMappings: product.supplierPipMappings ? product.supplierPipMappings.map((mapping) => ({ ...mapping })) : null,
    selectedSupplier: selectedOffer?.supplierId || null,
    selectedSupplierPip: selectedOffer?.supplierPip || null,
    selectedPrice: selectedOffer?.price ?? null,
    selectedOfferKey: selectedOffer?.key || null
  };
}

function formatCurrency(value) {
  return typeof value === "number"
    ? new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value)
    : "NA";
}

function formatTariff(value) {
  return typeof value === "number" ? value.toFixed(2) : "NA";
}

function dtValueTemplate(product, formatter = formatTariff) {
  return `
    <span class="dt-value">
      ${formatter(product.tariff)}
      ${product.concessionPrice ? '<span class="concession-indicator" title="Concession price" aria-label="Concession price" tabindex="0">C</span>' : ""}
    </span>
  `;
}

function netDtValue(product) {
  return product.concessionPrice ? null : netTariff(product.tariff);
}

function netTariff(value) {
  return typeof value === "number" ? Number((value * 0.8).toFixed(2)) : null;
}

function supplierLabel(id) {
  return suppliers.find((supplier) => supplier.id === id)?.label || "Not selected";
}

function offerKey(supplierId, supplierPip, price) {
  return `${supplierId}::${supplierPip || ""}::${price}`;
}

function isOverDrugTariff(product, price) {
  return typeof product.tariff === "number" && typeof price === "number" && price > product.tariff;
}

function isSelectableOffer(product, offer) {
  const blocked = unavailable[product.productId || product.id] || [];
  return Boolean(offer)
    && typeof offer.price === "number"
    && !blocked.includes(offer.supplierId)
    && !isOverDrugTariff(product, offer.price);
}

function lowestOfferPerSupplier(offers) {
  return Array.from(offers.reduce((lowestBySupplier, offer) => {
    const current = lowestBySupplier.get(offer.supplierId);
    if (!current || offer.price < current.price) {
      lowestBySupplier.set(offer.supplierId, offer);
    }
    return lowestBySupplier;
  }, new Map()).values());
}

function supplierOffers(product) {
  if (Array.isArray(product.supplierPipMappings) && product.supplierPipMappings.length) {
    const offers = product.supplierPipMappings
      .filter((mapping) => typeof mapping.price === "number")
      .map((mapping) => {
        const supplier = suppliers.find((item) => item.id === mapping.supplierId);
        return {
          supplierId: mapping.supplierId,
          supplierLabel: supplier?.label || mapping.supplier,
          supplierPip: mapping.supplierPip || product.pip,
          price: mapping.price,
          key: offerKey(mapping.supplierId, mapping.supplierPip || product.pip, mapping.price)
        };
      })
      .filter((offer) => offer.supplierLabel);

    return lowestOfferPerSupplier(offers);
  }

  const offers = suppliers.flatMap((supplier) => {
    const value = product.prices[supplier.id];
    const prices = Array.isArray(value) ? value : [value];
    return prices
      .filter((price) => typeof price === "number")
      .map((price) => ({
        supplierId: supplier.id,
        supplierLabel: supplier.label,
        supplierPip: product.pip,
        price,
        key: offerKey(supplier.id, product.pip, price)
      }));
  });

  return lowestOfferPerSupplier(offers);
}

function selectedOffer(product) {
  return supplierOffers(product).find((offer) => offer.key === product.selectedOfferKey)
    || supplierOffers(product).find((offer) => offer.supplierId === product.selectedSupplier && offer.supplierPip === product.selectedSupplierPip)
    || null;
}

function applySelectedOffer(product, offer) {
  product.selectedSupplier = offer.supplierId;
  product.selectedSupplierPip = offer.supplierPip;
  product.selectedPrice = offer.price;
  product.selectedOfferKey = offer.key;
}

function lowestNumericPrice(value) {
  if (typeof value === "number") return value;
  if (Array.isArray(value)) {
    return value
      .filter((price) => typeof price === "number")
      .sort((a, b) => a - b)[0] ?? null;
  }
  return null;
}

function availableSupplierRows(product) {
  const blocked = unavailable[product.productId || product.id] || [];
  return suppliers.map((supplier) => {
    const offers = supplierOffers(product).filter((offer) => offer.supplierId === supplier.id);
    const price = offers.length ? Math.min(...offers.map((offer) => offer.price)) : null;
    const hasPrice = typeof price === "number";
    const unavailableReason = blocked.includes(supplier.id)
      ? "Unavailable"
      : hasPrice && offers.every((offer) => isOverDrugTariff(product, offer.price))
        ? "Above Drug Tariff"
      : "";

    return {
      id: supplier.id,
      label: supplier.label,
      price,
      offers,
      available: hasPrice && offers.some((offer) => isSelectableOffer(product, offer)),
      unavailableReason
    };
  });
}

function getRecommendedSupplier(product) {
  return supplierOffers(product)
    .filter((offer) => isSelectableOffer(product, offer))
    .sort((a, b) => a.price - b.price)[0] || null;
}

function highestAvailableSupplierPrice(product) {
  const prices = supplierOffers(product)
    .filter((offer) => isSelectableOffer(product, offer))
    .map((offer) => offer.price);
  return prices.length ? Math.max(...prices) : null;
}

function selectedPrice(product) {
  const offer = selectedOffer(product);
  return typeof offer?.price === "number"
    ? offer.price
    : typeof product.selectedPrice === "number"
      ? product.selectedPrice
    : product.selectedSupplier
      ? lowestNumericPrice(product.prices[product.selectedSupplier])
      : null;
}

function lineValue(product) {
  const price = selectedPrice(product);
  return typeof price === "number" ? price * product.quantity : 0;
}

function bestValue(product) {
  const recommended = getRecommendedSupplier(product);
  return recommended ? recommended.price * product.quantity : 0;
}

function potentialSaving(product) {
  return Math.max(0, lineValue(product) - bestValue(product));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function render(options = {}) {
  renderAddProductToggle();
  renderSearchResults();
  renderBasket();
  renderAdvancedSortPanel();
  renderSummary();
  if (state.editingId && !options.skipDrawer) renderDrawer();
}

function selectedLines() {
  const basketIds = new Set(state.basket.map((product) => product.lineId));
  state.selectedLineIds = state.selectedLineIds.filter((lineId) => basketIds.has(lineId));
  return state.selectedLineIds;
}

function renderAddProductToggle() {
  els.addProductPanel.hidden = !state.addProductVisible;
  els.toggleAddProduct.textContent = state.addProductVisible ? "- Hide Add Product" : "+ Show Add Product";
  els.toggleAddProduct.setAttribute("aria-expanded", String(state.addProductVisible));
}

function focusAddProductSearch() {
  if (!state.addProductVisible || !els.nameSearch) return;
  window.requestAnimationFrame(() => els.nameSearch.focus());
}

function focusSearchQuantity() {
  if (!state.addProductVisible || !els.quantityInput) return;
  window.requestAnimationFrame(() => {
    els.quantityInput.focus();
    els.quantityInput.select();
  });
}

function selectSearchProduct(productId) {
  const product = catalogue.find((item) => item.id === productId);
  if (!product) return false;
  state.search.selectedProductId = product.id;
  els.nameSearch.value = product.name;
  state.search.name = product.name;
  state.search.pip = "";
  els.searchResults.innerHTML = "";
  focusSearchQuantity();
  return true;
}

function renderSearchResults() {
  const query = state.search.name.trim().toLowerCase();
  if (!query) {
    els.searchResults.innerHTML = "";
    state.search.selectedProductId = null;
    return;
  }

  const matches = catalogue.filter((product) => {
    return product.name.toLowerCase().includes(query) || product.pip.toLowerCase().includes(query);
  }).slice(0, 12);

  if (!matches.some((product) => product.id === state.search.selectedProductId)) {
    state.search.selectedProductId = matches[0]?.id || null;
  }

  els.searchResults.innerHTML = matches.map((product) => `
    <button class="search-result ${product.id === state.search.selectedProductId ? "active" : ""}" type="button" data-select-product="${product.id}">
      <strong>${escapeHtml(product.name)}</strong>
    </button>
  `).join("");
}

function visibleBasket() {
  const query = state.basketFilter.trim().toLowerCase();
  const rows = !query ? [...state.basket] : state.basket.filter((product) => {
    return product.name.toLowerCase().includes(query) || product.pip.toLowerCase().includes(query);
  });
  return sortedBasketRows(rows);
}

function sortedBasketRows(rows) {
  if (state.advancedSort.key) return advancedSortedBasketRows(rows);

  const { key, direction } = state.basketSort;
  if (!key || !direction) return rows;

  const multiplier = direction === "asc" ? 1 : -1;
  const originalOrder = new Map(state.basket.map((product, index) => [product.lineId, index]));
  const valueFor = {
    product: (product) => product.name.toLowerCase(),
    quantity: (product) => product.quantity,
    dt: (product) => product.tariff
  }[key];

  return [...rows].sort((a, b) => {
    const aValue = valueFor(a);
    const bValue = valueFor(b);
    const aMissing = aValue === null || aValue === undefined;
    const bMissing = bValue === null || bValue === undefined;

    if (aMissing && bMissing) return originalOrder.get(a.lineId) - originalOrder.get(b.lineId);
    if (aMissing) return 1;
    if (bMissing) return -1;

    const comparison = typeof aValue === "string"
      ? aValue.localeCompare(bValue)
      : aValue - bValue;

    return comparison === 0
      ? originalOrder.get(a.lineId) - originalOrder.get(b.lineId)
      : comparison * multiplier;
  });
}

function nextSortDirection(key) {
  if (state.basketSort.key !== key) return "asc";
  if (state.basketSort.direction === "asc") return "desc";
  if (state.basketSort.direction === "desc") return null;
  return "asc";
}

function columnSortButtonTemplate(key, label) {
  const active = state.basketSort.key === key && state.basketSort.direction;
  const indicator = active ? (state.basketSort.direction === "asc" ? "&uarr;" : "&darr;") : "&#8597;";
  const ariaSort = !active ? "none" : state.basketSort.direction === "asc" ? "ascending" : "descending";
  return `<button class="sort-header ${active ? "active" : ""}" type="button" data-sort="${key}" aria-sort="${ariaSort}">${label} <span>${indicator}</span></button>`;
}

function cycleBasketSort(key) {
  const direction = nextSortDirection(key);
  state.basketSort = direction ? { key, direction } : { key: null, direction: null };
  state.advancedSort = { key: null, direction: null, label: "" };
  state.sortLoading = false;
  renderBasket();
  renderAdvancedSortPanel();
}

function originalBasketOrder() {
  return new Map(state.basket.map((product, index) => [product.lineId, index]));
}

function hasUnknownDescription(product) {
  const inCatalogue = catalogue.some((item) => item.id === product.productId || item.pip === product.pip);
  return !product.name || !inCatalogue || /unknown|not present|not in system/i.test(product.name);
}

function isAboveDrugTariff(product) {
  if (typeof product.tariff !== "number") return false;
  const prices = supplierOffers(product).map((offer) => offer.price);
  return prices.length > 0 && prices.every((price) => price > product.tariff);
}

function isAdvancedMarked(product) {
  return (state.advancedSort.key === "aboveDt" && isAboveDrugTariff(product))
    || (state.advancedSort.key === "unknownDescription" && hasUnknownDescription(product))
    || (state.advancedSort.key === "activeConcession" && product.concessionPrice);
}

function advancedSortedBasketRows(rows) {
  const originalOrder = originalBasketOrder();
  const { key, direction } = state.advancedSort;

  if (key === "selectedPrice") {
    const multiplier = direction === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const aValue = selectedPrice(a);
      const bValue = selectedPrice(b);
      const aMissing = typeof aValue !== "number";
      const bMissing = typeof bValue !== "number";
      if (aMissing && bMissing) return originalOrder.get(a.lineId) - originalOrder.get(b.lineId);
      if (aMissing) return 1;
      if (bMissing) return -1;
      const comparison = aValue - bValue;
      return comparison === 0
        ? originalOrder.get(a.lineId) - originalOrder.get(b.lineId)
        : comparison * multiplier;
    });
  }

  if (key === "aboveDt" || key === "unknownDescription" || key === "activeConcession") {
    return [...rows].sort((a, b) => {
      const aMarked = isAdvancedMarked(a);
      const bMarked = isAdvancedMarked(b);
      if (aMarked !== bMarked) return aMarked ? -1 : 1;
      return originalOrder.get(a.lineId) - originalOrder.get(b.lineId);
    });
  }

  return rows;
}

function advancedSortLabel(key, direction) {
  if (key === "selectedPrice") return `Selected Supplier Price ${direction === "asc" ? "Low-High" : "High-Low"}`;
  if (key === "aboveDt") return "Above Drug Tariff";
  if (key === "unknownDescription") return "Unknown Product Description";
  if (key === "activeConcession") return "Active Concession";
  return "";
}

function renderSortStatus() {
  if (state.sortLoading) {
    els.sortStatus.hidden = false;
    els.sortStatus.className = "sort-status loading";
    els.sortStatus.textContent = "Sorting basket...";
    return;
  }

  els.sortStatus.hidden = true;
  els.sortStatus.textContent = "";
}

function renderAdvancedSortPanel() {
  els.advancedSortPanel.hidden = !state.advancedSortPanelOpen;
  els.advancedSortToggle.setAttribute("aria-expanded", String(state.advancedSortPanelOpen));
  els.advancedSortToggle.classList.toggle("active", state.advancedSortPanelOpen || Boolean(state.advancedSort.key));

  els.advancedSortPanel.querySelectorAll(".advanced-sort-choice").forEach((choice) => {
    const key = choice.dataset.advancedSort || (choice.matches("[data-selected-price-choice]") ? "selectedPrice" : "");
    const selected = key === state.advancedSort.key;
    choice.classList.toggle("selected", selected);
  });

  els.advancedSortPanel.querySelectorAll("[data-advanced-sort]").forEach((button) => {
    const selected = button.dataset.advancedSort === state.advancedSort.key
      && (!button.dataset.direction || button.dataset.direction === state.advancedSort.direction);
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function closeAdvancedSortPanel() {
  if (!state.advancedSortPanelOpen) return;
  state.advancedSortPanelOpen = false;
  renderAdvancedSortPanel();
}

function applyAdvancedSort(key, direction) {
  const sortRunId = ++advancedSortRunId;
  const label = advancedSortLabel(key, direction);
  state.advancedSortPanelOpen = false;
  state.basketSort = { key: null, direction: null };
  state.advancedSort = { key: null, direction: null, label: "" };
  state.sortLoading = true;
  renderBasket();
  renderAdvancedSortPanel();

  window.setTimeout(() => {
    if (sortRunId !== advancedSortRunId) return;
    state.advancedSort = { key, direction: direction || null, label };
    state.sortLoading = false;
    renderBasket();
    renderAdvancedSortPanel();
    toast(`${label} applied`);
  }, 260);
}

function resetAllSorts(options = {}) {
  advancedSortRunId += 1;
  state.basketSort = { key: null, direction: null };
  state.advancedSort = { key: null, direction: null, label: "" };
  state.advancedSortPanelOpen = false;
  state.sortLoading = false;
  if (options.render === false) return;
  renderBasket();
  renderAdvancedSortPanel();
  if (options.toast !== false) toast("All filters reset");
}

function renderBasket() {
  const rows = visibleBasket();
  const selected = selectedLines();
  const visibleIds = rows.map((product) => product.lineId);
  const selectedVisibleCount = visibleIds.filter((lineId) => selected.includes(lineId)).length;
  const allVisibleSelected = visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;
  els.emptyState.hidden = state.basket.length > 0;
  els.placeOrderButton.disabled = state.basket.length === 0;
  els.removeSelectedButton.disabled = selected.length === 0;
  els.removeSelectedButton.title = selected.length
    ? `Remove ${selected.length} selected product${selected.length === 1 ? "" : "s"}`
    : "Remove selected products";
  const showBestPrice = rows.some((product) => {
    const recommended = getRecommendedSupplier(product);
    return recommended && recommended.key !== product.selectedOfferKey;
  });

  els.productList.classList.toggle("has-best-price", showBestPrice);
  els.productList.classList.toggle("is-sorting", state.sortLoading);
  renderSortStatus();
  els.productList.innerHTML = rows.length
    ? `
      <div class="product-list-header" role="row">
        <label class="select-all-control" title="Select all visible products">
          <input type="checkbox" data-select-all ${allVisibleSelected ? "checked" : ""} ${selectedVisibleCount > 0 && !allVisibleSelected ? "data-indeterminate=\"true\"" : ""} />
          <span>Edit</span>
        </label>
        ${columnSortButtonTemplate("product", "Product")}
        <span>Pip Code</span>
        <span class="numeric-col">${columnSortButtonTemplate("quantity", "Quantity")}</span>
        <span class="net-dt-header numeric-col">
          Net DT
          <span class="info-icon" title="Calculated on the basis of the Discount deduction rates by DHSC" aria-label="Calculated on the basis of the Discount deduction rates by DHSC" tabindex="0">i</span>
        </span>
        <span class="numeric-col">${columnSortButtonTemplate("dt", "DT")}</span>
        <span>Selected Supplier</span>
        <span class="numeric-col">Price</span>
        <span class="numeric-col">Order Value</span>
        ${showBestPrice ? "<span>Best Price</span>" : ""}
      </div>
      ${rows.map((product) => productCardTemplate(product, showBestPrice)).join("")}
    `
    : "";

  const selectAll = els.productList.querySelector("[data-select-all]");
  if (selectAll) selectAll.indeterminate = selectedVisibleCount > 0 && !allVisibleSelected;
}

function productCardTemplate(product, showBestPriceColumn) {
  const price = selectedPrice(product);
  const value = lineValue(product);
  const recommended = getRecommendedSupplier(product);
  const showBestPrice = recommended && recommended.key !== product.selectedOfferKey;
  const marked = isAdvancedMarked(product);
  const markText = state.advancedSort.key === "aboveDt"
    ? "Above DT"
    : state.advancedSort.key === "activeConcession"
      ? "Active Concession"
      : "Unknown Description";
  const selectedSupplierText = supplierLabel(product.selectedSupplier);

  return `
    <article class="product-card ${marked ? "advanced-mark" : ""}" data-line-id="${product.lineId}">
      <div class="card-actions">
        <input class="row-select" type="checkbox" data-select-line="${product.lineId}" aria-label="Select ${escapeHtml(product.name)}" ${state.selectedLineIds.includes(product.lineId) ? "checked" : ""} />
        <button class="icon-action edit-action" type="button" data-edit="${product.lineId}" aria-label="Edit ${escapeHtml(product.name)}" title="Edit">&#9998;</button>
      </div>
      <div class="product-main">
        <span class="product-card-title">${escapeHtml(product.name)}</span>
        ${marked ? `<span class="advanced-row-badge">${markText}</span>` : ""}
      </div>
      <span>${product.pip}</span>
      <span class="numeric-col">${product.quantity}</span>
      <span class="net-dt-value numeric-col" title="Calculated on the basis of the Discount deduction rates by DHSC">${formatTariff(netDtValue(product))}</span>
      <span class="numeric-col">${dtValueTemplate(product)}</span>
      <span>${selectedSupplierText}</span>
      <span class="numeric-col">${formatCurrency(price)}</span>
      <span class="numeric-col">${formatCurrency(value)}</span>
      ${showBestPriceColumn ? `<strong class="best-price ${showBestPrice ? "" : "empty"}">${showBestPrice ? `${recommended.supplierLabel} - ${formatCurrency(recommended.price)}` : ""}</strong>` : ""}
    </article>
  `;
}

function renderSummary() {
  const totalValue = state.basket.reduce((sum, product) => sum + lineValue(product), 0);
  const totalSavings = state.basket.reduce((sum, product) => sum + potentialSaving(product), 0);
  els.totalProducts.textContent = state.basket.length;
  els.totalValue.textContent = formatCurrency(totalValue);
  els.potentialSavings.textContent = formatCurrency(totalSavings);
}

function createDrawerDraft(product) {
  return {
    lineId: product.lineId,
    quantity: product.quantity,
    selectedSupplier: product.selectedSupplier,
    selectedSupplierPip: product.selectedSupplierPip,
    selectedPrice: product.selectedPrice,
    selectedOfferKey: product.selectedOfferKey
  };
}

function drawerProductWithDraft(product) {
  if (!state.drawerDraft || state.drawerDraft.lineId !== product.lineId) {
    state.drawerDraft = createDrawerDraft(product);
  }
  return { ...product, ...state.drawerDraft };
}

function renderDrawerContent({ preserveScroll = true } = {}) {
  const product = state.basket.find((item) => item.lineId === state.editingId);
  if (!product) return;
  const scrollTop = els.drawer.scrollTop;
  els.drawerContent.innerHTML = drawerProductTemplate(drawerProductWithDraft(product));
  if (preserveScroll) els.drawer.scrollTop = scrollTop;
}

function openDrawer(lineId) {
  state.editingId = lineId;
  state.drawerDraft = null;
  renderDrawer({ preserveScroll: false });
  els.drawerBackdrop.hidden = false;
  els.drawer.classList.add("open");
  els.drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  state.editingId = null;
  state.drawerDraft = null;
  els.drawerBackdrop.hidden = true;
  els.drawerNavigation.hidden = true;
  els.drawerNavigation.innerHTML = "";
  els.drawer.classList.remove("open");
  els.drawer.setAttribute("aria-hidden", "true");
}

function scrollDrawerProductIntoView(lineId) {
  const target = Array.from(els.drawerContent.querySelectorAll("[data-drawer-product]"))
    .find((section) => section.dataset.drawerProduct === lineId);
  if (target) target.scrollIntoView({ block: "start" });
}

function setActiveDrawerProduct(lineId) {
  els.drawerContent.querySelectorAll("[data-drawer-product]").forEach((section) => {
    section.classList.toggle("active", section.dataset.drawerProduct === lineId);
  });
}

function showDrawerProductAtIndex(index) {
  const safeIndex = Math.min(Math.max(index, 0), state.basket.length - 1);
  const product = state.basket[safeIndex];
  if (!product) return;
  state.editingId = product.lineId;
  state.drawerDraft = null;
  renderDrawer({ preserveScroll: false });
}

function moveDrawerProduct(direction) {
  const currentIndex = state.basket.findIndex((item) => item.lineId === state.editingId);
  if (currentIndex === -1) return;
  showDrawerProductAtIndex(currentIndex + direction);
}

function drawerProductSearchMatches(query, showAll = false) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery && !showAll) return [];

  const rows = normalizedQuery
    ? state.basket.filter((product) => product.name.toLowerCase().includes(normalizedQuery))
    : state.basket;

  return rows.slice(0, 8);
}

function renderDrawerProductSearchResults(query = "", showAll = false) {
  const results = els.drawerNavigation.querySelector("[data-drawer-product-results]");
  if (!results) return;

  const matches = drawerProductSearchMatches(query, showAll);
  if (!matches.length) {
    results.innerHTML = query.trim()
      ? '<div class="drawer-product-search-empty">No basket products found</div>'
      : "";
    return;
  }

  results.innerHTML = matches.map((product) => `
    <button class="drawer-product-result" type="button" data-drawer-product-result="${product.lineId}" role="option">
      <strong>${escapeHtml(product.name)}</strong>
      <span>PIP ${product.pip}</span>
    </button>
  `).join("");
}

function closeDrawerProductSearchResults() {
  const results = els.drawerNavigation.querySelector("[data-drawer-product-results]");
  if (results) results.innerHTML = "";
}

function goToDrawerProduct(lineId) {
  const productIndex = state.basket.findIndex((item) => item.lineId === lineId);
  if (productIndex === -1) return;
  showDrawerProductAtIndex(productIndex);
}

function renderDrawer({ preserveScroll = true } = {}) {
  const scrollTop = els.drawer.scrollTop;
  if (!state.basket.length) {
    closeDrawer();
    return;
  }

  if (!state.basket.some((item) => item.lineId === state.editingId)) {
    state.editingId = state.basket[0].lineId;
  }

  const product = state.basket.find((item) => item.lineId === state.editingId);
  const activeIndex = state.basket.findIndex((item) => item.lineId === state.editingId);
  els.drawerNavigation.hidden = !product;
  els.drawerNavigation.innerHTML = product ? drawerNavigationTemplate(activeIndex) : "";
  els.drawerContent.innerHTML = product ? drawerProductTemplate(drawerProductWithDraft(product)) : "";
  if (preserveScroll) els.drawer.scrollTop = scrollTop;
}

function drawerNavigationTemplate(activeIndex) {
  const canMovePrevious = activeIndex > 0;
  const canMoveNext = activeIndex >= 0 && activeIndex < state.basket.length - 1;

  return `
    <button class="modal-nav-button" type="button" data-drawer-nav="previous" aria-label="Previous item" ${canMovePrevious ? "" : "disabled"}>&lt;</button>
    <strong>${activeIndex + 1} of ${state.basket.length}</strong>
    <button class="modal-nav-button" type="button" data-drawer-nav="next" aria-label="Next item" ${canMoveNext ? "" : "disabled"}>&gt;</button>
    <div class="go-to-product">
      <span>GO TO PRODUCT</span>
      <div class="drawer-product-search">
        <input data-drawer-product-search type="search" autocomplete="off" placeholder="Search product name..." aria-label="Go to product" aria-controls="drawerProductSearchResults" />
        <div class="drawer-product-results" id="drawerProductSearchResults" data-drawer-product-results role="listbox"></div>
      </div>
      <button class="drawer-save-button" type="button" data-drawer-save aria-label="Save product changes">Save</button>
    </div>
  `;
}

function drawerProductTemplate(product) {
  const recommended = getRecommendedSupplier(product);
  const activeClass = product.lineId === state.editingId ? "active" : "";

  return `
    <article class="drawer-product ${activeClass}" data-drawer-product="${product.lineId}">
      <section class="drawer-section product-detail-strip">
        <div class="meta-pair product-name-detail"><span>Product Name</span><strong>${escapeHtml(product.name)}</strong></div>
        <div class="meta-pair"><span>Drug Tariff</span><strong>${dtValueTemplate(product, formatCurrency)}</strong></div>
        <div class="meta-pair"><span>Net Drug Tariff</span><strong>${formatCurrency(netDtValue(product))}</strong></div>
        <div class="meta-pair pip-code-detail"><span>PIP Code</span><strong>${product.pip}</strong></div>
        <label class="quantity-detail">
          <span>Quantity</span>
          <div class="drawer-quantity-stepper">
            <button type="button" data-drawer-quantity-step="${product.lineId}" data-step="-1" aria-label="Decrease quantity">-</button>
            <input data-drawer-quantity="${product.lineId}" type="number" min="1" value="${product.quantity}" aria-label="Quantity for ${escapeHtml(product.name)}" />
            <button type="button" data-drawer-quantity-step="${product.lineId}" data-step="1" aria-label="Increase quantity">+</button>
          </div>
        </label>
      </section>

      <div class="drawer-modal-grid">
        <section class="drawer-section supplier-comparison-panel">
          <div class="supplier-comparison-heading">
            <h3>Supplier Comparison</h3>
          </div>
          <div class="supplier-table-wrap">
            <table class="supplier-comparison-table">
              <thead>
                <tr>
                  <th>Supplier</th>
                  <th>PIP Code</th>
                  <th>Price</th>
                  <th>Savings</th>
                </tr>
              </thead>
              <tbody>
                ${supplierTableRows(product, recommended)}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </article>
  `;
}

function supplierTableRows(product, recommended) {
  const rows = availableSupplierRows(product)
    .filter((row) => row.offers.length)
    .map((row) => ({ ...row, offer: row.offers.slice().sort((a, b) => a.price - b.price)[0] }))
    .sort((a, b) => a.offer.price - b.offer.price);

  if (!rows.length) {
    return `<tr><td colspan="4" class="supplier-empty">No supplier prices available</td></tr>`;
  }

  return rows.map((row) => supplierTableRowTemplate(product, row, recommended)).join("");
}

function supplierTableRowTemplate(product, row, recommended) {
  const isSelected = product.selectedOfferKey === row.offer.key;
  const isSelectable = isSelectableOffer(product, row.offer);
  const isOverTariff = isOverDrugTariff(product, row.offer.price);
  const isBestPrice = recommended?.key === row.offer.key;
  const highestPrice = highestAvailableSupplierPrice(product);
  const saving = typeof highestPrice === "number"
    ? Math.max(0, (highestPrice - row.offer.price) * product.quantity)
    : 0;
  return `
    <tr class="${isSelected ? "selected" : ""} ${isSelectable ? "" : "unavailable"}" ${isSelectable ? `data-select-supplier-offer="${row.offer.key}" data-line-id="${product.lineId}" tabindex="0"` : ""}>
      <td>
        <label class="supplier-radio-label">
          <input type="radio" name="supplierChoice-${product.lineId}" value="${row.offer.key}" data-supplier-choice="${product.lineId}" ${isSelected ? "checked" : ""} ${isSelectable ? "" : "disabled"} />
          <strong>${row.label}</strong>
          ${isBestPrice ? `<span class="best-price-pill">Best Price</span>` : ""}
        </label>
      </td>
      <td>${row.offer.supplierPip}</td>
      <td><strong class="${isOverTariff ? "over-tariff-price" : ""}">${formatCurrency(row.offer.price)}</strong></td>
      <td><strong class="supplier-saving">${formatCurrency(saving)}</strong></td>
    </tr>
  `;
}

function supplierCardTemplate(product, row) {
  return `
    <article class="supplier-card ${row.available ? "" : "unavailable"}">
      <div class="supplier-group-heading">
        <strong>${row.label}</strong>
      </div>
      <div class="supplier-offer-list">
        ${row.offers.map((offer) => supplierOfferTemplate(product, row, offer)).join("")}
      </div>
    </article>
  `;
}

function supplierOfferTemplate(product, row, offer) {
  const isSelected = product.selectedOfferKey === offer.key;
  const isSelectable = isSelectableOffer(product, offer);
  const isOverTariff = isOverDrugTariff(product, offer.price);
  return `
    <label class="supplier-offer ${isSelected ? "selected" : ""} ${isSelectable ? "" : "unavailable"}">
      <input type="radio" name="supplierChoice-${product.lineId}" value="${offer.key}" data-supplier-choice="${product.lineId}" ${isSelected ? "checked" : ""} ${isSelectable ? "" : "disabled"} />
      <div class="supplier-offer-detail">
        <span>Supplier PIP</span>
        <strong>${offer.supplierPip}</strong>
      </div>
      <div class="supplier-offer-detail">
        <span>Price</span>
        <strong class="${isOverTariff ? "over-tariff-price" : ""}">${formatCurrency(offer.price)}</strong>
      </div>
      <span class="supplier-select-text">${isSelected ? "Selected" : "Select"}</span>
    </label>
  `;
}

function addProduct(event) {
  event.preventDefault();
  const product = catalogue.find((item) => item.id === state.search.selectedProductId);
  const quantity = Math.max(1, Number(els.quantityInput.value || 1));

  if (!product) {
    toast("Choose a product before adding to the basket", "error");
    return;
  }

  addProductToBasket(product, quantity, { openDetails: false });
  els.nameSearch.value = "";
  els.quantityInput.value = "1";
  state.search.name = "";
  state.search.pip = "";
  state.search.selectedProductId = null;
  state.search.quantity = 1;
  render();
}

function addProductToBasket(product, quantity, options = {}) {
  const safeQuantity = Math.max(1, Number(quantity || 1));
  const existing = state.basket.find((item) => item.productId === product.id);
  if (existing) {
    existing.quantity += safeQuantity;
    toast(`Quantity updated for ${product.name}`);
    if (options.openDetails) {
      state.editingId = existing.lineId;
      openDrawer(existing.lineId);
    }
    return existing;
  } else {
    const line = createBasketItem(product, safeQuantity);
    state.basket.unshift(line);
    toast(`${product.name} added to basket`);
    if (options.openDetails) openDrawer(line.lineId);
    return line;
  }
}

function selectSupplier(lineId, selectedOfferKey) {
  const product = state.basket.find((item) => item.lineId === lineId);
  const offer = product && supplierOffers(product).find((supplierOffer) => supplierOffer.key === selectedOfferKey);
  const row = product && offer && availableSupplierRows(product).find((supplier) => supplier.id === offer.supplierId);
  if (!product || !row || !row.available || !isSelectableOffer(product, offer)) {
    toast("This supplier offer is not available for selection", "error");
    return;
  }
  drawerProductWithDraft(product);
  applySelectedOffer(state.drawerDraft, offer);
  renderDrawerContent();
}

function updateQuantity(lineId, quantity) {
  const product = state.basket.find((item) => item.lineId === lineId);
  if (!product) return;
  drawerProductWithDraft(product);
  state.drawerDraft.quantity = Math.max(1, Number(quantity || 1));
}

function saveDrawerProduct() {
  const product = state.basket.find((item) => item.lineId === state.editingId);
  if (!product || !state.drawerDraft || state.drawerDraft.lineId !== product.lineId) return;

  product.quantity = Math.max(1, Number(state.drawerDraft.quantity || 1));
  const offer = supplierOffers(product)
    .find((supplierOffer) => supplierOffer.key === state.drawerDraft.selectedOfferKey);
  if (offer && isSelectableOffer(product, offer)) {
    applySelectedOffer(product, offer);
  }

  state.drawerDraft = createDrawerDraft(product);
  render({ skipDrawer: true });
  renderDrawer();
  toast(`Changes saved for ${product.name}`);
}

function removeSelectedProducts() {
  const selected = selectedLines();
  if (!selected.length) {
    toast("Select one or more products to remove", "error");
    return;
  }

  const selectedSet = new Set(selected);
  const removedCount = selected.length;
  state.basket = state.basket.filter((item) => !selectedSet.has(item.lineId));
  state.selectedLineIds = [];
  if (state.editingId && selectedSet.has(state.editingId)) closeDrawer();
  render();
  toast(`${removedCount} product${removedCount === 1 ? "" : "s"} removed from basket`);
}

function requestRemoveSelectedProducts() {
  const selected = selectedLines();
  if (!selected.length) {
    toast("Select one or more products to remove", "error");
    return;
  }
  openConfirmation({
    message: `You want to delete ${selected.length} selected product${selected.length === 1 ? "" : "s"}?`,
    onConfirm: removeSelectedProducts
  });
}

function stepSearchQuantity(amount) {
  const nextQuantity = Math.max(1, Number(els.quantityInput.value || 1) + amount);
  els.quantityInput.value = nextQuantity;
  state.search.quantity = nextQuantity;
}

function announceUploadedFile(file) {
  if (!file) return;
  toast(`${file.name} ready to upload`);
}

function toggleLineSelection(lineId, selected) {
  if (selected) {
    if (!state.selectedLineIds.includes(lineId)) state.selectedLineIds.push(lineId);
  } else {
    state.selectedLineIds = state.selectedLineIds.filter((selectedId) => selectedId !== lineId);
  }
  renderBasket();
}

function toggleVisibleSelection(selected) {
  const visibleIds = visibleBasket().map((product) => product.lineId);
  const visibleSet = new Set(visibleIds);
  state.selectedLineIds = selected
    ? Array.from(new Set([...state.selectedLineIds, ...visibleIds]))
    : state.selectedLineIds.filter((lineId) => !visibleSet.has(lineId));
  renderBasket();
}

function refreshPrices() {
  resetAllSorts();
}

function openConfirmation({ message, onConfirm }) {
  pendingConfirmationAction = onConfirm;
  els.orderModalTitle.textContent = "Are you sure?";
  els.orderModalSummary.textContent = message;
  els.orderModal.showModal();
}

function openOrderModal() {
  if (!state.basket.length) return;
  const total = state.basket.reduce((sum, product) => sum + lineValue(product), 0);
  const savings = state.basket.reduce((sum, product) => sum + potentialSaving(product), 0);
  openConfirmation({
    message: `You want to place order? ${state.basket.length} products - ${formatCurrency(total)} total order value - ${formatCurrency(savings)} potential savings.`,
    onConfirm: completeOrder
  });
}

function completeOrder() {
  state.basket = [];
  state.selectedLineIds = [];
  closeDrawer();
  resetAllSorts({ render: false });
  render();
  els.orderSuccessModal.showModal();
}

function toast(message, type = "success") {
  const node = document.createElement("div");
  node.className = `toast ${type}`;
  node.textContent = message;
  els.toastRegion.appendChild(node);
  window.setTimeout(() => {
    node.style.opacity = "0";
    node.style.transform = "translateY(-8px)";
    window.setTimeout(() => node.remove(), 180);
  }, 2600);
}

document.querySelector("#productSearchForm").addEventListener("submit", addProduct);
document.querySelector("#refreshPrices").addEventListener("click", refreshPrices);
els.placeOrderButton.addEventListener("click", openOrderModal);
els.removeSelectedButton.addEventListener("click", requestRemoveSelectedProducts);
els.advancedSortToggle.addEventListener("click", () => {
  state.advancedSortPanelOpen = !state.advancedSortPanelOpen;
  renderAdvancedSortPanel();
});
els.advancedSortPanel.addEventListener("click", (event) => {
  const priceChoice = event.target.closest("[data-select-price-sort]");
  if (priceChoice) {
    applyAdvancedSort("selectedPrice", "asc");
    return;
  }

  const option = event.target.closest("[data-advanced-sort]");
  if (!option) return;
  applyAdvancedSort(option.dataset.advancedSort, option.dataset.direction || null);
});
els.resetAdvancedSort.addEventListener("click", resetAllSorts);
els.toggleAddProduct.addEventListener("click", () => {
  state.addProductVisible = !state.addProductVisible;
  renderAddProductToggle();
  focusAddProductSearch();
});
document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
els.drawerBackdrop.addEventListener("click", closeDrawer);

els.nameSearch.addEventListener("input", (event) => {
  state.search.name = event.target.value;
  state.search.pip = event.target.value;
  renderSearchResults();
});

els.nameSearch.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== "Tab") return;
  if (!state.search.selectedProductId || !state.search.name.trim()) return;
  event.preventDefault();
  selectSearchProduct(state.search.selectedProductId);
});

els.quantityInput.addEventListener("input", (event) => {
  state.search.quantity = Math.max(1, Number(event.target.value || 1));
});

els.quantityInput.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    stepSearchQuantity(-1);
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    stepSearchQuantity(1);
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#productSearchForm").requestSubmit();
  }
});

els.decreaseQuantity.addEventListener("click", () => stepSearchQuantity(-1));
els.increaseQuantity.addEventListener("click", () => stepSearchQuantity(1));

els.uploadOrderButton.addEventListener("click", () => {
  openConfirmation({
    message: "You want to upload order?",
    onConfirm: () => {
      uploadConfirmed = true;
      els.orderUpload.click();
      window.setTimeout(() => {
        uploadConfirmed = false;
      }, 1000);
    }
  });
});

els.downloadOrderTemplate.addEventListener("click", () => {
  toast("Order template download ready");
});

els.orderUpload.addEventListener("change", (event) => {
  uploadConfirmed = false;
  announceUploadedFile(event.target.files[0]);
});

els.orderUpload.addEventListener("click", (event) => {
  if (uploadConfirmed) return;
  event.preventDefault();
  event.stopPropagation();
  openConfirmation({
    message: "You want to upload order?",
    onConfirm: () => {
      uploadConfirmed = true;
      els.orderUpload.click();
      window.setTimeout(() => {
        uploadConfirmed = false;
      }, 1000);
    }
  });
});

["dragenter", "dragover"].forEach((eventName) => {
  els.uploadOrderWidget.addEventListener(eventName, (event) => {
    event.preventDefault();
    els.uploadOrderWidget.classList.add("drag-over");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  els.uploadOrderWidget.addEventListener(eventName, (event) => {
    event.preventDefault();
    els.uploadOrderWidget.classList.remove("drag-over");
  });
});

els.uploadOrderWidget.addEventListener("drop", (event) => {
  const file = event.dataTransfer.files[0];
  if (!file) return;
  openConfirmation({
    message: `You want to upload ${file.name}?`,
    onConfirm: () => announceUploadedFile(file)
  });
});

els.basketFilter.addEventListener("input", (event) => {
  state.basketFilter = event.target.value;
  renderBasket();
});

els.searchResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-select-product]");
  if (!button) return;
  selectSearchProduct(button.dataset.selectProduct);
});

els.productList.addEventListener("click", (event) => {
  const sortButton = event.target.closest("[data-sort]");
  if (sortButton) {
    cycleBasketSort(sortButton.dataset.sort);
    return;
  }

  const editButton = event.target.closest("[data-edit]");
  if (editButton) {
    openDrawer(editButton.dataset.edit);
    return;
  }

  if (event.target.closest("[data-select-line]")) return;

  const productRow = event.target.closest("[data-line-id]");
  if (productRow) openDrawer(productRow.dataset.lineId);
});

els.productList.addEventListener("change", (event) => {
  if (event.target.matches("[data-select-line]")) {
    toggleLineSelection(event.target.dataset.selectLine, event.target.checked);
  }

  if (event.target.matches("[data-select-all]")) {
    toggleVisibleSelection(event.target.checked);
  }
});

els.drawerContent.addEventListener("change", (event) => {
  if (!state.editingId) return;
  if (event.target.matches("[data-supplier-choice]")) {
    selectSupplier(event.target.dataset.supplierChoice, event.target.value);
  }
  if (event.target.matches("[data-drawer-quantity]")) {
    updateQuantity(event.target.dataset.drawerQuantity, event.target.value);
  }
});

els.drawerContent.addEventListener("input", (event) => {
  if (state.editingId && event.target.matches("[data-drawer-quantity]")) {
    updateQuantity(event.target.dataset.drawerQuantity, event.target.value);
  }
});

els.drawerNavigation.addEventListener("click", (event) => {
  if (event.target.closest("[data-drawer-save]")) {
    saveDrawerProduct();
    return;
  }

  const navButton = event.target.closest("[data-drawer-nav]");
  if (navButton) {
    moveDrawerProduct(navButton.dataset.drawerNav === "next" ? 1 : -1);
    return;
  }

  const productResult = event.target.closest("[data-drawer-product-result]");
  if (productResult) {
    goToDrawerProduct(productResult.dataset.drawerProductResult);
    return;
  }
});

els.drawerNavigation.addEventListener("input", (event) => {
  if (event.target.matches("[data-drawer-product-search]")) {
    renderDrawerProductSearchResults(event.target.value);
  }
});

els.drawerNavigation.addEventListener("focusin", (event) => {
  if (event.target.matches("[data-drawer-product-search]")) {
    renderDrawerProductSearchResults(event.target.value, true);
  }
});

els.drawerNavigation.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.matches("[data-drawer-product-search]")) {
    event.preventDefault();
    const match = drawerProductSearchMatches(event.target.value, true)[0];
    if (match) goToDrawerProduct(match.lineId);
  }
});

els.drawerContent.addEventListener("click", (event) => {
  const productSection = event.target.closest("[data-drawer-product]");
  if (productSection) {
    state.editingId = productSection.dataset.drawerProduct;
    setActiveDrawerProduct(state.editingId);
  }

  if (event.target.closest("[data-drawer-close]")) {
    closeDrawer();
    return;
  }

  const quantityStep = event.target.closest("[data-drawer-quantity-step]");
  if (quantityStep) {
    const lineId = quantityStep.dataset.drawerQuantityStep;
    const product = state.basket.find((item) => item.lineId === lineId);
    if (!product) return;
    const draftProduct = drawerProductWithDraft(product);
    const nextQuantity = Math.max(1, draftProduct.quantity + Number(quantityStep.dataset.step || 0));
    updateQuantity(lineId, nextQuantity);
    const input = quantityStep.closest(".drawer-quantity-stepper")?.querySelector("[data-drawer-quantity]");
    if (input) input.value = nextQuantity;
    return;
  }

  const offerButton = event.target.closest("[data-select-supplier-offer]");
  if (offerButton) {
    const product = state.basket.find((item) => item.lineId === offerButton.dataset.lineId);
    if (product && drawerProductWithDraft(product).selectedOfferKey === offerButton.dataset.selectSupplierOffer) return;
    selectSupplier(offerButton.dataset.lineId, offerButton.dataset.selectSupplierOffer);
  }
});

els.drawerContent.addEventListener("keydown", (event) => {
  const row = event.target.closest("tr[data-select-supplier-offer]");
  if (!row || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  const product = state.basket.find((item) => item.lineId === row.dataset.lineId);
  if (product && drawerProductWithDraft(product).selectedOfferKey === row.dataset.selectSupplierOffer) return;
  selectSupplier(row.dataset.lineId, row.dataset.selectSupplierOffer);
});

document.addEventListener("click", (event) => {
  if (state.advancedSortPanelOpen && !event.target.closest(".advanced-sort-menu")) {
    closeAdvancedSortPanel();
  }

  if (state.editingId && !event.target.closest(".go-to-product")) {
    closeDrawerProductSearchResults();
  }

  if (event.target.matches("[data-close-modal]")) {
    pendingConfirmationAction = null;
    event.target.closest("dialog").close();
  }
});

document.querySelector("#confirmOrder").addEventListener("click", () => {
  els.orderModal.close();
  if (typeof pendingConfirmationAction === "function") {
    const action = pendingConfirmationAction;
    pendingConfirmationAction = null;
    action();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.advancedSortPanelOpen) {
    closeAdvancedSortPanel();
    return;
  }

  if (!state.editingId) return;

  if (event.key === "Escape") {
    closeDrawer();
    return;
  }

  if (event.target.matches("input, textarea, select")) return;

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveDrawerProduct(-1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveDrawerProduct(1);
  }
});

render();
focusAddProductSearch();
