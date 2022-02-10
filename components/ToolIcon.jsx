import Tippy from "@tippyjs/react";
import styles from "./ToolIcon.module.scss";

export const Tools = {
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
    icon: "/tools/csharp.png",
  },
  Unity: {
    name: "Unity",
    icon: "/tools/unity.png",
  },
  SocketIO: {
    name: "Socket.IO",
    icon: "/tools/socket-io.svg",
  },
  AWS: {
    name: "AWS",
    icon: "/tools/aws.png",
  },
  Twitch: {
    name: "Twitch.TV",
    icon: "/tools/twitch.svg",
  },
  NextJS: {
    name: "Next.js",
    icon: "/tools/nextjs.svg",
  },
};

export function ToolIcon({ tool }) {
  return (
    <Tippy content={tool.name}>
      <img className={styles.icon} src={tool.icon} />
    </Tippy>
  );
}
