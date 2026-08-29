/* ============================================================
   PORTFOLIO ENGINE
   The content is loaded from data.js, so you don't need to
   edit index.html when adding projects or resumes.
   ============================================================ */

const data = portfolioData;

const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const header = document.querySelector(".site-header");
const topButton = document.getElementById("topButton");
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

const escapeHTML = value => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const safeUrl = value => {
  const url = String(value || "").trim();
  if (!url || url === "#") return "#";
  if (url.startsWith("mailto:") || url.startsWith("https://") || url.startsWith("http://") || url.startsWith("assets/")) return url;
  return "#";
};

function setLink(id, url) {
  const element = document.getElementById(id);
  if (!element) return;
  element.href = safeUrl(url);
  element.classList.toggle("is-disabled", !url || url === "#");
}

function renderProfile() {
  const p = data.profile;
  document.title = `${p.name} | ${p.role} Portfolio`;
  document.querySelector('meta[name="description"]').content = `${p.name} — ${p.shortRole} and MCA student specializing in Generative AI and web development.`;

  document.getElementById("brandName").innerHTML = `${escapeHTML(p.firstName)} <b>${escapeHTML(p.lastName)}</b>`;
  document.getElementById("heroName").textContent = p.firstName;
  document.getElementById("heroTagline").textContent = p.tagline;
  document.getElementById("heroAccent").textContent = p.heroAccent;
  document.getElementById("heroDescription").textContent = p.heroDescription;
  document.getElementById("learningText").textContent = data.learning;
  document.getElementById("profileRole").textContent = "MCA • Generative AI";
  document.getElementById("profileLocation").textContent = p.location;
  document.getElementById("footerName").textContent = p.name;

  document.getElementById("aboutTitle").textContent = p.aboutTitle;
  document.getElementById("aboutAccent").textContent = p.aboutAccent;
  document.getElementById("aboutIntro").innerHTML = p.about.map(text => `<p>${escapeHTML(text)}</p>`).join("");

  const emailHref = `mailto:${p.email}`;
  setLink("heroGithub", p.github);
  setLink("heroLinkedin", p.linkedin);
  setLink("heroEmail", emailHref);
  setLink("contactGithub", p.github);
  setLink("contactLinkedin", p.linkedin);
  setLink("contactEmail", emailHref);
  document.getElementById("contactEmailText").textContent = p.email;
  setLink("navResume", p.resume);
  setLink("mainResume", p.resume);

  const photo = document.getElementById("profilePhoto");
  photo.src = p.photo;
  photo.addEventListener("load", () => {
    photo.classList.add("loaded");
    document.getElementById("profileInitial").style.display = "none";
    document.getElementById("profileHint").style.display = "none";
  });
}

function renderMarquee() {
  const track = document.getElementById("marqueeTrack");
  const items = [...data.marquee, ...data.marquee];
  track.innerHTML = items.map((item, index) => `${index ? '<b>✦</b>' : ''}<span>${escapeHTML(item)}</span>`).join("");
}

function renderSkills() {
  document.getElementById("skillsGrid").innerHTML = data.skills.map((skill, index) => `
    <article class="skill-card reveal ${index % 3 === 1 ? "delay-one" : index % 3 === 2 ? "delay-two" : ""}">
      <span class="skill-number">${escapeHTML(skill.number)}</span>
      <div class="skill-icon">${escapeHTML(skill.icon)}</div>
      <h3>${escapeHTML(skill.title)}</h3>
      <p>${escapeHTML(skill.description)}</p>
    </article>
  `).join("");
}

function projectPreview(project) {
  if (project.previewType === "fintrack") {
    return `
      <div class="project-screen">
        <div class="screen-sidebar">FIN<br><small>TRACK</small></div>
        <div class="screen-content">
          <p>YOUR EXPENSES</p>
          <strong>₹ —</strong>
          <div class="fake-chart"><span></span><span></span><span></span><span></span><span></span><span></span></div>
        </div>
      </div>`;
  }
  return `
    <div class="project-screen generic-project-screen">
      <div class="generic-project-mark">${escapeHTML((project.title || "P").slice(0, 2).toUpperCase())}</div>
      <div><p>PROJECT</p><strong>${escapeHTML(project.title)}</strong></div>
    </div>`;
}

