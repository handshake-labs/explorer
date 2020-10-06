import "./Card.css";

interface Props {
  rows: Array<[string, Children]>;
}

const Card: FC<Props> = ({ rows }: Props) => (
  <div styleName="card">
    {rows.map(([key, value]) => (
      <div styleName="row">
        <div styleName="key">{key}</div>
        <div styleName="value">{value}</div>
      </div>
    ))}
  </div>
);
export default Card;
