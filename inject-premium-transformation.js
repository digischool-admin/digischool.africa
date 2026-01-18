#!/usr/bin/env node
/**
 * DigiSchool Africa - V2.1 WAAOUH - Premium Transformation Injector
 * Injecte header sticky + premium CSS + chatbot dans toutes les pages HTML
 * Mode: ONE-SHOT AUTONOMOUS - PAS de questions, FULL AUTO
 */

const fs = require('fs');
const path = require('path');

const PAGES_TO_TRANSFORM = [
  'index.html',
  'b2c.html',
  'companies.html',
  'parcours.html',
  'user-dashboard.html',
  'b2c-assessment.html',
  'b2c-checkout.html',
  'about-premium.html'
];

const HEADER_HTML = fs.readFileSync('assets/global-header-premium.html', 'utf8');
const PREMIUM_CSS_LINK = '<link rel="stylesheet" href="/assets/digischool-premium.css">';
const CHATBOT_SCRIPT = '<script src="/assets/digischool-chatbot.js" defer></script>';

console.log('🚀 DigiSchool V2.1 WAAOUH - Transformation Injector START\n');

PAGES_TO_TRANSFORM.forEach(pagePath => {
  if (!fs.existsSync(pagePath)) {
    console.log(`⏭️  SKIP: ${pagePath} (not found)`);
    return;
  }

  let html = fs.readFileSync(pagePath, 'utf8');
  let modified = false;

  // 1. Inject Premium CSS AVANT la balise </head>
  if (!html.includes('digischool-premium.css')) {
    html = html.replace('</head>', `  ${PREMIUM_CSS_LINK}\n</head>`);
    modified = true;
    console.log(`  ✅ [${pagePath}] CSS Premium injecté`);
  }

  // 2. Inject Header Sticky APRÈS <body>
  if (!html.includes('digischool-header-premium')) {
    const bodyMatch = html.match(/<body[^>]*>/);
    if (bodyMatch) {
      const bodyTag = bodyMatch[0];
      html = html.replace(bodyTag, `${bodyTag}\n${HEADER_HTML}\n`);
      modified = true;
      console.log(`  ✅ [${pagePath}] Header Sticky injecté`);
    }
  }

  // 3. Inject Chatbot AVANT </body>
  if (!html.includes('digischool-chatbot.js')) {
    html = html.replace('</body>', `  ${CHATBOT_SCRIPT}\n</body>`);
    modified = true;
    console.log(`  ✅ [${pagePath}] Chatbot injecté`);
  }

  if (modified) {
    fs.writeFileSync(pagePath, html, 'utf8');
    console.log(`✨ [${pagePath}] Transformation COMPLETE\n`);
  } else {
    console.log(`✓  [${pagePath}] Déjà à jour\n`);
  }
});

console.log('🎉 DigiSchool V2.1 WAAOUH - Transformation Injector DONE');
console.log(`📊 Pages transformées: ${PAGES_TO_TRANSFORM.length}`);
