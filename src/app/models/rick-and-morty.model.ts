export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
}

export interface CharacterApiParams {
  name?: string;
  page?: number;
}

export interface CharacterApiResponse {
  info: {
    count: number;
    pages: 42;
  };
  results: Character[];
}
