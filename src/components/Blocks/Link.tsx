import  BaseLink from "components/Link";

interface Props {
  hash: string;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ hash,children }:Props) => (
<BaseLink route={{ id: "block", params: { hash, page:0 } }}>
  { children ? children : <span className="icon block">{hash.substr(0, 4)}&hellip;{hash.substr(hash.length - 4)}</span>}
</BaseLink>
)
export default Link
