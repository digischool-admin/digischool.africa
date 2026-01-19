#!/bin/bash

# V2.2.x-K - Inject Partner Logos into Footer
# Target: All pages (except index.html and b2c-assessment.html - already have it)

PAGES=(
  "parcours.html"
  "b2c.html"
  "b2c-learn.html"
  "b2c-module.html"
  "companies.html"
  "about-premium.html"
  "contact.html"
  "cgu-v2.2.html"
  "cgv-v2.2.html"
  "mentions-legales-v2.2.html"
  "politique-confidentialite-v2.2.html"
)

PARTNER_SECTION='
<!-- Partner Logos Section -->
<link rel="stylesheet" href="/assets/partner-logos-v2-2-x-k.css">
<section class="ds-partners-section">
  <div class="ds-partners-container">
    <h3 class="ds-partners-title">Références Pédagogiques & Standards Internationaux</h3>
    
    <div class="ds-partners-grid">
      <!-- PMI -->
      <div class="ds-partner-logo" data-tooltip="Référentiel PMI PMP & Project Management">
        <svg width="100" height="60" viewBox="0 0 100 60" class="ds-logo-pmi">
          <text x="50" y="32" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#1E88E5">PMI</text>
          <text x="50" y="48" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="#546E7A">Project Management Institute</text>
        </svg>
      </div>
      
      <!-- Microsoft -->
      <div class="ds-partner-logo" data-tooltip="Microsoft 365 & Outils Productivité">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-microsoft">
          <rect x="10" y="16" width="16" height="16" fill="#1E88E5" opacity="0.8"/>
          <rect x="30" y="16" width="16" height="16" fill="#26A69A" opacity="0.8"/>
          <rect x="10" y="36" width="16" height="16" fill="#7E57C2" opacity="0.8"/>
          <rect x="30" y="36" width="16" height="16" fill="#546E7A" opacity="0.8"/>
          <text x="56" y="36" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#263238">Microsoft</text>
        </svg>
      </div>
      
      <!-- Google -->
      <div class="ds-partner-logo" data-tooltip="Google Workspace & Analytics">
        <svg width="90" height="60" viewBox="0 0 90 60" class="ds-logo-google">
          <text x="45" y="32" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#26A69A">Google</text>
        </svg>
      </div>
      
      <!-- Harvard -->
      <div class="ds-partner-logo" data-tooltip="Méthodes pédagogiques Harvard Business School">
        <svg width="90" height="60" viewBox="0 0 90 60" class="ds-logo-harvard">
          <text x="45" y="32" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, serif" font-size="16" font-weight="700" fill="#7E57C2">HARVARD</text>
        </svg>
      </div>
      
      <!-- HEC Paris -->
      <div class="ds-partner-logo" data-tooltip="Standards HEC Paris Management">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-hec">
          <text x="40" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#1E88E5">HEC</text>
          <text x="40" y="44" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#546E7A">PARIS</text>
        </svg>
      </div>
      
      <!-- ESSEC -->
      <div class="ds-partner-logo" data-tooltip="Référentiel ESSEC Business School">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-essec">
          <text x="40" y="32" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#26A69A">ESSEC</text>
        </svg>
      </div>
      
      <!-- PECB -->
      <div class="ds-partner-logo" data-tooltip="Certifications ISO & PECB">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-pecb">
          <text x="40" y="32" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#1E88E5">PECB</text>
        </svg>
      </div>
      
      <!-- FDFP -->
      <div class="ds-partner-logo" data-tooltip="FDFP Côte d'\''Ivoire - Formation Professionnelle">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-fdfp">
          <text x="40" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="#7E57C2">FDFP</text>
          <text x="40" y="42" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="#546E7A">Côte d'\''Ivoire</text>
        </svg>
      </div>
    </div>
    
    <div class="ds-partners-disclaimer">
      <strong>Disclaimer</strong>: Les références ci-dessus sont utilisées à titre pédagogique. 
      DigiSchool Africa s'\''inspire des standards internationaux (PMI, ISO, Microsoft, Google) et 
      des méthodes académiques (Harvard, HEC, ESSEC) pour construire des contenus de formation 
      premium adaptés au contexte africain. Ces mentions ne constituent pas des partenariats 
      commerciaux directs, sauf accord explicite.
    </div>
  </div>
</section>
<!-- End Partner Logos -->'

echo "V2.2.x-K - Injecting Partner Logos into Footer"
echo "=============================================="

for PAGE in "${PAGES[@]}"; do
  if [ -f "$PAGE" ]; then
    # Check if partner logos already exist
    if grep -q "ds-partners-section" "$PAGE" 2>/dev/null; then
      echo "✓ $PAGE - Partner logos already present"
    else
      # Find the footer or </body> tag and inject before it
      if grep -q "<footer" "$PAGE"; then
        # Inject before footer
        sed -i.bak "/<footer/i\\
$PARTNER_SECTION
" "$PAGE"
        echo "✓ $PAGE - Partner logos injected before footer"
      elif grep -q "</body>" "$PAGE"; then
        # Inject before </body>
        sed -i.bak "/<\/body>/i\\
$PARTNER_SECTION
" "$PAGE"
        echo "✓ $PAGE - Partner logos injected before </body>"
      else
        echo "⚠ $PAGE - No injection point found"
      fi
    fi
  else
    echo "✗ $PAGE - File not found"
  fi
done

echo ""
echo "Partner Logos Injection Complete"
