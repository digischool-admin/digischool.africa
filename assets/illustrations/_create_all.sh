#!/bin/bash

# Gestion de projet PMP
cat > gestion-projet-pmp.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#DBEAFE"/><rect x="80" y="80" width="240" height="160" rx="12" fill="white" stroke="#3B82F6" stroke-width="4"/><path d="M120 120 L180 120 L180 180 M220 120 L280 120 L280 180" stroke="#3B82F6" stroke-width="6" stroke-linecap="round"/><circle cx="150" cy="150" r="12" fill="#3B82F6"/><circle cx="250" cy="150" r="12" fill="#60A5FA"/><text x="200" y="280" font-family="Arial" font-size="18" fill="#2D3748" text-anchor="middle" font-weight="bold">Gestion de Projet</text></svg>
EOF

# Stratégie & Exécution
cat > strategie-execution.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#FEF3C7"/><path d="M100 200 L150 150 L200 170 L250 120 L300 100" stroke="#F59E0B" stroke-width="8" stroke-linecap="round" fill="none"/><circle cx="100" cy="200" r="12" fill="#F59E0B"/><circle cx="150" cy="150" r="12" fill="#F59E0B"/><circle cx="200" cy="170" r="12" fill="#F59E0B"/><circle cx="250" cy="120" r="12" fill="#F59E0B"/><circle cx="300" cy="100" r="12" fill="#F59E0B"/><path d="M290 90 L300 100 L290 110" stroke="#F59E0B" stroke-width="4" fill="none"/><text x="200" y="280" font-family="Arial" font-size="18" fill="#2D3748" text-anchor="middle" font-weight="bold">Stratégie</text></svg>
EOF

# Finance
cat > finance-non-financiers.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#D1FAE5"/><circle cx="200" cy="140" r="60" fill="#10B981" opacity="0.2"/><text x="200" y="150" font-family="Arial" font-size="48" fill="#10B981" text-anchor="middle" font-weight="bold">₣</text><rect x="140" y="200" width="30" height="40" rx="4" fill="#10B981" opacity="0.6"/><rect x="185" y="180" width="30" height="60" rx="4" fill="#10B981" opacity="0.8"/><rect x="230" y="160" width="30" height="80" rx="4" fill="#10B981"/><text x="200" y="280" font-family="Arial" font-size="18" fill="#2D3748" text-anchor="middle" font-weight="bold">Finance</text></svg>
EOF

# Vente B2B
cat > vente-b2b-negociation.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#FEE2E2"/><circle cx="140" cy="120" r="35" fill="#EF4444" opacity="0.3"/><circle cx="260" cy="120" r="35" fill="#EF4444" opacity="0.3"/><path d="M140 155 L130 220 M140 155 L150 220" stroke="#2D3748" stroke-width="6"/><path d="M260 155 L250 220 M260 155 L270 220" stroke="#2D3748" stroke-width="6"/><path d="M170 180 L230 180" stroke="#10B981" stroke-width="8" stroke-linecap="round"/><circle cx="170" cy="180" r="8" fill="#10B981"/><circle cx="230" cy="180" r="8" fill="#10B981"/><text x="200" y="280" font-family="Arial" font-size="18" fill="#2D3748" text-anchor="middle" font-weight="bold">Vente B2B</text></svg>
EOF

# Service Client
cat > service-client-experience.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#E0E7FF"/><circle cx="200" cy="130" r="50" fill="#6366F1" opacity="0.3"/><path d="M190 125 Q200 115 210 125" stroke="#6366F1" stroke-width="4" fill="none"/><circle cx="180" cy="120" r="6" fill="#6366F1"/><circle cx="220" cy="120" r="6" fill="#6366F1"/><path d="M160 180 Q200 210 240 180" stroke="#6366F1" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M120 200 Q100 170 120 140 M280 200 Q300 170 280 140" stroke="#6366F1" stroke-width="4" fill="none"/><text x="200" y="280" font-family="Arial" font-size="18" fill="#2D3748" text-anchor="middle" font-weight="bold">Service Client</text></svg>
EOF

# RH & Performance
cat > rh-performance.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#FCE7F3"/><circle cx="150" cy="110" r="28" fill="#EC4899" opacity="0.4"/><circle cx="200" cy="110" r="28" fill="#EC4899" opacity="0.6"/><circle cx="250" cy="110" r="28" fill="#EC4899" opacity="0.8"/><path d="M150 138 L145 200 M150 138 L155 200" stroke="#2D3748" stroke-width="5"/><path d="M200 138 L195 200 M200 138 L205 200" stroke="#2D3748" stroke-width="5"/><path d="M250 138 L245 200 M250 138 L255 200" stroke="#2D3748" stroke-width="5"/><path d="M120 220 L280 220" stroke="#EC4899" stroke-width="6" stroke-linecap="round"/><text x="200" y="280" font-family="Arial" font-size="18" fill="#2D3748" text-anchor="middle" font-weight="bold">RH & Performance</text></svg>
EOF

# Data & Reporting
cat > data-reporting-decideurs.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#F3E8FF"/><rect x="100" y="100" width="200" height="120" rx="8" fill="white" stroke="#9333EA" stroke-width="3"/><rect x="120" y="140" width="40" height="60" rx="4" fill="#9333EA" opacity="0.4"/><rect x="180" y="120" width="40" height="80" rx="4" fill="#9333EA" opacity="0.6"/><rect x="240" y="130" width="40" height="70" rx="4" fill="#9333EA" opacity="0.8"/><circle cx="260" cy="90" r="20" fill="#9333EA" opacity="0.3"/><path d="M250 85 L260 75 L270 85" stroke="#9333EA" stroke-width="3"/><text x="200" y="280" font-family="Arial" font-size="18" fill="#2D3748" text-anchor="middle" font-weight="bold">Data & Reporting</text></svg>
EOF

# Productivité M365
cat > productivite-m365.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#E0F2FE"/><rect x="80" y="80" width="100" height="100" rx="12" fill="#0EA5E9" opacity="0.3"/><rect x="200" y="80" width="100" height="100" rx="12" fill="#0EA5E9" opacity="0.5"/><rect x="320" y="80" width="60" height="100" rx="12" fill="#0EA5E9" opacity="0.7"/><rect x="80" y="200" width="100" height="60" rx="12" fill="#0EA5E9" opacity="0.4"/><rect x="200" y="200" width="180" height="60" rx="12" fill="#0EA5E9" opacity="0.6"/><circle cx="130" cy="130" r="20" fill="white" opacity="0.8"/><circle cx="250" cy="130" r="20" fill="white" opacity="0.8"/><text x="200" y="290" font-family="Arial" font-size="18" fill="#2D3748" text-anchor="middle" font-weight="bold">Productivité M365</text></svg>
EOF

echo "All illustrations created successfully!"
