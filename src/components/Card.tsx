import strings from "strings";

import "./Card.css";

interface PropertyProps {
  id: keyof typeof strings;
  children?: Children;
}

const Prop: FC<PropertyProps> = ({ id, children }: PropertyProps) => (
  <>
    <div styleName="key">{strings[id]}</div>
    <div styleName="value">{children}</div>
  </>
);

interface CardProps {
  children?: Children;
}

const Card: FC<CardProps> = ({ children }: CardProps) => (
  <div styleName="card">{children}</div>
);

const ICard = Object.assign(Card, { Prop });

export default ICard;
