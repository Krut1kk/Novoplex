// ui
import { Logo } from "@/shared/ui/Logo";
import { HomeSearchInput } from "@/pages/ui/HomeSearchInput/HomeSearchInput";
// styles
import styles from "./Header.module.scss";

export const Header = ({}) => {
  return (
    <div className={styles.Header}>
      <Logo />
      <HomeSearchInput />
    </div>
  );
};
