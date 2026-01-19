#!/bin/bash

# Script to inject V2 production components on all critical pages

PAGES=(
  "b2c.html"
  "companies.html"
  "about-premium.html"
  "contact.html"
  "b2c-custom-request.html"
  "b2c-idea-box.html"
  "cgu-v2.2.html"
  "cgv-v2.2.html"
  "mentions-legales-v2.2.html"
  "politique-confidentialite-v2.2.html"
)

INJECT_BLOCK='  <!-- V2 Production Components -->
  <script src="/assets/global-components-v2-production.js"></script>
  <script src="/assets/chatbot-manager-v2.js"></script>'

for page in "${PAGES[@]}"; do
  if [ -f "$page" ]; then
    echo "Processing $page..."
    # Check if already injected
    if grep -q "global-components-v2-production.js" "$page"; then
      echo "  ✓ Already has V2 components"
    else
      # Inject before </body>
      sed -i.bak "s|</body>|${INJECT_BLOCK}\n</body>|" "$page"
      echo "  ✓ Injected V2 components"
    fi
  else
    echo "  ✗ File not found: $page"
  fi
done

echo ""
echo "✅ V2 components injection complete!"

