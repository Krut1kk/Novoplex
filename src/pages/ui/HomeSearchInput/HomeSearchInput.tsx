// react
import { ChangeEvent, FC, useEffect, useState } from "react";
// hooks
import { useDebounce } from "@/shared/libs/hooks/useDebounce";
// actions
import { homeActions } from "@/pages/model/actions/homeActions";
// assets
import SeachIcon from "../../libs/assets/svg/searchIcon.svg";
// ui
import { Input } from "@/shared/ui/Input";
// styles
import styles from "./HomeSearchInput.module.scss";

interface HomeSearchInputProps {}

export const HomeSearchInput: FC<HomeSearchInputProps> = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const debauncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    homeActions.setQuery(debauncedSearchQuery);
  }, [debauncedSearchQuery]);

  const onSeachChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.Input}>
      <Input
        onChange={onSeachChange}
        value={searchQuery}
        type="text"
        placeholder="Search..."
        icon={<SeachIcon />}
      />
    </div>
  );
};
