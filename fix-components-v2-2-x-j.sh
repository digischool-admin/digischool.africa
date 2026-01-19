#!/bin/bash
# DigiSchool Africa V2.2.x-J - Global Components Fix
# Ensures proper component injection and removes duplicates

cd /home/user/webapp

echo "🔧 V2.2.x-J GLOBAL COMPONENTS FIX"
echo "=================================="

PAGES=(
  "parcours.html"
  "b2c.html"
  "companies.html"
  "about-premium.html"
  "cgu-v2.2.html"
  "cgv-v2.2.html"
  "mentions-legales-v2.2.html"
  "politique-confidentialite-v2.2.html"
)

for page in "${PAGES[@]}"; do
  if [ -f "$page" ]; then
    echo ""
    echo "📄 Processing: $page"
    
    # Check if page already has global-components-v2-production
    if ! grep -q "global-components-v2-production.js" "$page"; then
      # Check if it has premium components from V2.2.x-I
      if grep -q "premium-ux-components-v2.2.x-h.js" "$page"; then
        # Replace premium components with global components
        sed -i 's|premium-ux-components-v2.2.x-h.js|global-components-v2-production.js|g' "$page"
        sed -i 's|apply-premium-ux-refactor.js|chatbot-manager-v2.js|g' "$page"
        echo "   ✅ Replaced premium components with global components"
      else
        # No components at all, need to inject before </body>
        sed -i 's|</body>|  <!-- DigiSchool Global Components V2.2.x-J -->\n  <script src="/assets/global-components-v2-production.js"></script>\n  <script src="/assets/chatbot-manager-v2.js"></script>\n</body>|' "$page"
        echo "   ✅ Injected global components"
      fi
    else
      echo "   ✅ Already has global components"
    fi
    
    # Ensure chatbot manager is present
    if ! grep -q "chatbot-manager-v2.js" "$page"; then
      # Add before </body>
      sed -i 's|</body>|  <script src="/assets/chatbot-manager-v2.js"></script>\n</body>|' "$page"
      echo "   ✅ Added chatbot manager"
    fi
    
  fi
done

echo ""
echo "=================================="
echo "✅ Global Components Fix Complete"
echo ""
echo "Verification:"
for page in "${PAGES[@]}"; do
  if [ -f "$page" ]; then
    GLOBAL=$(grep -c "global-components-v2-production.js" "$page")
    CHATBOT=$(grep -c "chatbot-manager-v2.js" "$page")
    if [ "$GLOBAL" -gt 0 ] && [ "$CHATBOT" -gt 0 ]; then
      echo "✅ $page - Components OK (global:$GLOBAL, chatbot:$CHATBOT)"
    else
      echo "❌ $page - Missing components (global:$GLOBAL, chatbot:$CHATBOT)"
    fi
  fi
done
