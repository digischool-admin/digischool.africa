/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — CHATBOT MANAGER V2.2.x-E                 ║
 * ║  Minimisé par défaut | Non-bloquant | Auto-hide inactivité    ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolChatbot = {
  state: {
    isOpen: false,
    isMinimized: true,
    lastInteraction: Date.now(),
    autoHideTimeout: null
  },

  config: {
    autoHideDelay: 30000, // 30 secondes d'inactivité
    animationDuration: 300,
    assessmentPage: false
  },

  init() {
    this.detectPage();
    this.injectChatbotHTML();
    this.bindEvents();
    this.startAutoHideMonitor();
  },

  detectPage() {
    // Détecter si on est sur auto-évaluation
    this.config.assessmentPage = 
      window.location.pathname.includes('assessment') ||
      document.body.getAttribute('data-page') === 'assessment';
  },

  injectChatbotHTML() {
    const chatbotHTML = `
      <div class="ds-chatbot-container ${this.config.assessmentPage ? 'assessment-mode' : ''}" id="ds-chatbot">
        <!-- Bouton minimisé (par défaut visible) -->
        <button class="ds-chatbot-toggle-btn" id="ds-chatbot-toggle" aria-label="Ouvrir le chatbot">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.76 2.5 15.4 3.37 16.8L2.05 21.95L7.2 20.63C8.6 21.5 10.24 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.45 20 9 19.57 7.75 18.83L7.35 18.6L4.25 19.4L5.05 16.3L4.82 15.9C4.08 14.65 3.65 13.2 3.65 11.65C3.65 7.05 7.4 3.3 12 3.3C16.6 3.3 20.35 7.05 20.35 11.65C20.35 16.25 16.6 20 12 20Z" fill="currentColor"/>
          </svg>
          <span class="pulse-indicator"></span>
        </button>

        <!-- Fenêtre chatbot (cachée par défaut) -->
        <div class="ds-chatbot-window" id="ds-chatbot-window" style="display: none;">
          <div class="ds-chatbot-header">
            <div class="ds-chatbot-header-content">
              <div class="ds-chatbot-avatar">💬</div>
              <div class="ds-chatbot-header-text">
                <h4>Assistant DigiSchool</h4>
                <p class="status-text">En ligne</p>
              </div>
            </div>
            <button class="ds-chatbot-minimize-btn" id="ds-chatbot-minimize" aria-label="Minimiser">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <div class="ds-chatbot-messages" id="ds-chatbot-messages">
            <div class="ds-chatbot-message bot-message">
              <div class="message-content">
                👋 Bonjour ! Je suis votre assistant DigiSchool Africa.<br><br>
                Comment puis-je vous aider aujourd'hui ?<br><br>
                • Informations sur les formations<br>
                • Conseils d'orientation<br>
                • Modalités d'inscription<br>
                • Questions générales
              </div>
            </div>
          </div>

          <div class="ds-chatbot-input-area">
            <input 
              type="text" 
              class="ds-chatbot-input" 
              id="ds-chatbot-input" 
              placeholder="Écrivez votre message..."
              aria-label="Message chatbot"
            />
            <button class="ds-chatbot-send-btn" id="ds-chatbot-send" aria-label="Envoyer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10L18 2L10 18L8 10L2 10Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          <div class="ds-chatbot-footer">
            <p>Propulsé par DigiSchool Africa</p>
          </div>
        </div>
      </div>

      <style>
        /* Chatbot Container */
        .ds-chatbot-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: var(--font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
        }

        /* Mode Assessment: Plus petit, moins intrusif */
        .ds-chatbot-container.assessment-mode {
          bottom: 20px;
          right: 20px;
          transform: scale(0.9);
          opacity: 0.85;
        }

        .ds-chatbot-container.assessment-mode:hover {
          transform: scale(1);
          opacity: 1;
        }

        /* Toggle Button (minimisé) */
        .ds-chatbot-toggle-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1E88E5 0%, #26A69A 100%);
          border: none;
          color: white;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(30, 136, 229, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ds-chatbot-toggle-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(30, 136, 229, 0.4);
        }

        .ds-chatbot-toggle-btn svg {
          width: 28px;
          height: 28px;
        }

        /* Pulse Indicator */
        .pulse-indicator {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 14px;
          height: 14px;
          background: #4CAF50;
          border-radius: 50%;
          border: 2px solid white;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }

        /* Chatbot Window */
        .ds-chatbot-window {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 360px;
          max-width: calc(100vw - 48px);
          height: 500px;
          max-height: calc(100vh - 150px);
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Header */
        .ds-chatbot-header {
          background: linear-gradient(135deg, #1E88E5 0%, #26A69A 100%);
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ds-chatbot-header-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ds-chatbot-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .ds-chatbot-header-text h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .ds-chatbot-header-text .status-text {
          margin: 0;
          font-size: 12px;
          opacity: 0.9;
        }

        .ds-chatbot-minimize-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ds-chatbot-minimize-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Messages Area */
        .ds-chatbot-messages {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          background: #F5F5F5;
        }

        .ds-chatbot-message {
          margin-bottom: 12px;
          display: flex;
        }

        .bot-message .message-content {
          background: white;
          color: #263238;
          padding: 12px 16px;
          border-radius: 12px 12px 12px 4px;
          max-width: 80%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          line-height: 1.5;
          font-size: 14px;
        }

        .user-message {
          justify-content: flex-end;
        }

        .user-message .message-content {
          background: linear-gradient(135deg, #1E88E5 0%, #26A69A 100%);
          color: white;
          padding: 12px 16px;
          border-radius: 12px 12px 4px 12px;
          max-width: 80%;
          line-height: 1.5;
          font-size: 14px;
        }

        /* Input Area */
        .ds-chatbot-input-area {
          padding: 12px;
          background: white;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 8px;
        }

        .ds-chatbot-input {
          flex: 1;
          padding: 10px 16px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 24px;
          font-size: 14px;
          outline: none;
          transition: border 0.2s;
        }

        .ds-chatbot-input:focus {
          border-color: #1E88E5;
        }

        .ds-chatbot-send-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1E88E5 0%, #26A69A 100%);
          border: none;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ds-chatbot-send-btn:hover {
          transform: scale(1.05);
        }

        /* Footer */
        .ds-chatbot-footer {
          padding: 8px;
          text-align: center;
          font-size: 11px;
          color: #999;
          background: white;
        }

        .ds-chatbot-footer p {
          margin: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .ds-chatbot-container {
            bottom: 16px;
            right: 16px;
          }

          .ds-chatbot-window {
            width: calc(100vw - 32px);
            height: calc(100vh - 120px);
            bottom: 70px;
          }

          .ds-chatbot-toggle-btn {
            width: 56px;
            height: 56px;
          }
        }
      </style>
    `;

    // Inject at end of body
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  },

  bindEvents() {
    const toggleBtn = document.getElementById('ds-chatbot-toggle');
    const minimizeBtn = document.getElementById('ds-chatbot-minimize');
    const sendBtn = document.getElementById('ds-chatbot-send');
    const input = document.getElementById('ds-chatbot-input');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggleChatbot());
    }

    if (minimizeBtn) {
      minimizeBtn.addEventListener('click', () => this.minimizeChatbot());
    }

    if (sendBtn) {
      sendBtn.addEventListener('click', () => this.sendMessage());
    }

    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });

      input.addEventListener('focus', () => this.recordInteraction());
      input.addEventListener('input', () => this.recordInteraction());
    }
  },

  toggleChatbot() {
    const window = document.getElementById('ds-chatbot-window');
    if (!window) return;

    if (this.state.isOpen) {
      this.minimizeChatbot();
    } else {
      window.style.display = 'flex';
      this.state.isOpen = true;
      this.state.isMinimized = false;
      this.recordInteraction();
      
      // Focus input
      setTimeout(() => {
        const input = document.getElementById('ds-chatbot-input');
        if (input) input.focus();
      }, 100);
    }
  },

  minimizeChatbot() {
    const window = document.getElementById('ds-chatbot-window');
    if (!window) return;

    window.style.display = 'none';
    this.state.isOpen = false;
    this.state.isMinimized = true;
  },

  sendMessage() {
    const input = document.getElementById('ds-chatbot-input');
    const messagesContainer = document.getElementById('ds-chatbot-messages');
    
    if (!input || !messagesContainer) return;

    const message = input.value.trim();
    if (!message) return;

    // Add user message
    const userMessageHTML = `
      <div class="ds-chatbot-message user-message">
        <div class="message-content">${this.escapeHTML(message)}</div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', userMessageHTML);

    // Clear input
    input.value = '';

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
      const botResponse = this.generateResponse(message);
      const botMessageHTML = `
        <div class="ds-chatbot-message bot-message">
          <div class="message-content">${botResponse}</div>
        </div>
      `;
      messagesContainer.insertAdjacentHTML('beforeend', botMessageHTML);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);

    this.recordInteraction();
  },

  generateResponse(message) {
    message = message.toLowerCase();

    if (message.includes('formation') || message.includes('cours')) {
      return 'Nous proposons 9 formations certifiantes premium :<br>• PMP Gestion de Projet<br>• Data Analytics<br>• Excel Avancé<br>• Power BI<br>• Leadership<br>• Marketing Digital<br>Et plus encore ! <a href="/b2c.html">Voir le catalogue →</a>';
    }

    if (message.includes('prix') || message.includes('coût') || message.includes('tarif')) {
      return 'Nos formations sont proposées entre 50,000 et 150,000 FCFA selon le parcours. Contactez-nous pour un devis personnalisé : <a href="mailto:contact@digischool.africa">contact@digischool.africa</a>';
    }

    if (message.includes('durée') || message.includes('temps')) {
      return 'Nos formations durent entre 4 et 10 jours selon le programme. Vous avancez à votre rythme avec un accompagnement personnalisé.';
    }

    if (message.includes('certificat') || message.includes('certification')) {
      return 'Oui ! Toutes nos formations délivrent un certificat DigiSchool Africa reconnu. Certaines préparent aussi à des certifications internationales (PMP, Microsoft, etc.).';
    }

    return 'Merci pour votre message ! Pour une réponse personnalisée, contactez-nous à <a href="mailto:contact@digischool.africa">contact@digischool.africa</a> ou appelez le <a href="tel:+22505051111 02">+225 05 05 11 11 02</a>.';
  },

  recordInteraction() {
    this.state.lastInteraction = Date.now();
  },

  startAutoHideMonitor() {
    setInterval(() => {
      if (this.state.isOpen && !this.config.assessmentPage) {
        const inactiveDuration = Date.now() - this.state.lastInteraction;
        if (inactiveDuration > this.config.autoHideDelay) {
          this.minimizeChatbot();
        }
      }
    }, 5000); // Check every 5 seconds
  },

  escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  DigiSchoolChatbot.init();
});
