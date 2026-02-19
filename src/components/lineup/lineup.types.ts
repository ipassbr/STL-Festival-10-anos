/**
 * Types for Lineup Section - STL Festival 2026
 */

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  genre?: string;
}

export interface LineupProps {
  artists: Artist[];
  videoPlaceholder?: string;
  videoUrl?: string;
}

export interface ScrollProgress {
  progress: number; // 0 a 1
  currentArtistIndex: number;
}

export interface LineupScrollOptions {
  onProgress: (progress: number) => void;
  threshold?: { start: number; end: number };
}
