// react
import { FC, useEffect } from "react";
// entities
import { gameActions, GameItemList, useGameStore } from "@/entities/game";
import { getGameState } from "@/entities/game";
// selectors
import { getHomeQuery } from "../../model/selectors/homeSelectors";
import { useHomeStore } from "../../model/store/useHomeStore";
// ui
import { Loader } from "@/shared/ui/Loader";
// styles
import styles from "./HomeGamesList.module.scss";

interface HomeGamesListProps {}

export const HomeGamesList: FC<HomeGamesListProps> = ({}) => {
  const { games, error, isLoading } = useGameStore(getGameState);

  const query = useHomeStore(getHomeQuery);

  useEffect(() => {
    gameActions.getGames({
      query: query,
    });
  }, [query]);

  if (isLoading) {
    return <Loader additionalClassname={styles.loaderContainer} />;
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.HomeGamesList}>
      <GameItemList games={games} />
    </div>
  );
};
