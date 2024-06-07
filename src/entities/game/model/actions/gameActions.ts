// zustand
import { useGameStore } from "../store/useGameStore";
// services
import { gameService } from "../services/gameServices";
// types
import { IGame } from "../types/game";

const getState = () => useGameStore.getState();

const setGames = (games: IGame[]) => {
  useGameStore.setState({ ...getState, games: games, error: null });
};

const setIsLoading = (isLoading: boolean) => {
  useGameStore.setState({ ...getState, isLoading: isLoading });
};

const setError = (error: string | null) => {
  useGameStore.setState({ ...getState, error: error });
};

const getGames = async (params: Parameters<typeof gameService.getGames>[0]) => {
  setIsLoading(true);

  try {
    const { data } = await gameService.getGames(params);
    setGames(data);
  } catch (error) {
    setError((error as Error).message);
  } finally {
    setIsLoading(false);
  }
};

export const gameActions = {
  setGames,
  setIsLoading,
  setError,
  getGames,
};
