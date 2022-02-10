import classNames from "classnames";
import Head from "next/head";
import {
  Card,
  CardContent,
  CardFooter,
  CardImage,
  CardText,
  CardTitle,
} from "../components/Card";
import ScrollIcon from "../components/ScrollIcon";
import { ToolIcon, Tools } from "../components/ToolIcon";
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
                hey, i'm
                <span className={styles.text__name}>Jono!</span> a software
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
                src="/computer.png"
                alt="a picture of a computer with code on it"
              />
            </div>
          </div>
        </div>

        <ScrollIcon onClick={() => window.scrollTo(0, window.innerHeight)} />
      </header>

      <section className={styles.main}>
        <div className={classNames(styles.container, styles.main__content)}>
          <Card className={styles.aboutme}>
            <img width="300px" src="/me.jpg" />
            <div>
              <CardContent>
                <CardTitle>About Me</CardTitle>
                <CardText>
                  My name is Jono Kemball, and I'm a Software Developer based in
                  Auckland, New Zealand.
                </CardText>
              </CardContent>
              <CardContent>
                <CardTitle>Tools & Languages</CardTitle>
                <div className={styles.tools}>
                  {Object.keys(Tools).map((tool) => {
                    return <ToolIcon key={tool} tool={Tools[tool]} />;
                  })}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section className={styles.main}>
        <p className={styles.heading}>Portfolio</p>

        <div className={styles.main__content}>
          <Card className={styles.main__card}>
            <CardImage src="/splash.png" />

            <CardContent>
              <CardTitle>Sneaky Mouse</CardTitle>
              <CardText>Test!</CardText>
            </CardContent>
            <CardFooter className={styles.tools}>
              <div>
                <ToolIcon tool={Tools.CSharp} />
                <ToolIcon tool={Tools.Unity} />
                <ToolIcon tool={Tools.HTML5} />
                <ToolIcon tool={Tools.CSS} />
                <ToolIcon tool={Tools.JavaScript} />
                <ToolIcon tool={Tools.SocketIO} />
                <ToolIcon tool={Tools.Twitch} />
              </div>
            </CardFooter>
            <CardFooter>:)</CardFooter>
          </Card>

          <Card className={styles.main__card}>
            <CardImage src="/splash.png" />

            <CardContent>
              <CardTitle>Sneaky Mouse</CardTitle>
              <CardText>Sneaky Mouse is a </CardText>
            </CardContent>
            <CardFooter className={styles.tools}>
              <div>
                <ToolIcon tool={Tools.CSharp} />
                <ToolIcon tool={Tools.Unity} />
                <ToolIcon tool={Tools.HTML5} />
                <ToolIcon tool={Tools.CSS} />
                <ToolIcon tool={Tools.JavaScript} />
                <ToolIcon tool={Tools.SocketIO} />
                <ToolIcon tool={Tools.Twitch} />
              </div>
            </CardFooter>
            <CardFooter>:)</CardFooter>
          </Card>

          <Card className={styles.main__card}>
            <CardImage src="/splash.png" />

            <CardContent>
              <CardTitle>Sneaky Mouse</CardTitle>
              <CardText>Test!</CardText>
            </CardContent>
            <CardFooter className={styles.tools}>
              <div>
                <ToolIcon tool={Tools.CSharp} />
                <ToolIcon tool={Tools.Unity} />
                <ToolIcon tool={Tools.HTML5} />
                <ToolIcon tool={Tools.CSS} />
                <ToolIcon tool={Tools.JavaScript} />
                <ToolIcon tool={Tools.SocketIO} />
                <ToolIcon tool={Tools.Twitch} />
              </div>
            </CardFooter>
            <CardFooter>:)</CardFooter>
          </Card>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="https://github.com/Noojuno/portfolio">View source on GitHub</a>
      </footer>
    </div>
  );
}
