/**
 * Mobile Scroll Indicator Script
 * Gerencia indicador de scroll mobile com smooth scroll
 */

export function setupMobileScrollIndicator(): void {
  const indicator = document.getElementById('mobile-scroll-indicator');
  if (!indicator) return;
  
  // Smooth scroll to target section
  const handleClick = (event: Event) => {
    event.preventDefault();
    const target = indicator.getAttribute('data-scroll-to');
    
    if (target) {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        
        // Fade out indicator after scroll
        setTimeout(() => {
          indicator.style.opacity = '0';
        }, 500);
      }
    }
  };
  
  // Add click event
  indicator.addEventListener('click', handleClick);
  
  // Auto fade out after 5 seconds of inactivity
  let fadeTimeout: NodeJS.Timeout;
  
  const startFadeTimer = () => {
    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
      indicator.style.opacity = '0';
    }, 5000);
  };
  
  // Reset timer on user interaction
  const resetTimer = () => {
    if (indicator.style.opacity === '0') {
      indicator.style.opacity = '1';
    }
    startFadeTimer();
  };
  
  // Hide indicator on scroll
  let lastScrollY = 0;
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down, hide indicator
      indicator.style.opacity = '0';
    } else if (currentScrollY < lastScrollY && currentScrollY < 50) {
      // Scrolling up near top, show indicator
      resetTimer();
    }
    
    lastScrollY = currentScrollY;
  };
  
  // Start initial timer
  startFadeTimer();
  
  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Add mouse move listener to reset timer
  document.addEventListener('mousemove', resetTimer, { passive: true });
}
