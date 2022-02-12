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
                  {Object.keys(Tools)
                    .filter((t) => !Tools[t].hide)
                    .map((tool) => {
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
            <CardImage src="/projects/portfolio.jpg" />

            <CardContent>
              <CardTitle>2022 Portfolio</CardTitle>
              <CardText>
                The very website you are on right now! This website was built to
                show off all the projects I have worked on.
              </CardText>
              <CardText>
                It is built using React and Next.js with SCSS Modules for the
                styling.
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
              <Button href="https://github.com/Noojuno/portfolio">
                GitHub
              </Button>
            </CardFooter>
          </Card>

          <Card className={styles.project__card}>
            <CardImage src="/projects/puppetpals.png" />

            <CardContent>
              <CardTitle>Puppet Pals</CardTitle>
              <CardText>
                A virtual puppeteering tool designed for live shows and online
                tabletop RPG games. Initially built in C# using the Unity game
                engine in 2017, I took over active development in 2019.
              </CardText>
              <CardText>
                It is currently undergoing a rewrite <em>(pictured above)</em>{" "}
                using React, TypeScript, and Electron with PixiJS as the
                rendering engine to allow for browser-based use.
              </CardText>
              <CardText></CardText>
            </CardContent>
            <CardFooter className={styles.project__tools}>
              <div>
                <ToolIcon tool={Tools.CSharp} />
                <ToolIcon tool={Tools.Unity} />
                <ToolIcon tool={Tools.HTML5} />
                <ToolIcon tool={Tools.CSS} />
                <ToolIcon tool={Tools.JavaScript} />
                <ToolIcon tool={Tools.React} />
                <ToolIcon tool={Tools.PixiJS} />
                <ToolIcon tool={Tools.Electron} />
                <ToolIcon tool={Tools.SocketIO} />
              </div>
            </CardFooter>
            <CardFooter className={styles.project__buttons}>
              <Button disabled>Demo Video</Button>
            </CardFooter>
          </Card>

          <Card className={styles.project__card}>
            <CardImage src="/projects/sneakymouse.jpg" />

            <CardContent>
              <CardTitle>Sneaky Mouse</CardTitle>
              <CardText>
                A way for the streamer <em>rawb</em> on Twitch.tv to interact
                with his audience. Controlled through a live chat as well as a
                web app, Sneaky Mouse allows viewers to customize a mouse avatar
                by collecting cheese, hats, and other items.
              </CardText>
              <CardText>
                The game itself is written using C# in the Unity game engine,
                with a backend written in JS using Node.js and WebSockets. The
                web app is written in JS using React.
              </CardText>
              <CardText>
                Sneaky Mouse recently passed <em>8000</em> unique lifetime
                users.
              </CardText>
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
            <CardImage src="/projects/mcm.jpg" />

            <CardContent>
              <CardTitle>Multi Character Mod</CardTitle>
              <CardText>
                A mod for Minecraft that adds support for multiple characters in
                a single world. It has built in integration with several other
                mods, and has been adopted by multiple medium - large Minecraft
                servers.
              </CardText>
              <CardText>Built for the SneakyRP Minecraft server.</CardText>
            </CardContent>
            <CardFooter className={styles.project__tools}>
              <div>
                <ToolIcon tool={Tools.Java} />
                <ToolIcon tool={Tools.MCForge} />
                <ToolIcon tool={Tools.Minecraft} />
              </div>
            </CardFooter>
            <CardFooter className={styles.project__buttons}>
              <Button href="https://www.curseforge.com/minecraft/mc-mods/multi-character-mod">
                CurseForge
              </Button>
              <Button href="https://github.com/Noojuno/RoosterTeethPlusPlus">
                GitHub
              </Button>
            </CardFooter>
          </Card>

          <Card className={styles.project__card}>
            <CardImage src="/projects/ldjam.jpg" />

            <CardContent>
              <CardTitle>Ludum Dare</CardTitle>
              <CardText>
                The site that hosts the 48 hour Ludum Dare game jam. It is built
                with a Preact and JavaScript frontend, and a custom CMS built
                using PHP and MySQL in the backend.
              </CardText>
              <CardText>
                My main contributions were building a custom router system for
                the node-based CMS, building reusable grid layout components,
                and general bugfixes.
              </CardText>
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
            <CardImage src="/projects/gateless.jpg" />

            <CardContent>
              <CardTitle>gateless</CardTitle>
              <CardText>
                A wrapper for AWS Lambda and API Gateway in JavaScript. It was
                designed to simplify requests by removing unnecessary
                boilerplate.
              </CardText>
            </CardContent>
            <CardFooter className={styles.project__tools}>
              <div>
                <ToolIcon tool={Tools.JavaScript} />
                <ToolIcon tool={Tools.NodeJS} />
                <ToolIcon tool={Tools.AWS} />
              </div>
            </CardFooter>
            <CardFooter className={styles.project__buttons}>
              <Button href="https://www.npmjs.com/package/gateless">NPM</Button>

              <Button href="https://github.com/Noojuno/gateless">GitHub</Button>
            </CardFooter>
          </Card>

          <Card className={styles.project__card}>
            <CardImage src="/projects/rtpp.jpg" />

            <CardContent>
              <CardTitle>Rooster Teeth++</CardTitle>
              <CardText>
                A Chrome Extension that hooks into the Rooster Teeth website to
                add features and tweak the website layout.
              </CardText>
              <CardText>
                Many of the features implemented by my extension were later
                implemented by the team at Rooster Teeth. At it's peak it was
                gaining an average of <em>50</em> new users a day, with an all
                time peak of just over <em>1300</em> active users.
              </CardText>
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
        <p>
          <a href="#">back to top &uarr;</a>
        </p>
        <a href="https://github.com/Noojuno/portfolio">view source on GitHub</a>
      </footer>
    </div>
  );
}
