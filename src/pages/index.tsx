// ui
import { HomeGamesList } from "./ui/HomeGamesList/HomeGamesList";
// styles
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <HomeGamesList />
    </div>
  );
}
