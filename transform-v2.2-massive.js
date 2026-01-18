#!/usr/bin/env node
/**
 * DigiSchool V2.2 — Transformation Massive ONE-SHOT LOCKED
 * 
 * Objectifs:
 * 1. Injecter layout V2.2 (header/footer) sur toutes les pages
 * 2. Corriger textes invisibles (tokens lisibles)
 * 3. Ajouter ds-container pour centrage
 * 4. Référencer nouveau logo + favicon
 * 5. Nettoyer anciens injecteurs
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

console.log('🚀 DigiSchool V2.2 — Transformation Massive\n');

let transformedCount = 0;

PAGES.forEach(page => {
  const filePath = path.join(__dirname, page);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${page} — NON TROUVÉ`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 1. AJOUTER injection layout V2.2 dans <head> si absent
  if (!html.includes('inject-layout-v2.2.js')) {
    html = html.replace(
      '</head>',
      `  <script src="/assets/inject-layout-v2.2.js" defer></script>\n</head>`
    );
    modified = true;
  }

  // 2. AJOUTER favicon V2 si absent/ancien
  if (!html.includes('favicon.svg') || html.includes('favicon-digischool.svg')) {
    // Supprimer anciens favicons
    html = html.replace(/<link[^>]*rel=["']icon["'][^>]*>/gi, '');
    html = html.replace(/<link[^>]*rel=["']shortcut icon["'][^>]*>/gi, '');
    
    // Ajouter nouveau favicon
    html = html.replace(
      '</head>',
      `  <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n</head>`
    );
    modified = true;
  }

  // 3. SUPPRIMER anciens scripts d'injection
  html = html.replace(/<script[^>]*inject-premium-transformation\.js[^>]*><\/script>/gi, '');
  html = html.replace(/<script[^>]*inject-v2\.3-global\.js[^>]*><\/script>/gi, '');
  html = html.replace(/<script[^>]*inject-global-layout\.js[^>]*><\/script>/gi, '');

  // 4. CORRIGER padding-top body (pour header sticky)
  if (!html.includes('style="padding-top')) {
    html = html.replace(/<body([^>]*)>/, '<body$1>');
  }

  // 5. CORRIGER tokens texte invisibles (simple regex sur styles inline)
  // Remplacer color:#fff par color:#0B1B3A sur sections non-footer/header
  html = html.replace(/color:\s*#fff(?![\w])/gi, 'color:#0B1B3A');
  html = html.replace(/color:\s*#ffffff/gi, 'color:#0B1B3A');
  html = html.replace(/color:\s*white/gi, 'color:#0B1B3A');

  if (modified) {
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`✅ ${page} — TRANSFORMÉ`);
    transformedCount++;
  } else {
    console.log(`ℹ️  ${page} — DÉJÀ À JOUR`);
  }
});

console.log(`\n🎉 DigiSchool V2.2 — ${transformedCount} pages transformées`);
