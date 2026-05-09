'use strict';

/*  1. LOADER */
const loader = document.getElementById('loader');
document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = 'auto';
    startEntranceAnimations();
  }, 2000);
});

/* 2. CUSTOM CURSOR  */
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .project-card, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* 3. NAVBAR */
const navbar     = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* 4. THEME TOGGLE  */
const themeBtn = document.getElementById('theme-btn');
const html     = document.documentElement;
html.setAttribute('data-theme', localStorage.getItem('jm-theme') || 'dark');

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('jm-theme', next);
});

/*  5. TRANSLATIONS  */
const translations = {
  fr: {
    'nav.about':'À propos','nav.skills':'Compétences','nav.services':'Services',
    'nav.projects':'Projets','nav.journey':'Parcours','nav.languages':'Langues','nav.contact':'Contact',
    'hero.sup':'Bonjour, je suis','hero.cta1':'Voir mes projets','hero.cta2':'Me contacter','hero.cv':'CV',
    'stats.projects':'Projets réalisés','stats.skills':'Compétences','stats.years':"Ans d'apprentissage",'stats.langs':'Langues parlées',
    'about.tag':'À propos','about.title':'Qui suis-je ?',
    'about.p1':"Je suis <strong>Jovani Mbombo</strong>, étudiant  en genie  informatique à l'Université Pédagogique Nationale de Kinshasa (RDC), actuellement en 2ème Licence.",
    'about.p2':"Ma passion pour la technologie, le développement web , mobile , logiciel  et l'innovation me pousse chaque jour à repousser mes limites. Je crois fermement que chaque bug est une opportunité d'apprendre et de grow — <em>Each Bug Matters</em>.",
    'about.p3':"Un secret pour le moment",
    'about.name':'Nom','about.univ':'Université','about.level':'Niveau','about.levelVal':'2ème Licence','about.city':'Ville','about.hosting':'Hébergement',
    'skills.tag':'Compétences','skills.title':'Mon arsenal technique','skills.learning':'En apprentissage · 10%','skills.hosting':'Hébergement Web','skills.cyber':'Cybersécurité','skills.notions':'Notions · 1%',
    'services.tag':'Services','services.title':'Ce que je propose',
    'srv1.title':'Développement Web','srv1.desc':'Création de sites web modernes, rapides et responsives avec HTML, CSS & JavaScript pur.',
    'srv2.title':'UI / Design Front-end','srv2.desc':'Interfaces élégantes, animations fluides et expériences utilisateur mémorables.',
    'srv3.title':'Déploiement & Hébergement','srv3.desc':'Mise en ligne de projets sur GitHub Pages, Netlify, InfinityFree et Render.',
    'srv4.title':'Sensibilisation Cyber','srv4.desc':'Notions de sécurité web, bonnes pratiques et initiation à Kali Linux.',
    'srv5.title':'Responsive & Optimisation','srv5.desc':'Sites parfaitement adaptés à tous les écrans – mobile, tablette et desktop.',
    'srv6.title':'Gestion GitHub','srv6.desc':'Versioning, collaboration, pull requests et gestion de dépôts professionnels.',
    'projects.tag':'Projets','projects.title':'Mes réalisations',
    'proj1.desc':'Plateforme web moderne dédiée à la vente d\'article en ligne polo , cravate , mouchoire de poche et autre ,je l\'ai developpé pour mon ami Jenovic Muamba',
    'proj2.desc':'Site communautaire inspirationnel mêlant design épuré et contenu engageant. Navigation intuitive, responsive.',
    'proj3.desc':'Site vitrine professionnel pour un service de pressing express. Présentation des offres, tarifs et contact intégré.',
    'proj4.desc':'Application calculatrice élégante et fonctionnelle, développée en JavaScript pur avec un design moderne et épuré.',
    'proj5.desc':"Application météo en temps réel pour la RDC. Intégration d'API météo, géolocalisation et design immersif animé.",
    'proj.demo':'Live Demo',
    'journey.tag':'Parcours','journey.title':'Mon parcours académique',
    'jrn1.title':'2ème Licence – Genie Informatique','jrn1.desc':"Spécialisation en développement logiciel , développement web ,programmation avec le langage  java , algorithmique avancée, bases de données et administration de bases de données,Merise,Python etc....",
    'jrn2.title':'1ère Licence –Mathematique Informatique','jrn2.desc':'Algèbre , logique math , programmation avec le langage c , Algorithmique etc...',
    'jrn3.title':'Autodidacte – Développement Web et programmation avec python','jrn3.desc':'Apprentissage intensif de HTML, CSS et JavaScript.  Projets personnels et découverte du monde du dev et de la tech.',
    'lang.tag':'Langues','lang.title':'Langues maîtrisées','lang.fr':'Langue principale','lang.lin':'Langue nationale · En apprentissage','lang.tshi':'Langue nationale · Courant','lang.en':'En apprentissage · Level 1',
    'contact.tag':'Contact','contact.title':'Travaillons ensemble','contact.sub':"Une idée ? Un projet ? N'hésitez pas à me contacter.",'contact.location':'Localisation',
    'form.name':'Nom complet','form.namePh':'Votre nom','form.email':'Adresse email','form.msg':'Message','form.msgPh':'Votre message...','form.send':'Envoyer le message',
    'footer.tagline':'Développeur Web Junior · Kinshasa, RDC','footer.made':'Conçu &amp; développé  par Jovani',
    'form.emailPh':'Votre email',
    'proj.cat.website':'Site Web',
    'proj.cat.tool':'Outil',
    'jrn3.place':'En ligne – YouTube, Open classroom , GitHub , Cisco',
    'back-to-top.label':'Retour en haut',
  },
  en: {
    'nav.about':'About','nav.skills':'Skills','nav.services':'Services',
    'nav.projects':'Projects','nav.journey':'Journey','nav.languages':'Languages','nav.contact':'Contact',
    'hero.sup':"Hello, I'm",'hero.cta1':'View my projects','hero.cta2':'Contact me','hero.cv':'CV',
    'stats.projects':'Projects done','stats.skills':'Skills','stats.years':'Years of learning','stats.langs':'Languages spoken',
    'about.tag':'About','about.title':'Who am I?',
    'about.p1':"I am <strong>Jovani Mbombo</strong>, a passionate Computer Science student at the Université Pédagogique Nationale in Kinshasa (DRC), currently in my 2nd year Bachelor's.",
    'about.p2':"My passion for technology, web development and innovation pushes me every day to go beyond my limits. I firmly believe that every bug is an opportunity to learn and grow — <em>Each Bug Matters</em>.",
    'about.p3':"My goal is to become a high-performing full-stack developer, capable of building impactful digital solutions for Africa and the world.",
    'about.name':'Name','about.univ':'University','about.level':'Level',"about.levelVal":"2nd year Bachelor's",'about.city':'City','about.hosting':'Hosting',
    'skills.tag':'Skills','skills.title':'My tech stack','skills.learning':'Learning · 10%','skills.hosting':'Web Hosting','skills.cyber':'Cybersecurity','skills.notions':'Basics · 1%',
    'services.tag':'Services','services.title':'What I offer',
    'srv1.title':'Web Development','srv1.desc':'Building modern, fast and responsive websites with pure HTML, CSS & JavaScript.',
    'srv2.title':'UI / Front-end Design','srv2.desc':'Elegant interfaces, smooth animations and memorable user experiences.',
    'srv3.title':'Deployment & Hosting','srv3.desc':'Publishing projects on GitHub Pages, Netlify, InfinityFree and Render.',
    'srv4.title':'Cyber Awareness','srv4.desc':'Web security basics, best practices and introduction to Kali Linux.',
    'srv5.title':'Responsive & Optimization','srv5.desc':'Websites perfectly adapted to all screens – mobile, tablet and desktop.',
    'srv6.title':'GitHub Management','srv6.desc':'Versioning, collaboration, pull requests and professional repository management.',
    'projects.tag':'Projects','projects.title':'My work',
    'proj1.desc':'Modern web platform dedicated to managing and showcasing digital services. Clean interface, smooth UX.',
    'proj2.desc':'Inspirational community website blending clean design with engaging content. Intuitive navigation, responsive.',
    'proj3.desc':'Professional showcase website for an express dry-cleaning service. Service presentation, pricing and contact.',
    'proj4.desc':'Elegant and functional calculator app built with pure JavaScript, featuring a modern clean design.',
    'proj5.desc':'Real-time weather app for the DRC. Weather API integration, geolocation and immersive animated design.',
    'proj.demo':'Live Demo',
    'journey.tag':'Journey','journey.title':'My academic journey',
    "jrn1.title":"2nd Bachelor's – Computer Science",'jrn1.desc':'Specialization in software development, advanced algorithms, databases and information systems.',
    "jrn2.title":"1st Bachelor's – Computer Science",'jrn2.desc':'Programming fundamentals, web development, computer networks and system architecture.',
    'jrn3.title':'Self-taught – Web Development','jrn3.desc':'Intensive learning of HTML, CSS and JavaScript. First personal projects and discovery of the dev world.',
    'lang.tag':'Languages','lang.title':'Languages I speak','lang.fr':'Main language','lang.lin':'Local language · Fluent','lang.tshi':'National language · Fluent','lang.en':'Learning · Intermediate',
    'contact.tag':'Contact','contact.title':"Let's work together",'contact.sub':'Have an idea? A project? Feel free to reach out.','contact.location':'Location',
    'form.name':'Full name','form.namePh':'Your name','form.email':'Email address','form.msg':'Message','form.msgPh':'Your message...','form.send':'Send message',
    'footer.tagline':'Junior Web Developer · Kinshasa, DRC','footer.made':'Designed &amp; built  by Jovani',
    'form.emailPh':'Your email',
    'proj.cat.website':'Website',
    'proj.cat.tool':'Tool',
    'jrn3.place':'Online – YouTube, Open Classroom, GitHub, Cisco',
    'back-to-top.label':'Back to top',
  }
};

