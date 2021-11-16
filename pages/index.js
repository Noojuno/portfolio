import Head from "next/head";
import styles from "../styles/Home.module.css";

function scrollDown() {
  window.scrollTo(0, window.innerHeight);
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jono Kemball - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.name}>Jono Kemball</h1>

        <p className={styles.description}>A software developer from Auckland, New Zealand</p>

        <p className={styles.logos}>
          <a href="https://github.com/Noojuno">
            <img
              className={styles.logo}
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
            />
          </a>
          {/* <a href="https://github.com/Noojuno"><img src="https://i.imgur.com/SyFCt1j.png"></img></a> */}
        </p>
        <a className={styles.scroll} onClick={scrollDown}></a>
      </header>

      <main className={styles.header}>
        <h1 className={styles.name}>Jono Kemball</h1>

        <p className={styles.description}>A software developer from Auckland, New Zealand</p>

        <p className={styles.logos}>
          <a href="https://github.com/Noojuno">
            <img
              className={styles.logo}
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
            />
          </a>
          {/* <a href="https://github.com/Noojuno"><img src="https://i.imgur.com/SyFCt1j.png"></img></a> */}
        </p>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
