// next
import Link from "next/link";
// react
import { FC } from "react";
// constants
import { getHomeRoute } from "@/shared/libs/constants/routes";
// styles
import styles from "./Logo.module.scss";

interface LogoProps {}

export const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link className={styles.Logo} href={getHomeRoute()}>
      Novoplex
    </Link>
  );
};