let currentLang = localStorage.getItem('jm-lang') || 'fr';
const langBtn   = document.getElementById('lang-btn');
const langFlag  = document.getElementById('lang-flag');
const langLabel = document.getElementById('lang-label');

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });
  document.documentElement.lang = lang;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('jm-lang', lang);
  applyTranslations(lang);
  updateTypewriterPhrases(lang);
  langFlag.textContent  = lang === 'fr' ? '🇬🇧' : '🇫🇷';
  langLabel.textContent = lang === 'fr' ? 'EN'   : 'FR';
}

langBtn.addEventListener('click', () => setLang(currentLang === 'fr' ? 'en' : 'fr'));

/* 6. TYPEWRITER */
const typewriterEl = document.getElementById('typewriter-text');
const typewriterPhrases = {
  fr: [
    'Etudiant en 2 eme licence genie informatique',
    'Développeur Web Junior',
    'Passionné par la tech',
    "Étudiant à l'UPN Kinshasa",
    'HTML · CSS · JavaScript · Python',
    'Each Bug Matters',
    'Chaque bug est une opportunité d\'apprendre',
  ],
  en: [
    '2nd year Computer Science student',
    'Junior Web Developer',
    'Passionate about tech',
    'Student at UPN Kinshasa',
    'HTML · CSS · JavaScript · Python',
    'Each Bug Matters',
    'Every bug is an opportunity to learn',
  ],
};
let phrases = typewriterPhrases[currentLang] || typewriterPhrases.fr;
let phraseIdx = 0, charIdx = 0, deleting = false, typeSpeed = 80;