function renderProjects() {
  const projects = data.projects || [];
  const featured = projects.find(project => project.featured) || projects[0];
  const others = projects.filter(project => project !== featured);
  const container = document.getElementById("projectsContainer");

  if (!featured) {
    container.innerHTML = '<p class="empty-state">Add your first project in data.js.</p>';
    return;
  }

  const featuredHTML = `
    <article class="project-feature reveal">
      <div class="project-browser">
        <div class="browser-bar"><i></i><i></i><i></i><span>${escapeHTML(featured.browserText || "project.app")}</span></div>
        ${projectPreview(featured)}
      </div>
      <div class="project-info">
        <p class="project-label">${escapeHTML(featured.number)} / Featured Project</p>
        <h3>${escapeHTML(featured.title)}</h3>
        <p>${escapeHTML(featured.description)}</p>
        <div class="tags">${(featured.technologies || []).map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
        <div class="project-links">
          ${featured.github && featured.github !== "#" ? `<a href="${safeUrl(featured.github)}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
          ${featured.live && featured.live !== "#" ? `<a href="${safeUrl(featured.live)}" target="_blank" rel="noopener">Live Demo ↗</a>` : ""}
        </div>
      </div>
    </article>`;

  const othersHTML = others.length ? `
    <div class="project-grid">
      ${others.map((project, index) => `
        <article class="project-card reveal ${index % 2 ? "delay-one" : ""}">
          <div class="project-card-top"><span>${escapeHTML(project.number)}</span><span>${escapeHTML(project.browserText || "project")}</span></div>
          <div class="project-card-preview">${projectPreview(project)}</div>
          <p class="project-label">Project</p>
          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.description)}</p>
          <div class="tags">${(project.technologies || []).map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
          <div class="project-links">
            ${project.github && project.github !== "#" ? `<a href="${safeUrl(project.github)}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
            ${project.live && project.live !== "#" ? `<a href="${safeUrl(project.live)}" target="_blank" rel="noopener">Live Demo ↗</a>` : ""}
          </div>
        </article>
      `).join("")}
    </div>` : "";

  container.innerHTML = featuredHTML + othersHTML;
}

function renderEducation() {
  document.getElementById("educationTimeline").innerHTML = (data.education || []).map((item, index) => `
    <div class="timeline-item reveal ${index % 2 ? "delay-one" : ""}">
      <span class="timeline-year">${escapeHTML(item.year)}</span>
      <div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.place)}</p>${item.description ? `<small>${escapeHTML(item.description)}</small>` : ""}</div>
    </div>
  `).join("");
}

function renderCertificates() {
  document.getElementById("certificatesContainer").innerHTML = (data.certificates || []).map(cert => `
    <div class="certificate-card reveal">
      <div class="certificate-badge">CERT<br><strong>${escapeHTML(cert.number)}</strong></div>
      <div><p>${escapeHTML(cert.category)}</p><h3>${escapeHTML(cert.title)}</h3><span>${escapeHTML(cert.description)}</span></div>
      ${cert.link && cert.link !== "#" ? `<a href="${safeUrl(cert.link)}" target="_blank" rel="noopener">View Certificate ↗</a>` : ""}
    </div>
  `).join("");
}

function renderResumes() {
  const resumes = data.resumes || [];
  document.getElementById("resumesContainer").innerHTML = resumes.map(resume => `
    <article class="resume-card reveal">
      <span class="resume-number">${escapeHTML(resume.number)}</span>
      <div><p>RESUME</p><h3>${escapeHTML(resume.title)}</h3><span>${escapeHTML(resume.description)}</span></div>
      <a href="${resume.file}" target="_blank" rel="noopener">Open ↗</a>
      <a class="resume-download" href="${resume.file}" download>Download ↓</a>
    </article>
  `).join("");
}

function initInteractions() {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
    topButton.classList.toggle("show", window.scrollY > 500);

    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".nav a");
    let current = "home";
    sections.forEach(section => {
      const top = section.offsetTop - 180;
      if (window.scrollY >= top) current = section.id;
    });
    links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
  });

  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeToggle.textContent = document.body.classList.contains("light") ? "☾" : "☼";
    themeToggle.setAttribute("aria-label", document.body.classList.contains("light") ? "Toggle dark mode" : "Toggle light mode");
  });

  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    formNote.textContent = "Thanks! This demo form is working on the frontend. Connect a backend or form service to receive messages.";
    formNote.style.color = "#ff5d59";
    contactForm.reset();
  });
}

function startRevealObserver() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
}

renderProfile();
renderMarquee();
renderSkills();
renderProjects();
renderEducation();
renderCertificates();
renderResumes();
initInteractions();
startRevealObserver();
