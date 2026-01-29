/**
 * Preloader Manager
 * Gerencia o estado e eventos do preloader
 */

import { AssetPreloader } from './assetPreloader';

export interface PreloaderConfig {
  heroVideoSrc?: string;
  heroImageSrc?: string;
  fonts?: string[];
  onProgress?: (progress: number) => void;
  onComplete?: () => void;
}

export class PreloaderManager {
  private preloader: AssetPreloader;
  private config: PreloaderConfig;
  private isComplete = false;

  constructor(config: PreloaderConfig) {
    this.config = config;
    this.preloader = new AssetPreloader(
      (progress) => this.handleProgress(progress),
      () => this.handleComplete()
    );
  }

  /**
   * Inicia o processo de preload
   */
  async start(): Promise<void> {
    if (this.isComplete) return;

    // Delay inicial mínimo para melhor experiência do usuário (800ms)
    // Permite que o usuário veja e sinta o preloader antes de começar o carregamento
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Inicia timeout de segurança
    this.preloader.startTimeout();

    const promises: Promise<void>[] = [];

    // Preload vídeo hero (se fornecido)
    if (this.config.heroVideoSrc) {
      promises.push(
        this.preloader.preloadVideo(this.config.heroVideoSrc, 'hero-video')
      );
    }

    // Preload imagem fallback (se fornecida)
    if (this.config.heroImageSrc) {
      promises.push(
        this.preloader.preloadImage(this.config.heroImageSrc, 'hero-image')
      );
    }

    // Preload fontes críticas (se fornecidas)
    if (this.config.fonts && this.config.fonts.length > 0) {
      promises.push(this.preloader.preloadFonts(this.config.fonts));
    }

    // Aguarda todos os preloads (ou timeout)
    await Promise.allSettled(promises);
  }

  /**
   * Manipula progresso do preload
   */
  private handleProgress(progress: number): void {
    // Dispara evento customizado
    window.dispatchEvent(
      new CustomEvent('preloader-progress', { detail: progress })
    );

    // Callback customizado (se fornecido)
    if (this.config.onProgress) {
      this.config.onProgress(progress);
    }
  }

  /**
   * Manipula conclusão do preload
   */
  private handleComplete(): void {
    if (this.isComplete) return;
    this.isComplete = true;

    // Dispara evento customizado
    window.dispatchEvent(new CustomEvent('preloader-complete'));

    // Callback customizado (se fornecido)
    if (this.config.onComplete) {
      this.config.onComplete();
    }
  }

  /**
   * Força conclusão do preloader (útil para testes ou casos especiais)
   */
  forceComplete(): void {
    this.handleComplete();
  }

  /**
   * Limpa recursos
   */
  cleanup(): void {
    this.preloader.cleanup();
  }
}
