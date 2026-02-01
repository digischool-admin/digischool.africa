/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  DigiSchool Africa — Social Engagement System                 ║
 * ║  Likes/Dislikes | Top 3 | Share Buttons | B2C Only            ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const DigiSchoolSocial = {
  // ============================================================
  // SEEDED DATA — Realistic distribution across 30 courses
  // ============================================================
  seedData: {
    // TOP PERFORMERS (Top 3)
    'p02-fondation': { likes: 156, dislikes: 12 },  // Gestion de Projet — Fondation
    'p03-maitrise': { likes: 143, dislikes: 7 },    // Data Analytics — Maîtrise
    'p01-fondation': { likes: 134, dislikes: 9 },   // Leadership — Fondation
    
    // HIGH PERFORMERS
    'p01-maitrise': { likes: 118, dislikes: 8 },
    'p06-fondation': { likes: 112, dislikes: 10 },
    'p04-maitrise': { likes: 105, dislikes: 6 },
    'p02-maitrise': { likes: 98, dislikes: 9 },
    
    // STRONG PERFORMERS
    'p03-fondation': { likes: 89, dislikes: 7 },
    'p05-fondation': { likes: 87, dislikes: 11 },
    'p07-maitrise': { likes: 83, dislikes: 5 },
    'p08-fondation': { likes: 79, dislikes: 8 },
    'p04-fondation': { likes: 76, dislikes: 9 },
    
    // SOLID PERFORMERS
    'p06-maitrise': { likes: 72, dislikes: 6 },
    'p09-fondation': { likes: 68, dislikes: 10 },
    'p10-maitrise': { likes: 65, dislikes: 7 },
    'p01-leadership': { likes: 61, dislikes: 4 },
    'p05-maitrise': { likes: 58, dislikes: 8 },
    
    // MODERATE PERFORMERS
    'p07-fondation': { likes: 54, dislikes: 9 },
    'p02-leadership': { likes: 52, dislikes: 6 },
    'p08-maitrise': { likes: 49, dislikes: 7 },
    'p10-fondation': { likes: 47, dislikes: 5 },
    'p03-leadership': { likes: 45, dislikes: 8 },
    
    // EMERGING
    'p09-maitrise': { likes: 43, dislikes: 6 },
    'p04-leadership': { likes: 41, dislikes: 7 },
    'p06-leadership': { likes: 38, dislikes: 5 },
    'p05-leadership': { likes: 36, dislikes: 6 },
    'p07-leadership': { likes: 34, dislikes: 4 },
    'p08-leadership': { likes: 32, dislikes: 5 },
    'p09-leadership': { likes: 29, dislikes: 3 },
    'p10-leadership': { likes: 27, dislikes: 4 }
  },
  
  // Local storage key
  STORAGE_KEY: 'ds_social_actions',
  
  // ============================================================
  // INITIALIZATION
  // ============================================================
  init() {
    this.loadUserActions();
    this.attachListeners();
    this.updateAllCounters();
    this.highlightTopPerformers();
  },
  
  // ============================================================
  // USER ACTIONS (localStorage)
  // ============================================================
  loadUserActions() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      this.userActions = stored ? JSON.parse(stored) : {};
    } catch(e) {
      this.userActions = {};
    }
  },
  
  saveUserActions() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.userActions));
    } catch(e) {
      console.warn('Unable to save user actions');
    }
  },
  
  // ============================================================
  // LIKE/DISLIKE LOGIC
  // ============================================================
  like(courseId) {
    if (!this.userActions[courseId]) {
      this.userActions[courseId] = {};
    }
    
    // Toggle like
    if (this.userActions[courseId].liked) {
      delete this.userActions[courseId].liked;
    } else {
      this.userActions[courseId].liked = true;
      // Remove dislike if present
      delete this.userActions[courseId].disliked;
    }
    
    this.saveUserActions();
    this.updateCounter(courseId);
  },
  
  dislike(courseId) {
    if (!this.userActions[courseId]) {
      this.userActions[courseId] = {};
    }
    
    // Toggle dislike
    if (this.userActions[courseId].disliked) {
      delete this.userActions[courseId].disliked;
    } else {
      this.userActions[courseId].disliked = true;
      // Remove like if present
      delete this.userActions[courseId].liked;
    }
    
    this.saveUserActions();
    this.updateCounter(courseId);
  },
  
  // ============================================================
  // COUNTERS
  // ============================================================
  getCount(courseId) {
    const seed = this.seedData[courseId] || { likes: 0, dislikes: 0 };
    const userAction = this.userActions[courseId] || {};
    
    return {
      likes: seed.likes + (userAction.liked ? 1 : 0) - (userAction.wasLiked ? 1 : 0),
      dislikes: seed.dislikes + (userAction.disliked ? 1 : 0) - (userAction.wasDisliked ? 1 : 0),
      userLiked: !!userAction.liked,
      userDisliked: !!userAction.disliked
    };
  },
  
  updateCounter(courseId) {
    const count = this.getCount(courseId);
    const likeBtn = document.querySelector(`[data-course-id="${courseId}"] .ds-like-btn`);
    const dislikeBtn = document.querySelector(`[data-course-id="${courseId}"] .ds-dislike-btn`);
    
    if (likeBtn) {
      likeBtn.classList.toggle('active', count.userLiked);
      const counter = likeBtn.querySelector('.counter');
      if (counter) counter.textContent = count.likes;
    }
    
    if (dislikeBtn) {
      dislikeBtn.classList.toggle('active', count.userDisliked);
      const counter = dislikeBtn.querySelector('.counter');
      if (counter) counter.textContent = count.dislikes;
    }
  },
  
  updateAllCounters() {
    Object.keys(this.seedData).forEach(courseId => {
      this.updateCounter(courseId);
    });
  },
  
  // ============================================================
  // TOP 3 CALCULATION
  // ============================================================
  getTop3() {
    const scores = Object.keys(this.seedData).map(courseId => {
      const count = this.getCount(courseId);
      const score = count.likes - (count.dislikes * 2); // Penalize dislikes
      return { courseId, score, likes: count.likes, dislikes: count.dislikes };
    });
    
    scores.sort((a, b) => b.score - a.score);
    return scores.slice(0, 3);
  },
  
  highlightTopPerformers() {
    const top3 = this.getTop3();
    top3.forEach((item, index) => {
      const card = document.querySelector(`[data-course-id="${item.courseId}"]`);
      if (card) {
        const badge = document.createElement('div');
        badge.className = 'ds-top-badge';
        badge.innerHTML = `<span class="badge-icon">★</span> Top ${index + 1} Recommandé`;
        card.insertBefore(badge, card.firstChild);
      }
    });
  },
  
  // ============================================================
  // SHARE FUNCTIONALITY
  // ============================================================
  share(courseId, courseTitle, platform) {
    const baseUrl = window.location.origin;
    const shareUrl = `${baseUrl}/b2c.html?formation=${courseId}&ref=share_${Date.now()}`;
    const text = `Je recommande cette formation: ${courseTitle} - DigiSchool Africa`;
    
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(shareUrl)}`
    };
    
    if (platform === 'copy') {
      this.copyToClipboard(shareUrl);
      this.showToast('Lien copié dans le presse-papiers');
    } else if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  },
  
  copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  },
  
  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'ds-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 2000);
  },
  
  // ============================================================
  // EVENT LISTENERS
  // ============================================================
  attachListeners() {
    // Delegate events for dynamically loaded content
    document.addEventListener('click', (e) => {
      // Like button
      if (e.target.closest('.ds-like-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.ds-like-btn');
        const courseId = btn.closest('[data-course-id]').dataset.courseId;
        this.like(courseId);
      }
      
      // Dislike button
      if (e.target.closest('.ds-dislike-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.ds-dislike-btn');
        const courseId = btn.closest('[data-course-id]').dataset.courseId;
        this.dislike(courseId);
      }
      
      // Share button
      if (e.target.closest('.ds-share-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.ds-share-btn');
        const card = btn.closest('[data-course-id]');
        const courseId = card.dataset.courseId;
        const courseTitle = card.querySelector('.course-title')?.textContent || 'Formation';
        this.showShareMenu(btn, courseId, courseTitle);
      }
    });
  },
  
  showShareMenu(btn, courseId, courseTitle) {
    // Remove existing menus
    document.querySelectorAll('.ds-share-menu').forEach(m => m.remove());
    
    const menu = document.createElement('div');
    menu.className = 'ds-share-menu';
    menu.innerHTML = `
      <button class="share-option" data-platform="linkedin">
        <svg width="20" height="20" fill="#0077B5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        LinkedIn
      </button>
      <button class="share-option" data-platform="whatsapp">
        <svg width="20" height="20" fill="#25D366" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        WhatsApp
      </button>
      <button class="share-option" data-platform="facebook">
        <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Facebook
      </button>
      <button class="share-option" data-platform="email">
        <svg width="20" height="20" fill="#666" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
        Email
      </button>
      <button class="share-option" data-platform="copy">
        <svg width="20" height="20" fill="#666" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
        Copier le lien
      </button>
    `;
    
    menu.querySelectorAll('.share-option').forEach(option => {
      option.addEventListener('click', () => {
        const platform = option.dataset.platform;
        this.share(courseId, courseTitle, platform);
        menu.remove();
      });
    });
    
    btn.appendChild(menu);
    
    // Close menu when clicking outside
    setTimeout(() => {
      document.addEventListener('click', function closeMenu(e) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
          menu.remove();
          document.removeEventListener('click', closeMenu);
        }
      });
    }, 100);
  }
};

// Auto-initialize on B2C pages only
if (window.location.pathname.includes('b2c.html') || 
    window.location.pathname === '/' || 
    window.location.pathname === '/index.html') {
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => DigiSchoolSocial.init());
  } else {
    DigiSchoolSocial.init();
  }
}

// Expose globally
window.DigiSchoolSocial = DigiSchoolSocial;
