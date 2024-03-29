import BaseLink from "components/Link";
import Hash from "components/Hash";

interface Props {
  txid: string;
  children?: Children;
}

const Link: FC<Props> = ({ txid, children }: Props) => (
  <BaseLink route={{ id: "transaction", params: { txid } }}>
    {children ? (
      children
    ) : (
      <span className="icon tx">
        <Hash hash={txid} />
      </span>
    )}
  </BaseLink>
);
export default Link;
