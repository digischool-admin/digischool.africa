/**
 * DigiSchool Africa - Free Chatbot System
 * Knowledge-based FAQ + Course Recommender
 * Date: 2026-01-17
 */

class DigiSchoolChatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.knowledgeBase = this.initKnowledgeBase();
    this.init();
  }

  init() {
    this.createChatPanel();
    this.bindEvents();
  }

  initKnowledgeBase() {
    return {
      // B2C FAQs
      'acces': {
        keywords: ['accès', 'access', 'code', 'connexion', 'login'],
        response: "Pour accéder à vos cours:\n\n1️⃣ Après achat, vous recevez un code d'accès\n2️⃣ Allez sur https://digischool.africa/b2c-access.html\n3️⃣ Entrez votre code pour activer votre compte\n4️⃣ Accédez à votre tableau de bord\n\nBesoin d'aide? Contactez-nous sur WhatsApp! 📱"
      },
      'modules': {
        keywords: ['module', 'débloquer', 'unlock', 'progression'],
        response: "🔓 Déblocage des modules:\n\n• Module 1 est toujours accessible\n• Passez le quiz à 70% minimum\n• Le module suivant se débloque automatiquement\n• 2 tentatives max par 24h\n\nBonne progression! 💪"
      },
      'quiz': {
        keywords: ['quiz', 'test', 'examen', 'score'],
        response: "📝 À propos des quiz:\n\n✓ 15 questions par module\n✓ 70% requis pour réussir\n✓ 2 tentatives par 24h\n✓ Feedback immédiat\n✓ Déblocage auto du module suivant\n\nBonne chance! 🎯"
      },
      'certificat': {
        keywords: ['certificat', 'certificate', 'diplôme', 'badge'],
        response: "🎓 Certificats & Badges:\n\n🏅 Badge automatique à chaque module réussi\n📜 Certificat final après les 8 modules\n🔐 ID unique + QR code\n✅ Téléchargeable en PDF\n\nVotrecertificat est reconnu par DigiLab!"
      },
      'paiement': {
        keywords: ['paiement', 'payment', 'prix', 'price', 'pay'],
        response: "💳 Méthodes de paiement acceptées:\n\n🟠 Orange Money: +225 07 14 67 82 89\n🟣 MTN MoMo: +225 05 65 23 14 03\n🔵 Moov Money: +225 01 51 66 68 01\n🟡 Wave: +225 01 51 66 46 53\n\nAprès paiement, vous recevrez votre code d'accès! 🎉"
      },
      'proforma': {
        keywords: ['proforma', 'devis', 'b2b', 'entreprise', 'formation entreprise'],
        response: "🏢 Formation B2B:\n\n✓ Formations en entreprise (intra/inter)\n✓ Devis personnalisé gratuit\n✓ Accompagnement sur mesure\n\n📧 Contactez-nous:\n• Email: support@digischool.africa\n• WhatsApp: +225 05 05 11 11 02"
      },
      'cours': {
        keywords: ['cours', 'formation', 'training', 'learn', 'apprendre'],
        response: "📚 Nos 9 formations professionnelles:\n\n1. Leadership & Management\n2. Gestion de projet (PMP)\n3. Stratégie & Exécution\n4. Finance pour non-financiers\n5. Vente B2B & Négociation\n6. Service Client & Expérience\n7. RH & Performance\n8. Data & Reporting\n9. Productivité (Microsoft 365)\n\nQuelle formation vous intéresse? 🎯"
      },
      'aide': {
        keywords: ['aide', 'help', 'support', 'problème', 'issue'],
        response: "🆘 Besoin d'aide?\n\n📞 Plusieurs options:\n\n1️⃣ WhatsApp: +225 05 05 11 11 02\n2️⃣ Email: support@digischool.africa\n3️⃣ Chat en direct (vous y êtes!)\n\nNos conseillers répondent en moins de 2h! ⚡"
      },
      'recommandation': {
        keywords: ['recommander', 'recommend', 'quel cours', 'choisir', 'choose'],
        response: "🎯 Trouvez votre formation idéale!\n\nFaites notre auto-évaluation rapide (2 minutes):\n👉 https://digischool.africa/b2c-assessment.html\n\nVous recevrez des recommandations personnalisées basées sur:\n✓ Vos objectifs\n✓ Votre niveau\n✓ Votre fonction\n\nC'est gratuit et sans engagement! 🚀"
      },
      'parrainage': {
        keywords: ['parrain', 'referral', 'code promo', 'reduction', 'discount'],
        response: "🎁 Programme de parrainage:\n\n✓ Partagez votre code avec vos amis\n✓ Ils bénéficient d'une réduction\n✓ Vous gagnez un bon d'achat à chaque filleul\n\nConnectez-vous à votre dashboard pour obtenir votre code! 💚"
      }
    };
  }

  createChatPanel() {
    const panel = document.createElement('div');
    panel.id = 'digischool-chatbot';
    panel.className = 'chatbot-panel';
    panel.innerHTML = `
      <div class="chatbot-header">
        <div class="chatbot-title">
          <span class="chatbot-icon">💬</span>
          <span>Assistant DigiSchool</span>
        </div>
        <button class="chatbot-close" onclick="window.DigiSchoolChatbot.close()">✕</button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages">
        <div class="chatbot-message bot">
          Bonjour! 👋 Je suis l'assistant DigiSchool.<br><br>
          Comment puis-je vous aider aujourd'hui?<br><br>
          <div class="quick-replies">
            <button onclick="window.DigiSchoolChatbot.handleQuickReply('cours')">📚 Voir les formations</button>
            <button onclick="window.DigiSchoolChatbot.handleQuickReply('acces')">🔑 Code d'accès</button>
            <button onclick="window.DigiSchoolChatbot.handleQuickReply('paiement')">💳 Paiement</button>
            <button onclick="window.DigiSchoolChatbot.handleQuickReply('recommandation')">🎯 Trouver ma formation</button>
          </div>
        </div>
      </div>
      <div class="chatbot-input">
        <input type="text" id="chatbot-input-field" placeholder="Posez votre question..." />
        <button onclick="window.DigiSchoolChatbot.sendMessage()">Envoyer</button>
      </div>
      <div class="chatbot-escalation">
        <button onclick="window.DigiSchoolChatbot.escalateWhatsApp()">
          💬 Parler à un conseiller (WhatsApp)
        </button>
      </div>
    `;
    
    document.body.appendChild(panel);
  }

  bindEvents() {
    const input = document.getElementById('chatbot-input-field');
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.sendMessage();
        }
      });
    }
  }

  open() {
    this.isOpen = true;
    const panel = document.getElementById('digischool-chatbot');
    if (panel) {
      panel.classList.add('open');
    }
    
    // Track event
    if (window.B2CAnalytics) {
      window.B2CAnalytics.addEvent('chatbot_opened', {
        page: window.location.pathname
      });
    }
  }

  close() {
    this.isOpen = false;
    const panel = document.getElementById('digischool-chatbot');
    if (panel) {
      panel.classList.remove('open');
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  sendMessage() {
    const input = document.getElementById('chatbot-input-field');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;

    // Add user message
    this.addMessage(message, 'user');
    input.value = '';

    // Process and respond
    setTimeout(() => {
      const response = this.processMessage(message);
      this.addMessage(response, 'bot');
    }, 500);
  }

  processMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check knowledge base
    for (const [key, data] of Object.entries(this.knowledgeBase)) {
      for (const keyword of data.keywords) {
        if (lowerMessage.includes(keyword)) {
          return data.response;
        }
      }
    }

    // Default response
    return "Je ne suis pas sûr de comprendre. 🤔\n\nVoici quelques suggestions:\n\n" +
           "• 📚 Nos formations\n" +
           "• 🔑 Accès aux cours\n" +
           "• 💳 Paiement\n" +
           "• 🎯 Recommandation\n\n" +
           "Ou parlez directement à un conseiller sur WhatsApp! 👇";
  }

  handleQuickReply(topic) {
    const data = this.knowledgeBase[topic];
    if (data) {
      this.addMessage(data.keywords[0], 'user');
      setTimeout(() => {
        this.addMessage(data.response, 'bot');
      }, 300);
    }
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;
    messageDiv.innerHTML = text.replace(/\n/g, '<br>');

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  escalateWhatsApp() {
    const whatsappUrl = 'https://wa.me/2250505111102?text=Bonjour,%20j%27ai%20besoin%20d%27aide%20avec%20DigiSchool%20Africa';
    window.open(whatsappUrl, '_blank');
    
    // Track event
    if (window.B2CAnalytics) {
      window.B2CAnalytics.addEvent('chatbot_escalate_whatsapp', {
        page: window.location.pathname
      });
    }
  }
}

// Initialize chatbot on page load
window.addEventListener('DOMContentLoaded', () => {
  window.DigiSchoolChatbot = new DigiSchoolChatbot();
});
