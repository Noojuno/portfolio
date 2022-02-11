import styles from "./ScrollIcon.module.scss";

interface ScrollIconProps {
  onClick?: () => void;
}

export function ScrollIcon({ onClick }: ScrollIconProps) {
  return <a className={styles.scroll} onClick={onClick}></a>;
}
