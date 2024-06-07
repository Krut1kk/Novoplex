// zustand
import { create } from "zustand";
// types
import { HomeStateSchema } from "../types/home";

const initialState: HomeStateSchema = {
  query: "",
};

export const useHomeStore = create(() => ({ ...initialState }));
