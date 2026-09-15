export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  cover?: string;
  note?: string;
}

// Placeholder status explicitly set
export const music: MusicItem[] = [];
