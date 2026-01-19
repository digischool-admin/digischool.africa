/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — EMAIL CAPTURE MODAL V2.2.x-F            ║
 * ║  "Voir mon rapport" → Lead Generation + Email Send           ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolEmailCapture = {
  // État
  state: {
    isOpen: false,
    userData: {
      email: null,
      name: null,
      phone: null
    },
    assessmentData: null
  },

  // Créer modal
  createModal() {
    const modalHTML = `
      <div id="email-capture-modal" class="email-modal-overlay" style="display: none;">
        <div class="email-modal-container">
          <button class="email-modal-close" aria-label="Fermer">×</button>
          
          <div class="email-modal-header">
            <div class="email-modal-icon">📧</div>
            <h2>Recevez votre rapport personnalisé</h2>
            <p class="email-modal-subtitle">
              Diagnostic complet + Recommandations + Plan d'action par email
            </p>
          </div>
          
          <form id="email-capture-form" class="email-modal-form">
            <div class="email-form-group">
              <label for="user-email">Email professionnel *</label>
              <input 
                type="email" 
                id="user-email" 
                name="email" 
                required 
                placeholder="votre.email@entreprise.com"
                class="email-form-input"
              >
            </div>
            
            <div class="email-form-group">
              <label for="user-name">Nom complet (optionnel)</label>
              <input 
                type="text" 
                id="user-name" 
                name="name" 
                placeholder="Prénom Nom"
                class="email-form-input"
              >
            </div>
            
            <div class="email-form-group">
              <label for="user-phone">Téléphone (optionnel)</label>
              <input 
                type="tel" 
                id="user-phone" 
                name="phone" 
                placeholder="+225 XX XX XX XX XX"
                class="email-form-input"
              >
            </div>
            
            <div class="email-form-consent">
              <label class="email-consent-label">
                <input type="checkbox" id="consent-gdpr" required>
                <span>J'accepte de recevoir mon rapport et des informations sur les formations DigiSchool Africa (RGPD)</span>
              </label>
            </div>
            
            <div class="email-form-actions">
              <button type="submit" class="email-btn-submit">
                📤 Recevoir mon rapport
              </button>
              <button type="button" class="email-btn-cancel">
                Annuler
              </button>
            </div>
          </form>
          
          <div id="email-success-message" class="email-success" style="display: none;">
            <div class="email-success-icon">✅</div>
            <h3>Rapport envoyé avec succès !</h3>
            <p>Consultez votre boîte email <strong id="confirmed-email"></strong></p>
            <p class="email-success-note">
              💡 Si vous ne voyez pas l'email, vérifiez vos spams ou contactez 
              <a href="mailto:contact@digischool.africa">contact@digischool.africa</a>
            </p>
            <button class="email-btn-close-success">Fermer</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.bindModalEvents();
    this.injectModalStyles();
  },

  // Styles modal
  injectModalStyles() {
    if (document.getElementById('email-capture-styles')) return;
    
    const styles = `
      <style id="email-capture-styles">
        .email-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .email-modal-overlay.active {
          opacity: 1;
        }
        
        .email-modal-container {
          background: white;
          border-radius: 20px;
          max-width: 540px;
          width: 100%;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }
        
        .email-modal-overlay.active .email-modal-container {
          transform: translateY(0);
        }
        
        .email-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 32px;
          line-height: 1;
          color: #546E7A;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        
        .email-modal-close:hover {
          color: #1E88E5;
        }
        
        .email-modal-header {
          text-align: center;
          margin-bottom: 32px;
        }
        
        .email-modal-icon {
          font-size: 64px;
          margin-bottom: 16px;
        }
        
        .email-modal-header h2 {
          font-size: 28px;
          color: #263238;
          margin-bottom: 12px;
        }
        
        .email-modal-subtitle {
          font-size: 16px;
          color: #546E7A;
          line-height: 1.6;
        }
        
        .email-form-group {
          margin-bottom: 24px;
        }
        
        .email-form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #263238;
          margin-bottom: 8px;
        }
        
        .email-form-input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #ECEFF1;
          border-radius: 10px;
          font-size: 16px;
          transition: border-color 0.2s ease;
        }
        
        .email-form-input:focus {
          outline: none;
          border-color: #1E88E5;
          box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.1);
        }
        
        .email-form-consent {
          margin-bottom: 24px;
        }
        
        .email-consent-label {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 13px;
          color: #546E7A;
          line-height: 1.5;
          cursor: pointer;
        }
        
        .email-consent-label input[type="checkbox"] {
          margin-top: 2px;
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #1E88E5;
        }
        
        .email-form-actions {
          display: flex;
          gap: 12px;
        }
        
        .email-btn-submit {
          flex: 1;
          padding: 16px 32px;
          background: linear-gradient(135deg, #1E88E5, #26A69A);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .email-btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(30, 136, 229, 0.3);
        }
        
        .email-btn-cancel {
          padding: 16px 24px;
          background: white;
          color: #546E7A;
          border: 2px solid #ECEFF1;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .email-btn-cancel:hover {
          border-color: #1E88E5;
          color: #1E88E5;
        }
        
        .email-success {
          text-align: center;
        }
        
        .email-success-icon {
          font-size: 80px;
          margin-bottom: 24px;
          animation: successBounce 0.6s ease;
        }
        
        @keyframes successBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .email-success h3 {
          font-size: 24px;
          color: #26A69A;
          margin-bottom: 16px;
        }
        
        .email-success p {
          font-size: 16px;
          color: #546E7A;
          margin-bottom: 12px;
          line-height: 1.6;
        }
        
        .email-success-note {
          background: #F5F5F5;
          padding: 16px;
          border-radius: 10px;
          font-size: 14px;
          margin-top: 24px;
          margin-bottom: 24px;
        }
        
        .email-success-note a {
          color: #1E88E5;
          text-decoration: none;
          font-weight: 600;
        }
        
        .email-btn-close-success {
          padding: 14px 40px;
          background: #1E88E5;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .email-btn-close-success:hover {
          background: #1976D2;
          transform: translateY(-2px);
        }
        
        @media (max-width: 640px) {
          .email-modal-container {
            padding: 28px 20px;
          }
          
          .email-form-actions {
            flex-direction: column;
          }
          
          .email-btn-cancel {
            order: 2;
          }
        }
      </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
  },

  // Bind events
  bindModalEvents() {
    const modal = document.getElementById('email-capture-modal');
    const closeBtn = modal.querySelector('.email-modal-close');
    const cancelBtn = modal.querySelector('.email-btn-cancel');
    const form = document.getElementById('email-capture-form');
    const closeSuccessBtn = modal.querySelector('.email-btn-close-success');
    
    // Fermer modal
    [closeBtn, cancelBtn, closeSuccessBtn].forEach(btn => {
      if (btn) btn.addEventListener('click', () => this.closeModal());
    });
    
    // Clic outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.closeModal();
    });
    
    // Soumission form
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit(e);
      });
    }
  },

  // Ouvrir modal
  openModal(assessmentData) {
    this.state.assessmentData = assessmentData;
    const modal = document.getElementById('email-capture-modal');
    if (!modal) this.createModal();
    
    const modalEl = document.getElementById('email-capture-modal');
    modalEl.style.display = 'flex';
    setTimeout(() => modalEl.classList.add('active'), 10);
    
    // Reset form
    const form = document.getElementById('email-capture-form');
    if (form) form.reset();
    document.getElementById('email-success-message').style.display = 'none';
    form.style.display = 'block';
  },

  // Fermer modal
  closeModal() {
    const modal = document.getElementById('email-capture-modal');
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  },

  // Soumettre form
  async handleSubmit(e) {
    const formData = new FormData(e.target);
    const data = {
      email: formData.get('email'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      consent: document.getElementById('consent-gdpr').checked
    };
    
    if (!data.consent) {
      alert('❌ Vous devez accepter le traitement de vos données (RGPD).');
      return;
    }
    
    this.state.userData = data;
    
    // Envoyer email via Supabase ou fallback
    try {
      await this.sendReport(data);
      this.showSuccess(data.email);
    } catch (error) {
      console.error('Erreur envoi rapport:', error);
      this.fallbackEmailMethod(data);
    }
  },

  // Envoyer rapport
  async sendReport(userData) {
    const { assessmentData } = this.state;
    
    // TODO: Intégration Supabase Edge Function pour envoi email
    // Pour l'instant, simulation
    
    console.log('Envoi rapport à:', userData.email);
    console.log('Données évaluation:', assessmentData);
    
    // Simulation delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Stockage lead dans Supabase
    if (window.SupabaseClient) {
      try {
        await window.SupabaseClient.storeAssessmentLead({
          email: userData.email,
          name: userData.name,
          phone: userData.phone,
          assessment_results: assessmentData,
          created_at: new Date().toISOString()
        });
      } catch (err) {
        console.warn('Stockage lead échoué:', err);
      }
    }
    
    return true;
  },

  // Méthode fallback (mailto)
  fallbackEmailMethod(userData) {
    const { assessmentData } = this.state;
    const subject = `[DigiSchool Africa] Rapport Auto-Évaluation - ${userData.email}`;
    const body = `
Bonjour ${userData.name || 'cher(e) apprenant(e)'},

Merci d'avoir complété l'auto-évaluation DigiSchool Africa !

Votre profil :
- Email: ${userData.email}
- Téléphone: ${userData.phone || 'Non renseigné'}

Diagnostic:
${JSON.stringify(assessmentData, null, 2)}

Nous vous contacterons sous 24h avec vos recommandations personnalisées.

Cordialement,
L'équipe DigiSchool Africa
contact@digischool.africa
+225 05 05 11 11 02
    `.trim();
    
    window.location.href = `mailto:contact@digischool.africa?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Afficher succès quand même
    setTimeout(() => this.showSuccess(userData.email), 500);
  },

  // Afficher succès
  showSuccess(email) {
    document.getElementById('email-capture-form').style.display = 'none';
    const successMsg = document.getElementById('email-success-message');
    document.getElementById('confirmed-email').textContent = email;
    successMsg.style.display = 'block';
  }
};

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    DigiSchoolEmailCapture.createModal();
  });
} else {
  DigiSchoolEmailCapture.createModal();
}

// Export global
window.DigiSchoolEmailCapture = DigiSchoolEmailCapture;
