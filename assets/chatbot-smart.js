/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — CHATBOT SMART V3.0                       ║
 * ║  Cadré | 6 intentions | Réponses courtes | WhatsApp assist   ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolSmartChatbot = {
  state: {
    isOpen: false,
    currentConversation: [],
    lastInteraction: Date.now()
  },

  config: {
    whatsappNumber: '2250505111102',
    autoHideDelay: 60000 // 1 minute
  },

  // 6 INTENTIONS MAXIMUM
  intentions: {
    '1': {
      keywords: ['formations', 'parcours', 'catalogue', 'cours', 'apprendre', 'enseigner'],
      title: '📚 Découvrir les formations DigiSchool',
      response: `Nous proposons des formations professionnelles certifiantes 100% en ligne dans 5 domaines clés :
      
• Leadership & Management
• Gestion de Projet
• Data & IA
• Stratégie & Transformation
• Finance & Gestion

<a href="/b2c.html?v=467ec35" target="_blank">🔗 Voir le catalogue complet</a>

💬 Souhaitez-vous parler à un conseiller ?`,
      link: '/b2c.html?v=467ec35'
    },

    '2': {
      keywords: ['disponible', 'lancement', 'quand', 'début', 'prêt', 'accès'],
      title: '🗓️ Parcours disponibles au lancement',
      response: `Au lancement (04 février 2026), nous offrirons **3 parcours complets** :

1. **Leadership & Management** (6 modules)
2. **Gestion de Projet Avancée** (5 modules)
3. **Data Analytics & IA** (6 modules)

Chaque parcours inclut coaching IA personnalisé, exercices pratiques et certification.

<a href="/b2c.html?v=467ec35" target="_blank">🔗 Voir les parcours</a>

💬 Souhaitez-vous parler à un conseiller ?`,
      link: '/b2c.html?v=467ec35'
    },

    '3': {
      keywords: ['ouverture', 'date', 'février', 'lms', 'plateforme', 'inscription'],
      title: '📅 Date d\'ouverture du LMS',
      response: `**Ouverture officielle : mercredi 04 février 2026** 🎉

Dès cette date, vous pourrez :
• Accéder au LMS et commencer votre formation
• Bénéficier du coaching IA embarqué
• Suivre vos progrès en temps réel

Réservez votre place dès maintenant pour garantir votre accès !

<a href="/reservation.html?v=467ec35" target="_blank">🔗 Réserver ma place</a>

💬 Souhaitez-vous parler à un conseiller ?`,
      link: '/reservation.html?v=467ec35'
    },

    '4': {
      keywords: ['réserver', 'inscription', 'acheter', 'payer', 'prix', 'tarif'],
      title: '✅ Comment réserver une formation',
      response: `Pour réserver votre place, c'est simple :

1. Consultez notre <a href="/b2c.html?v=467ec35" target="_blank">catalogue de formations</a>
2. Cliquez sur "Réserver" pour la formation de votre choix
3. Remplissez le formulaire de réservation
4. Vous recevrez une confirmation par email

**Prix transparents** affichés sur chaque formation (pack complet ou module par module).

<a href="/b2c.html?v=467ec35" target="_blank">🔗 Voir les formations</a>

💬 Souhaitez-vous parler à un conseiller ?`,
      link: '/b2c.html?v=467ec35'
    },

    '5': {
      keywords: ['entreprise', 'b2b', 'sur-mesure', 'corporate', 'équipe', 'société'],
      title: '🏢 Offres entreprises / sur mesure',
      response: `Nous proposons des **formations sur-mesure pour entreprises** :

• Programmes adaptés à vos besoins
• Déploiement rapide et flexible
• Coaching IA pour chaque collaborateur
• Tarifs dégressifs selon le nombre de participants

**Réponse sous 72h** avec proposition détaillée (programme, durée, tarifs).

<a href="/companies.html?v=467ec35" target="_blank">🔗 Découvrir l'offre B2B</a>

💬 Souhaitez-vous parler à un conseiller ?`,
      link: '/companies.html?v=467ec35'
    },

    '6': {
      keywords: ['contact', 'aide', 'support', 'assistance', 'question', 'conseiller', 'humain'],
      title: '☎️ Contact / Assistance',
      response: `Besoin d'aide ? Notre équipe est à votre disposition :

📧 **Email** : contact@digischool.africa
📱 **WhatsApp** : +225 05 05 11 11 02

Réponse garantie sous 24h (jours ouvrables).

💬 Cliquez ci-dessous pour discuter avec un conseiller sur WhatsApp.`,
      link: null
    }
  },

  init() {
    this.injectChatbotHTML();
    this.bindEvents();
    this.startAutoHideMonitor();
  },

  injectChatbotHTML() {
    const html = `
      <div class="ds-smart-chatbot" id="ds-smart-chatbot">
        <!-- Bouton flottant minimisé -->
        <button class="ds-chat-toggle" id="ds-chat-toggle" aria-label="Ouvrir l'assistant DigiSchool">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.76 2.5 15.4 3.37 16.8L2.05 21.95L7.2 20.63C8.6 21.5 10.24 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
            <circle cx="8" cy="12" r="1.5" fill="white"/>
            <circle cx="12" cy="12" r="1.5" fill="white"/>
            <circle cx="16" cy="12" r="1.5" fill="white"/>
          </svg>
          <span class="pulse-ring"></span>
        </button>

        <!-- Fenêtre chatbot -->
        <div class="ds-chat-window" id="ds-chat-window" style="display: none;">
          <div class="ds-chat-header">
            <div class="ds-chat-header-content">
              <div class="ds-chat-avatar">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#1E88E5"/>
                  <circle cx="8" cy="11" r="2" fill="white"/>
                  <circle cx="16" cy="11" r="2" fill="white"/>
                  <path d="M8 15C9 16.5 11 17 12 17C13 17 15 16.5 16 15" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="ds-chat-header-text">
                <div class="ds-chat-title">Assistant DigiSchool</div>
                <div class="ds-chat-status">En ligne • Répond en < 30s</div>
              </div>
            </div>
            <button class="ds-chat-close" id="ds-chat-close" aria-label="Fermer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div class="ds-chat-messages" id="ds-chat-messages">
            <div class="ds-chat-welcome">
              <div class="ds-welcome-icon">👋</div>
              <h3>Bienvenue chez DigiSchool Africa !</h3>
              <p>Je suis votre assistant virtuel. Choisissez un sujet ou posez votre question :</p>
            </div>

            <!-- Menu des intentions -->
            <div class="ds-chat-menu" id="ds-chat-menu">
              ${this.renderIntentionsMenu()}
            </div>
          </div>

          <div class="ds-chat-input-wrapper">
            <div class="ds-chat-quick-actions">
              <button class="ds-quick-action" data-action="reset">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                  <path d="M3 3v5h5"/>
                </svg>
                Recommencer
              </button>
              <button class="ds-quick-action ds-whatsapp-btn" id="ds-whatsapp-direct">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Parler à un conseiller
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
  },

  renderIntentionsMenu() {
    return Object.keys(this.intentions).map(key => {
      const intent = this.intentions[key];
      return `
        <button class="ds-intent-btn" data-intent="${key}">
          ${intent.title}
        </button>
      `;
    }).join('');
  },

  bindEvents() {
    const toggle = document.getElementById('ds-chat-toggle');
    const close = document.getElementById('ds-chat-close');
    const window = document.getElementById('ds-chat-window');
    const whatsappBtn = document.getElementById('ds-whatsapp-direct');

    if (toggle) {
      toggle.addEventListener('click', () => this.toggleChat());
    }

    if (close) {
      close.addEventListener('click', () => this.closeChat());
    }

    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => this.openWhatsApp());
    }

    // Intentions
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('ds-intent-btn')) {
        const intentId = e.target.dataset.intent;
        this.handleIntent(intentId);
      }

      if (e.target.closest('[data-action="reset"]')) {
        this.resetChat();
      }
    });
  },

  toggleChat() {
    const window = document.getElementById('ds-chat-window');
    this.state.isOpen = !this.state.isOpen;

    if (this.state.isOpen) {
      window.style.display = 'flex';
      setTimeout(() => window.classList.add('active'), 10);
    } else {
      this.closeChat();
    }

    this.updateLastInteraction();
  },

  closeChat() {
    const window = document.getElementById('ds-chat-window');
    window.classList.remove('active');
    setTimeout(() => {
      window.style.display = 'none';
      this.state.isOpen = false;
    }, 300);
  },

  handleIntent(intentId) {
    const intent = this.intentions[intentId];
    if (!intent) return;

    const messagesContainer = document.getElementById('ds-chat-messages');
    
    // Masquer le menu
    const menu = document.getElementById('ds-chat-menu');
    if (menu) menu.style.display = 'none';

    // Afficher la réponse
    const responseHTML = `
      <div class="ds-message ds-bot-message">
        <div class="ds-message-content">
          ${intent.response}
        </div>
      </div>
      <button class="ds-whatsapp-action" onclick="DigiSchoolSmartChatbot.openWhatsApp('${intent.title.replace(/[📚🗓️📅✅🏢☎️]/g, '').trim()}')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        💬 Parler à un conseiller sur WhatsApp
      </button>
    `;

    messagesContainer.insertAdjacentHTML('beforeend', responseHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    this.updateLastInteraction();
  },

  openWhatsApp(context = 'Question générale') {
    const message = encodeURIComponent(`Bonjour, je consulte DigiSchool Africa et j'ai une question concernant : ${context}`);
    const whatsappUrl = `https://wa.me/${this.config.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  },

  resetChat() {
    const messagesContainer = document.getElementById('ds-chat-messages');
    const menu = document.getElementById('ds-chat-menu');

    // Supprimer les messages
    const messages = messagesContainer.querySelectorAll('.ds-message, .ds-whatsapp-action');
    messages.forEach(msg => msg.remove());

    // Réafficher le menu
    if (menu) menu.style.display = 'flex';

    this.updateLastInteraction();
  },

  startAutoHideMonitor() {
    setInterval(() => {
      if (this.state.isOpen && (Date.now() - this.state.lastInteraction) > this.config.autoHideDelay) {
        this.closeChat();
      }
    }, 10000); // Vérifier toutes les 10 secondes
  },

  updateLastInteraction() {
    this.state.lastInteraction = Date.now();
  }
};

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => DigiSchoolSmartChatbot.init());
} else {
  DigiSchoolSmartChatbot.init();
}
