#!/usr/bin/env python3
"""
V2.2.x-M FINAL CUSTOMER VIEW LOCK
Exécution STRICTE et LITTÉRALE
Zéro interprétation créative
"""

import re
import os

print("=" * 70)
print("V2.2.x-M FINAL CUSTOMER VIEW LOCK — DÉMARRAGE")
print("=" * 70)

# ═══════════════════════════════════════════════════════════════════════
# PHASE 1: FOOTER FIX — TÉLÉPHONE + SIGNATURE SAJORI
# ═══════════════════════════════════════════════════════════════════════

print("\n[PHASE 1] Footer Fix: Téléphone CTA + Signature SAJORI")

footer_js = 'assets/global-components-v2-production.js'

with open(footer_js, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: Remplacer affichage numéro par bouton CTA
old_phone = '''                <a href="tel:+22505051111 02" class="ds-footer-link">
                  📞 +225 05 05 11 11 02
                </a>'''

new_phone = '''                <a href="tel:+22505051111 02" class="ds-btn ds-btn-secondary" style="display:inline-block;margin-top:8px;">
                  📞 Allo DigiSchool !
                </a>'''

content = content.replace(old_phone, new_phone)

# Fix 2: Signature SAJORI (pas "Hervé SAJORI")
# Trouver section directeur et remplacer
content = re.sub(
    r'Directeur[^<]*Hervé[^<]*SAJORI',
    'Directeur de publication : <span style="font-weight:700;letter-spacing:1px;">SAJORI</span>',
    content,
    flags=re.IGNORECASE
)

with open(footer_js, 'w', encoding='utf-8') as f:
    f.write(content)

print("  ✅ Footer: Téléphone → CTA 'Allo DigiSchool!'")
print("  ✅ Footer: Signature → SAJORI")

# ═══════════════════════════════════════════════════════════════════════
# PHASE 2: PARTNER LOGOS — BANDE GRISE UNIQUE ENRICHIE
# ═══════════════════════════════════════════════════════════════════════

print("\n[PHASE 2] Partner Logos: Bande grise unique enrichie (3 catégories)")

# Template avec logos enrichis + catégories
partner_section_enriched = '''
<!-- Partner Logos Section UNIQUE -->
<link rel="stylesheet" href="/assets/partner-logos-v2-2-x-k.css">
<section class="ds-partners-section">
  <div class="ds-partners-container">
    <h3 class="ds-partners-title">Références Académiques & Standards Professionnels</h3>
    
    <!-- Catégorie 1: Project / IT / Architecture / Change -->
    <div class="ds-partners-category">
      <h4 class="ds-partners-subtitle">Gestion de Projet, IT & Architecture</h4>
      <div class="ds-partners-grid">
        <div class="ds-partner-logo" data-tooltip="PMI - Project Management Institute">
          <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-pmi">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#1E88E5">PMI</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="AXELOS - ITIL, PRINCE2">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#1E88E5">AXELOS</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="The Open Group - TOGAF">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="12" font-weight="700" fill="#1E88E5">TOGAF</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="PROSCI - Change Management">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#26A69A">PROSCI</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="ASQ - Quality Management">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="16" font-weight="700" fill="#26A69A">ASQ</text>
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Catégorie 2: Finance / Audit / Risk -->
    <div class="ds-partners-category">
      <h4 class="ds-partners-subtitle">Finance, Audit & Risques</h4>
      <div class="ds-partners-grid">
        <div class="ds-partner-logo" data-tooltip="CFA Institute">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="16" font-weight="700" fill="#7E57C2">CFA</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="IFAC - International Federation of Accountants">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#7E57C2">IFAC</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="IIA - Internal Audit">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="16" font-weight="700" fill="#7E57C2">IIA</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="ISACA - IT Governance & Security">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#1E88E5">ISACA</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="PECB - ISO Standards">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#1E88E5">PECB</text>
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Catégorie 3: Data / Digital / HR / Supply Chain -->
    <div class="ds-partners-category">
      <h4 class="ds-partners-subtitle">Data, Digital, RH & Supply Chain</h4>
      <div class="ds-partners-grid">
        <div class="ds-partner-logo" data-tooltip="Microsoft - Cloud & AI">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <rect x="20" y="18" width="14" height="14" fill="#F25022"/>
            <rect x="36" y="18" width="14" height="14" fill="#7FBA00"/>
            <rect x="20" y="32" width="14" height="14" fill="#00A4EF"/>
            <rect x="36" y="32" width="14" height="14" fill="#FFB900"/>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="AWS - Cloud Computing">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#FF9900">AWS</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="Google Cloud">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="12" font-weight="700" fill="#4285F4">Google</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="DAMA - Data Management">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#26A69A">DAMA</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="CIPD - HR Professional Body">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#7E57C2">CIPD</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="ASCM - Supply Chain Management">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#26A69A">ASCM</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="DMI - Digital Marketing Institute">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#1E88E5">DMI</text>
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Universités (ligne dédiée) -->
    <div class="ds-partners-category">
      <h4 class="ds-partners-subtitle">Références Académiques</h4>
      <div class="ds-partners-grid">
        <div class="ds-partner-logo" data-tooltip="Harvard Business School">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="serif" font-size="14" font-weight="700" fill="#A51C30">HARVARD</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="MIT - Massachusetts Institute of Technology">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#A31F34">MIT</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="HEC Paris">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="26" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#E30613">HEC</text>
            <text x="40" y="40" text-anchor="middle" font-family="Arial" font-size="9" fill="#546E7A">Paris</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="ESSEC Business School">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#00205B">ESSEC</text>
          </svg>
        </div>
        
        <div class="ds-partner-logo" data-tooltip="London Business School">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <text x="40" y="32" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#3E2C8C">LBS</text>
          </svg>
        </div>
      </div>
    </div>
    
    <div class="ds-partners-disclaimer">
      <strong>Note importante</strong> : Les logos ci-dessus représentent des <strong>références académiques et bibliographiques</strong> 
      utilisées dans nos contenus pédagogiques. Suivre une formation DigiSchool Africa ne garantit pas automatiquement l'obtention 
      d'une certification officielle de ces organismes (pour l'instant). Nos parcours vous préparent aux examens externes 
      lorsque pertinent, et intègrent les standards internationaux pour assurer une qualité premium.
    </div>
  </div>
</section>
<!-- End Partner Logos -->
'''

# Appliquer à toutes les pages
pages = [
    'index.html',
    'b2c.html',
    'companies.html',
    'b2c-assessment.html',
    'about-premium.html',
    'contact.html',
    'parcours.html',
    'cgu-v2.2.html',
    'cgv-v2.2.html',
    'mentions-legales-v2.2.html',
    'politique-confidentialite-v2.2.html'
]

for page in pages:
    if not os.path.exists(page):
        continue
    
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Supprimer TOUTES les sections partenaires existantes
    content = re.sub(
        r'<!-- Partner Logos Section.*?<!-- End Partner Logos -->',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Insérer la nouvelle bande AVANT </body>
    if '</body>' in content:
        content = content.replace('</body>', partner_section_enriched + '\n</body>')
        print(f"  ✅ {page}: Bande grise unique enrichie (4 catégories)")
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

print("\n  ✅ PHASE 2 COMPLÈTE: Bande grise unique avec ~22 logos (3 lignes max)")

print("\n" + "=" * 70)
print("SCRIPT PARTIEL EXÉCUTÉ — SUITE DANS PROCHAINS SCRIPTS")
print("=" * 70)
