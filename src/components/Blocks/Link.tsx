import  BaseLink from "components/Link";
import  Hash from "components/Hash";

interface Props {
  hash: string;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ hash,children }:Props) => (
<BaseLink route={{ id: "block", params: { hash, page:0 } }}>
  { children ? children : <span className="icon block"><Hash hash={hash}/></span>}
</BaseLink>
)
export default Link
