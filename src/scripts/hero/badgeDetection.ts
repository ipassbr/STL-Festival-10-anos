/**
 * Badge Detection & Auto-hide Script
 *
 * Features:
 * 1. Color detection: Ajusta contraste do badge baseado no fundo
 * 2. Auto-hide mobile: Badge fica semi-transparente após 3s de inatividade
 * 3. Reativação: Badge retorna ao estado ativo em eventos de interação
 */

// ========================================
// TYPES
// ========================================

interface BadgeState {
  isHidden: boolean;
  hideTimer: number | null;
  debounceTimer: number | null;
}

// ========================================
// CONSTANTS
// ========================================

const MOBILE_BREAKPOINT = 1024; // px
const HIDE_DELAY = 3000; // 3 segundos
const DEBOUNCE_DELAY = 150; // ms
const BADGE_SELECTOR = '[data-spotify-badge]';

// ========================================
// STATE
// ========================================

const state: BadgeState = {
  isHidden: false,
  hideTimer: null,
  debounceTimer: null,
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Verifica se está em mobile
 */
function isMobile(): boolean {
  return window.innerWidth < MOBILE_BREAKPOINT;
}

/**
 * Debounce function
 */
function debounce(fn: () => void, delay: number): () => void {
  return () => {
    if (state.debounceTimer) {
      clearTimeout(state.debounceTimer);
    }
    state.debounceTimer = window.setTimeout(fn, delay);
  };
}

// ========================================
// AUTO-HIDE MOBILE
// ========================================

/**
 * Esconde o badge (semi-transparente)
 */
function hideBadge(badge: HTMLElement): void {
  if (!isMobile() || state.isHidden) return;

  badge.classList.add('is-hidden');
  state.isHidden = true;
}

/**
 * Mostra o badge (estado ativo)
 */
function showBadge(badge: HTMLElement): void {
  if (!isMobile()) return;

  badge.classList.remove('is-hidden');
  state.isHidden = false;

  // Reinicia o timer de auto-hide
  startHideTimer(badge);
}

/**
 * Inicia o timer para auto-hide
 */
function startHideTimer(badge: HTMLElement): void {
  // Limpa timer anterior se existir
  if (state.hideTimer) {
    clearTimeout(state.hideTimer);
  }

  // Agenda novo hide apenas em mobile
  if (isMobile()) {
    state.hideTimer = window.setTimeout(() => {
      hideBadge(badge);
    }, HIDE_DELAY);
  }
}

/**
 * Para o timer de auto-hide
 */
function stopHideTimer(): void {
  if (state.hideTimer) {
    clearTimeout(state.hideTimer);
    state.hideTimer = null;
  }
}

/**
 * Setup auto-hide mobile behavior
 */
function setupAutoHideMobile(): void {
  const badge = document.querySelector<HTMLElement>(BADGE_SELECTOR);
  if (!badge) return;

  // Inicia timer inicial apenas em mobile
  if (isMobile()) {
    startHideTimer(badge);
  }

  // Eventos de reativação (com debounce para performance)
  const reactivateBadge = debounce(() => {
    showBadge(badge);
  }, DEBOUNCE_DELAY);

  // Scroll
  window.addEventListener('scroll', reactivateBadge, { passive: true });

  // Touch (mobile)
  document.addEventListener('touchstart', reactivateBadge, { passive: true });

  // Mouse move (tablet/desktop com touch)
  document.addEventListener('mousemove', reactivateBadge, { passive: true });

  // Resize - recalcula comportamento
  window.addEventListener(
    'resize',
    () => {
      if (isMobile()) {
        // Entrou em mobile - inicia timer
        startHideTimer(badge);
      } else {
        // Saiu de mobile - para timer e remove classe
        stopHideTimer();
        badge.classList.remove('is-hidden');
        state.isHidden = false;
      }
    },
    { passive: true }
  );

  // Hover - mostra badge ao passar mouse
  badge.addEventListener('mouseenter', () => {
    showBadge(badge);
  });

  // Focus - mostra badge ao focar (navegação por teclado)
  badge.addEventListener('focus', () => {
    showBadge(badge);
  });
}

// ========================================
// COLOR DETECTION
// ========================================

/**
 * Detecta cor de fundo e ajusta contraste do badge
 * NOTA: Funcionalidade opcional - pode ser desabilitada se causar problemas de CORS
 */
function setupBadgeColorDetection(): void {
  const badge = document.querySelector<HTMLElement>(BADGE_SELECTOR);
  if (!badge) return;

  // Get badge position
  const rect = badge.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // Create canvas to sample pixel color
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Get video or image element
  const video = document.querySelector<HTMLVideoElement>('#hero-video');
  const image = document.querySelector<HTMLImageElement>(
    '#hero-fallback-image'
  );
  const source = video && video.style.opacity === '1' ? video : image;

  if (!source) return;

  // Sample pixel color
  canvas.width = 1;
  canvas.height = 1;

  try {
    ctx.drawImage(source, x, y, 1, 1, 0, 0, 1, 1);
    const pixel = ctx.getImageData(0, 0, 1, 1).data;

    // Calculate luminance (relative luminance formula)
    const luminance =
      (0.299 * (pixel[0] ?? 0) +
        0.587 * (pixel[1] ?? 0) +
        0.114 * (pixel[2] ?? 0)) /
      255;

    // Adjust badge color based on background luminance
    // NOTA: Spotify badge usa verde oficial, então essa detecção é opcional
    if (luminance > 0.7) {
      // Fundo muito claro - pode precisar escurecer badge
      badge.style.opacity = '0.95';
    } else if (luminance < 0.3) {
      // Fundo muito escuro - badge padrão funciona bem
      badge.style.opacity = '1';
    }
  } catch (error) {
    // Se CORS ou outro erro, usa estilo padrão
    console.warn('Badge color detection failed (CORS?):', error);
  }
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Inicializa o badge detection e auto-hide
 */
function init(): void {
  // Aguarda DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    return;
  }

  // Setup auto-hide mobile (prioridade)
  setupAutoHideMobile();

  // Setup color detection (opcional)
  // Descomente a linha abaixo se quiser ativar detecção de cor
  // setupBadgeColorDetection();
}

// ========================================
// AUTO-EXECUTE
// ========================================

// Inicia automaticamente quando o script é carregado
init();

// ========================================
// EXPORTS (para uso externo se necessário)
// ========================================

export { setupAutoHideMobile, setupBadgeColorDetection };
