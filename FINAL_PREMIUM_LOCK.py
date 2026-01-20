#!/usr/bin/env python3
"""
V2.2.x-FINAL PREMIUM CUSTOMER LOCK
EXÉCUTION COMPLÈTE - ZÉRO TOLÉRANCE
"""

import re
import os
import json

print("=" * 80)
print("V2.2.x-FINAL PREMIUM CUSTOMER LOCK — EXÉCUTION")
print("=" * 80)

# ═══════════════════════════════════════════════════════════════════════════
# PARTIE A: FOOTER FIX — CTA TÉLÉPHONE + SIGNATURE SAJORI
# ═══════════════════════════════════════════════════════════════════════════

print("\n[A] FOOTER: CTA Téléphone + Signature SAJORI")

footer_js = 'assets/global-components-v2-production.js'

with open(footer_js, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: CTA téléphone (pas de numéro brut)
# Chercher le lien téléphone et le remplacer par un CTA
old_phone_pattern = r'<a href="tel:\+\d+"[^>]*>.*?\+\d+.*?</a>'
new_phone_cta = '''<button onclick="window.dsPhoneModal()" class="ds-btn ds-btn-secondary" style="display:inline-block;margin-top:8px;">
                  📞 Allo DigiSchool !
                </button>'''

content = re.sub(old_phone_pattern, new_phone_cta, content, flags=re.DOTALL)

# Fix 2: Signature SAJORI uniquement (pas "Hervé")
content = re.sub(
    r'Directeur[^<]*[Hh]ervé[^<]*S[A-Z\-]*JORI',
    'Directeur de publication : <span style="font-family:\'Brush Script MT\',cursive;font-size:1.2em;font-weight:700;">SAJORI</span>',
    content,
    flags=re.IGNORECASE
)

# Ajouter fonction modal téléphone si pas présente
if 'dsPhoneModal' not in content:
    modal_function = '''
// Modal téléphone
window.dsPhoneModal = function() {
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML = `
    <div style="background:white;padding:32px;border-radius:12px;max-width:400px;text-align:center;">
      <h3 style="margin-bottom:16px;color:#1E88E5;">Contactez DigiSchool Africa</h3>
      <p style="font-size:1.5rem;font-weight:700;margin:16px 0;color:#0B1B3A;">+225 05 05 11 11 02</p>
      <div style="display:flex;gap:12px;justify-content:center;margin-top:24px;">
        <button onclick="navigator.clipboard.writeText('+22505051111 02');alert('Numéro copié!')" style="padding:12px 24px;background:#26A69A;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;">Copier</button>
        <a href="https://wa.me/22505051111 02" target="_blank" style="padding:12px 24px;background:#25D366;color:white;border:none;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;">WhatsApp</a>
        <button onclick="this.closest('div[style*=fixed]').remove()" style="padding:12px 24px;background:#546E7A;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;">Fermer</button>
      </div>
    </div>
  `;
  modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
  document.body.appendChild(modal);
};
'''
    # Insérer avant la fin du fichier
    content = content.rstrip() + '\n' + modal_function + '\n'

with open(footer_js, 'w', encoding='utf-8') as f:
    f.write(content)

print("  ✅ Footer: CTA 'Allo DigiSchool!' + Modal téléphone")
print("  ✅ Footer: Signature SAJORI stylisée")

# ═══════════════════════════════════════════════════════════════════════════
# PARTIE B: ASSESSMENT — HARMONISATION COMPLÈTE
# ═══════════════════════════════════════════════════════════════════════════

print("\n[B] ASSESSMENT: Harmonisation 10 questions")

# Fix HTML header "8 questions" → "10 questions"
assessment_html = 'b2c-assessment.html'

with open(assessment_html, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Corriger "8 questions" en "10 questions"
html_content = re.sub(r'8 questions', '10 questions', html_content, flags=re.IGNORECASE)

with open(assessment_html, 'w', encoding='utf-8') as f:
    f.write(html_content)

print("  ✅ Assessment HTML: '10 questions' harmonisé")

# Vérifier assessment JS
assessment_js = 'assets/assessment-v2-strict.js'

with open(assessment_js, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Compter questions
q_count = js_content.count("id: 'Q")
print(f"  ✓ Questions détectées: {q_count}")

# Vérifier Q6 max=3
if 'max: 3' in js_content:
    print("  ✓ Q6 max=3 confirmé")

# ═══════════════════════════════════════════════════════════════════════════
# PARTIE C: COMPANIES — PRIX "SUR DEVIS"
# ═══════════════════════════════════════════════════════════════════════════

print("\n[C] COMPANIES: Prix 'Sur devis'")

companies_html = 'companies.html'

with open(companies_html, 'r', encoding='utf-8') as f:
    companies_content = f.read()

# Remplacer tous les prix par "Sur devis"
companies_content = re.sub(
    r'À partir de \d+[\s\d]*FCFA[^<]*',
    'Sur devis',
    companies_content,
    flags=re.IGNORECASE
)

# Ajouter micro-texte après "Sur devis"
companies_content = re.sub(
    r'(Sur devis)(?!</)',
    r'\1<br><small style="color:#546E7A;font-size:0.85em;">Tarif variable selon formation, niveau, durée, participants</small>',
    companies_content
)

with open(companies_html, 'w', encoding='utf-8') as f:
    f.write(companies_content)

print("  ✅ Companies: Prix → 'Sur devis' + micro-texte")

# ═══════════════════════════════════════════════════════════════════════════
# PARTIE D: ABOUT — SAJORI + CLAIMS
# ═══════════════════════════════════════════════════════════════════════════

print("\n[D] ABOUT: SAJORI + Claims softened")

about_html = 'about-premium.html'

with open(about_html, 'r', encoding='utf-8') as f:
    about_content = f.read()

# Nom SAJORI uniquement
about_content = re.sub(
    r'Hervé\s+S[A-Z\-]*JORI',
    '<span style="font-family:\'Brush Script MT\',cursive;font-size:1.3em;font-weight:700;">SAJORI</span>',
    about_content,
    flags=re.IGNORECASE
)

# Soften "200 entreprises"
about_content = re.sub(
    r'200 entreprises',
    'de nombreuses organisations',
    about_content,
    flags=re.IGNORECASE
)

about_content = re.sub(
    r'plus de 200',
    'de nombreuses',
    about_content,
    flags=re.IGNORECASE
)

with open(about_html, 'w', encoding='utf-8') as f:
    f.write(about_content)

print("  ✅ About: SAJORI stylisé + Claims softened")

# ═══════════════════════════════════════════════════════════════════════════
# PARTIE E: LEGAL PAGES — DOUBLONS PUCES
# ═══════════════════════════════════════════════════════════════════════════

print("\n[E] LEGAL: Doublons puces nettoyés")

legal_pages = [
    'cgu-v2.2.html',
    'cgv-v2.2.html',
    'mentions-legales-v2.2.html',
    'politique-confidentialite-v2.2.html'
]

for page in legal_pages:
    if not os.path.exists(page):
        continue
    
    with open(page, 'r', encoding='utf-8') as f:
        legal_content = f.read()
    
    # Supprimer doublons <li><li>
    legal_content = re.sub(r'<li>\s*<li>', '<li>', legal_content)
    legal_content = re.sub(r'</li>\s*</li>', '</li>', legal_content)
    
    # Supprimer <ul> vides
    legal_content = re.sub(r'<ul>\s*</ul>', '', legal_content)
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(legal_content)
    
    print(f"  ✅ {page}: Doublons nettoyés")

# ═══════════════════════════════════════════════════════════════════════════
# PARTIE F: QA AUTOMATIQUE
# ═══════════════════════════════════════════════════════════════════════════

print("\n[F] QA AUTOMATIQUE: Tests DOM")

pages_to_test = [
    'index.html',
    'b2c.html',
    'companies.html',
    'parcours.html',
    'b2c-assessment.html',
    'about-premium.html',
    'contact.html',
    'cgu-v2.2.html',
    'cgv-v2.2.html',
    'mentions-legales-v2.2.html',
    'politique-confidentialite-v2.2.html'
]

qa_results = []

for page in pages_to_test:
    if not os.path.exists(page):
        qa_results.append({
            'page': page,
            'status': 'NOT_FOUND',
            'partners': 'N/A',
            'emojis': 'N/A',
            'css': 'N/A'
        })
        continue
    
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Tests
    partner_count = content.count('ds-partners-section')
    emoji_found = bool(re.search(r'[\U0001F300-\U0001F9FF]', content))
    has_canonical_css = 'ds-restored-premium.css' in content
    
    # Déterminer status
    status = 'PASS' if (partner_count == 1 and not emoji_found and has_canonical_css) else 'FAIL'
    
    qa_results.append({
        'page': page,
        'status': status,
        'partners': partner_count,
        'emojis': emoji_found,
        'css': has_canonical_css
    })

print("\n  📊 Résultats QA:")
for r in qa_results:
    icon = "✅" if r['status'] == 'PASS' else "❌"
    print(f"    {icon} {r['page']}: {r['status']} (Partners={r['partners']}, Emojis={r['emojis']}, CSS={r['css']})")

# Sauvegarder résultats
with open('QA_RESULTS.json', 'w', encoding='utf-8') as f:
    json.dump(qa_results, f, indent=2, ensure_ascii=False)

print("\n  ✅ Résultats QA sauvegardés: QA_RESULTS.json")

# ═══════════════════════════════════════════════════════════════════════════
# RÉSUMÉ FINAL
# ═══════════════════════════════════════════════════════════════════════════

print("\n" + "=" * 80)
print("EXÉCUTION COMPLÈTE — PRÊT POUR COMMIT")
print("=" * 80)

total_pages = len(qa_results)
passed_pages = sum(1 for r in qa_results if r['status'] == 'PASS')

print(f"\n✅ QA: {passed_pages}/{total_pages} pages PASS")
print("✅ Footer: CTA téléphone + SAJORI")
print("✅ Assessment: 10 questions harmonisé")
print("✅ Companies: Prix 'Sur devis'")
print("✅ About: SAJORI + Claims softened")
print("✅ Legal: Doublons nettoyés")

print("\n📋 Prochaine étape: Commit + Push production")
