export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  spotifyUrl: string; // The full Spotify URL (e.g. https://open.spotify.com/track/...) or URI
}

// Add your favorite Spotify track URLs here.
// You can get the URL from Spotify by clicking Share -> Copy Song Link
export const music: MusicItem[] = [
  // {
  //   id: "1",
  //   title: "Placeholder Song",
  //   artist: "Placeholder Artist",
  //   spotifyUrl: "https://open.spotify.com/track/..." 
  // }
];
