/**
 * Everform Theme JavaScript
 * Vanilla JS only - no frameworks
 * ES6 syntax
 */

// Theme configuration
const THEME = {
  breakpoints: {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    large: 1440
  },
  settings: {
    vatRate: 20 // Default UK VAT rate
  }
};

/**
 * DOM Ready
 */
document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initMobileMenu();
  initImageGallery();
  initQuantitySelectors();
  initModals();
  initTabs();
});

/**
 * Accordion functionality
 */
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion__header');
    const content = accordion.querySelector('.accordion__content');

    if (header && content) {
      header.addEventListener('click', () => {
        const isOpen = accordion.classList.contains('is-open');

        // Close all accordions (optional - for exclusive behavior)
        // accordions.forEach(acc => acc.classList.remove('is-open'));

        // Toggle current accordion
        if (isOpen) {
          accordion.classList.remove('is-open');
        } else {
          accordion.classList.add('is-open');
        }
      });
    }
  });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');

      if (isOpen) {
        mobileMenu.classList.remove('is-open');
        body.style.overflow = '';
      } else {
        mobileMenu.classList.add('is-open');
        body.style.overflow = 'hidden';
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        body.style.overflow = '';
      }
    });
  }
}

/**
 * Image gallery with thumbnails
 */
function initImageGallery() {
  const galleries = document.querySelectorAll('.image-gallery');

  galleries.forEach(gallery => {
    const mainImage = gallery.querySelector('.image-gallery__main img');
    const thumbnails = gallery.querySelectorAll('.image-gallery__thumbnail');

    if (mainImage && thumbnails.length > 0) {
      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          const newSrc = thumbnail.dataset.fullImage;

          if (newSrc) {
            mainImage.src = newSrc;

            // Update active state
            thumbnails.forEach(t => t.classList.remove('is-active'));
            thumbnail.classList.add('is-active');
          }
        });
      });
    }
  });
}

/**
 * Quantity selector increment/decrement
 */
function initQuantitySelectors() {
  const quantitySelectors = document.querySelectorAll('.quantity-selector');

  quantitySelectors.forEach(selector => {
    const decreaseBtn = selector.querySelector('[data-quantity-decrease]');
    const increaseBtn = selector.querySelector('[data-quantity-increase]');
    const input = selector.querySelector('.quantity-selector__input');

    if (decreaseBtn && increaseBtn && input) {
      decreaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        const minValue = parseInt(input.min) || 1;

        if (currentValue > minValue) {
          input.value = currentValue - 1;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });

      increaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value) || 1;
        const maxValue = parseInt(input.max) || Infinity;

        if (currentValue < maxValue) {
          input.value = currentValue + 1;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });

      // Validate input on change
      input.addEventListener('change', () => {
        const value = parseInt(input.value) || 1;
        const minValue = parseInt(input.min) || 1;
        const maxValue = parseInt(input.max) || Infinity;

        if (value < minValue) {
          input.value = minValue;
        } else if (value > maxValue) {
          input.value = maxValue;
        }
      });
    }
  });
}

/**
 * Modal functionality
 */
function initModals() {
  const modals = document.querySelectorAll('.modal');

  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal__close');
    const backdrop = modal.querySelector('.modal__backdrop');

    // Close on close button click
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal(modal);
      });
    }

    // Close on backdrop click
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        closeModal(modal);
      });
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal(modal);
      }
    });
  });
}

/**
 * Open modal
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close modal
 */
function closeModal(modal) {
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

/**
 * Tabs functionality
 */
function initTabs() {
  const tabContainers = document.querySelectorAll('.tabs');

  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tabs__button');
    const panels = container.querySelectorAll('.tabs__panel');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.dataset.tabTarget;

        // Remove active state from all buttons and panels
        buttons.forEach(btn => btn.classList.remove('is-active'));
        panels.forEach(panel => panel.classList.remove('is-active'));

        // Add active state to clicked button and corresponding panel
        button.classList.add('is-active');
        const targetPanel = container.querySelector(`#${targetId}`);
        if (targetPanel) {
          targetPanel.classList.add('is-active');
        }
      });
    });
  });
}

/**
 * Format money (GBP)
 */
function formatMoney(cents) {
  const pounds = (cents / 100).toFixed(2);
  return `£${pounds}`;
}

/**
 * Calculate VAT price
 */
function calculateVATPrice(exVatPrice, vatRate) {
  const vatMultiplier = 1 + (vatRate / 100);
  return Math.round(exVatPrice * vatMultiplier);
}

/**
 * Update VAT pricing display
 */
function updateVATPricing(exVatPriceCents, vatRate = THEME.settings.vatRate) {
  const exVatElements = document.querySelectorAll('[data-price-ex-vat]');
  const incVatElements = document.querySelectorAll('[data-price-inc-vat]');

  const incVatPriceCents = calculateVATPrice(exVatPriceCents, vatRate);

  exVatElements.forEach(el => {
    el.textContent = formatMoney(exVatPriceCents);
  });

  incVatElements.forEach(el => {
    el.textContent = formatMoney(incVatPriceCents);
  });
}

/**
 * Debounce helper
 */
function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle helper
 */
function throttle(func, limit) {
  let inThrottle;

  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Get current breakpoint
 */
function getCurrentBreakpoint() {
  const width = window.innerWidth;

  if (width >= THEME.breakpoints.large) return 'large';
  if (width >= THEME.breakpoints.desktop) return 'desktop';
  if (width >= THEME.breakpoints.tablet) return 'tablet';
  return 'mobile';
}

/**
 * Lazy load images
 */
function lazyLoadImages() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          if (img.dataset.src) {
            img.src = img.dataset.src;
          }

          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }

          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
    });
  }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

/**
 * Add to cart (AJAX)
 */
async function addToCart(variantId, quantity = 1) {
  try {
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{
          id: variantId,
          quantity: quantity
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to add to cart');
    }

    const data = await response.json();

    // Update cart UI
    updateCartCount();

    return data;
  } catch (error) {
    console.error('Add to cart error:', error);
    throw error;
  }
}

/**
 * Update cart count
 */
async function updateCartCount() {
  try {
    const response = await fetch('/cart.js');
    const cart = await response.json();

    const cartCountElements = document.querySelectorAll('[data-cart-count]');
    cartCountElements.forEach(el => {
      el.textContent = cart.item_count;
    });
  } catch (error) {
    console.error('Update cart count error:', error);
  }
}

/**
 * Export functions to global scope if needed
 */
window.THEME = THEME;
window.openModal = openModal;
window.closeModal = closeModal;
window.formatMoney = formatMoney;
window.calculateVATPrice = calculateVATPrice;
window.updateVATPricing = updateVATPricing;
window.addToCart = addToCart;
window.updateCartCount = updateCartCount;
