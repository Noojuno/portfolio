import classNames from "classnames";
import Head from "next/head";
import { Button } from "../components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardImage,
  CardText,
  CardTitle,
} from "../components/Card";
import { ScrollIcon } from "../components/ScrollIcon";
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
        <div className={styles.container}>
          <Card className={styles.aboutme}>
            <img
              className={styles.aboutme__image}
              src="/me.jpg"
              alt="a picture of me"
            />
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
                <div className={styles.project__tools}>
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

        <div className={classNames(styles.container, styles.main__content)}>
          <Card className={styles.project__card}>
            <CardImage src="/projects/sneakymouse.jpg" />

            <CardContent>
              <CardTitle>Sneaky Mouse</CardTitle>
              <CardText>Test!</CardText>
            </CardContent>
            <CardFooter className={styles.project__tools}>
              <div>
                <ToolIcon tool={Tools.CSharp} />
                <ToolIcon tool={Tools.Unity} />
                <ToolIcon tool={Tools.HTML5} />
                <ToolIcon tool={Tools.CSS} />
                <ToolIcon tool={Tools.JavaScript} />
                <ToolIcon tool={Tools.React} />
                <ToolIcon tool={Tools.NodeJS} />
                <ToolIcon tool={Tools.MongoDB} />
                <ToolIcon tool={Tools.Twitch} />
              </div>
            </CardFooter>
            <CardFooter className={styles.project__buttons}>
              <Button disabled>Demo Video</Button>
            </CardFooter>
          </Card>

          <Card className={styles.project__card}>
            <CardImage src="/projects/portfolio.jpg" />

            <CardContent>
              <CardTitle>2022 Portfolio</CardTitle>
              <CardText>
                The very website you are on right now! This website was built to
                show off all the projects I have worked on.
              </CardText>
            </CardContent>
            <CardFooter className={styles.project__tools}>
              <div>
                <ToolIcon tool={Tools.HTML5} />
                <ToolIcon tool={Tools.CSS} />
                <ToolIcon tool={Tools.TypeScript} />
                <ToolIcon tool={Tools.React} />
                <ToolIcon tool={Tools.CSSModules} />
                <ToolIcon tool={Tools.SASS} />
                <ToolIcon tool={Tools.NextJS} />
              </div>
            </CardFooter>
            <CardFooter className={styles.project__buttons}>
              <Button>GitHub</Button>
            </CardFooter>
          </Card>

          <Card className={styles.project__card}>
            <CardImage src="/projects/ldjam.jpg" />

            <CardContent>
              <CardTitle>Ludum Dare</CardTitle>
              <CardText>Test!</CardText>
            </CardContent>
            <CardFooter className={styles.project__tools}>
              <div>
                <ToolIcon tool={Tools.HTML5} />
                <ToolIcon tool={Tools.CSS} />
                <ToolIcon tool={Tools.JavaScript} />
                <ToolIcon tool={Tools.React} />
                <ToolIcon tool={Tools.LESS} />
                <ToolIcon tool={Tools.PHP} />
                <ToolIcon tool={Tools.MySQL} />
              </div>
            </CardFooter>
            <CardFooter className={styles.project__buttons}>
              <Button href="https://ldjam.com/">Live Site</Button>

              <Button href="https://github.com/JammerCore/JammerCore">
                GitHub
              </Button>
            </CardFooter>
          </Card>

          <Card className={styles.project__card}>
            <CardImage src="/projects/rtpp.jpg" />

            <CardContent>
              <CardTitle>Rooster Teeth++</CardTitle>
              <CardText>Test!</CardText>
            </CardContent>
            <CardFooter className={styles.project__tools}>
              <div>
                <ToolIcon tool={Tools.HTML5} />
                <ToolIcon tool={Tools.CSS} />
                <ToolIcon tool={Tools.JavaScript} />
                <ToolIcon tool={Tools.React} />
                <ToolIcon tool={Tools.ChromeExtension} />
              </div>
            </CardFooter>
            <CardFooter className={styles.project__buttons}>
              <Button href="https://chrome.google.com/webstore/detail/rooster-teeth%20%20/joeobflmcmlhgjpbgolpdmpphaijhlee">
                Chrome Web Store
              </Button>
              <Button href="https://github.com/Noojuno/RoosterTeethPlusPlus">
                GitHub
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="https://github.com/Noojuno/portfolio">View source on GitHub</a>
      </footer>
    </div>
  );
}
