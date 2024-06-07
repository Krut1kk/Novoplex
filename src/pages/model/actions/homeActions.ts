import { useHomeStore } from "../store/useHomeStore";

const getState = () => useHomeStore.getState();

const setQuery = (query: string) => {
  useHomeStore.setState({ ...getState(), query: query });
};

export const homeActions = {
  setQuery,
};
