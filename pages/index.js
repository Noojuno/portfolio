import Head from "next/head";
import ScrollIcon from "../components/ScrollIcon";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jono Kemball - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div>
          <h1 className={styles.name}>Jono Kemball</h1>

          <p className={styles.description}>Software Developer</p>

          {/* <p className={styles.logos}>
            <a href="https://github.com/Noojuno">
              <img
                className={styles.logo}
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
              />
            </a>
            {/* <a href="https://github.com/Noojuno"><img src="https://i.imgur.com/SyFCt1j.png"></img></a> 
          </p> */}
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
