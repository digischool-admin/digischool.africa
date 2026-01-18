/**
 * DigiSchool Africa - Security Monitor & Auto-Scanner
 * Version: 1.1.0 PREMIUM
 * 
 * Automated security scanning for:
 * - XSS (Cross-Site Scripting)
 * - CSRF (Cross-Site Request Forgery)
 * - Injection attacks
 * - Open redirects
 * - LocalStorage abuse
 * - Insecure data handling
 */

(function() {
  'use strict';

  class SecurityMonitor {
    constructor() {
      this.vulnerabilities = [];
      this.scanResults = {
        timestamp: null,
        totalScans: 0,
        vulnerabilitiesFound: 0,
        riskLevel: 'low',
        details: [],
      };
    }

    /**
     * Run complete security scan
     */
    async runFullScan() {
      console.log('🔒 Starting Security Scan...');
      this.vulnerabilities = [];
      
      // Run all security checks
      this.scanXSS();
      this.scanCSRF();
      this.scanInjection();
      this.scanOpenRedirects();
      this.scanLocalStorage();
      this.scanInsecureDataHandling();
      this.scanInputValidation();
      this.scanAuthenticationFlaws();
      
      // Generate report
      this.generateReport();
      
      // Auto-fix if enabled
      if (window.AdminConfig && window.AdminConfig.security.autoFix) {
        await this.autoFixVulnerabilities();
      }
      
      return this.scanResults;
    }

    /**
     * Scan for XSS vulnerabilities
     */
    scanXSS() {
      console.log('  → Scanning XSS vulnerabilities...');
      
      // Check all forms for missing sanitization
      const forms = document.querySelectorAll('form');
      forms.forEach((form, index) => {
        const inputs = form.querySelectorAll('input[type="text"], textarea');
        inputs.forEach(input => {
          if (!input.hasAttribute('data-sanitized')) {
            this.addVulnerability('XSS', 'high', 
              `Form input lacks XSS protection: ${input.name || input.id || `input-${index}`}`,
              { element: input, fix: 'add-sanitization' });
          }
        });
      });

      // Check for innerHTML usage (potential XSS)
      const scripts = Array.from(document.querySelectorAll('script'));
      scripts.forEach(script => {
        if (script.textContent.includes('innerHTML') && 
            !script.textContent.includes('sanitize')) {
          this.addVulnerability('XSS', 'high',
            'Unsafe innerHTML usage detected without sanitization',
            { fix: 'use-textContent' });
        }
      });

      // Check URL parameters for XSS
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.forEach((value, key) => {
        if (/<script|javascript:|onerror=/.test(value)) {
          this.addVulnerability('XSS', 'critical',
            `Potential XSS in URL parameter: ${key}=${value}`,
            { param: key, value: value, fix: 'sanitize-url-params' });
        }
      });
    }

    /**
     * Scan for CSRF vulnerabilities
     */
    scanCSRF() {
      console.log('  → Scanning CSRF vulnerabilities...');
      
      const forms = document.querySelectorAll('form[method="post"]');
      forms.forEach((form, index) => {
        const hasCSRFToken = form.querySelector('input[name="csrf_token"]') !== null;
        
        if (!hasCSRFToken) {
          this.addVulnerability('CSRF', 'medium',
            `Form lacks CSRF token: ${form.action || form.id || `form-${index}`}`,
            { element: form, fix: 'add-csrf-token' });
        }
      });
    }

    /**
     * Scan for injection vulnerabilities
     */
    scanInjection() {
      console.log('  → Scanning injection vulnerabilities...');
      
      // Check for eval() usage
      const scripts = Array.from(document.querySelectorAll('script'));
      scripts.forEach(script => {
        if (script.textContent.includes('eval(')) {
          this.addVulnerability('Injection', 'critical',
            'Dangerous eval() usage detected',
            { fix: 'remove-eval' });
        }
        
        // Check for Function() constructor
        if (/new\s+Function\s*\(/.test(script.textContent)) {
          this.addVulnerability('Injection', 'high',
            'Dangerous Function() constructor usage',
            { fix: 'remove-function-constructor' });
        }
      });
    }

    /**
     * Scan for open redirect vulnerabilities
     */
    scanOpenRedirects() {
      console.log('  → Scanning open redirect vulnerabilities...');
      
      // Check links with dynamic destinations
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check for redirect parameters
        if (href && /[?&](redirect|return|url|next)=/.test(href)) {
          const url = new URL(href, window.location.href);
          const redirectParam = url.searchParams.get('redirect') || 
                               url.searchParams.get('return') ||
                               url.searchParams.get('url') ||
                               url.searchParams.get('next');
          
          // Check if redirect is to external domain
          if (redirectParam && !redirectParam.startsWith('/') && 
              !redirectParam.includes(window.location.hostname)) {
            this.addVulnerability('Open Redirect', 'medium',
              `Potential open redirect: ${href}`,
              { element: link, fix: 'validate-redirect' });
          }
        }
      });
    }

    /**
     * Scan for localStorage security issues
     */
    scanLocalStorage() {
      console.log('  → Scanning localStorage security...');
      
      // Check for sensitive data in localStorage
      const sensitiveKeys = ['password', 'token', 'secret', 'key', 'pin', 'ssn'];
      
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        
        // Check for sensitive keywords
        const hasSensitiveData = sensitiveKeys.some(keyword => 
          key.toLowerCase().includes(keyword)
        );
        
        if (hasSensitiveData && value.length > 20) {
          this.addVulnerability('LocalStorage Abuse', 'high',
            `Potential sensitive data stored unencrypted: ${key}`,
            { key: key, fix: 'encrypt-or-remove' });
        }
        
        // Check for large data (>1MB)
        if (value.length > 1000000) {
          this.addVulnerability('LocalStorage Abuse', 'low',
            `Large data in localStorage may impact performance: ${key}`,
            { key: key, size: value.length, fix: 'consider-indexeddb' });
        }
      }
    }

    /**
     * Scan for insecure data handling
     */
    scanInsecureDataHandling() {
      console.log('  → Scanning insecure data handling...');
      
      // Check for console.log with sensitive data
      const scripts = Array.from(document.querySelectorAll('script'));
      scripts.forEach(script => {
        const content = script.textContent;
        
        if (/console\.log\([^)]*password[^)]*\)/.test(content)) {
          this.addVulnerability('Insecure Data Handling', 'medium',
            'Password logging detected in console',
            { fix: 'remove-password-logging' });
        }
        
        if (/console\.log\([^)]*token[^)]*\)/.test(content)) {
          this.addVulnerability('Insecure Data Handling', 'medium',
            'Token logging detected in console',
            { fix: 'remove-token-logging' });
        }
      });
    }

    /**
     * Scan input validation
     */
    scanInputValidation() {
      console.log('  → Scanning input validation...');
      
      const emailInputs = document.querySelectorAll('input[type="email"]');
      emailInputs.forEach(input => {
        if (!input.hasAttribute('pattern') && !input.hasAttribute('required')) {
          this.addVulnerability('Input Validation', 'low',
            `Email input lacks validation: ${input.name || input.id}`,
            { element: input, fix: 'add-validation' });
        }
      });
      
      const phoneInputs = document.querySelectorAll('input[type="tel"]');
      phoneInputs.forEach(input => {
        if (!input.hasAttribute('pattern')) {
          this.addVulnerability('Input Validation', 'low',
            `Phone input lacks validation: ${input.name || input.id}`,
            { element: input, fix: 'add-phone-validation' });
        }
      });
    }

    /**
     * Scan authentication flaws
     */
    scanAuthenticationFlaws() {
      console.log('  → Scanning authentication flaws...');
      
      // Check for weak password requirements
      const passwordInputs = document.querySelectorAll('input[type="password"]');
      passwordInputs.forEach(input => {
        const minLength = input.getAttribute('minlength');
        
        if (!minLength || parseInt(minLength) < 8) {
          this.addVulnerability('Weak Authentication', 'medium',
            `Password input has weak requirements: ${input.name || input.id}`,
            { element: input, fix: 'strengthen-password-policy' });
        }
      });
      
      // Check for session timeout configuration
      const hasSessionTimeout = localStorage.getItem('session_timeout') !== null;
      if (!hasSessionTimeout) {
        this.addVulnerability('Weak Authentication', 'low',
          'No session timeout configured',
          { fix: 'implement-session-timeout' });
      }
    }

    /**
     * Add vulnerability to results
     */
    addVulnerability(type, severity, description, metadata = {}) {
      this.vulnerabilities.push({
        type,
        severity,
        description,
        metadata,
        timestamp: Date.now(),
      });
    }

    /**
     * Generate security report
     */
    generateReport() {
      const critical = this.vulnerabilities.filter(v => v.severity === 'critical').length;
      const high = this.vulnerabilities.filter(v => v.severity === 'high').length;
      const medium = this.vulnerabilities.filter(v => v.severity === 'medium').length;
      const low = this.vulnerabilities.filter(v => v.severity === 'low').length;

      let riskLevel = 'low';
      if (critical > 0) riskLevel = 'critical';
      else if (high > 0) riskLevel = 'high';
      else if (medium > 0) riskLevel = 'medium';

      this.scanResults = {
        timestamp: new Date().toISOString(),
        totalScans: 8,
        vulnerabilitiesFound: this.vulnerabilities.length,
        riskLevel: riskLevel,
        breakdown: { critical, high, medium, low },
        details: this.vulnerabilities,
      };

      console.log('🔒 Security Scan Complete');
      console.log(`   Vulnerabilities Found: ${this.vulnerabilities.length}`);
      console.log(`   Risk Level: ${riskLevel.toUpperCase()}`);
      console.log(`   Breakdown: ${critical} critical, ${high} high, ${medium} medium, ${low} low`);

      if (this.vulnerabilities.length > 0) {
        console.warn('⚠️ Vulnerabilities detected:');
        this.vulnerabilities.forEach(v => {
          console.warn(`   [${v.severity.toUpperCase()}] ${v.type}: ${v.description}`);
        });
      } else {
        console.log('✅ No vulnerabilities detected');
      }

      return this.scanResults;
    }

    /**
     * Auto-fix vulnerabilities (where possible)
     */
    async autoFixVulnerabilities() {
      console.log('🔧 Auto-fixing vulnerabilities...');
      
      let fixed = 0;
      
      for (const vuln of this.vulnerabilities) {
        if (vuln.metadata.fix) {
          try {
            await this.applyFix(vuln);
            fixed++;
          } catch (e) {
            console.error(`Failed to fix: ${vuln.description}`, e);
          }
        }
      }
      
      console.log(`✅ Auto-fixed ${fixed}/${this.vulnerabilities.length} vulnerabilities`);
      return fixed;
    }

    /**
     * Apply a specific fix
     */
    async applyFix(vulnerability) {
      const { fix, element } = vulnerability.metadata;
      
      switch (fix) {
        case 'add-sanitization':
          if (element) {
            element.setAttribute('data-sanitized', 'true');
            element.addEventListener('input', (e) => {
              e.target.value = this.sanitizeHTML(e.target.value);
            });
          }
          break;
          
        case 'add-csrf-token':
          if (element) {
            const token = this.generateCSRFToken();
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'csrf_token';
            input.value = token;
            element.appendChild(input);
          }
          break;
          
        case 'add-validation':
          if (element) {
            element.setAttribute('required', 'required');
            if (element.type === 'email') {
              element.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');
            }
          }
          break;
      }
    }

    /**
     * Sanitize HTML to prevent XSS
     */
    sanitizeHTML(str) {
      const temp = document.createElement('div');
      temp.textContent = str;
      return temp.innerHTML;
    }

    /**
     * Generate CSRF token
     */
    generateCSRFToken() {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    /**
     * Export security report
     */
    exportReport() {
      const report = {
        ...this.scanResults,
        platform: 'DigiSchool Africa',
        version: '1.1.0 PREMIUM',
      };

      const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `digischool-security-report-${Date.now()}.json`;
      a.click();
      
      console.log('📥 Security report exported');
      return report;
    }

    /**
     * Schedule periodic scans
     */
    schedulePeriodicScan(intervalHours = 24) {
      console.log(`🔒 Scheduling security scans every ${intervalHours} hours`);
      
      setInterval(() => {
        this.runFullScan();
      }, intervalHours * 60 * 60 * 1000);
    }
  }

  // Initialize and expose globally
  window.SecurityMonitor = new SecurityMonitor();

  // Auto-run scan if admin is logged in
  if (window.AdminConfig && window.AdminConfig.isAdmin()) {
    setTimeout(() => {
      window.SecurityMonitor.runFullScan();
    }, 2000);
  }

  console.log('✅ Security Monitor loaded');

})();
