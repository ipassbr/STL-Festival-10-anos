/**
 * Types for STL Festival 2026 Landing Page
 */

export interface VideoControlElements {
  video: HTMLVideoElement | null;
  fallbackImage: HTMLImageElement | null;
  badge: HTMLElement | null;
  logo: HTMLElement | null;
}

export interface CloudinaryTransforms {
  quality?: 'auto' | 'low' | 'high' | number;
  width?: number;
  height?: number;
  format?: 'auto' | 'mp4' | 'webm' | 'webp' | 'avif';
  crop?: 'fill' | 'fit' | 'limit' | 'scale';
}

export type BadgeVariant = 'fixed' | 'absolute' | 'static';
export type BadgePosition = 'left' | 'right';
export type BadgeSize = 'sm' | 'md' | 'lg';
