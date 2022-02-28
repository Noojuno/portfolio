import classNames from "classnames";
import styles from "./Button.module.scss";

type ReactElement = JSX.Element | JSX.Element[] | string | string[];

interface ButtonProps {
  children?: ReactElement;
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export function Button({ children, className, onClick = () => {}, href, disabled }: ButtonProps) {
  return (
    <a
      href={disabled ? null : href}
      className={classNames(styles.button, className, {
        [styles.button__disabled]: disabled,
      })}
      onClick={disabled ? null : onClick}
    >
      {children}
    </a>
  );
}
