import "./Hash.css";

interface Props {
  hash: string;
}

const Hash: React.FC<Props> = ({ hash }: Props) => (
  <span styleName="hash">
    {hash.substr(0, 2)}
    <span styleName="ellipsis" />
    {hash.substr(hash.length - 6)}
  </span>
);
export default Hash;