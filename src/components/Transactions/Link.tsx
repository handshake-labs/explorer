import  BaseLink from "components/Link";

interface Props {
  txid: string;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ txid,children }:Props) => (
<BaseLink route={{ id: "transaction", params: { txid } }}>
  { children ? children : <span className="icon tx">{txid}</span>}
</BaseLink>
)
export default Link
