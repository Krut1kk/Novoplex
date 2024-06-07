// react
import { FC } from "react";
// types
import { IGame } from "../../model/types/game";
// styles
import styles from "./GameItem.module.scss";

interface GameItemProps extends IGame {}

export const GameItem: FC<GameItemProps> = ({ description, img, title }) => {
  return (
    <div className={styles.GameItem}>
      <div className={styles.pict}>
        <img className={styles.photo} src={img} alt={title} />
      </div>
      <div>
        <div className={styles.title}>{title}</div>
      </div>
      <div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
