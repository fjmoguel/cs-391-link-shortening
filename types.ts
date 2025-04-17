export type ShortURL = {
  alias: string;
  url: string;
};

export type ShortenResponse = {
  success: boolean;
  alias: string;
  url: string;
};