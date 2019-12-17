export interface PlayerStreamState {
  playing: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number | undefined;
  currentTime: number | undefined;
  canplay: boolean;
  error: boolean;
}

export interface PlayerFile {
  url: string;
  name: string;
  artist?: string;
  album?: string;
}

export interface PlayerCurrentFile {
  index: number;
  file: PlayerFile;
}

export interface PlayerTheme {
  primary: string;
  secondary: string;
}

export interface PlayerConfig {
  artistAlbumSeparator?: string;
}
