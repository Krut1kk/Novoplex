// types
import { IGame } from "./game";

export interface GetGamesRequest {
  query: string;
}

export type GetGamesResponse = IGame[];
