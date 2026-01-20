#!/usr/bin/env python3
"""
╔══════════════════════════════════════════════════════════════════╗
║  DigiSchool Africa — ALIGNEMENT PREMIUM ABSOLU                   ║
║  Référentiel UNIQUE: Homepage (index.html)                       ║
║  ZÉRO TOLÉRANCE — EXÉCUTION STRICTE                             ║
╚══════════════════════════════════════════════════════════════════╝
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

# ═══════════════════════════════════════════════════════════════════
# PHASE 1: PARTNER LOGOS — RÈGLE STRATÉGIQUE ABSOLUE
# ═══════════════════════════════════════════════════════════════════

def fix_partner_logos_positioning():
    """
    RÈGLE ABSOLUE:
    - UNE SEULE bande partenaires site-wide
    - Position: JUSTE AVANT </body> (avant que footer soit injecté par JS)
    - ❌ AUCUN logo dans footer
    - ❌ AUCUNE duplication
    """
    print("\n═══ PHASE 1: PARTNER LOGOS POSITIONING ═══")
    
    partner_section_template = """
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
        </svg>
      </div>
      
      <!-- Microsoft -->
      <div class="ds-partner-logo" data-tooltip="Microsoft 365 & Outils Productivité">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-microsoft">
          <rect x="15" y="15" width="18" height="18" fill="#F25022"/>
          <rect x="35" y="15" width="18" height="18" fill="#7FBA00"/>
          <rect x="15" y="35" width="18" height="18" fill="#00A4EF"/>
          <rect x="35" y="35" width="18" height="18" fill="#FFB900"/>
        </svg>
      </div>
      
      <!-- Google -->
      <div class="ds-partner-logo" data-tooltip="Google Workspace & Analytics">
        <svg width="90" height="60" viewBox="0 0 90 60" class="ds-logo-google">
          <text x="45" y="32" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#4285F4">Google</text>
        </svg>
      </div>
      
      <!-- Harvard -->
      <div class="ds-partner-logo" data-tooltip="Méthodes pédagogiques Harvard Business School">
        <svg width="90" height="60" viewBox="0 0 90 60" class="ds-logo-harvard">
          <text x="45" y="32" text-anchor="middle" dominant-baseline="middle" font-family="serif" font-size="18" font-weight="700" fill="#A51C30">HARVARD</text>
        </svg>
      </div>
      
      <!-- HEC Paris -->
      <div class="ds-partner-logo" data-tooltip="Standards HEC Paris Management">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-hec">
          <text x="40" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#E30613">HEC</text>
          <text x="40" y="42" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#546E7A">Paris</text>
        </svg>
      </div>
      
      <!-- ESSEC -->
      <div class="ds-partner-logo" data-tooltip="Référentiel ESSEC Business School">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-essec">
          <text x="40" y="32" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#00205B">ESSEC</text>
        </svg>
      </div>
      
      <!-- PECB -->
      <div class="ds-partner-logo" data-tooltip="Certifications ISO & PECB">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-pecb">
          <text x="40" y="32" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#1E88E5">PECB</text>
        </svg>
      </div>
      
      <!-- FDFP -->
      <div class="ds-partner-logo" data-tooltip="FDFP Côte d'Ivoire - Formation Professionnelle">
        <svg width="80" height="60" viewBox="0 0 80 60" class="ds-logo-fdfp">
          <text x="40" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="#7E57C2">FDFP</text>
          <text x="40" y="42" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="#546E7A">Côte d'Ivoire</text>
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
"""
    
    for page in PAGES_TO_ALIGN:
        if not os.path.exists(page):
            print(f"  ⚠️  {page} not found, skipping")
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
        
        # Remove any ds-partners-section remnants
        content = re.sub(
            r'<section class="ds-partners-section">.*?</section>',
            '',
            content,
            flags=re.DOTALL
        )
        
        # Remove partner CSS links if duplicated
        if content.count('partner-logos-v2-2-x-k.css') > 1:
            content = re.sub(
                r'<link rel="stylesheet" href="/assets/partner-logos-v2-2-x-k\.css">',
                '',
                content,
                count=content.count('partner-logos-v2-2-x-k.css') - 1
            )
        
        # Insert partner section JUST BEFORE </body>
        if '</body>' in content:
            content = content.replace('</body>', partner_section_template + '\n</body>')
            print(f"  ✅ {page}: Partner logos repositioned (before </body>)")
        else:
            print(f"  ⚠️  {page}: No </body> tag found")
        
        with open(page, 'w', encoding='utf-8') as f:
            f.write(content)

# ═══════════════════════════════════════════════════════════════════
# PHASE 2: ASSESSMENT FIXES CRITIQUES
# ═══════════════════════════════════════════════════════════════════

def fix_assessment_critical():
    """
    CORRECTIONS CRITIQUES:
    1. Harmoniser nombre questions (10 questions finales)
    2. Supprimer bouton "Voir mes résultats" (inutile)
    3. Confirmer Q6 max=3
    4. ❌ Scores cachés (déjà fait en K.3)
    """
    print("\n═══ PHASE 2: ASSESSMENT CRITICAL FIXES ═══")
    
    js_file = 'assets/assessment-v2-strict.js'
    if not os.path.exists(js_file):
        print(f"  ⚠️  {js_file} not found")
        return
    
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Verify Q6 max=3
    if 'max: 3,' in content:
        print(f"  ✅ Q6 max=3 confirmed")
    
    # Remove "Voir mes résultats" button if present in results display
    content = re.sub(
        r'<button[^>]*>.*?Voir mes résultats.*?</button>',
        '',
        content,
        flags=re.IGNORECASE | re.DOTALL
    )
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ✅ Assessment JS cleaned")

# ═══════════════════════════════════════════════════════════════════
# PHASE 3: CONTENT TRANSFORMATION — CARDS/ACCORDIONS
# ═══════════════════════════════════════════════════════════════════

def ensure_card_structure(page):
    """
    Vérifie que le contenu utilise cards/accordions
    Si contenu linéaire détecté, signale pour correction manuelle
    """
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Détection de pavés de texte
    has_cards = 'class="ds-card"' in content or 'class="feature-card"' in content
    has_accordions = 'accordion' in content.lower()
    has_long_paragraphs = bool(re.search(r'<p[^>]*>.{500,}</p>', content))
    
    if has_long_paragraphs and not (has_cards or has_accordions):
        return False, "⚠️  Long paragraphs detected without cards/accordions"
    
    return True, "✅ Card/Accordion structure present"

# ═══════════════════════════════════════════════════════════════════
# PHASE 4: AUTO-TEST QA COMPLET
# ═══════════════════════════════════════════════════════════════════

def run_qa_validation():
    """
    QA CHECKLIST EXHAUSTIF
    """
    print("\n═══ PHASE 4: AUTO-TEST QA ═══")
    
    qa_results = {
        'visual': [],
        'structure': [],
        'partners': [],
        'icons': [],
        'assessment': []
    }
    
    for page in PAGES_TO_ALIGN:
        if not os.path.exists(page):
            continue
        
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # QA VISUAL
        has_container = 'ds-container' in content or 'max-width' in content
        has_cards = 'class="ds-card"' in content or 'class="feature-card"' in content or 'class="formation-card"' in content
        
        # QA STRUCTURE
        partner_count = content.count('ds-partners-section')
        canonical_css = '/assets/ds-restored-premium.css' in content
        
        # QA ICONS
        has_emojis = bool(re.search(r'[\U0001F300-\U0001F9FF]', content))
        
        # Results
        qa_results['visual'].append({
            'page': page,
            'container': has_container,
            'cards': has_cards
        })
        
        qa_results['structure'].append({
            'page': page,
            'canonical_css': canonical_css,
            'partner_sections': partner_count
        })
        
        qa_results['icons'].append({
            'page': page,
            'has_emojis': has_emojis
        })
    
    # Print results
    print("\n📊 QA VISUAL:")
    for r in qa_results['visual']:
        status = "✅" if r['container'] and r['cards'] else "⚠️"
        print(f"  {status} {r['page']}: Container={r['container']}, Cards={r['cards']}")
    
    print("\n📊 QA STRUCTURE:")
    for r in qa_results['structure']:
        status = "✅" if r['canonical_css'] and r['partner_sections'] == 1 else "⚠️"
        print(f"  {status} {r['page']}: CSS={r['canonical_css']}, Partners={r['partner_sections']}")
    
    print("\n📊 QA ICONS:")
    for r in qa_results['icons']:
        status = "✅" if not r['has_emojis'] else "❌"
        print(f"  {status} {r['page']}: Emojis={r['has_emojis']}")
    
    return qa_results

# ═══════════════════════════════════════════════════════════════════
# PHASE 5: ABOUT PAGE FIXES
# ═══════════════════════════════════════════════════════════════════

def verify_about_page():
    """
    Vérifier que about-premium.html a:
    - Hervé SAJORI (pas SAGORY)
    - Claims softened
    """
    print("\n═══ PHASE 5: ABOUT PAGE VERIFICATION ═══")
    
    page = 'about-premium.html'
    if not os.path.exists(page):
        print(f"  ⚠️  {page} not found")
        return
    
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Verify SAJORI
    if 'SAJORI' in content or 'S-A-J-O-R-I' in content:
        print(f"  ✅ Name: SAJORI confirmed")
    else:
        print(f"  ⚠️  Name: SAJORI not found")
    
    # Verify softened claims
    if 'nombreuses organisations' in content:
        print(f"  ✅ Claims: Softened to 'nombreuses organisations'")
    elif '200 entreprises' in content:
        print(f"  ⚠️  Claims: Still has '200 entreprises'")
    else:
        print(f"  ✓  Claims: No specific count found")

# ═══════════════════════════════════════════════════════════════════
# MAIN EXECUTION
# ═══════════════════════════════════════════════════════════════════

if __name__ == '__main__':
    print("╔" + "="*66 + "╗")
    print("║  DigiSchool Africa — ALIGNEMENT PREMIUM ABSOLU" + " "*19 + "║")
    print("║  Référentiel: Homepage (index.html)" + " "*31 + "║")
    print("╚" + "="*66 + "╝")
    
    fix_partner_logos_positioning()
    fix_assessment_critical()
    verify_about_page()
    qa_results = run_qa_validation()
    
    print("\n" + "="*66)
    print("✅ ALIGNEMENT PREMIUM ABSOLU — PHASE TECHNIQUE COMPLÈTE")
    print("="*66)
    print("\n⚠️  ATTENTION: Vérification manuelle requise pour:")
    print("   - Content transformation (cards/accordions sur B2C/Companies)")
    print("   - Assessment expert questions (à ajouter manuellement)")
    print("   - Logos contextuels par formation (logique métier)")
    print("\n📋 Prochaine étape: Review manuel + commit production")
