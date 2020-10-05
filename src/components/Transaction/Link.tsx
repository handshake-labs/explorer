import BaseLink from "components/Link";
import Hash from "components/Hash";

type Props = WithChildren<{
  txid: string;
}>;

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
