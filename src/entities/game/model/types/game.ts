export interface IGame {
  id: string;
  img: string;
  title: string;
  description: string;
}

export interface GameStateSchema {
  games: IGame[];
  isLoading: boolean;
  error: string | null;
}
