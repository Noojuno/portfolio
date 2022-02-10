import classNames from "classnames";
import styles from "./Card.module.scss";

export function Card({ title, children, footer, image = null, className }) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export function CardImage({ src, alt = null, className }) {
  return (
    <div className={classNames(styles.card__image, className)}>
      <img src={src} alt={alt} />
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={classNames(styles.card__content, className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }) {
  return (
    <div className={classNames(styles.card__header, className)}>
      <h1>{children}</h1>
    </div>
  );
}

export function CardText({ children }) {
  return <>{children}</>;
}

export function CardFooter({ children, className }) {
  return (
    <div className={classNames(styles.card__footer, className)}>{children}</div>
  );
}
