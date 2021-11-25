import styles from "./ScrollIcon.module.css";

export default function ScrollIcon({onClick}) {
  return <a className={styles.scroll} onClick={onClick}></a>
}