function updateTypewriterPhrases(lang) {
  phrases = typewriterPhrases[lang] || typewriterPhrases.fr;
  phraseIdx = 0;
  charIdx = 0;
  deleting = false;
  typewriterEl.textContent = '';
}

function typeWriter() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typewriterEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true; typeSpeed = 40;
      setTimeout(typeWriter, 1800); return;
    }
  } else {
    typewriterEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; typeSpeed = 80; }
  }
  setTimeout(typeWriter, typeSpeed);
}
setTimeout(typeWriter, 2400);
setLang(currentLang);

/*  7. SCROLL REVEAL  */
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

function startEntranceAnimations() {
  document.querySelectorAll('#hero .reveal-up, #hero .reveal-left, #hero .reveal-right').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 120);
  });
}

/*  8. STATS COUNTER  */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target, target = parseInt(el.getAttribute('data-target'));
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count += step;
        if (count >= target) { count = target; clearInterval(timer); }
        el.textContent = count;
      }, 40);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

/*  9. SKILL BARS  */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute('data-pct') + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));

/* 10. BACK TO TOP */
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* 11. CONTACT FORM - EmailJS Integration */
const contactForm = document.getElementById('contact-form');
const formStatus  = document.getElementById('form-status');
const formSubmit  = document.getElementById('form-submit');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name    = this.name.value.trim();
  const email   = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = currentLang === 'fr' ? '⚠️ Veuillez remplir tous les champs.' : '⚠️ Please fill in all fields.';
    formStatus.style.color = 'var(--gold)';
    return;
  }

  formSubmit.disabled = true;
  const btnSpan = formSubmit.querySelector('span');
  const originalBtnText = btnSpan.textContent;
  btnSpan.textContent = currentLang === 'fr' ? 'Envoi...' : 'Sending...';

  // EmailJS IDs
  const serviceID = 'service_u4i7pax';
  const templateID = 'template_n6av28k';
  const publicKey = 'PreCECymUp6EdxMyE';

  emailjs.sendForm(serviceID, templateID, this, publicKey)
    .then(() => {
      formStatus.textContent = currentLang === 'fr' ? '✅ Message envoyé avec succès !' : '✅ Message sent successfully!';
      formStatus.style.color = 'var(--accent3)';
      contactForm.reset();
      formSubmit.disabled = false;
      btnSpan.textContent = originalBtnText;
      setTimeout(() => { formStatus.textContent = ''; }, 5000);
    })
    .catch((err) => {
      const errorDetail = err && err.text ? err.text : err && err.statusText ? err.statusText : JSON.stringify(err);
      formStatus.textContent = currentLang === 'fr'
        ? `❌ Erreur lors de l\'envoi. (${errorDetail})`
        : `❌ Error sending message. (${errorDetail})`;
      formStatus.style.color = '#e74c3c';
      formSubmit.disabled = false;
      btnSpan.textContent = originalBtnText;
      console.error('EmailJS Error:', err, 'detail:', errorDetail);
    });
});

