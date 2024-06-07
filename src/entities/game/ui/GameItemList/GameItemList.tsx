// react
import { FC } from "react";
// ui
import { GameItem } from "../GameItem/GameItem";
// types
import { IGame } from "../../model/types/game";
// styles
import styles from "./GameItemList.module.scss";

interface GameItemListProps {
  games: IGame[];
}

export const GameItemList: FC<GameItemListProps> = ({ games }) => {
  return (
    <div className={styles.GameItemList}>
      {games.map(({ img, title, description, id }) => (
        <GameItem
          key={id}
          id={id}
          description={description}
          img={img}
          title={title}
        />
      ))}
    </div>
  );
};
