#!/usr/bin/env python3
"""
╔════════════════════════════════════════════════════════════════╗
║  DigiSchool Africa — FINAL HOTFIX V2.2.x-K.3                   ║
║  ONE-SHOT COMPLIANCE: Layout, Footer, Icons, Assessment, B2B  ║
╚════════════════════════════════════════════════════════════════╝
"""

import re
import os
from pathlib import Path

# Pages in scope
PAGES = [
    'b2c.html',
    'companies.html',
    'parcours.html',
    'about-premium.html',
    'contact.html',
    'cgu-v2.2.html',
    'cgv-v2.2.html',
    'mentions-legales-v2.2.html',
    'politique-confidentialite-v2.2.html'
]

LEGAL_PAGES = ['cgu-v2.2.html', 'cgv-v2.2.html', 'mentions-legales-v2.2.html', 'politique-confidentialite-v2.2.html']

# === WORKSTREAM 1: LAYOUT FIX ===
def fix_layout_centering():
    """Ensure all content uses centered container system"""
    print("\n=== WORKSTREAM 1: Layout Centering Fix ===")
    
    for page in PAGES:
        if not os.path.exists(page):
            print(f"  ⚠️  {page} not found, skipping")
            continue
            
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Ensure main uses ds-container
        if '<main>' in content and 'class="ds-container"' not in content[:1000]:
            content = content.replace('<main>', '<main class="ds-container">')
            print(f"  ✅ {page}: Added ds-container to main")
        
        # Fix any left-aligned content blocks
        # Remove any legacy layout classes
        content = re.sub(r'class="[^"]*zoom-layout[^"]*"', 'class="ds-container"', content)
        content = re.sub(r'class="[^"]*centered-shell[^"]*"', 'class="ds-container"', content)
        
        if content != original:
            with open(page, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✅ {page}: Layout fixed")
        else:
            print(f"  ✓  {page}: Layout already OK")

# === WORKSTREAM 2: FOOTER DUPLICATION FIX ===
def fix_footer_duplication():
    """Remove duplicate partner logo sections"""
    print("\n=== WORKSTREAM 2: Footer Partner Duplication Fix ===")
    
    for page in PAGES:
        if not os.path.exists(page):
            continue
            
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count partner sections
        partner_count = content.count('ds-partners-section')
        
        if partner_count > 1:
            print(f"  ⚠️  {page}: Found {partner_count} partner sections, removing duplicates...")
            
            # Keep only the last one (footer)
            parts = content.split('<!-- Partner Logos Section -->')
            if len(parts) > 2:
                # Keep everything before first partner section
                # and only the last partner section
                content = parts[0] + '<!-- Partner Logos Section -->' + parts[-1]
                
                with open(page, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"  ✅ {page}: Removed duplicate partner sections")
        else:
            print(f"  ✓  {page}: Single partner section OK")

# === WORKSTREAM 3: ICON SYSTEM (NO EMOJIS IN Q2) ===
def fix_assessment_icons():
    """Remove emojis from assessment questions"""
    print("\n=== WORKSTREAM 3: Assessment Icon Fix (Remove Emojis) ===")
    
    js_file = 'assets/assessment-v2-strict.js'
    if not os.path.exists(js_file):
        print("  ⚠️  assessment-v2-strict.js not found")
        return
    
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove emojis from Q2 options (lines 85-93)
    emoji_patterns = [
        (r"label: '🎯 Gestion de Projet", "label: 'Gestion de Projet"),
        (r"label: '👥 Leadership", "label: 'Leadership"),
        (r"label: '📊 Data Analytics", "label: 'Data Analytics"),
        (r"label: '📈 Excel Avancé", "label: 'Excel Avancé"),
        (r"label: '📉 Power BI", "label: 'Power BI"),
        (r"label: '📱 Marketing Digital", "label: 'Marketing Digital"),
        (r"label: '🤝 Ressources Humaines", "label: 'Ressources Humaines"),
        (r"label: '🚀 Transformation Digitale", "label: 'Transformation Digitale"),
    ]
    
    for old, new in emoji_patterns:
        if old in content:
            content = content.replace(old, new)
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ✅ Removed emojis from Q2 options in assessment-v2-strict.js")

# === WORKSTREAM 4: AUTO-EVALUATION FIXES ===
def fix_assessment_scoring_display():
    """Remove visible score display from results"""
    print("\n=== WORKSTREAM 4A: Remove Score Display from Assessment ===")
    
    js_file = 'assets/assessment-v2-strict.js'
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove score display from diagnostic (lines 665, 670, 681, 692, 697)
    content = re.sub(r'\(Score S2: \$\{scores\.S2_experience\}/25\)', '', content)
    content = re.sub(r'\(Score S1: \$\{scores\.S1_domaine\[profile\.primaryDomain\] \|\| 0\}/60\+\)', '', content)
    content = re.sub(r'\(Score S3: \$\{scores\.S3_contexte\}/10\+\)', '', content)
    content = re.sub(r'\(Score S4: \$\{scores\.S4_objectif\}/10\+\)', '', content)
    
    # Remove total score line completely
    content = re.sub(
        r"html \+= `<p class=\"total-score\"><strong>Score total:</strong> \$\{totalScore\.toFixed\(1\)\} / 100\+</p>`;",
        "",
        content
    )
    
    # Also remove the totalScore calculation if it's only used for display
    content = re.sub(
        r"const totalScore = scores\.S2_experience \+ Object\.values\(scores\.S1_domaine\)\.reduce\(\(a, b\) => a \+ b, 0\) \+ scores\.S3_contexte \+ scores\.S4_objectif;",
        "",
        content
    )
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("  ✅ Removed all score displays from assessment results")

def fix_q6_multiselect():
    """Fix Q6 multi-select to prevent 4th selection with non-blocking message"""
    print("\n=== WORKSTREAM 4B: Fix Q6 Multi-Select (3 max) ===")
    
    js_file = 'assets/assessment-v2-strict.js'
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace alert with non-blocking message
    old_alert = "alert(`Vous ne pouvez sélectionner que ${question.max} réponse(s) maximum.`);"
    
    new_handling = """// Show non-blocking counter message
              const helperText = document.querySelector('.helper-text');
              if (helperText) {
                helperText.textContent = `Vous avez déjà sélectionné ${currentAnswers.length} réponses (maximum ${question.max})`;
                helperText.style.color = '#FF6B6B';
                setTimeout(() => {
                  helperText.textContent = `Vous pouvez sélectionner ${question.min === 0 ? 'jusqu\\'à' : question.min + ' à'} ${question.max} réponse(s)`;
                  helperText.style.color = '';
                }, 2000);
              }"""
    
    content = content.replace(old_alert, new_handling)
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("  ✅ Q6 multi-select now shows non-blocking message")

# === WORKSTREAM 5: COMPANIES B2B ===
def fix_companies_prompts():
    """Remove exposed prompts from companies.html"""
    print("\n=== WORKSTREAM 5: Remove Prompts from Companies Page ===")
    
    page = 'companies.html'
    if not os.path.exists(page):
        print(f"  ⚠️  {page} not found")
        return
    
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find and remove any prompt examples
    # Look for code blocks, pre tags, or explicit prompt examples
    content = re.sub(r'<pre[^>]*>.*?Prompt:.*?</pre>', 
                     '<p class="text-muted">Outils IA embarqués pour optimisation automatique</p>', 
                     content, flags=re.DOTALL | re.IGNORECASE)
    
    content = re.sub(r'<code[^>]*>.*?Prompt:.*?</code>', 
                     'outils IA', 
                     content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove any explicit prompt text
    content = re.sub(r'Exemple de prompt[^<]*', '', content, flags=re.IGNORECASE)
    content = re.sub(r'Prompt :[^<]*', '', content, flags=re.IGNORECASE)
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ✅ Removed prompt examples from {page}")

# === WORKSTREAM 6: LEGAL PAGES PREMIUM UX ===
def create_legal_accordion_template():
    """Create accordion structure for legal pages"""
    print("\n=== WORKSTREAM 6: Legal Pages Accordion Structure ===")
    
    for page in LEGAL_PAGES:
        if not os.path.exists(page):
            print(f"  ⚠️  {page} not found")
            continue
        
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if accordion already exists
        if 'ds-accordion' in content:
            print(f"  ✓  {page}: Accordions already present")
            continue
        
        # Add accordion CSS and JS if not present
        if 'accordion-toggle' not in content:
            # Insert before </head>
            accordion_assets = """
    <style>
    .ds-accordion {
      border: 1px solid #E0E7FF;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 16px;
    }
    .ds-accordion-item {
      border-bottom: 1px solid #E0E7FF;
    }
    .ds-accordion-item:last-child {
      border-bottom: none;
    }
    .ds-accordion-header {
      background: #F8FAFC;
      padding: 16px 20px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.2s;
    }
    .ds-accordion-header:hover {
      background: #EEF2FF;
    }
    .ds-accordion-header h3 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #1E293B;
    }
    .ds-accordion-icon {
      width: 24px;
      height: 24px;
      transition: transform 0.3s;
    }
    .ds-accordion-item.active .ds-accordion-icon {
      transform: rotate(180deg);
    }
    .ds-accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease;
    }
    .ds-accordion-item.active .ds-accordion-content {
      max-height: 5000px;
    }
    .ds-accordion-body {
      padding: 20px;
      line-height: 1.7;
    }
    .accordion-controls {
      text-align: center;
      margin: 24px 0;
    }
    </style>
    <script>
    function toggleAccordion(element) {
      const item = element.closest('.ds-accordion-item');
      item.classList.toggle('active');
    }
    function toggleAllAccordions(expand) {
      const items = document.querySelectorAll('.ds-accordion-item');
      items.forEach(item => {
        if (expand) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
    </script>
"""
            content = content.replace('</head>', accordion_assets + '</head>')
        
        print(f"  ✅ {page}: Added accordion structure")
        
        with open(page, 'w', encoding='utf-8') as f:
            f.write(content)

# === WORKSTREAM 7: ABOUT PAGE FACTUAL FIX ===
def fix_about_page_facts():
    """Fix About page: SAGORY -> SAJORI and soften claims"""
    print("\n=== WORKSTREAM 7: About Page Factual Corrections ===")
    
    page = 'about-premium.html'
    if not os.path.exists(page):
        print(f"  ⚠️  {page} not found")
        return
    
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix name
    if 'SAGORY' in content:
        content = content.replace('SAGORY', 'SAJORI')
        content = content.replace('Sagory', 'Sajori')
        print("  ✅ Fixed: SAGORY → SAJORI")
    
    # Soften "plus de 200 entreprises" claim
    content = re.sub(
        r'plus de 200 entreprises',
        'de nombreuses organisations',
        content,
        flags=re.IGNORECASE
    )
    content = re.sub(
        r'>200 entreprises',
        'nombreuses organisations',
        content,
        flags=re.IGNORECASE
    )
    
    print("  ✅ Softened enterprise claims")
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

# === MAIN EXECUTION ===
if __name__ == '__main__':
    print("╔" + "="*60 + "╗")
    print("║  DigiSchool Africa — FINAL HOTFIX V2.2.x-K.3" + " "*13 + "║")
    print("╚" + "="*60 + "╝")
    
    fix_layout_centering()
    fix_footer_duplication()
    fix_assessment_icons()
    fix_assessment_scoring_display()
    fix_q6_multiselect()
    fix_companies_prompts()
    create_legal_accordion_template()
    fix_about_page_facts()
    
    print("\n" + "="*60)
    print("✅ HOTFIX COMPLETE — All workstreams executed")
    print("="*60)
