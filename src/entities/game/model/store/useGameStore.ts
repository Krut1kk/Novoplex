// zustand
import { create } from "zustand";
// types
import { GameStateSchema } from "../types/game";

const initialState: GameStateSchema = {
  games: [],
  isLoading: false,
  error: null,
};

export const useGameStore = create(() => ({ ...initialState }));
