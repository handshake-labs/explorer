import "./Hash.css";

interface Props {
  hash: string;
}

const Hash: React.FC<Props> = ({ hash }: Props) => (
  <span styleName="hash">
    {hash.substr(0, 12)}
    <span styleName="ellipsis" />
    {hash.substr(hash.length - 12)}
  </span>
);
export default Hash;
