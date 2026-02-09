/**
 * Lineup Scroll Handler - STL Festival 2026
 * Gerencia scroll interativo com requestAnimationFrame (RAF)
 * Padrão: flag de ticking para throttle (similar ao hero)
 */

export interface LineupScrollOptions {
  onProgress: (progress: number) => void;
  threshold?: { start: number; end: number };
}

interface ScrollState {
  ticking: boolean;
  lastProgress: number;
}

/**
 * Configura handler de scroll para seção lineup
 * @param options - Configurações do scroll handler
 * @returns Função de cleanup para remover listener
 */
export function setupLineupScroll(options: LineupScrollOptions): () => void {
  const state: ScrollState = {
    ticking: false,
    lastProgress: 0,
  };

  const { threshold = { start: 0.1, end: 0.9 } } = options;

  /**
   * Calcula progresso do scroll dentro da seção lineup
   * @returns Progresso normalizado entre 0 e 1
   */
  function calculateScrollProgress(): number {
    const section = document.getElementById('lineup');
    if (!section) return 0;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Posição relativa da seção
    const sectionTop = rect.top;
    const sectionHeight = rect.height;

    // Calcular progresso baseado na posição do viewport
    // Quando seção entra no viewport (bottom) = 0
    // Quando seção sai do viewport (top) = 1
    const scrollableHeight = sectionHeight + windowHeight;
    const scrolled = windowHeight - sectionTop;

    // Normalizar entre 0 e 1
    let progress = scrolled / scrollableHeight;

    // Aplicar thresholds
    progress = Math.max(threshold.start, Math.min(threshold.end, progress));

    // Remapear para range 0-1
    const normalizedProgress =
      (progress - threshold.start) / (threshold.end - threshold.start);

    return Math.max(0, Math.min(1, normalizedProgress));
  }

  /**
   * Handler de scroll com RAF para performance
   */
  function handleScroll(): void {
    if (!state.ticking) {
      requestAnimationFrame(() => {
        const progress = calculateScrollProgress();

        // Só notificar se houver mudança significativa
        if (Math.abs(progress - state.lastProgress) > 0.001) {
          options.onProgress(progress);
          state.lastProgress = progress;
        }

        state.ticking = false;
      });

      state.ticking = true;
    }
  }

  // Registrar listener (passive para melhor performance)
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Calcular progresso inicial
  handleScroll();

  // Retornar função de cleanup
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Calcula índice do artista baseado no progresso
 * @param progress - Progresso do scroll (0-1)
 * @param totalArtists - Número total de artistas
 * @returns Índice do artista atual
 */
export function getArtistIndex(progress: number, totalArtists: number): number {
  const index = Math.floor(progress * (totalArtists - 1));
  return Math.max(0, Math.min(totalArtists - 1, index));
}
