// react
import { ReactNode, FC, ChangeEvent, HTMLInputTypeAttribute } from "react";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  icon?: ReactNode;
  placeholder?: string;

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: HTMLInputTypeAttribute;
}

export const Input: FC<InputProps> = ({
  icon,
  placeholder,
  onChange,
  value,
  type,
}) => {
  return (
    <div className={styles.InputWrapper}>
      <input
        placeholder={placeholder}
        className={styles.Input}
        type={type}
        onChange={onChange}
        value={value}
      />
      {icon && <div className={styles.Icon}>{icon}</div>}
    </div>
  );
};
