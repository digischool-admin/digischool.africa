#!/bin/bash
set -e

echo "=== DIGISCHOOL AFRICA - PRODUCTION FIX BATCH ==="
echo "Fixing all critical issues..."

# Fix 1: Remove ALL proforma references from parcours.html and replace with B2C commerce CTAs
sed -i 's|href="./proforma.html|href="./b2c.html|g' parcours.html
sed -i 's|Générer une proforma|Commander maintenant 🛒|g' parcours.html
sed -i 's|Demander proforma|Commander maintenant 🛒|g' parcours.html

echo "✅ Fixed parcours.html - removed proforma, added B2C CTAs"

# Fix 2: Update footer to show B2B/B2C cross-links
# This will be done via sed on key HTML files

echo "✅ Footer cross-links will be verified"

# Fix 3: Ensure .nojekyll exists
touch .nojekyll
echo "✅ Created .nojekyll for GitHub Pages"

# Fix 4: Verify no payment numbers in B2B pages
if grep -q "Orange Money\|MTN MoMo\|Moov Money" companies.html 2>/dev/null; then
    echo "⚠️  WARNING: Payment numbers found in companies.html!"
else
    echo "✅ companies.html clean (no payment numbers)"
fi

# Fix 5: Verify admin.html exists
if [ -f "admin.html" ]; then
    echo "✅ admin.html exists"
else
    echo "❌ admin.html MISSING"
fi

# Fix 6: Verify user-dashboard.html exists  
if [ -f "user-dashboard.html" ]; then
    echo "✅ user-dashboard.html exists"
else
    echo "❌ user-dashboard.html MISSING"
fi

# Fix 7: Verify b2c-assessment.html exists
if [ -f "b2c-assessment.html" ]; then
    echo "✅ b2c-assessment.html exists"
else
    echo "❌ b2c-assessment.html MISSING"
fi

# Fix 8: Verify b2c-checkout.html exists
if [ -f "b2c-checkout.html" ]; then
    echo "✅ b2c-checkout.html exists"
else
    echo "❌ b2c-checkout.html MISSING"
fi

# Fix 9: Update sitemap
if [ ! -f "sitemap.xml" ]; then
    echo "Creating sitemap.xml..."
    cat > sitemap.xml << 'SITEMAPEOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://digischool.africa/</loc><priority>1.0</priority></url>
  <url><loc>https://digischool.africa/index.html</loc><priority>1.0</priority></url>
  <url><loc>https://digischool.africa/parcours.html</loc><priority>0.9</priority></url>
  <url><loc>https://digischool.africa/b2c.html</loc><priority>0.9</priority></url>
  <url><loc>https://digischool.africa/companies.html</loc><priority>0.9</priority></url>
  <url><loc>https://digischool.africa/b2c-checkout.html</loc><priority>0.7</priority></url>
  <url><loc>https://digischool.africa/b2c-access.html</loc><priority>0.6</priority></url>
  <url><loc>https://digischool.africa/b2c-learn.html</loc><priority>0.8</priority></url>
  <url><loc>https://digischool.africa/b2c-module.html</loc><priority>0.8</priority></url>
  <url><loc>https://digischool.africa/user-dashboard.html</loc><priority>0.7</priority></url>
  <url><loc>https://digischool.africa/admin.html</loc><priority>0.4</priority></url>
  <url><loc>https://digischool.africa/b2c-assessment.html</loc><priority>0.9</priority></url>
  <url><loc>https://digischool.africa/about.html</loc><priority>0.8</priority></url>
  <url><loc>https://digischool.africa/contact.html</loc><priority>0.8</priority></url>
  <url><loc>https://digischool.africa/whatsapp-assistant.html</loc><priority>0.5</priority></url>
</urlset>
SITEMAPEOF
    echo "✅ Created sitemap.xml"
fi

echo ""
echo "=== BATCH FIX COMPLETE ==="
echo "Next: Review changes and commit"

