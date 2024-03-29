import Tippy from "@tippyjs/react";
import styles from "./ToolIcon.module.scss";

interface Tool {
  name: string;
  icon: string;
  hide?: boolean;
}

export const Tools: { [id: string]: Tool } = {
  /* Languages */
  HTML5: {
    name: "HTML5",
    icon: "/tools/html5.svg",
  },
  CSS: {
    name: "CSS3",
    icon: "/tools/css.svg",
  },
  React: {
    name: "React",
    icon: "/tools/react.svg",
  },
  TypeScript: {
    name: "TypeScript",
    icon: "/tools/typescript.svg",
  },
  JavaScript: {
    name: "JavaScript/ES2021",
    icon: "/tools/javascript.png",
  },
  CSharp: {
    name: "C#",
    icon: "/tools/csharp.svg",
  },
  PHP: {
    name: "PHP",
    icon: "/tools/php.svg",
  },
  Java: {
    name: "Java",
    icon: "/tools/java.png",
  },
  /* CSS Processors and related */
  SASS: {
    name: "SASS/SCSS",
    icon: "/tools/sass.svg",
  },
  LESS: {
    name: "LESS",
    icon: "/tools/less.svg",
    hide: true,
  },
  CSSModules: {
    name: "CSS Modules",
    icon: "/tools/cssmodules.svg",
  },
  /* Game Dev */
  Unity: {
    name: "Unity",
    icon: "/tools/unity.png",
  },
  PixiJS: {
    name: "PixiJS",
    icon: "/tools/pixijs.svg",
  },
  Electron: {
    name: "Electron",
    icon: "/tools/electron.png",
  },
  /* Backend */
  NodeJS: {
    name: "Node.js",
    icon: "/tools/nodejs.svg",
  },
  NextJS: {
    name: "Next.js",
    icon: "/tools/nextjs.svg",
  },
  SocketIO: {
    name: "Socket.IO",
    icon: "/tools/socket-io.svg",
  },
  AWS: {
    name: "Amazon Web Services (AWS)",
    icon: "/tools/aws.svg",
  },
  /* Databases */
  MongoDB: {
    name: "MongoDB",
    icon: "/tools/mongo.png",
  },
  MySQL: {
    name: "MySQL/MariaDB",
    icon: "/tools/mysql.png",
  },
  Redis: {
    name: "Redis",
    icon: "/tools/redis.png",
  },
  /* Misc */
  Wordpress: {
    name: "WordPress",
    icon: "/tools/wordpress.png",
  },
  Twitch: {
    name: "Twitch.tv",
    icon: "/tools/twitch.svg",
    hide: true,
  },
  MCForge: {
    name: "Minecraft Forge",
    icon: "/tools/forge.png",
    hide: true,
  },
  Minecraft: {
    name: "Minecraft",
    icon: "/tools/minecraft.png",
    hide: true,
  },
  ChromeExtension: {
    name: "Chrome Extensions/Chrome Web Store",
    icon: "/tools/chromestore.png",
  },
};

export function ToolIcon({ tool }: { tool: Tool }) {
  return (
    <Tippy content={tool.name}>
      <img className={styles.icon} src={tool.icon} alt={`${tool.name} Logo`} />
    </Tippy>
  );
}
