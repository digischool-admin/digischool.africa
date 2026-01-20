#!/usr/bin/env python3
"""
DigiSchool Africa — ALIGNEMENT PREMIUM ABSOLU
Référentiel UNIQUE: Homepage (index.html)
ZÉRO TOLÉRANCE — EXÉCUTION STRICTE
"""

import re
import os
from pathlib import Path

# Pages en scope
PAGES_TO_ALIGN = [
    'b2c.html',
    'companies.html',
    'b2c-assessment.html',
    'about-premium.html',
    'contact.html',
    'mentions-legales-v2.2.html',
    'cgu-v2.2.html',
    'cgv-v2.2.html',
    'politique-confidentialite-v2.2.html'
]

LEGAL_PAGES = [
    'mentions-legales-v2.2.html',
    'cgu-v2.2.html',
    'cgv-v2.2.html',
    'politique-confidentialite-v2.2.html'
]

# PHASE 1: PARTNER LOGOS
def fix_partner_logos_positioning():
    print("\n=== PHASE 1: PARTNER LOGOS POSITIONING ===")
    
    partner_section = '''
<!-- Partner Logos Section -->
<link rel="stylesheet" href="/assets/partner-logos-v2-2-x-k.css">
<section class="ds-partners-section">
  <div class="ds-partners-container">
    <h3 class="ds-partners-title">Références Pédagogiques & Standards Internationaux</h3>
    
    <div class="ds-partners-grid">
      <div class="ds-partner-logo" data-tooltip="Référentiel PMI PMP">
        <svg width="100" height="60" viewBox="0 0 100 60" class="ds-logo-pmi">
          <text x="50" y="32" text-anchor="middle" font-family="Arial" font-size="20" font-weight="700" fill="#1E88E5">PMI</text>
        </svg>
      </div>
      
      <div class="ds-partner-logo" data-tooltip="Microsoft 365">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-microsoft">
          <rect x="15" y="15" width="18" height="18" fill="#F25022"/>
          <rect x="35" y="15" width="18" height="18" fill="#7FBA00"/>
          <rect x="15" y="35" width="18" height="18" fill="#00A4EF"/>
          <rect x="35" y="35" width="18" height="18" fill="#FFB900"/>
        </svg>
      </div>
      
      <div class="ds-partner-logo" data-tooltip="Google Workspace">
        <svg width="90" height="60" viewBox="0 0 90 60" class="ds-logo-google">
          <text x="45" y="32" text-anchor="middle" font-family="Arial" font-size="20" font-weight="700" fill="#4285F4">Google</text>
        </svg>
      </div>
      
      <div class="ds-partner-logo" data-tooltip="Harvard Business School">
        <svg width="90" height="60" viewBox="0 0 90 60" class="ds-logo-harvard">
          <text x="45" y="32" text-anchor="middle" font-family="serif" font-size="18" font-weight="700" fill="#A51C30">HARVARD</text>
        </svg>
      </div>
      
      <div class="ds-partner-logo" data-tooltip="HEC Paris">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-hec">
          <text x="40" y="28" text-anchor="middle" font-family="Arial" font-size="20" font-weight="700" fill="#E30613">HEC</text>
          <text x="40" y="42" text-anchor="middle" font-family="Arial" font-size="10" fill="#546E7A">Paris</text>
        </svg>
      </div>
      
      <div class="ds-partner-logo" data-tooltip="ESSEC Business School">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-essec">
          <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#00205B">ESSEC</text>
        </svg>
      </div>
      
      <div class="ds-partner-logo" data-tooltip="PECB ISO">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-pecb">
          <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#1E88E5">PECB</text>
        </svg>
      </div>
      
      <div class="ds-partner-logo" data-tooltip="FDFP Côte d'Ivoire">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-fdfp">
          <text x="40" y="26" text-anchor="middle" font-family="Arial" font-size="16" font-weight="700" fill="#7E57C2">FDFP</text>
          <text x="40" y="42" text-anchor="middle" font-family="Arial" font-size="7" fill="#546E7A">Côte d'Ivoire</text>
        </svg>
      </div>
    </div>
    
    <div class="ds-partners-disclaimer">
      <strong>Disclaimer</strong>: Les références ci-dessus sont utilisées à titre pédagogique. 
      DigiSchool Africa s'inspire des standards internationaux (PMI, ISO, Microsoft, Google) et 
      des méthodes académiques (Harvard, HEC, ESSEC) pour construire des contenus de formation 
      premium adaptés au contexte africain. Ces mentions ne constituent pas des partenariats 
      commerciaux directs, sauf accord explicite.
    </div>
  </div>
</section>
<!-- End Partner Logos -->
'''
    
    for page in PAGES_TO_ALIGN:
        if not os.path.exists(page):
            print(f"  ⚠️  {page} not found")
            continue
        
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove ALL existing partner sections
        content = re.sub(
            r'<!-- Partner Logos Section -->.*?<!-- End Partner Logos -->',
            '',
            content,
            flags=re.DOTALL
        )
        content = re.sub(
            r'<section class="ds-partners-section">.*?</section>',
            '',
            content,
            flags=re.DOTALL
        )
        
        # Insert BEFORE </body>
        if '</body>' in content:
            content = content.replace('</body>', partner_section + '\n</body>')
            print(f"  ✅ {page}: Partner logos positioned before </body>")
        
        with open(page, 'w', encoding='utf-8') as f:
            f.write(content)

# PHASE 2: QA VALIDATION
def run_qa_validation():
    print("\n=== PHASE 2: QA VALIDATION ===")
    
    for page in PAGES_TO_ALIGN:
        if not os.path.exists(page):
            continue
        
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check partner sections
        partner_count = content.count('ds-partners-section')
        
        # Check canonical CSS
        has_canonical = '/assets/ds-restored-premium.css' in content
        
        # Check emojis
        has_emoji = bool(re.search(r'[\U0001F300-\U0001F9FF]', content))
        
        status = "✅" if partner_count == 1 and has_canonical and not has_emoji else "⚠️"
        print(f"  {status} {page}: Partners={partner_count}, CSS={has_canonical}, NoEmoji={not has_emoji}")

if __name__ == '__main__':
    print("=" * 60)
    print("DigiSchool Africa — ALIGNEMENT PREMIUM ABSOLU")
    print("=" * 60)
    
    fix_partner_logos_positioning()
    run_qa_validation()
    
    print("\n" + "=" * 60)
    print("✅ TECHNICAL ALIGNMENT COMPLETE")
    print("=" * 60)
