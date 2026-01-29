/**
 * Asset Preloader
 * Gerencia o preload de assets críticos (vídeo hero, imagem fallback, fontes)
 */

export interface AssetProgress {
  name: string;
  progress: number;
  loaded: boolean;
}

export class AssetPreloader {
  private assets: Map<string, AssetProgress> = new Map();
  private onProgressCallback?: (progress: number) => void;
  private onCompleteCallback?: () => void;
  private timeoutId?: number;
  private readonly TIMEOUT_MS = 8000; // 8 segundos máximo

  constructor(
    onProgress?: (progress: number) => void,
    onComplete?: () => void
  ) {
    this.onProgressCallback = onProgress;
    this.onCompleteCallback = onComplete;
  }

  /**
   * Preload de vídeo hero
   */
  async preloadVideo(src: string, name: string = 'hero-video'): Promise<void> {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;

      let loadedBytes = 0;
      let totalBytes = 0;

      const updateProgress = () => {
        if (totalBytes > 0) {
          const progress = Math.min(
            100,
            Math.round((loadedBytes / totalBytes) * 100)
          );
          this.updateAssetProgress(name, progress);
        }
      };

      video.addEventListener('progress', () => {
        if (video.buffered.length > 0) {
          loadedBytes = video.buffered.end(video.buffered.length - 1);
          totalBytes = video.duration * video.buffered.length;
          updateProgress();
        }
      });

      video.addEventListener('loadeddata', () => {
        this.updateAssetProgress(name, 100, true);
        resolve();
      });

      video.addEventListener('error', (e) => {
        console.warn(`Failed to preload video: ${src}`, e);
        this.updateAssetProgress(name, 100, true); // Marca como completo mesmo com erro
        resolve(); // Não rejeita para não bloquear o preloader
      });

      video.src = src;
      video.load();
    });
  }

  /**
   * Preload de imagem
   */
  async preloadImage(src: string, name: string = 'hero-image'): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => {
        this.updateAssetProgress(name, 100, true);
        resolve();
      };

      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`);
        this.updateAssetProgress(name, 100, true); // Marca como completo mesmo com erro
        resolve();
      };

      img.src = src;
    });
  }

  /**
   * Preload de fontes críticas
   */
  async preloadFonts(fonts: string[]): Promise<void> {
    if (!document.fonts) {
      // Fallback para navegadores sem suporte a Font Loading API
      this.updateAssetProgress('fonts', 100, true);
      return Promise.resolve();
    }

    try {
      await Promise.all(fonts.map((font) => document.fonts.load(font)));
      this.updateAssetProgress('fonts', 100, true);
    } catch (error) {
      console.warn('Failed to preload fonts', error);
      this.updateAssetProgress('fonts', 100, true);
    }
  }

  /**
   * Atualiza progresso de um asset específico
   */
  private updateAssetProgress(
    name: string,
    progress: number,
    loaded: boolean = false
  ): void {
    this.assets.set(name, { name, progress, loaded });
    this.checkOverallProgress();
  }

  /**
   * Calcula progresso geral baseado em todos os assets
   */
  private checkOverallProgress(): void {
    if (this.assets.size === 0) return;

    const assetsArray = Array.from(this.assets.values());
    const totalProgress = assetsArray.reduce(
      (sum, asset) => sum + asset.progress,
      0
    );
    const overallProgress = Math.round(totalProgress / assetsArray.length);

    // Dispara callback de progresso
    if (this.onProgressCallback) {
      this.onProgressCallback(overallProgress);
    }

    // Verifica se todos os assets foram carregados
    const allLoaded = assetsArray.every((asset) => asset.loaded);
    if (allLoaded && this.onCompleteCallback) {
      this.clearTimeout();
      this.onCompleteCallback();
    }
  }

  /**
   * Inicia timeout de segurança
   */
  startTimeout(): void {
    this.clearTimeout();
    this.timeoutId = window.setTimeout(() => {
      console.warn('Preloader timeout reached, forcing completion');
      if (this.onCompleteCallback) {
        this.onCompleteCallback();
      }
    }, this.TIMEOUT_MS);
  }

  /**
   * Limpa timeout
   */
  private clearTimeout(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }

  /**
   * Limpa recursos
   */
  cleanup(): void {
    this.clearTimeout();
    this.assets.clear();
  }
}
