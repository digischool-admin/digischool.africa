#!/usr/bin/env python3
"""V2.2.x-K - Transform Legal Pages to Premium UX"""

import re

LEGAL_PAGES = {
    "cgu-v2.2.html": {
        "title": "Conditions Générales d'Utilisation (CGU)",
        "summary_cards": [
            {
                "icon": "👤",
                "title": "Responsable",
                "content": "Digilab — Plateforme DigiSchool Africa"
            },
            {
                "icon": "✅",
                "title": "Vous acceptez",
                "content": "Utilisation légale • Respect de la propriété intellectuelle • Paiement pour accès aux formations"
            },
            {
                "icon": "🎓",
                "title": "Nous garantissons",
                "content": "Formations de qualité • Plateforme disponible (99% uptime) • Support WhatsApp & Email • Certificats authentiques"
            },
            {
                "icon": "❌",
                "title": "Nous ne promettons PAS",
                "content": "Résultats individuels (promotion, recrutement) • Réussite aux examens externes (PMP, PECB) • Remboursements"
            }
        ]
    },
    "cgv-v2.2.html": {
        "title": "Conditions Générales de Vente (CGV)",
        "summary_cards": [
            {
                "icon": "💰",
                "title": "Tarification",
                "content": "Prix en FCFA • Packs et modules disponibles • Remises jusqu'à 25%"
            },
            {
                "icon": "📱",
                "title": "Paiement",
                "content": "Mobile Money (Orange, MTN, Moov, Wave) • Virement bancaire • Carte bancaire"
            },
            {
                "icon": "📦",
                "title": "Livraison",
                "content": "Accès immédiat après paiement • Plateforme 100% en ligne • Contenus accessibles à vie"
            },
            {
                "icon": "🚫",
                "title": "Politique de remboursement",
                "content": "Non remboursable sauf annulation par Digilab ou force majeure"
            }
        ]
    },
    "mentions-legales-v2.2.html": {
        "title": "Mentions Légales",
        "summary_cards": [
            {
                "icon": "🏢",
                "title": "Éditeur",
                "content": "Digilab — Société ivoirienne de transformation digitale"
            },
            {
                "icon": "👔",
                "title": "Directeur",
                "content": "Hervé Sajori — Directeur de Publication"
            },
            {
                "icon": "🌍",
                "title": "Hébergement",
                "content": "Infrastructure cloud professionnelle • Données sécurisées • Serveurs géo-distribués"
            },
            {
                "icon": "📧",
                "title": "Contact",
                "content": "contact@digischool.africa • +225 05 05 11 11 02"
            }
        ]
    },
    "politique-confidentialite-v2.2.html": {
        "title": "Politique de Confidentialité (RGPD)",
        "summary_cards": [
            {
                "icon": "🔒",
                "title": "Données collectées",
                "content": "Nom, email, téléphone • Progression pédagogique • Données de paiement sécurisées"
            },
            {
                "icon": "🎯",
                "title": "Utilisation",
                "content": "Gestion des formations • Support client • Amélioration de la plateforme"
            },
            {
                "icon": "🛡️",
                "title": "Protection",
                "content": "Cryptage SSL/TLS • Conformité RGPD • Pas de vente de données • Stockage sécurisé"
            },
            {
                "icon": "👁️",
                "title": "Vos droits",
                "content": "Accès • Rectification • Suppression • Opposition • Portabilité des données"
            }
        ]
    }
}

SUMMARY_TEMPLATE = '''
<!-- 30-Second Summary -->
<div class="legal-summary" style="background: linear-gradient(135deg, rgba(30,136,229,0.05) 0%, rgba(38,166,154,0.05) 100%); padding: 48px 32px; margin-bottom: 48px; border-radius: 16px;">
  <h2 style="text-align: center; font-size: 28px; font-weight: 700; color: #1E88E5; margin-bottom: 12px;">
    Résumé en 30 secondes
  </h2>
  <p style="text-align: center; font-size: 14px; color: #546E7A; margin-bottom: 32px;">
    L'essentiel à retenir — lecture rapide
  </p>
  
  <div class="summary-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
    {cards}
  </div>
</div>
'''

CARD_TEMPLATE = '''
    <div class="summary-card" style="background: white; border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <div style="font-size: 32px; margin-bottom: 12px;">{icon_svg}</div>
      <h3 style="font-size: 16px; font-weight: 700; color: #263238; margin-bottom: 8px;">{title}</h3>
      <p style="font-size: 13px; color: #546E7A; line-height: 1.6;">{content}</p>
    </div>
'''

