import classNames from "classnames";
import styles from "./Card.module.scss";

type ReactElement = JSX.Element | string;

interface CardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
}

interface CardImageProps extends CardProps {
  src: string;
  alt?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export function CardImage({ src, alt = null, className }: CardImageProps) {
  return (
    <div className={classNames(styles.card__image, className)}>
      <img src={src} alt={alt} />
    </div>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div className={classNames(styles.card__content, className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: CardProps) {
  return (
    <div className={classNames(styles.card__header, className)}>
      <h1>{children}</h1>
    </div>
  );
}

export function CardText({ children, className }: CardProps) {
  return <p className={classNames(styles.card__text, className)}>{children}</p>;
}

export function CardFooter({ children, className }: CardProps) {
  return (
    <div className={classNames(styles.card__footer, className)}>{children}</div>
  );
}
