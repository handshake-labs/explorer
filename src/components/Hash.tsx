import "./Hash.css";

interface Props {
  hash: string;
}

const Hash: FC<Props> = ({ hash }: Props) => (
  <span styleName="hash">
    {hash.substr(0, 6)}
    <span styleName="ellipsis" />
    {hash.substr(hash.length - 6)}
  </span>
);
export default Hash;
