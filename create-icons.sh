#!/bin/bash

# DigiSchool Africa — Iconographie Fluent-like SVG
# 15 icônes style Microsoft Word/Fluent

cd assets/icons

# 1. Leadership
cat > leadership.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="14" r="6" stroke="currentColor" stroke-width="2.5"/>
  <path d="M 12 38 Q 12 26 24 26 Q 36 26 36 38" stroke="currentColor" stroke-width="2.5" fill="none"/>
  <path d="M 24 22 L 24 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="24" cy="24" r="2.5" fill="currentColor"/>
</svg>
EOF

# 2. PMP/Gestion de Projet
cat > pmp.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="12" width="32" height="28" rx="3" stroke="currentColor" stroke-width="2.5"/>
  <line x1="8" y1="20" x2="40" y2="20" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="16" cy="28" r="2" fill="currentColor"/>
  <circle cx="24" cy="28" r="2" fill="currentColor"/>
  <circle cx="32" cy="28" r="2" fill="currentColor"/>
  <path d="M 14 32 L 18 36 L 26 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
EOF

# 3. Data Analytics
cat > data-analytics.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="30" width="6" height="12" rx="1.5" fill="currentColor"/>
  <rect x="21" y="22" width="6" height="20" rx="1.5" fill="currentColor"/>
  <rect x="32" y="14" width="6" height="28" rx="1.5" fill="currentColor"/>
  <polyline points="13,28 24,20 35,12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
EOF

# 4. Excel
cat > excel.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="28" height="28" rx="3" stroke="currentColor" stroke-width="2.5"/>
  <line x1="24" y1="10" x2="24" y2="38" stroke="currentColor" stroke-width="2"/>
  <line x1="10" y1="18" x2="38" y2="18" stroke="currentColor" stroke-width="2"/>
  <line x1="10" y1="26" x2="38" y2="26" stroke="currentColor" stroke-width="2"/>
  <circle cx="17" cy="14" r="1.5" fill="currentColor"/>
  <circle cx="31" cy="14" r="1.5" fill="currentColor"/>
</svg>
EOF

# 5. Power BI
cat > powerbi.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2.5"/>
  <path d="M 24 24 L 24 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 24 24 L 36 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="24" cy="24" r="3" fill="currentColor"/>
</svg>
EOF

# 6. Marketing Digital
cat > marketing.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 12 30 L 18 18 L 30 18 L 36 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="24" cy="24" r="4" fill="currentColor"/>
  <line x1="24" y1="30" x2="24" y2="38" stroke="currentColor" stroke-width="2.5"/>
  <line x1="18" y1="38" x2="30" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
</svg>
EOF

# 7. Digital/VibeCoding
cat > digital.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="14" width="32" height="22" rx="3" stroke="currentColor" stroke-width="2.5"/>
  <line x1="8" y1="30" x2="40" y2="30" stroke="currentColor" stroke-width="2.5"/>
  <polyline points="16,22 20,26 16,30" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="26" y1="22" x2="32" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
EOF

# 8. RH/Performance
cat > rh.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="4" stroke="currentColor" stroke-width="2"/>
  <circle cx="32" cy="16" r="4" stroke="currentColor" stroke-width="2"/>
  <path d="M 10 34 Q 10 26 16 26 Q 22 26 22 34" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M 26 34 Q 26 26 32 26 Q 38 26 38 34" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
EOF

# 9. PowerPoint
cat > powerpoint.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="12" width="28" height="24" rx="2" stroke="currentColor" stroke-width="2.5"/>
  <rect x="14" y="18" width="8" height="6" rx="1" fill="currentColor"/>
  <line x1="14" y1="28" x2="34" y2="28" stroke="currentColor" stroke-width="2"/>
  <line x1="14" y1="32" x2="28" y2="32" stroke="currentColor" stroke-width="2"/>
</svg>
EOF

# 10. Entreprise B2B
cat > enterprise.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="12" width="20" height="28" rx="2" stroke="currentColor" stroke-width="2.5"/>
  <rect x="18" y="18" width="4" height="4" fill="currentColor"/>
  <rect x="26" y="18" width="4" height="4" fill="currentColor"/>
  <rect x="18" y="26" width="4" height="4" fill="currentColor"/>
  <rect x="26" y="26" width="4" height="4" fill="currentColor"/>
  <rect x="20" y="34" width="8" height="6" fill="currentColor"/>
</svg>
EOF

# 11. Secteurs
cat > sectors.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2.5"/>
  <path d="M 24 10 L 24 24 L 34 18" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="24" cy="24" r="3" fill="currentColor"/>
</svg>
EOF

# 12. Sur-mesure
cat > custom.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 12 18 L 18 12 L 30 24 L 36 18 L 42 24 L 36 30 L 24 18 L 18 24 L 12 18 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="18" cy="18" r="2" fill="currentColor"/>
  <circle cx="30" cy="30" r="2" fill="currentColor"/>
</svg>
EOF

# 13. Audit
cat > audit.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="12" y="8" width="24" height="32" rx="2" stroke="currentColor" stroke-width="2.5"/>
  <line x1="18" y1="16" x2="30" y2="16" stroke="currentColor" stroke-width="2"/>
  <line x1="18" y1="22" x2="30" y2="22" stroke="currentColor" stroke-width="2"/>
  <line x1="18" y1="28" x2="26" y2="28" stroke="currentColor" stroke-width="2"/>
  <path d="M 14 32 L 18 36 L 24 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
EOF

# 14. Academy
cat > academy.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 22 L 24 14 L 38 22 L 24 30 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="24" y1="30" x2="24" y2="38" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="24" cy="40" r="2" fill="currentColor"/>
</svg>
EOF

# 15. Certification
cat > certification.svg << 'EOF'
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="20" r="10" stroke="currentColor" stroke-width="2.5"/>
  <path d="M 19 20 L 22 23 L 29 16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 20 30 L 18 38 L 24 34 L 30 38 L 28 30" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
</svg>
EOF

echo "✅ 15 icônes SVG Fluent-like créées"
