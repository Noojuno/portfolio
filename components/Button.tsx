import classNames from "classnames";
import styles from "./Button.module.scss";
import type { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export function Button({
  children,
  className,
  onClick = () => {},
  href,
  disabled,
}: ButtonProps) {
  return (
    <a
      href={disabled ? undefined : href}
      className={classNames(styles.button, className, {
        [styles.button__disabled]: disabled,
      })}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </a>
  );
}
