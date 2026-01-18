#!/usr/bin/env node
/**
 * DigiSchool V2.3 — TRANSFORMATION COMPLÈTE
 * Mode: ONE-SHOT LOCKED
 * Objectif: Nettoyer CSS sombre, injecter header/footer V2.3, corriger texte invisible
 */

const fs = require('fs');
const path = require('path');

const PAGES = [
  'index.html',
  'b2c.html',
  'companies.html',
  'parcours.html',
  'b2c-assessment.html',
  'b2c-checkout.html',
  'user-dashboard.html',
  'about-premium.html',
  'about.html',
  'contact.html',
  'mentions-legales.html',
  'cgu.html',
  'cgv.html',
  'politique-confidentialite.html'
];

const HEADER_PATH = path.join(__dirname, 'assets/global-header-v2.3.html');
const FOOTER_PATH = path.join(__dirname, 'assets/global-footer-v2.3.html');

// Lire header et footer
const headerHTML = fs.readFileSync(HEADER_PATH, 'utf-8');
const footerHTML = fs.existsSync(FOOTER_PATH) 
  ? fs.readFileSync(FOOTER_PATH, 'utf-8')
  : `<footer style="background:#0B1B3A;color:#fff;padding:40px 20px;text-align:center">
<p>&copy; 2026 DigiSchool Africa — DigiLab | <a href="/mentions-legales.html" style="color:#22c55e">Mentions légales</a></p>
</footer>`;

console.log('🚀 DigiSchool V2.3 — TRANSFORMATION COMPLÈTE\n');

PAGES.forEach(page => {
  const filePath = path.join(__dirname, page);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${page} — NON TROUVÉ`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 1. SUPPRIMER ancien <style> inline sombre (entre premier <style> et </style>)
  if (html.includes(':root{') && html.includes('--bg:#0f172a')) {
    html = html.replace(/<style>[\s\S]*?<\/style>/, '<!-- ancien style supprimé -->');
    modified = true;
  }

  // 2. INJECTER CSS V2.3 dans <head> si absent
  if (!html.includes('digischool-v2.3-safe.css')) {
    html = html.replace(
      '</head>',
      `  <link rel="stylesheet" href="/assets/digischool-v2.3-safe.css">\n  <link rel="icon" type="image/svg+xml" href="/favicon-v2.3.svg">\n</head>`
    );
    modified = true;
  }

  // 3. SUPPRIMER anciens headers (digischool-header-premium, main-header, header avec logo)
  html = html.replace(/<header[^>]*id=["']?digischool-header-premium["']?[^>]*>[\s\S]*?<\/header>/gi, '');
  html = html.replace(/<header[^>]*id=["']?main-header["']?[^>]*>[\s\S]*?<\/header>/gi, '');
  html = html.replace(/<div[^>]*class=["']?header-premium["']?[^>]*>[\s\S]*?<\/div>/gi, '');
  
  // 4. INJECTER HEADER V2.3 après <body>
  if (!html.includes('global-header-v2.3')) {
    html = html.replace(/<body([^>]*)>/, `<body$1>\n${headerHTML}\n`);
    modified = true;
  }

  // 5. SUPPRIMER anciens footers
  html = html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');
  
  // 6. INJECTER FOOTER V2.3 avant </body>
  if (!html.includes('global-footer-v2.3')) {
    html = html.replace(/<\/body>/, `\n${footerHTML}\n</body>`);
    modified = true;
  }

  // 7. CORRIGER padding-top du body (pour header sticky)
  if (!html.includes('padding-top') && html.includes('<body')) {
    html = html.replace(/<body([^>]*)>/, '<body$1 style="padding-top:80px">');
    modified = true;
  }

  // 8. Nettoyer scripts d'injection obsolètes
  html = html.replace(/<script[^>]*inject-premium-transformation\.js[^>]*><\/script>/gi, '');
  html = html.replace(/<script[^>]*inject-global-layout\.js[^>]*><\/script>/gi, '');

  if (modified) {
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`✅ ${page} — TRANSFORMÉ`);
  } else {
    console.log(`ℹ️  ${page} — DÉJÀ À JOUR`);
  }
});

console.log('\n🎉 DigiSchool V2.3 — TRANSFORMATION TERMINÉE');
