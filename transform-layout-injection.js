const fs = require('fs');
const path = require('path');

// Pages à transformer
const pages = [
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
  'mentions-legales-v2.2.html',
  'cgu.html',
  'cgu-v2.2.html',
  'cgv.html',
  'cgv-v2.2.html',
  'politique-confidentialite.html',
  'politique-confidentialite-v2.2.html',
  'payment-confirmation.html'
];

let transformed = 0;

pages.forEach(page => {
  const filePath = path.join(__dirname, page);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️ Skipped: ${page} (not found)`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Vérifier si déjà transformé
  if (content.includes('inject-zoom-layout.js')) {
    console.log(`✓ Already done: ${page}`);
    return;
  }
  
  // Injection CSS + JS layout dans <head> avant </head>
  if (!content.includes('digischool-zoom-layout.css')) {
    content = content.replace(
      '</head>',
      `  <link rel="stylesheet" href="/assets/digischool-zoom-layout.css">\n  <script src="/assets/inject-zoom-layout.js" defer></script>\n</head>`
    );
  }
  
  fs.writeFileSync(filePath, content);
  transformed++;
  console.log(`✅ Transformed: ${page}`);
});

console.log(`\n🎉 Layout injection completed: ${transformed}/${pages.length} pages transformed`);
