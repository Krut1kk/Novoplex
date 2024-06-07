// react
import { FC } from "react";
// styles
import styles from "./Loader.module.scss";

interface LoaderProps {
  additionalClassname?: string;
}

export const Loader: FC<LoaderProps> = ({ additionalClassname }) => (
  <div className={styles.Loader + " " + additionalClassname}>
    <div className={styles.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={styles.text}>Loading</div>
  </div>
);
