/**
 * Last Doctor - Client Application Logic
 * Interactive directory, smart search, filtering, and accordion engine.
 */

document.addEventListener("DOMContentLoaded", () => {
  const directoryContainer = document.getElementById("directory-container");
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const resultsCountBadge = document.getElementById("results-count");
  const filterChipsContainer = document.getElementById("filter-chips");
  const expandAllBtn = document.getElementById("expand-all-btn");
  const collapseAllBtn = document.getElementById("collapse-all-btn");
  const visitorCountEl = document.getElementById("visitor-count");

  let currentFilter = "all";
  let searchQuery = "";

  // 1. Initialize stats in hero
  updateHeroStats();

  // 2. Render initial directory
  renderDirectory();

  // 3. Search & Filter Handlers
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? "inline-flex" : "none";
      }
      renderDirectory();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearSearchBtn.style.display = "none";
      searchInput.focus();
      renderDirectory();
    });
  }

  // 4. Filter chips click handling
  if (filterChipsContainer) {
    filterChipsContainer.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;

      document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      currentFilter = chip.getAttribute("data-filter") || "all";
      renderDirectory();
    });
  }

  // 5. Expand / Collapse All
  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".category-card").forEach((card) => {
        card.classList.add("expanded");
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".category-card").forEach((card) => {
        card.classList.remove("expanded");
      });
    });
  }

  // 6. Safe Visitor Count Analytics
  initVisitorCounter(visitorCountEl);

  /**
   * Helper: Calculate and display hero badge numbers
   */
  function updateHeroStats() {
    const totalSpecialties = DOCTORS_DATA.length;
    let totalDoctors = 0;
    DOCTORS_DATA.forEach((cat) => {
      totalDoctors += cat.doctors.length;
    });

    const statSpecs = document.getElementById("stat-specialties-count");
    const statDocs = document.getElementById("stat-doctors-count");
    if (statSpecs) statSpecs.textContent = `${totalSpecialties}+ Specialties`;
    if (statDocs) statDocs.textContent = `${totalDoctors}+ Doctors`;
  }

  /**
   * Render filtered directory
   */
  function renderDirectory() {
    if (!directoryContainer) return;
    directoryContainer.innerHTML = "";

    let totalVisibleDoctors = 0;
    const isSearching = searchQuery.length > 0;

    DOCTORS_DATA.forEach((cat, index) => {
      // Check specialty filter
      const matchesCategoryFilter =
        currentFilter === "all" ||
        cat.slug.toLowerCase() === currentFilter.toLowerCase() ||
        cat.category.toLowerCase().includes(currentFilter.toLowerCase());

      // Filter doctors inside this category
      const matchedDoctors = cat.doctors.filter((doctor) => {
        // District / Location filter
        const matchesLocationFilter =
          currentFilter === "all" ||
          matchesCategoryFilter ||
          (doctor.district && doctor.district.toLowerCase().includes(currentFilter.toLowerCase())) ||
          (doctor.location && doctor.location.toLowerCase().includes(currentFilter.toLowerCase()));

        if (!matchesLocationFilter) return false;

        if (!isSearching) return true;

        const hayStack = [
          doctor.name,
          doctor.qualifications,
          doctor.designation,
          doctor.experience,
          doctor.location,
          doctor.district,
          doctor.hospital,
          doctor.notes,
          cat.category,
          ...(doctor.phones || [])
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return hayStack.includes(searchQuery);
      });

      if (matchedDoctors.length > 0) {
        totalVisibleDoctors += matchedDoctors.length;
        const categoryCard = createCategoryCard(cat, matchedDoctors, isSearching || index === 0);
        directoryContainer.appendChild(categoryCard);
      }
    });

    // Update count indicator
    if (resultsCountBadge) {
      resultsCountBadge.textContent = `${totalVisibleDoctors} Verified Specialists`;
    }

    // Empty state
    if (totalVisibleDoctors === 0) {
      directoryContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <i class="fa-solid fa-user-doctor"></i>
          </div>
          <h3>No doctors found matching "${escapeHtml(searchQuery || currentFilter)}"</h3>
          <p>Try searching for a different specialty, doctor's name, or city (e.g. "Calicut", "Kochi", "Liver").</p>
          <button class="search-submit-btn" id="reset-search-btn" style="display:inline-flex;">
            <i class="fa-solid fa-rotate-left"></i> View All Doctors
          </button>
        </div>
      `;

      const resetBtn = document.getElementById("reset-search-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          searchQuery = "";
          currentFilter = "all";
          document.querySelectorAll(".filter-chip").forEach((c) => {
            c.classList.toggle("active", c.getAttribute("data-filter") === "all");
          });
          if (clearSearchBtn) clearSearchBtn.style.display = "none";
          renderDirectory();
        });
      }
    }
  }

  /**
   * Create HTML Element for Category
   */
  function createCategoryCard(category, doctors, shouldExpand = false) {
    const card = document.createElement("div");
    card.className = `category-card ${shouldExpand ? "expanded" : ""}`;

    const iconClass = category.icon || "fa-stethoscope";

    let whatsappChannelBtn = "";
    if (category.whatsappChannel) {
      whatsappChannelBtn = `
        <a href="${category.whatsappChannel}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="whatsapp-channel-pill" 
           title="Join ${category.category} WhatsApp Community"
           onclick="event.stopPropagation();">
          <i class="fa-brands fa-whatsapp"></i> Channel
        </a>
      `;
    }

    card.innerHTML = `
      <div class="category-header" role="button" tabindex="0" aria-expanded="${shouldExpand}">
        <div class="category-title-group">
          <div class="category-icon-box">
            <i class="fa-solid ${iconClass}"></i>
          </div>
          <div class="category-info">
            <div class="category-title-text">
              <span>${escapeHtml(category.category)}</span>
              <span class="category-doctor-count">${doctors.length} ${doctors.length === 1 ? "doctor" : "doctors"}</span>
            </div>
            <div class="category-desc">${escapeHtml(category.description || "")}</div>
          </div>
        </div>
        <div class="category-header-actions">
          ${whatsappChannelBtn}
          <div class="accordion-chevron">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div class="category-body">
        <div class="doctors-grid">
          ${doctors.map((doc) => createDoctorCardHtml(doc)).join("")}
        </div>
      </div>
    `;

    // Accordion Toggle
    const header = card.querySelector(".category-header");
    header.addEventListener("click", () => {
      const isExpanded = card.classList.toggle("expanded");
      header.setAttribute("aria-expanded", isExpanded);
    });

    // Keyboard accessibility
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        header.click();
      }
    });

    return card;
  }

  /**
   * Generate Doctor Card Markup
   */
  function createDoctorCardHtml(doc) {
    // Generate avatar initials
    const initials = doc.name
      .replace(/^Dr\.?\s*/i, "")
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "DR";

    // Format phones into click-to-call links
    let contactActionsHtml = "";
    if (doc.phones && doc.phones.length > 0) {
      const phoneLinks = doc.phones
        .map((rawPhone) => {
          const cleanDigits = rawPhone.replace(/\D/g, "");
          const formattedDisplay = formatPhoneNumber(rawPhone);
          return `
            <a href="tel:+91${cleanDigits}" class="phone-badge-link" title="Direct call to ${doc.name}">
              <i class="fa-solid fa-phone"></i>
              <span>Call: ${formattedDisplay}</span>
            </a>
          `;
        })
        .join("");

      contactActionsHtml = `
        <div class="phone-badges-group">
          ${phoneLinks}
        </div>
      `;
    } else {
      contactActionsHtml = `
        <span class="hospital-inquiry-badge">
          <i class="fa-regular fa-hospital"></i> Consult via Hospital Desk / Inquire
        </span>
      `;
    }

    return `
      <div class="doctor-card">
        <div class="doctor-card-top">
          <div class="doctor-header">
            <div class="doctor-avatar-circle">${initials}</div>
            <div class="doctor-title-box">
              <div class="doctor-name-row">
                <h3 class="doctor-name">${escapeHtml(doc.name)}</h3>
                <i class="fa-solid fa-circle-check verified-badge" title="Verified Specialist"></i>
              </div>
              <div class="doctor-degrees">${escapeHtml(doc.qualifications || "")}</div>
              <div class="doctor-designation">${escapeHtml(doc.designation || "")}</div>
            </div>
          </div>

          <div class="doctor-meta-list">
            ${
              doc.location
                ? `
              <div class="meta-item location">
                <i class="fa-solid fa-location-dot"></i>
                <span>${escapeHtml(doc.location)}</span>
              </div>
            `
                : ""
            }
            ${
              doc.hospital
                ? `
              <div class="meta-item">
                <i class="fa-solid fa-hospital-user"></i>
                <span>${escapeHtml(doc.hospital)}</span>
              </div>
            `
                : ""
            }
            ${
              doc.experience && doc.experience !== doc.designation
                ? `
              <div class="meta-item">
                <i class="fa-solid fa-award"></i>
                <span>${escapeHtml(doc.experience)}</span>
              </div>
            `
                : ""
            }
          </div>

          ${
            doc.notes
              ? `
            <div class="doctor-notes-box">
              <i class="fa-solid fa-circle-info"></i> ${escapeHtml(doc.notes)}
            </div>
          `
              : ""
          }
        </div>

        <div class="doctor-actions">
          ${contactActionsHtml}
        </div>
      </div>
    `;
  }

  /**
   * Phone Number Formatter
   */
  function formatPhoneNumber(phoneStr) {
    const cleaned = ("" + phoneStr).replace(/\D/g, "");
    if (cleaned.length === 10) {
      return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
    }
    return phoneStr;
  }

  /**
   * Safe HTML Escaping
   */
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * Resilient Visitor Counter
   */
  function initVisitorCounter(element) {
    if (!element) return;

    // Set fallback immediately
    element.textContent = "2,480+";

    // Attempt countapi with short timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    fetch("https://api.countapi.xyz/hit/www.lastdr.com/visits", {
      signal: controller.signal
    })
      .then((res) => {
        clearTimeout(timeoutId);
        if (!res.ok) throw new Error("Status " + res.status);
        return res.json();
      })
      .then((data) => {
        if (data && data.value) {
          element.textContent = Number(data.value).toLocaleString();
        }
      })
      .catch(() => {
        // Safe fallback already applied
      });
  }
});