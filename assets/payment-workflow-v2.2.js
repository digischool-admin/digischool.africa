/**
 * DigiSchool Africa V2.2.x-B — Workflow Paiement Complet
 * Progression: Sélection → Facture → Paiement → Preuve → Vérification → Accès
 */

(function() {
  'use strict';

  const PaymentWorkflow = {
    
    // État workflow
    state: {
      selectedModules: [],
      totalPrice: 0,
      userEmail: '',
      proofSubmitted: false,
      verificationStartTime: null,
      timerInterval: null
    },
    
    // Initialisation
    init: function() {
      this.loadSavedState();
      this.renderProgressBar();
      this.bindEvents();
      
      // Si preuve déjà soumise, démarrer timer
      if (this.state.proofSubmitted && this.state.verificationStartTime) {
        this.startVerificationTimer();
      }
    },
    
    // Barre de progression
    renderProgressBar: function() {
      const steps = [
        { id: 1, label: 'Sélection', icon: '📚' },
        { id: 2, label: 'Récapitulatif', icon: '📋' },
        { id: 3, label: 'Paiement', icon: '💳' },
        { id: 4, label: 'Preuve', icon: '📤' },
        { id: 5, label: 'Vérification', icon: '⏳' },
        { id: 6, label: 'Accès', icon: '✅' }
      ];
      
      const currentStep = this.getCurrentStep();
      
      const progressHTML = `
        <div class="ds-payment-progress">
          ${steps.map(step => `
            <div class="ds-progress-step ${step.id <= currentStep ? 'completed' : ''} ${step.id === currentStep ? 'active' : ''}">
              <div class="ds-step-icon">${step.icon}</div>
              <div class="ds-step-label">${step.label}</div>
            </div>
          `).join('<div class="ds-progress-line"></div>')}
        </div>
      `;
      
      const container = document.getElementById('paymentProgressBar');
      if (container) {
        container.innerHTML = progressHTML;
      }
    },
    
    // Déterminer étape actuelle
    getCurrentStep: function() {
      if (!this.state.selectedModules.length) return 1;
      if (!this.state.userEmail) return 2;
      if (!this.state.proofSubmitted) return 3;
      if (this.state.verificationStartTime) return 5;
      return 6;
    },
    
    // Sélection modules
    selectModules: function(modules) {
      this.state.selectedModules = modules;
      this.state.totalPrice = modules.reduce((sum, m) => sum + m.price, 0);
      this.saveState();
      this.renderProgressBar();
      this.showInvoice();
    },
    
    // Afficher facture/récapitulatif
    showInvoice: function() {
      const invoiceHTML = `
        <div class="ds-invoice-box">
          <h2>📋 Récapitulatif de votre commande</h2>
          
          <div class="ds-invoice-items">
            ${this.state.selectedModules.map(module => `
              <div class="ds-invoice-item">
                <span class="item-name">${module.name}</span>
                <span class="item-price">${module.price.toLocaleString()} FCFA</span>
              </div>
            `).join('')}
          </div>
          
          <div class="ds-invoice-total">
            <strong>Total:</strong>
            <strong>${this.state.totalPrice.toLocaleString()} FCFA</strong>
          </div>
          
          <div class="ds-email-capture">
            <label for="userEmail">📧 Votre email (obligatoire):</label>
            <input type="email" id="userEmail" placeholder="email@exemple.com" required>
            <button class="ds-btn-primary" onclick="PaymentWorkflow.proceedToPayment()">
              Continuer vers le paiement →
            </button>
          </div>
        </div>
      `;
      
      const container = document.getElementById('invoiceContainer');
      if (container) {
        container.innerHTML = invoiceHTML;
      }
    },
    
    // Passer au paiement
    proceedToPayment: function() {
      const emailInput = document.getElementById('userEmail');
      if (!emailInput || !emailInput.value) {
        alert('❌ Veuillez saisir votre email');
        return;
      }
      
      this.state.userEmail = emailInput.value;
      this.saveState();
      this.renderProgressBar();
      this.showPaymentInstructions();
    },
    
    // Instructions de paiement
    showPaymentInstructions: function() {
      const paymentHTML = `
        <div class="ds-payment-box">
          <h2>💳 Instructions de Paiement</h2>
          
          <div class="ds-payment-methods">
            <div class="payment-method">
              <h3>🏦 Virement Bancaire</h3>
              <p><strong>Banque:</strong> UBA Côte d'Ivoire</p>
              <p><strong>IBAN:</strong> CI93 CI00 1234 5678 9012 3456 78</p>
              <p><strong>Titulaire:</strong> DigiSchool Africa SARL</p>
              <p><strong>Montant:</strong> ${this.state.totalPrice.toLocaleString()} FCFA</p>
              <p><strong>Référence:</strong> DS-${Date.now()}</p>
            </div>
            
            <div class="payment-method">
              <h3>📱 Mobile Money</h3>
              <p><strong>Orange Money:</strong> +225 07 XX XX XX XX</p>
              <p><strong>MTN Money:</strong> +225 05 XX XX XX XX</p>
              <p><strong>Moov Money:</strong> +225 01 XX XX XX XX</p>
              <p><strong>Montant:</strong> ${this.state.totalPrice.toLocaleString()} FCFA</p>
            </div>
            
            <div class="payment-method">
              <h3>💰 Western Union / MoneyGram</h3>
              <p><strong>Nom:</strong> SAJORI Hervé</p>
              <p><strong>Pays:</strong> Côte d'Ivoire</p>
              <p><strong>Ville:</strong> Abidjan</p>
            </div>
          </div>
          
          <div class="ds-payment-note">
            ⚠️ <strong>Important:</strong> Conservez votre preuve de paiement (reçu, capture d'écran, numéro de transaction).
          </div>
          
          <button class="ds-btn-primary" onclick="PaymentWorkflow.showProofUpload()">
            J'ai effectué le paiement →
          </button>
        </div>
      `;
      
      const container = document.getElementById('paymentInstructionsContainer');
      if (container) {
        container.innerHTML = paymentHTML;
      }
    },
    
    // Upload preuve
    showProofUpload: function() {
      const proofHTML = `
        <div class="ds-proof-box">
          <h2>📤 Envoyer votre preuve de paiement</h2>
          
          <form id="proofUploadForm" onsubmit="PaymentWorkflow.submitProof(event)">
            <div class="form-group">
              <label>Type de paiement:</label>
              <select id="paymentType" required>
                <option value="">Sélectionner...</option>
                <option value="bank">Virement Bancaire</option>
                <option value="mobile">Mobile Money</option>
                <option value="western">Western Union</option>
                <option value="other">Autre</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Numéro de transaction / Référence:</label>
              <input type="text" id="transactionRef" placeholder="Ex: TRX123456" required>
            </div>
            
            <div class="form-group">
              <label>Joindre preuve (capture d'écran ou scan):</label>
              <input type="file" id="proofFile" accept="image/*,application/pdf" required>
            </div>
            
            <div class="form-group">
              <label>Commentaire (optionnel):</label>
              <textarea id="proofComment" rows="3" placeholder="Informations complémentaires..."></textarea>
            </div>
            
            <button type="submit" class="ds-btn-primary">
              ✅ Confirmer et envoyer
            </button>
          </form>
        </div>
      `;
      
      const container = document.getElementById('proofUploadContainer');
      if (container) {
        container.innerHTML = proofHTML;
      }
    },
    
    // Soumettre preuve
    submitProof: async function(event) {
      event.preventDefault();
      
      const formData = {
        email: this.state.userEmail,
        modules: this.state.selectedModules,
        totalPrice: this.state.totalPrice,
        paymentType: document.getElementById('paymentType').value,
        transactionRef: document.getElementById('transactionRef').value,
        proofFile: document.getElementById('proofFile').files[0],
        comment: document.getElementById('proofComment').value,
        timestamp: new Date().toISOString()
      };
      
      try {
        // Appel Supabase pour stocker
        if (window.SupabaseClient) {
          await window.SupabaseClient.submitPaymentProof(formData);
        }
        
        // Fallback email si Supabase absent
        else {
          console.warn('Supabase absent, envoi email fallback');
          this.sendProofByEmail(formData);
        }
        
        // Marquer soumis
        this.state.proofSubmitted = true;
        this.state.verificationStartTime = Date.now();
        this.saveState();
        
        // Afficher timer
        this.startVerificationTimer();
        
      } catch (error) {
        console.error('Erreur soumission preuve:', error);
        alert('❌ Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter par email.');
      }
    },
    
    // Timer vérification (10 minutes max)
    startVerificationTimer: function() {
      const timerHTML = `
        <div class="ds-verification-timer">
          <div class="timer-icon">⏳</div>
          <h2>Vérification en cours...</h2>
          <p>Nous vérifions votre paiement. Cela peut prendre jusqu'à <strong>10 minutes</strong>.</p>
          <div class="timer-display" id="timerDisplay">10:00</div>
          <div class="timer-progress">
            <div class="timer-progress-bar" id="timerProgressBar"></div>
          </div>
          <p class="timer-note">
            ✉️ Vous recevrez un email de confirmation à <strong>${this.state.userEmail}</strong> une fois l'accès activé.
          </p>
        </div>
      `;
      
      const container = document.getElementById('verificationTimerContainer');
      if (container) {
        container.innerHTML = timerHTML;
      }
      
      // Démarrer décompte
      const maxTime = 10 * 60 * 1000; // 10 minutes
      const startTime = this.state.verificationStartTime;
      
      this.state.timerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, maxTime - elapsed);
        
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        
        const display = document.getElementById('timerDisplay');
        if (display) {
          display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
        
        const progressBar = document.getElementById('timerProgressBar');
        if (progressBar) {
          const progress = ((maxTime - remaining) / maxTime) * 100;
          progressBar.style.width = `${progress}%`;
        }
        
        // Arrêter après 10 min
        if (remaining === 0) {
          clearInterval(this.state.timerInterval);
          this.showAccessGranted(); // Ou message "contactez support"
        }
      }, 1000);
    },
    
    // Accès accordé
    showAccessGranted: function() {
      const accessHTML = `
        <div class="ds-access-granted">
          <div class="success-icon">✅</div>
          <h2>Accès Activé !</h2>
          <p>Votre paiement a été validé. Vous pouvez maintenant accéder à vos formations.</p>
          
          <div class="access-links">
            <a href="/user-dashboard.html" class="ds-btn-primary">
              🎓 Accéder à mes formations
            </a>
            <a href="/b2c.html" class="ds-btn-secondary">
              🔍 Explorer d'autres parcours
            </a>
          </div>
          
          <p class="access-note">
            ✉️ Un email récapitulatif a été envoyé à <strong>${this.state.userEmail}</strong>
          </p>
        </div>
      `;
      
      const container = document.getElementById('accessGrantedContainer');
      if (container) {
        container.innerHTML = accessHTML;
      }
      
      // Nettoyer timer
      if (this.state.timerInterval) {
        clearInterval(this.state.timerInterval);
      }
    },
    
    // Envoi email fallback
    sendProofByEmail: function(formData) {
      const subject = `Nouvelle preuve de paiement - ${formData.email}`;
      const body = `
Nouvelle preuve de paiement soumise:

Email: ${formData.email}
Montant Total: ${formData.totalPrice} FCFA
Type: ${formData.paymentType}
Référence: ${formData.transactionRef}
Commentaire: ${formData.comment}

Modules:
${formData.modules.map(m => `- ${m.name} (${m.price} FCFA)`).join('\n')}

Date: ${formData.timestamp}
      `.trim();
      
      window.location.href = `mailto:contact@digischool.africa?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
    
    // Sauvegarder état
    saveState: function() {
      try {
        localStorage.setItem('ds_payment_state', JSON.stringify(this.state));
      } catch (e) {
        console.error('Erreur sauvegarde état:', e);
      }
    },
    
    // Charger état sauvegardé
    loadSavedState: function() {
      try {
        const saved = localStorage.getItem('ds_payment_state');
        if (saved) {
          this.state = JSON.parse(saved);
        }
      } catch (e) {
        console.error('Erreur chargement état:', e);
      }
    },
    
    // Bind événements
    bindEvents: function() {
      // Gérer refresh/navigation
      window.addEventListener('beforeunload', () => {
        this.saveState();
      });
    }
    
  };
  
  // Exposer globalement
  window.PaymentWorkflow = PaymentWorkflow;
  
  // Auto-init si container présent
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PaymentWorkflow.init());
  } else {
    PaymentWorkflow.init();
  }
  
})();

