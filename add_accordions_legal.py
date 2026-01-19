#!/usr/bin/env python3
"""
Add accordions to 4 legal pages
Wrap major sections (h2) in <details> tags
"""
import re
from pathlib import Path

PAGES = [
    'cgu-v2.2.html',
    'cgv-v2.2.html',
    'mentions-legales-v2.2.html',
    'politique-confidentialite-v2.2.html'
]

def add_accordions(content):
    """
    Wrap each <h2>...</h2> + following content until next <h2> in <details><summary>
    """
    # Étape 1: Trouver toutes les sections h2
    # Pattern: <h2>titre</h2> suivi de paragraphes/listes jusqu'au prochain <h2> ou fin
    
    # Stratégie : split par <h2>, puis reconstruire avec <details>
    parts = re.split(r'(<h2[^>]*>.*?</h2>)', content, flags=re.DOTALL)
    
    result = []
    i = 0
    while i < len(parts):
        part = parts[i]
        
        # Si c'est un <h2>, on l'enveloppe
        if part.strip().startswith('<h2'):
            # Extraire le texte du h2
            h2_match = re.search(r'<h2[^>]*>(.*?)</h2>', part, re.DOTALL)
            if h2_match:
                h2_text = h2_match.group(1).strip()
                
                # Récupérer le contenu suivant (jusqu'au prochain h2 ou fin)
                content_after = parts[i+1] if i+1 < len(parts) else ''
                
                # Construction de l'accordion
                accordion = f'''
<details class="legal-accordion" open>
  <summary class="legal-accordion-summary">{h2_text}</summary>
  <div class="legal-accordion-content">
{content_after.strip()}
  </div>
</details>
'''
                result.append(accordion)
                i += 2  # Skip le h2 ET le contenu
                continue
        
        result.append(part)
        i += 1
    
    return ''.join(result)

# CSS pour les accordions
accordion_css = """
<style>
/* Legal Page Accordions */
.legal-accordion {
  margin: 24px 0;
  border: 1px solid #E0E7ED;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.legal-accordion-summary {
  cursor: pointer;
  padding: 16px 20px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1E88E5;
  background: linear-gradient(135deg, rgba(30,136,229,0.03) 0%, rgba(38,166,154,0.03) 100%);
  list-style: none;
  user-select: none;
  transition: background 0.2s ease;
}

.legal-accordion-summary:hover {
  background: linear-gradient(135deg, rgba(30,136,229,0.08) 0%, rgba(38,166,154,0.08) 100%);
}

.legal-accordion-summary::marker,
.legal-accordion-summary::-webkit-details-marker {
  display: none;
}

.legal-accordion-summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 12px;
  transition: transform 0.2s ease;
  color: #26A69A;
}

.legal-accordion[open] .legal-accordion-summary::before {
  transform: rotate(90deg);
}

.legal-accordion-content {
  padding: 20px;
  background: white;
}

.legal-accordion-content h2 {
  display: none; /* Hide original h2 since it's now in summary */
}
</style>
"""

for page_name in PAGES:
    page = Path(page_name)
    if not page.exists():
        print(f"⚠️  {page_name} not found")
        continue
    
    content = page.read_text(encoding='utf-8')
    
    # Injecter le CSS si pas déjà présent
    if 'legal-accordion' not in content:
        # Ajouter le CSS avant </head>
        content = content.replace('</head>', f'{accordion_css}</head>')
    
    # Transformer les sections en accordions
    # Mais uniquement après le résumé (après </div> de legal-summary)
    
    # Split: avant résumé | résumé | après résumé
    summary_end = content.find('</div>\n\n\n  <p>')  # Fin du résumé
    
    if summary_end > 0:
        before_articles = content[:summary_end + 6]  # Garde </div>
        articles = content[summary_end + 6:]
        
        # Transformer les articles
        articles_with_accordions = add_accordions(articles)
        
        content = before_articles + articles_with_accordions
    else:
        # Fallback : tout transformer
        content = add_accordions(content)
    
    page.write_text(content, encoding='utf-8')
    print(f"✅ Added accordions to {page_name}")
    
print("\n✅ All legal pages now have accordions")
