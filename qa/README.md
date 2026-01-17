# 🧪 QA Automation - How to Run

## Quick Start

```bash
cd qa
npm install
npx playwright install chromium
npm run test:prod
```

## Test Commands

- `npm test` - Run tests against localhost
- `npm run test:prod` - Run tests against production (https://digischool.africa)
- `npm run test:headed` - Run with browser visible
- `npm run test:report` - View last test report

## What Gets Tested

### 1. 404 Prevention (14 tests)
- All required pages return 200 status
- No missing pages or broken routes

### 2. B2C Business Rules (4 tests)
- No "proforma" references on B2C pages
- No payment numbers before checkout
- Payment numbers ONLY on checkout after cart
- Commerce CTAs present

### 3. B2B Business Rules (3 tests)
- No payment numbers anywhere
- No prices displayed
- "Demander un devis" CTA present

### 4. Navigation & UX (4 tests)
- Footer cross-links (B2C ↔ B2B)
- Logo present and clickable
- Keyboard accessibility
- Mobile menu works

### 5. Admin & Dashboards (2 tests)
- Admin requires password
- User dashboard accessible

### 6. SEO & Meta (2 tests)
- All pages have proper titles & descriptions
- Sitemap exists and is valid

### 7. Responsive Design (2 tests)
- Mobile responsive (375px)
- Tablet responsive (768px)

### 8. Performance (1 test)
- No console errors on load

## GitHub Actions Integration

Tests run automatically:
- ✅ On every push to main
- ✅ On every pull request
- ✅ Daily at 9:00 AM UTC (10:00 AM WAT)
- ✅ Manual trigger via GitHub UI

## View Results

### Locally
After running tests:
```bash
npm run test:report
```

### GitHub Actions
1. Go to repository → Actions tab
2. Click on latest workflow run
3. Download "playwright-report" artifact
4. Extract and open index.html

## Troubleshooting

### Tests fail locally but pass in CI
- Clear browser cache
- Update Playwright: `npx playwright install chromium --force`

### Tests fail on specific pages
- Check if page exists: `curl -I https://digischool.africa/[page]`
- Verify no 404 errors
- Check browser console for errors

### GitHub Actions workflow not running
- Check `.github/workflows/qa.yml` exists
- Verify workflow permissions in Settings → Actions
- Try manual trigger: Actions → QA workflow → Run workflow

## Alert System

When tests fail in scheduled runs (daily), the system:
1. Creates a GitHub Issue
2. Tags with: `automated-qa`, `production`, `bug`
3. Includes link to test artifacts
4. Adds summary of failures

## QA Report Files

- `playwright-report/` - HTML visual report
- `test-results.json` - Machine-readable results
- Screenshots on failure (in report)

## Critical Tests (Must Pass)

These tests are critical for production:

1. **All pages return 200** - Prevents 404 errors
2. **No proforma on B2C** - Business rule compliance
3. **Payment gating** - Security & UX requirement
4. **B2B no prices** - Business rule compliance
5. **Admin password** - Security requirement

If any of these fail, DO NOT deploy until fixed.

## Test Maintenance

To add new tests, edit: `qa/tests/production.spec.js`

Example test:
```javascript
test('New feature works', async ({ page }) => {
  await page.goto('/new-page.html');
  await expect(page.locator('.feature')).toBeVisible();
});
```

## Support

For issues with QA automation:
1. Check GitHub Actions logs
2. Review test artifacts
3. Run tests locally to reproduce
4. Check if production site is accessible

---

**Last Updated:** January 17, 2026  
**Test Suite Version:** 1.0.0  
**Coverage:** 35+ tests across 8 categories
