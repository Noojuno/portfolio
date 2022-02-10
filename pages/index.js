import Head from "next/head";
import ScrollIcon from "../components/ScrollIcon";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Jono Kemball - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col__name}>
              <h1 className={styles.text}>
                hello, i'm
                <span className={styles["text__name"]}>Jono!</span> a software
                developer
              </h1>
              <div>&nbsp;</div>
              <p className={styles.links}>
                <a href="https://github.com/Noojuno">GitHub</a> •{" "}
                <a href="https://twitter.com/jonokemball">Twitter</a> •{" "}
                <a href="mailto:jono@runed.co">Email</a>
              </p>
            </div>
            <div className={styles.col__image}>
              <img
                width="480px"
                src="/puter.png"
                alt="a picture of a computer with code on it"
              />
            </div>
          </div>
        </div>

        <ScrollIcon onClick={() => window.scrollTo(0, window.innerHeight)} />
      </header>

      <main className={styles.main}>
        <p className={styles.heading}>Portfolio</p>
      </main>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <img src="https://i2.wp.com/jonokemball.com/wp-content/uploads/2019/02/fearured-image-voxel.png?w=825&ssl=1" />
          </div>
          <div className="one-half column">
            <img src="https://i2.wp.com/jonokemball.com/wp-content/uploads/2019/02/fearured-image-voxel.png?w=825&ssl=1" />
          </div>
        </div>
      </div>
    </div>
  );
}
