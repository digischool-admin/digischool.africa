/**
 * DigiSchool Africa - Partner Certifications Mapping
 * Version: 1.0
 * Aligné avec les parcours DigiSchool et le LMS
 */

(function() {
  'use strict';

  // Mapping des certifications partenaires par parcours
  window.PartnerCertifications = {
    'leadership-management': [
      { name: 'Certified Manager (CM)', provider: 'IIBA', level: 'Fondation' },
      { name: 'PMP® - Project Management Professional', provider: 'PMI', level: 'Maîtrise' },
      { name: 'Professional Scrum Master™', provider: 'Scrum.org', level: 'Maîtrise' }
    ],
    
    'excel-avance': [
      { name: 'Microsoft Office Specialist (MOS) - Excel Expert', provider: 'Microsoft', level: 'Maîtrise' },
      { name: 'Data Analyst Associate', provider: 'Microsoft', level: 'Maîtrise' }
    ],
    
    'marketing-digital': [
      { name: 'Google Analytics Individual Qualification', provider: 'Google', level: 'Fondation' },
      { name: 'Facebook Certified Marketing Science Professional', provider: 'Meta', level: 'Maîtrise' },
      { name: 'HubSpot Content Marketing Certification', provider: 'HubSpot', level: 'Maîtrise' }
    ],
    
    'presentation-storytelling': [
      { name: 'Microsoft Office Specialist (MOS) - PowerPoint', provider: 'Microsoft', level: 'Fondation' },
      { name: 'Certified Presentation Specialist', provider: 'Presentation Guild', level: 'Maîtrise' }
    ],
    
    'strategie-digitale': [
      { name: 'Digital Transformation Leader', provider: 'MIT Sloan', level: 'Leadership' },
      { name: 'Certified Digital Marketing Professional', provider: 'DMI', level: 'Maîtrise' },
      { name: 'Innovation Management Certification', provider: 'TRIZ', level: 'Maîtrise' }
    ],
    
    'finance-gestion': [
      { name: 'Certified Management Accountant (CMA)', provider: 'IMA', level: 'Maîtrise' },
      { name: 'Financial Modeling & Valuation Analyst (FMVA)', provider: 'CFI', level: 'Maîtrise' }
    ],
    
    'rh-gestion-talents': [
      { name: 'SHRM Certified Professional (SHRM-CP)', provider: 'SHRM', level: 'Fondation' },
      { name: 'Professional in Human Resources (PHR)', provider: 'HRCI', level: 'Maîtrise' }
    ],
    
    'data-analytics': [
      { name: 'Microsoft Certified: Data Analyst Associate', provider: 'Microsoft', level: 'Maîtrise' },
      { name: 'Google Data Analytics Professional Certificate', provider: 'Google', level: 'Fondation' },
      { name: 'Tableau Desktop Specialist', provider: 'Tableau', level: 'Maîtrise' }
    ],
    
    'ia-generative': [
      { name: 'AI for Everyone', provider: 'DeepLearning.AI', level: 'Fondation' },
      { name: 'Generative AI Fundamentals', provider: 'Google Cloud', level: 'Fondation' },
      { name: 'Prompt Engineering Specialization', provider: 'Vanderbilt University', level: 'Maîtrise' }
    ],
    
    'gestion-projet': [
      { name: 'PMP® - Project Management Professional', provider: 'PMI', level: 'Maîtrise' },
      { name: 'PRINCE2® Practitioner', provider: 'AXELOS', level: 'Maîtrise' },
      { name: 'Certified ScrumMaster® (CSM®)', provider: 'Scrum Alliance', level: 'Fondation' }
    ]
  };

  // Helper function to get certifications for a course
  window.getCertifications = function(courseId) {
    return window.PartnerCertifications[courseId] || [];
  };

  // Helper function to render certifications HTML
  window.renderCertifications = function(courseId) {
    const certs = getCertifications(courseId);
    
    if (!certs || certs.length === 0) {
      return '';
    }

    const levelColors = {
      'Fondation': '#26A69A',
      'Maîtrise': '#1E88E5',
      'Leadership': '#7E57C2'
    };

    const certsHTML = certs.map(cert => `
      <div class="cert-item">
        <div class="cert-badge" style="background: ${levelColors[cert.level] || '#546E7A'}20; color: ${levelColors[cert.level] || '#546E7A'};">
          ${cert.level}
        </div>
        <div class="cert-info">
          <div class="cert-name">${cert.name}</div>
          <div class="cert-provider">${cert.provider}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="partner-certifications">
        <div class="cert-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-right:6px;">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <span style="font-weight: 700; color: #263238;">Prépare aux certifications</span>
        </div>
        <div class="cert-disclaimer">
          <span style="font-size: 12px; color: #546E7A; font-style: italic;">
            Certifications tierces optionnelles • Inscriptions indépendantes
          </span>
        </div>
        <div class="cert-list">
          ${certsHTML}
        </div>
      </div>
    `;
  };

})();
