/**
 * Badge Color Detection Script
 * Detecta cor de fundo e ajusta contraste do badge
 */

export function setupBadgeColorDetection(): void {
  const badge = document.querySelector('.hero-spotify-badge') as HTMLElement;
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
  const video = document.getElementById(
    'hero-video'
  ) as HTMLVideoElement | null;
  const image = document.getElementById(
    'hero-fallback-image'
  ) as HTMLImageElement | null;
  const source = video && video.style.opacity === '1' ? video : image;

  if (!source) return;

  // Sample pixel color
  canvas.width = 1;
  canvas.height = 1;

  try {
    ctx.drawImage(source, x, y, 1, 1, 0, 0, 1, 1);
    const pixel = ctx.getImageData(0, 0, 1, 1).data;

    // Calculate luminance
    const luminance =
      (0.299 * (pixel[0] ?? 0) +
        0.587 * (pixel[1] ?? 0) +
        0.114 * (pixel[2] ?? 0)) /
      255;

    // Adjust badge color based on background luminance
    if (luminance > 0.5) {
      // Light background - use dark badge
      badge.style.setProperty('--badge-bg', 'rgba(0, 0, 0, 0.8)');
      badge.style.setProperty('--badge-text', '#ffffff');
    } else {
      // Dark background - use light badge
      badge.style.setProperty('--badge-bg', 'rgba(255, 255, 255, 0.9)');
      badge.style.setProperty('--badge-text', '#000000');
    }
  } catch (error) {
    // If CORS or other error, use default styling
    console.warn('Badge color detection failed:', error);
  }
}
