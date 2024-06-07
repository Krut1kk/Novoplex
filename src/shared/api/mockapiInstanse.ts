// libs
import axios from "axios";
// constants
import { mockapiBaseUrl } from "../libs/constants/mockapiBaseUrl";

export const mockapiInstanse = axios.create({
  baseURL: mockapiBaseUrl,
});
