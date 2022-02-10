import styles from "./ScrollIcon.module.scss";

export default function ScrollIcon({ onClick }) {
  return <a className={styles.scroll} onClick={onClick}></a>;
}