/* 12. PARTICLES  */
const canvas = document.getElementById('particles-canvas');
const ctx    = canvas.getContext('2d');
let W, H, particles = [];

function resizeCanvas() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W; this.y = Math.random() * H;
    this.size = Math.random() * 1.5 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.4; this.vy = (Math.random() - 0.5) * 0.4;
    this.life = Math.random(); this.maxLife = Math.random() * 0.5 + 0.3;
  }
  update() {
    this.x += this.vx; this.y += this.vy; this.life += 0.003;
    if (this.life > this.maxLife || this.x < 0 || this.x > W || this.y < 0 || this.y > H) { this.reset(); this.life = 0; }
  }
  draw() {
    const alpha = Math.sin((this.life / this.maxLife) * Math.PI) * 0.5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(56,189,248,${alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < 80; i++) particles.push(new Particle());

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(56,189,248,${(1 - dist / 120) * 0.08})`;
        ctx.lineWidth = 0.5; ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  drawLines();
  requestAnimationFrame(animateParticles);
}
animateParticles();

/*  13. FOOTER YEAR  */
document.getElementById('year').textContent = new Date().getFullYear();

/* 14. ACTIVE NAV ON SCROLL  */
const sections   = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + id) link.style.color = 'var(--accent)';
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });
sections.forEach(s => sectionObserver.observe(s));

/*  15. TILT on project cards */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const rotX = ((e.clientY - rect.top  - rect.height / 2) / rect.height) * -8;
    const rotY = ((e.clientX - rect.left - rect.width  / 2) / rect.width)  *  8;
    card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* 16. CV BUTTON  */
document.getElementById('cv-btn').addEventListener('click', e => {
  e.preventDefault();
  alert(currentLang === 'fr' ? '📄 CV disponible prochainement — restez connecté !' : '📄 CV coming soon — stay tuned!');
});

console.log('%c Each Bug Matters 🐛 — Jovani Mbombo', 'color:#38bdf8;font-size:16px;font-weight:bold;');