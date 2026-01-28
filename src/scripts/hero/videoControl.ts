/**
 * Hero Video Control Script
 * Gerencia vídeo de fundo, fallback e error handling
 */

import type { VideoControlElements } from '@/types';

export type { VideoControlElements };

export function updateHeroContent(
  progress: number,
  elements: VideoControlElements
): void {
  const { video, fallbackImage } = elements;

  if (fallbackImage) {
    fallbackImage.style.opacity = String(Math.min(progress / 50, 1));
  }

  if (video && progress >= 100) {
    video.style.opacity = '1';
  }
}

export function startVideo(elements: VideoControlElements): void {
  const { video, fallbackImage } = elements;

  if (video) {
    video.play().catch((error: unknown) => {
      console.warn('Video autoplay failed:', error);
      // Keep fallback image visible if video fails to play
      if (fallbackImage) {
        fallbackImage.style.opacity = '1';
      }
    });
  }

  // Show fallback image immediately if no video
  if (!video && fallbackImage) {
    fallbackImage.style.opacity = '1';
  }
}

export function setupVideoErrorHandling(elements: VideoControlElements): void {
  const { video, fallbackImage } = elements;

  if (!video) return;

  video.addEventListener('error', () => {
    console.warn('Video failed to load, showing fallback image');
    video.style.display = 'none';

    if (fallbackImage) {
      fallbackImage.style.opacity = '1';
      fallbackImage.style.zIndex = '1';
    }
  });

  // Handle case where video source is not available
  video.addEventListener('loadstart', () => {
    // Video started loading, hide fallback once video is ready
    video.addEventListener(
      'loadeddata',
      () => {
        if (fallbackImage) {
          setTimeout(() => {
            fallbackImage.style.opacity = '0';
          }, 500);
        }
      },
      { once: true }
    );
  });
}
