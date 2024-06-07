// types
import { HomeStateSchema } from "../types/home";

export const getHomeQuery = (state: HomeStateSchema) => state.query;
