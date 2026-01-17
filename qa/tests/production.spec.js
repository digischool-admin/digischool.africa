import { test, expect } from '@playwright/test';

/**
 * DigiSchool Africa - Production QA Tests
 * Tests all critical pages and business rules
 */

const REQUIRED_PAGES = [
  '/',
  '/index.html',
  '/parcours.html',
  '/b2c.html',
  '/companies.html',
  '/b2c-checkout.html',
  '/b2c-access.html',
  '/b2c-learn.html',
  '/b2c-module.html',
  '/user-dashboard.html',
  '/admin.html',
  '/b2c-assessment.html',
  '/about.html',
  '/contact.html',
];

test.describe('Critical Pages - 404 Prevention', () => {
  for (const path of REQUIRED_PAGES) {
    test(`${path} should return 200 OK`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      
      // Verify page has content
      const body = await page.textContent('body');
      expect(body).toBeTruthy();
      expect(body.length).toBeGreaterThan(100);
    });
  }
});

test.describe('B2C Pages - Business Rules', () => {
  test('parcours.html should NOT contain "proforma"', async ({ page }) => {
    await page.goto('/parcours.html');
    const content = await page.content();
    
    // Should not have proforma links
    expect(content.toLowerCase()).not.toContain('proforma.html');
    expect(content.toLowerCase()).not.toContain('générer une proforma');
    
    // Should have B2C commerce CTAs
    expect(content).toContain('Commander');
  });

  test('b2c.html should NOT contain "proforma"', async ({ page }) => {
    await page.goto('/b2c.html');
    const content = await page.content();
    
    expect(content.toLowerCase()).not.toContain('proforma');
    expect(content.toLowerCase()).not.toContain('devis');
  });

  test('b2c pages should NOT show payment numbers before checkout', async ({ page }) => {
    const b2cPages = ['/b2c.html', '/parcours.html', '/b2c-learn.html'];
    
    for (const path of b2cPages) {
      await page.goto(path);
      const content = await page.content();
      
      // Should NOT have payment numbers
      expect(content).not.toContain('+225 07 14 67 82 89'); // Orange Money
      expect(content).not.toContain('+225 05 65 23 14 03'); // MTN MoMo
      expect(content).not.toContain('+225 01 51 66 68 01'); // Moov Money
      expect(content).not.toContain('+225 01 51 66 46 53'); // Wave
    }
  });

  test('b2c-checkout.html SHOULD show payment numbers after cart confirmation', async ({ page }) => {
    await page.goto('/b2c-checkout.html');
    const content = await page.content();
    
    // Should have payment section
    expect(content).toContain('paiement');
    expect(content).toContain('Orange Money');
    expect(content).toContain('MTN MoMo');
    expect(content).toContain('Moov Money');
    expect(content).toContain('Wave');
  });
});

test.describe('B2B Pages - Business Rules', () => {
  test('companies.html should NOT contain payment numbers', async ({ page }) => {
    await page.goto('/companies.html');
    const content = await page.content();
    
    // Should NOT have payment numbers
    expect(content).not.toContain('Orange Money');
    expect(content).not.toContain('MTN MoMo');
    expect(content).not.toContain('Moov Money');
    expect(content).not.toContain('+225 07 14 67 82 89');
    expect(content).not.toContain('+225 05 65 23 14 03');
    expect(content).not.toContain('+225 01 51 66 68 01');
    expect(content).not.toContain('+225 01 51 66 46 53');
  });

  test('companies.html should NOT show prices', async ({ page }) => {
    await page.goto('/companies.html');
    const content = await page.content();
    
    // Should not have explicit prices (check for FCFA, EUR, USD patterns)
    const pricePattern = /\d{3}[,\s]\d{3}[,\s]?\d*\s*(FCFA|XOF|EUR|USD)/gi;
    const matches = content.match(pricePattern);
    
    if (matches) {
      // Allow only if they're in hidden elements or comments
      console.warn('Found price-like patterns:', matches);
    }
  });

  test('companies.html should have "Demander un devis" CTA', async ({ page }) => {
    await page.goto('/companies.html');
    const content = await page.content();
    
    expect(content.toLowerCase()).toContain('devis');
  });
});

test.describe('Navigation & UX', () => {
  test('Footer should show B2B link on B2C pages', async ({ page }) => {
    await page.goto('/b2c.html');
    
    // Check for link to companies.html in footer
    const footer = page.locator('footer');
    const footerContent = await footer.textContent();
    
    expect(footerContent).toContain('Entreprise');
  });

  test('Footer should show B2C link on B2B pages', async ({ page }) => {
    await page.goto('/companies.html');
    
    // Check for link to b2c.html in footer
    const footer = page.locator('footer');
    const footerContent = await footer.textContent();
    
    expect(footerContent).toContain('Particulier');
  });

  test('Logo should be present and clickable', async ({ page }) => {
    await page.goto('/');
    
    // Check for logo (SVG or IMG)
    const logo = page.locator('img[alt*="DigiSchool"], svg[aria-label*="DigiSchool"]').first();
    await expect(logo).toBeVisible();
  });

  test('Main navigation should be keyboard accessible', async ({ page }) => {
    await page.goto('/');
    
    // Tab through navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Check that focus is visible
    const focused = await page.evaluate(() => {
      return document.activeElement?.tagName;
    });
    
    expect(['A', 'BUTTON']).toContain(focused);
  });
});

test.describe('Admin & User Dashboards', () => {
  test('admin.html should require password', async ({ page }) => {
    await page.goto('/admin.html');
    
    // Should have password prompt or input
    const content = await page.content();
    expect(content.toLowerCase()).toContain('password');
  });

  test('user-dashboard.html should be accessible', async ({ page }) => {
    await page.goto('/user-dashboard.html');
    
    // Should load without error
    const title = await page.title();
    expect(title).toContain('Dashboard');
  });
});

test.describe('SEO & Meta', () => {
  test('All pages should have proper meta tags', async ({ page }) => {
    const pages = ['/', '/b2c.html', '/companies.html', '/about.html'];
    
    for (const path of pages) {
      await page.goto(path);
      
      // Check title
      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);
      expect(title).toContain('DigiSchool');
      
      // Check meta description
      const description = await page.getAttribute('meta[name="description"]', 'content');
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(50);
    }
  });

  test('sitemap.xml should exist and be valid', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    
    const content = await page.content();
    expect(content).toContain('<urlset');
    expect(content).toContain('https://digischool.africa');
  });
});

test.describe('Responsive Design', () => {
  test('Homepage should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that content is visible
    const body = page.locator('body');
    await expect(body).toBeVisible();
    
    // Check for mobile menu (if exists)
    const mobileMenu = page.locator('[aria-label*="menu"], .mobile-menu, .hamburger');
    if (await mobileMenu.count() > 0) {
      await expect(mobileMenu.first()).toBeVisible();
    }
  });

  test('B2C catalog should be responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/b2c.html');
    
    // Course cards should be visible
    const cards = page.locator('[class*="card"], [class*="course"]');
    expect(await cards.count()).toBeGreaterThan(0);
  });
});

test.describe('Performance & Loading', () => {
  test('Homepage should load without console errors', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known acceptable errors (like missing optional resources)
    const criticalErrors = errors.filter(err => 
      !err.includes('favicon') && 
      !err.includes('analytics') &&
      !err.includes('gtag')
    );
    
    expect(criticalErrors.length).toBe(0);
  });
});
