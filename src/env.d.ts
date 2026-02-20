/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE: string;
  /** URL base do bucket S3 para todos os assets do projeto */
  readonly PUBLIC_S3_BASE_URL: string;
  readonly PUBLIC_SPOTIFY_PLAYLIST_URL: string;
  readonly PUBLIC_GA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
