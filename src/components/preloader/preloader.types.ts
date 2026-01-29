/**
 * STL Festival Preloader Types
 *
 * Tipos TypeScript para o componente de preloader com cortinas verticais.
 * Implementa animação controlada por scroll virtual (desktop) ou auto-play (mobile).
 *
 * @see {@link https://github.com/ipassbr/STL-festival-ld/issues/3}
 */

export interface PreloaderProps {
  /** Logo source (SVG path). Default: Cloudinary logo URL */
  logoSrc?: string;
  /** Top phrase text. Default: "Faça parte da nossa história" */
  phraseTop?: string;
  /** Bottom phrase text. Default: "conexão, música, natureza e sustentabilidade" */
  phraseBottom?: string;
}

export interface PreloaderConfig {
  /** Auto-play delay on mobile (ms) */
  autoPlayDelay: number;
  /** Spring animation stiffness */
  springStiffness: number;
  /** Spring animation damping */
  springDamping: number;
  /** Scroll sensitivity (desktop) */
  scrollDelta: number;
  /** Touch sensitivity (mobile) */
  touchDelta: number;
}

/**
 * Valores padrão para as props do Preloader
 * Usa cores e mensagens oficiais do STL Festival
 */
export const PRELOADER_DEFAULTS: Required<PreloaderProps> = {
  logoSrc:
    'https://res.cloudinary.com/dazkdemvu/image/upload/v1769622514/stl-festival/logos/logo-stl_ydnwga.svg',
  phraseTop: 'Faça parte da nossa história',
  phraseBottom: 'conexão, música, natureza e sustentabilidade',
};

/**
 * Configuração de animação do Preloader
 * Otimizado para 60fps e responsividade
 */
export const PRELOADER_CONFIG: PreloaderConfig = {
  autoPlayDelay: 500,
  springStiffness: 100,
  springDamping: 20,
  scrollDelta: 5, // Aumentado para scroll mais responsivo (era 3, agora 5)
  touchDelta: 5, // Aumentado para touch mais responsivo (era 3, agora 5)
};
