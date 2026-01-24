/**
 * DigiSchool Africa - Comprehensive Partners Section V2.0
 * Global standards & professional certifications
 */

(function() {
  'use strict';

  const PARTNERS = [
    { name: 'ISO', url: 'https://www.iso.org', category: 'standards' },
    { name: 'AXELOS', url: 'https://www.axelos.com', category: 'project' },
    { name: 'PeopleCert', url: 'https://www.peoplecert.org', category: 'certification' },
    { name: 'The Open Group', url: 'https://www.opengroup.org', category: 'architecture' },
    { name: 'OMG', url: 'https://www.omg.org', category: 'standards' },
    { name: 'IASSC', url: 'https://orders.iassc.org', category: 'quality' },
    { name: 'ASQ', url: 'https://asq.org', category: 'quality' },
    { name: 'ASCM', url: 'https://www.ascm.org', category: 'supply' },
    { name: 'APQC', url: 'https://www.apqc.org', category: 'process' },
    { name: 'AMA', url: 'https://www.ama.org', category: 'marketing' },
    { name: 'ESOMAR', url: 'https://www.esomar.org', category: 'research' },
    { name: 'SHRM', url: 'https://www.shrm.org', category: 'hr' },
    { name: 'CIPD', url: 'https://www.cipd.org', category: 'hr' },
    { name: 'CIPS', url: 'https://www.cips.org', category: 'procurement' },
    { name: 'CIM', url: 'https://www.cim.co.uk', category: 'marketing' },
    { name: 'CMI', url: 'https://www.managers.org.uk', category: 'management' },
    { name: 'IMA', url: 'https://www.imanet.org', category: 'accounting' },
    { name: 'IFAC', url: 'https://www.ifac.org', category: 'accounting' },
    { name: 'IAASB', url: 'https://www.iaasb.org', category: 'audit' },
    { name: 'AICPA-CIMA', url: 'https://www.aicpa-cima.com', category: 'accounting' },
    { name: 'CFA Institute', url: 'https://www.cfainstitute.org', category: 'finance' },
    { name: 'GARP', url: 'https://www.garp.org', category: 'risk' },
    { name: 'IIA', url: 'https://www.theiia.org', category: 'audit' },
    { name: 'ISACA', url: 'https://www.isaca.org', category: 'security' },
    { name: 'IEEE Standards', url: 'https://standards.ieee.org', category: 'tech' },
    { name: 'NIST', url: 'https://www.nist.gov', category: 'security' },
    { name: 'ICC', url: 'https://iccwbo.org', category: 'commerce' },
    { name: 'IRM', url: 'https://www.theirm.org', category: 'risk' },
    { name: 'ABPMP', url: 'https://www.abpmp.org', category: 'process' },
    { name: 'PROSCI', url: 'https://www.prosci.com', category: 'change' },
    { name: 'DAMA', url: 'https://www.dama.org', category: 'data' },
    { name: 'Google Cloud', url: 'https://cloud.google.com', category: 'cloud' },
    { name: 'AWS', url: 'https://aws.amazon.com', category: 'cloud' },
    { name: 'DMI', url: 'https://digitalmarketinginstitute.com', category: 'digital' },
    { name: 'Six Sigma', url: 'https://www.sixsigmacouncil.org', category: 'quality' }
  ];

  function createPartnerBadge(partner) {
    return `
      <a href="${partner.url}" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="ds-partner-badge"
         aria-label="${partner.name}"
         title="${partner.name}">
        <span>${partner.name}</span>
      </a>
    `;
  }

  function createPartnersSection() {
    const html = `
      <section class="ds-partners-section">
        <div class="ds-partners-container">
          <h3 class="ds-partners-title">Références & Standards Professionnels</h3>
          <p class="ds-partners-subtitle">
            Nos contenus s'inspirent des meilleures pratiques internationales
          </p>
          
          <div class="ds-partners-grid">
            ${PARTNERS.map(partner => createPartnerBadge(partner)).join('\n')}
          </div>
          
          <p class="ds-partners-disclaimer">
            <strong>Note</strong> : Ces références représentent des sources académiques et professionnelles 
            utilisées dans nos contenus pédagogiques. DigiSchool Africa n'est pas affilié à ces organismes 
            sauf mention explicite d'un accord formel.
          </p>
        </div>
      </section>
    `;

    const styles = `
      <style>
        .ds-partners-section {
          background: linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%);
          padding: 64px 32px;
          margin-top: 80px;
        }
        
        .ds-partners-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .ds-partners-title {
          text-align: center;
          font-size: 32px;
          font-weight: 700;
          color: #0B1B3A;
          margin-bottom: 12px;
        }
        
        .ds-partners-subtitle {
          text-align: center;
          font-size: 16px;
          color: #546E7A;
          margin-bottom: 48px;
        }
        
        .ds-partners-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }
        
        .ds-partner-badge {
          display: inline-flex;
          align-items: center;
          padding: 12px 20px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 24px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        
        .ds-partner-badge:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(30, 136, 229, 0.15);
          border-color: #1E88E5;
        }
        
        .ds-partner-badge span {
          font-size: 14px;
          font-weight: 600;
          color: #37474F;
        }
        
        .ds-partner-badge:hover span {
          color: #1E88E5;
        }
        
        .ds-partners-disclaimer {
          text-align: center;
          font-size: 13px;
          color: #7E57C2;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .ds-partners-disclaimer strong {
          font-weight: 700;
        }
        
        @media (max-width: 768px) {
          .ds-partners-section {
            padding: 48px 20px;
          }
          
          .ds-partners-title {
            font-size: 24px;
          }
          
          .ds-partners-grid {
            gap: 12px;
          }
          
          .ds-partner-badge {
            padding: 10px 16px;
            font-size: 13px;
          }
        }
      </style>
    `;

    return styles + html;
  }

  // Inject partners section before footer
  function injectPartnersSection() {
    // Remove any existing partner sections
    document.querySelectorAll('.ds-partners-section').forEach(el => el.remove());

    const footer = document.querySelector('footer, .ds-global-footer, #ds-main-footer');
    if (footer) {
      footer.insertAdjacentHTML('beforebegin', createPartnersSection());
    }
  }

  // Auto-inject on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectPartnersSection);
  } else {
    injectPartnersSection();
  }

  // Export for manual use
  window.DSPartnersSection = {
    inject: injectPartnersSection,
    partners: PARTNERS
  };

})();
