// api
import { mockapiInstanse } from "@/shared/api/mockapiInstanse";
// types
import { GetGamesRequest, GetGamesResponse } from "../types/gameServices";

class GameService {
  private gameServiceEndpoint = "/games";

  async getGames(params: GetGamesRequest) {
    const queryParams = new URLSearchParams();

    if (params.query) {
      queryParams.append("title", params.query);
    }

    const query = queryParams.toString();

    return mockapiInstanse.get<GetGamesResponse>(
      `${this.gameServiceEndpoint}?${query}`
    );
  }
}

export const gameService = new GameService();
