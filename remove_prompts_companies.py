#!/usr/bin/env python3
"""
Remove exposed AI prompts from companies.html
Replace with high-level tool descriptions
"""
import re
from pathlib import Path

page = Path('companies.html')
content = page.read_text(encoding='utf-8')

# Pattern pour capturer tout le bloc .ai-prompts jusqu'à </div> fermant
pattern = r'<div class="ai-prompts">.*?</div>\s*</div>\s*</section>'

# Remplacement générique
replacement = '''<div class="ai-tools-section">
          <h4><span class="ds-icon ds-icon-sparkles" style="color: #7E57C2;"></span> Outils IA Inclus</h4>
          <p style="color: #546E7A; font-size: 0.95rem; line-height: 1.6;">
            Les participants reçoivent un kit d'outils IA adapté à leur métier : 
            assistants virtuels pour automatiser les tâches courantes, modèles de documents professionnels, 
            et guides d'utilisation des dernières technologies pour gagner en productivité.
          </p>
        </div>
      </section>'''

# Remplacer toutes les occurrences
content_fixed = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Sauvegarder
page.write_text(content_fixed, encoding='utf-8')

print(f"✅ Removed AI prompt blocks from {page.name}")
print(f"   Before: {content.count('ai-prompts')} prompt blocks")
print(f"   After: {content_fixed.count('ai-prompts')} prompt blocks")
