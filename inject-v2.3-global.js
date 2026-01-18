#!/usr/bin/env node
/**
 * DigiSchool Africa V2.3 — Injection Globale SAFE
 * - Header/Footer UNIQUE partout
 * - Zero duplication
 * - CSS Lisibilité SAFE
 * - Favicon flashy
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

const HEADER_HTML = fs.readFileSync('assets/global-header-v2.3.html', 'utf8');
const FOOTER_HTML = fs.readFileSync('assets/global-footer-v2.3.html', 'utf8');
const CSS_SAFE_LINK = '<link rel="stylesheet" href="/assets/digischool-v2.3-safe.css">';
const FAVICON_LINK = '<link rel="icon" href="/favicon-v2.3.svg" type="image/svg+xml">';

console.log('🚀 DigiSchool V2.3 — Injection Globale START\n');

let successCount = 0;
let skipCount = 0;

PAGES.forEach(pagePath => {
  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️  SKIP: ${pagePath} (not found)`);
    skipCount++;
    return;
  }

  let html = fs.readFileSync(pagePath, 'utf8');
  let modified = false;

  // 1. REMOVE OLD HEADERS (tous types)
  html = html.replace(/<header class="digischool-header-premium"[^>]*>[\s\S]*?<\/header>/gi, '');
  html = html.replace(/<header[^>]*id="[^"]*header[^"]*"[^>]*>[\s\S]*?<\/header>/gi, '');
  html = html.replace(/<!-- DigiSchool Africa - Header Global[\s\S]*?<\/script>/gi, '');
  
  // 2. REMOVE OLD FOOTERS (tous types)
  html = html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');
  
  // 3. REMOVE OLD CSS PREMIUM LINKS
  html = html.replace(/<link[^>]*digischool-premium\.css[^>]*>/gi, '');
  html = html.replace(/<link[^>]*digischool-chatbot\.js[^>]*>/gi, '');
  
  // 4. INJECT FAVICON (unique)
  if (!html.includes('favicon-v2.3.svg')) {
    html = html.replace(/<link[^>]*rel="icon"[^>]*>/gi, ''); // Remove old
    html = html.replace('</head>', `  ${FAVICON_LINK}\n</head>`);
    modified = true;
  }
  
  // 5. INJECT CSS SAFE (unique)
  if (!html.includes('digischool-v2.3-safe.css')) {
    html = html.replace('</head>', `  ${CSS_SAFE_LINK}\n</head>`);
    modified = true;
  }
  
  // 6. INJECT HEADER (unique, après <body>)
  if (!html.includes('digischool-global-header')) {
    const bodyMatch = html.match(/<body[^>]*>/);
    if (bodyMatch) {
      const bodyTag = bodyMatch[0];
      html = html.replace(bodyTag, `${bodyTag}\n${HEADER_HTML}\n`);
      modified = true;
    }
  }
  
  // 7. INJECT FOOTER (unique, avant </body>)
  if (!html.includes('digischool-global-footer')) {
    html = html.replace('</body>', `${FOOTER_HTML}\n</body>`);
    modified = true;
  }
  
  // 8. REMOVE PADDING-TOP INLINE (si existe)
  html = html.replace(/body\s*{\s*padding-top:\s*\d+px;?\s*}/gi, '');

  if (modified) {
    fs.writeFileSync(pagePath, html, 'utf8');
    console.log(`✅ [${pagePath}] Transformation COMPLETE`);
    successCount++;
  } else {
    console.log(`✓  [${pagePath}] Déjà à jour`);
    successCount++;
  }
});

console.log('\n🎉 DigiSchool V2.3 — Injection Globale DONE');
console.log(`📊 Success: ${successCount} | Skip: ${skipCount}`);
