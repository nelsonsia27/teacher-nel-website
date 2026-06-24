const nav = document.querySelector("#site-nav");
const pages = [...document.querySelectorAll(".page")];
const menuToggle = document.querySelector(".menu-toggle");
const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector(".search-panel");
const closeSearch = document.querySelector(".close-search");
const searchInput = document.querySelector("#site-search");
const searchResults = document.querySelector(".search-results");

function pageLabel(id) {
  const item = flattenNav().find(entry => entry.page === id);
  return item ? item.label : PAGES[id]?.title || "Home";
}

function flattenNav() {
  return SITE_NAV.flatMap(item => [item, ...(item.children || [])]);
}

function renderNav() {
  nav.innerHTML = SITE_NAV.map(item => {
    const children = item.children?.map(child => `<a href="#${child.page}">${child.label}</a>`).join("") || "";
    return `<div class="nav-item">
      <a class="nav-link" href="#${item.page}">${item.label}${children ? "⌄" : ""}</a>
      ${children ? `<div class="dropdown">${children}</div>` : ""}
    </div>`;
  }).join("");
}

function renderPages() {
  Object.entries(PAGES).forEach(([id, page]) => {
    const target = document.querySelector(`[data-page="${id}"]`);
    if (!target) return;
    target.innerHTML = `<div class="page-shell">
      <div class="page-hero">
        <div>
          <p class="eyebrow">${page.eyebrow}</p>
          <h2>${page.title}</h2>
          <p class="summary">${page.summary}</p>
        </div>
        <div class="stat-strip">
          ${page.stats.map(([value, label]) => `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`).join("")}
        </div>
      </div>
      <div class="content-grid">
        <div class="text-card">
          ${page.sections.map(section => `<article><h3>${section.heading}</h3>${section.body.map(p => `<p>${p}</p>`).join("")}</article>`).join("")}
          <p>${id.includes("bilingual") || ["classroom-english", "english-reading-corner", "english-practice", "monthly-storytelling"].includes(id) ? COMMON_PARTNERS : ""}</p>
        </div>
        <div>
          ${renderResourceBlock(page.resources || [])}
          ${renderGallery(id)}
        </div>
      </div>
    </div>`;
  });
}

function renderResourceBlock(resources) {
  if (!resources.length) return "";
  const types = ["all", ...new Set(resources.map(item => item.type))];
  return `<div class="resource-tools">${types.map(type => `<button type="button" data-filter="${type}" class="${type === "all" ? "active" : ""}">${type}</button>`).join("")}</div>
    <div class="resource-list">
      ${resources.map(item => `<article class="resource-card" data-type="${item.type}">
        <span class="tag">${item.type}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <a class="button" href="${item.url}" ${item.url.startsWith("#") ? "" : 'target="_blank" rel="noreferrer"'}>${item.url.startsWith("#") ? "Open Section" : "Open Resource"}</a>
      </article>`).join("")}
    </div>`;
}

function renderGallery(id) {
  if (["home", "teaching-resources"].includes(id)) return "";
  const images = GALLERY_IMAGES.slice(0, id.includes("camp") ? 4 : 2);
  return `<div class="gallery" aria-label="Visual style samples">
    ${images.map((src, index) => `<figure class="gallery-card">
      <img src="${src}" alt="${pageLabel(id)} visual ${index + 1}" loading="lazy">
      <figcaption>${pageLabel(id)} visual ${index + 1}</figcaption>
    </figure>`).join("")}
  </div>`;
}

function setActivePage(id) {
  const pageId = id || "home";
  pages.forEach(page => page.classList.toggle("active", page.dataset.page === pageId));
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${pageId}`);
  });
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function bindFilters() {
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    const tools = button.closest(".resource-tools");
    const list = tools.nextElementSibling;
    const filter = button.dataset.filter;
    tools.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
    list.querySelectorAll(".resource-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.type !== filter;
    });
  });
}

function openSearch() {
  searchPanel.classList.add("open");
  searchPanel.setAttribute("aria-hidden", "false");
  searchInput.focus();
  runSearch();
}

function closeSearchPanel() {
  searchPanel.classList.remove("open");
  searchPanel.setAttribute("aria-hidden", "true");
}

function runSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const records = Object.entries(PAGES).map(([id, page]) => ({
    id,
    title: page.title,
    text: [page.summary, ...page.sections.flatMap(section => [section.heading, ...section.body]), ...(page.resources || []).flatMap(item => [item.title, item.text])].join(" ")
  }));
  const matches = records.filter(record => !query || `${record.title} ${record.text}`.toLowerCase().includes(query)).slice(0, 8);
  searchResults.innerHTML = matches.map(match => `<a class="search-result" href="#${match.id}">
    <strong>${match.title}</strong>
    <span>${match.text.slice(0, 130)}...</span>
  </a>`).join("");
}

renderNav();
renderPages();
bindFilters();
setActivePage(location.hash.replace("#", "") || "home");

window.addEventListener("hashchange", () => setActivePage(location.hash.replace("#", "") || "home"));
menuToggle.addEventListener("click", () => {
  const open = !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});
searchToggle.addEventListener("click", openSearch);
closeSearch.addEventListener("click", closeSearchPanel);
searchInput.addEventListener("input", runSearch);
searchResults.addEventListener("click", closeSearchPanel);
searchPanel.addEventListener("click", event => {
  if (event.target === searchPanel) closeSearchPanel();
});
