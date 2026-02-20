/**
 * Asset URL utility — STL Festival
 *
 * Centraliza todas as referências de assets (imagens, vídeos, logos)
 * apontando para o bucket AWS S3 via variável de ambiente PUBLIC_S3_BASE_URL.
 *
 * Base: https://hml-ipass-assets.s3.amazonaws.com/files/assets/landingpage-stl
 */

const S3_BASE = import.meta.env.PUBLIC_S3_BASE_URL;

/**
 * Monta a URL completa de um asset no S3.
 * @param path - Caminho relativo ao bucket base (ex: 'logos/logo-stl.svg')
 */
export function getAssetUrl(path: string): string {
  const cleanPath = path.replace(/^\//, '');
  return `${S3_BASE}/${cleanPath}`;
}

/**
 * Assets nomeados usados em múltiplos componentes.
 * Paths relativos ao PUBLIC_S3_BASE_URL.
 */
export const ASSETS = {
  logo: getAssetUrl('logos/logo-stl.svg'),
  heroVideo: getAssetUrl('videos/hero.mp4'),
  heroFallback: getAssetUrl('fallback/hero-fallback.jpg'),
  lineupVideo: getAssetUrl('lineup.mp4'),
} as const;
