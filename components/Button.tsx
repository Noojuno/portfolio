import classNames from "classnames";
import styles from "./Button.module.scss";

type ReactElement = JSX.Element | JSX.Element[] | string | string[];

interface ButtonProps {
  children?: ReactElement;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function Button({ children, className, onClick, href }: ButtonProps) {
  return (
    <a
      href={href}
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