ICON_MAP = {
    "👤": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21c0-3.86 3.13-7 7-7h1c3.87 0 7 3.14 7 7"/></svg>',
    "✅": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#26A69A" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    "🎓": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" stroke-width="2"><path d="M2 12L12 7l10 5-10 5-10-5z"/><path d="M7 14v6l5 3 5-3v-6"/></svg>',
    "❌": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    "💰": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    "📱": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#26A69A" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    "📦": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
    "🚫": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
    "🏢": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 6h6M9 10h6M9 14h6"/></svg>',
    "👔": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#26A69A" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21c0-3.86 3.13-7 7-7h1c3.87 0 7 3.14 7 7"/></svg>',
    "🌍": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    "📧": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    "🔒": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    "🎯": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#26A69A" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    "🛡️": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7E57C2" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    "👁️": '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
}

CTA_BANNER = '''
<div class="legal-cta" style="background: linear-gradient(135deg, #1E88E5 0%, #26A69A 100%); border-radius: 16px; padding: 40px; text-align: center; margin-top: 48px;">
  <h3 style="color: white; font-size: 24px; font-weight: 700; margin-bottom: 16px;">
    Des questions sur nos conditions ?
  </h3>
  <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin-bottom: 24px;">
    Notre équipe est disponible pour vous accompagner
  </p>
  <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
    <a href="/contact.html" class="btn" style="background: white; color: #1E88E5; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
      Nous contacter
    </a>
    <a href="/b2c.html" class="btn" style="background: rgba(255,255,255,0.2); color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; border: 1px solid rgba(255,255,255,0.4);">
      Voir les formations
    </a>
  </div>
</div>
'''

for page_file, page_data in LEGAL_PAGES.items():
    try:
        with open(page_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if already has summary
        if 'legal-summary' in content:
            print(f"✓ {page_file} - Summary already present")
            continue
        
        # Build summary cards
        cards_html = ""
        for card in page_data["summary_cards"]:
            icon_svg = ICON_MAP.get(card["icon"], card["icon"])
            cards_html += CARD_TEMPLATE.format(
                icon_svg=icon_svg,
                title=card["title"],
                content=card["content"]
            )
        
        summary_html = SUMMARY_TEMPLATE.format(cards=cards_html)
        
        # Inject summary after h1 or after opening .legal-container
        if '<div class="legal-container">' in content:
            # Find position after h1
            h1_match = re.search(r'<h1[^>]*>.*?</h1>', content, re.DOTALL)
            if h1_match:
                insert_pos = h1_match.end()
                # Also get the date line
                date_match = re.search(r'<p><strong>Dernière mise.*?</p>', content[insert_pos:insert_pos+200], re.DOTALL)
                if date_match:
                    insert_pos += date_match.end()
                
                # Inject summary
                content = content[:insert_pos] + "\n" + summary_html + "\n" + content[insert_pos:]
        
        # Inject CTA before signature or before </div> closing legal-container
        if '<div class="signature">' in content:
            content = content.replace('<div class="signature">', CTA_BANNER + '\n<div class="signature">')
        elif '</div>\n\n<script' in content:
            content = content.replace('</div>\n\n<script', '</div>\n' + CTA_BANNER + '\n\n<script')
        
        # Remove emojis from body text (but keep in summary cards)
        # Replace common emojis
        emoji_replacements = {
            '📋 ': '',
            '✅ ': '• ',
            '❌ ': '• ',
            '📧 ': '',
            '📱 ': '',
            'ℹ️ ': ''
        }
        
        for emoji, replacement in emoji_replacements.items():
            # Only replace in main content, not in summary section
            parts = content.split('<!-- 30-Second Summary -->')
            if len(parts) > 1:
                before_summary = parts[0]
                rest = '<!-- 30-Second Summary -->'.join(parts[1:])
                # Replace emojis only in content after summary
                rest_parts = rest.split('<!-- End Partner Logos -->')
                if len(rest_parts) > 1:
                    middle = rest_parts[0]
                    after = '<!-- End Partner Logos -->'.join(rest_parts[1:])
                    middle = middle.replace(emoji, replacement)
                    content = before_summary + '<!-- 30-Second Summary -->' + middle + '<!-- End Partner Logos -->' + after
                else:
                    content = before_summary + '<!-- 30-Second Summary -->' + rest.replace(emoji, replacement)
        
        # Write back
        with open(page_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ {page_file} - Summary & CTA injected, emojis cleaned")
        
    except Exception as e:
        print(f"✗ {page_file} - Error: {e}")

print("\n✅ Legal Pages Premium UX Transformation Complete")
