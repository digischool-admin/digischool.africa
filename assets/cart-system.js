/**
 * DigiSchool Africa - Cart System V1.0
 * Unified cart management for B2C checkout
 */

// Configuration - Official Contact Numbers
const CONFIG = {
  ORANGE_NUMBER: '+2250714678289',
  MTN_NUMBER: '+2250665231403',
  MOOV_NUMBER: '+2250151666801',
  WAVE_WHATSAPP_NUMBER: '+2250151664653'
};

// Course Catalog (Source of Truth)
const COURSE_CATALOG = {
  'leadership-management': {
    id: 'leadership-management',
    title: 'Leadership & Management',
    duration: '5 jours',
    modules: 4,
    packPrice: 214376,
    modulePrice: 69672,
    description: 'Leadership transformationnel, management d\'équipes hybrides, gestion des conflits'
  },
  'gestion-projet-pmp': {
    id: 'gestion-projet-pmp',
    title: 'Gestion de Projet (PMP)',
    duration: '10 jours',
    modules: 6,
    packPrice: 321564,
    modulePrice: 69672,
    description: 'Méthodologie PMP complète avec IA pour automatisation'
  },
  'data-analytics': {
    id: 'data-analytics',
    title: 'Data Analytics & Visualisation',
    duration: '8 jours',
    modules: 5,
    packPrice: 267970,
    modulePrice: 69672,
    description: 'Analyse de données et visualisation avec Power BI'
  },
  'excel-avance': {
    id: 'excel-avance',
    title: 'Excel Avancé & IA',
    duration: '4 jours',
    modules: 4,
    packPrice: 214376,
    modulePrice: 69672,
    description: 'Maîtrise avancée d\'Excel pour l\'analyse de données'
  },
  'power-bi': {
    id: 'power-bi',
    title: 'Power BI & Business Intelligence',
    duration: '5 jours',
    modules: 4,
    packPrice: 214376,
    modulePrice: 69672,
    description: 'Business Intelligence et visualisation de données'
  },
  'marketing-digital': {
    id: 'marketing-digital',
    title: 'Marketing Digital & IA',
    duration: '6 jours',
    modules: 5,
    packPrice: 267970,
    modulePrice: 69672,
    description: 'Stratégie digitale et marketing automation avec IA'
  },
  'transformation-digitale': {
    id: 'transformation-digitale',
    title: 'Transformation Digitale',
    duration: '4 jours',
    modules: 4,
    packPrice: 214376,
    modulePrice: 69672,
    description: 'Conduire la transformation digitale de l\'entreprise'
  },
  'rh-moderne': {
    id: 'rh-moderne',
    title: 'RH Moderne & People Analytics',
    duration: '5 jours',
    modules: 4,
    packPrice: 214376,
    modulePrice: 69672,
    description: 'RH stratégiques et people analytics'
  },
  'strategie-execution': {
    id: 'strategie-execution',
    title: 'Stratégie & Exécution',
    duration: '4 jours',
    modules: 4,
    packPrice: 214376,
    modulePrice: 69672,
    description: 'Stratégie d\'entreprise et excellence opérationnelle'
  },
  'm365-productivite': {
    id: 'm365-productivite',
    title: 'Productivité & Microsoft 365',
    duration: '4 jours',
    modules: 4,
    packPrice: 214376,
    modulePrice: 69672,
    description: 'Productivité et collaboration avec Microsoft 365'
  }
};

// Cart Manager
const CartManager = {
  STORAGE_KEY: 'DS_CART_V1',
  
  init() {
    // Initialize cart if not exists
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      this.clear();
    }
  },
  
  getCart() {
    const cart = localStorage.getItem(this.STORAGE_KEY);
    return cart ? JSON.parse(cart) : { items: [], lastUpdated: Date.now() };
  },
  
  saveCart(cart) {
    cart.lastUpdated = Date.now();
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
    this.updateCartBadge();
  },
  
  addItem(courseId, itemType, moduleId = null, moduleTitle = null) {
    const course = COURSE_CATALOG[courseId];
    if (!course) {
      console.error('Course not found:', courseId);
      return false;
    }
    
    const cart = this.getCart();
    
    // Check if item already exists
    const existingItem = cart.items.find(item => 
      item.courseId === courseId && 
      item.itemType === itemType && 
      item.moduleId === moduleId
    );
    
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      const newItem = {
        courseId: courseId,
        courseTitle: course.title,
        itemType: itemType,
        moduleId: moduleId,
        moduleTitle: moduleTitle,
        unitPrice: itemType === 'pack' ? course.packPrice : course.modulePrice,
        qty: 1,
        duration: course.duration
      };
      cart.items.push(newItem);
    }
    
    this.saveCart(cart);
    return true;
  },
  
  removeItem(index) {
    const cart = this.getCart();
    cart.items.splice(index, 1);
    this.saveCart(cart);
  },
  
  clear() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({ items: [], lastUpdated: Date.now() }));
    this.updateCartBadge();
  },
  
  getTotal() {
    const cart = this.getCart();
    return cart.items.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  },
  
  getItemCount() {
    const cart = this.getCart();
    return cart.items.reduce((sum, item) => sum + item.qty, 0);
  },
  
  updateCartBadge() {
    const count = this.getItemCount();
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-block' : 'none';
    });
  }
};

// Order Manager
const OrderManager = {
  STORAGE_KEY: 'DS_ORDER_ID_V1',
  
  createOrder() {
    const cart = CartManager.getCart();
    if (cart.items.length === 0) {
      return null;
    }
    
    const orderId = this.generateOrderId();
    const order = {
      orderId: orderId,
      items: cart.items,
      total: CartManager.getTotal(),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(order));
    return order;
  },
  
  generateOrderId() {
    const now = new Date();
    const dateStr = now.toISOString().slice(0,10).replace(/-/g,'');
    const timeStr = now.toTimeString().slice(0,5).replace(/:/g,'');
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `DS-${dateStr}-${timeStr}-${random}`;
  },
  
  getPendingOrder() {
    const order = localStorage.getItem(this.STORAGE_KEY);
    return order ? JSON.parse(order) : null;
  },
  
  clearPendingOrder() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
};

// Initialize on load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    CartManager.init();
    CartManager.updateCartBadge();
  });
}

// Export for use
if (typeof window !== 'undefined') {
  window.CartManager = CartManager;
  window.OrderManager = OrderManager;
  window.COURSE_CATALOG = COURSE_CATALOG;
  window.CONFIG = CONFIG;
}
