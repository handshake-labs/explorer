import strings from "strings";
import { Transaction } from "api";

import BaseCard from "components/Card";
import BlockLink from "components/Block/Link";

interface Props {
  transaction: Transaction;
}

const Card: FC<Props> = ({ transaction }: Props) => (
  <BaseCard>
    <BaseCard.Prop id="txid">{transaction.txid}</BaseCard.Prop>
    <BaseCard.Prop id="block">
      {transaction.block_height === null ? (
        strings.mempool
      ) : (
        <BlockLink height={transaction.block_height} />
      )}
    </BaseCard.Prop>
    <BaseCard.Prop id="fee">{transaction.fee}</BaseCard.Prop>
    <BaseCard.Prop id="locktime">{transaction.locktime}</BaseCard.Prop>
    <BaseCard.Prop id="rate">{transaction.rate}</BaseCard.Prop>
    <BaseCard.Prop id="size">{transaction.size}</BaseCard.Prop>
    <BaseCard.Prop id="version">{transaction.version}</BaseCard.Prop>
    <BaseCard.Prop id="witness">{transaction.witnessTx}</BaseCard.Prop>
  </BaseCard>
);
export default Card;
