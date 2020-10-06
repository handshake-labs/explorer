import { Transaction } from "api";

import BaseCard from "components/Card";
import BlockLink from "components/Block/Link";

interface Props {
  transaction: Transaction;
}

const Card: FC<Props> = ({ transaction }: Props) => (
  <BaseCard
    rows={[
      ["Txid", transaction.txid],
      [
        "Block",
        transaction.block_height === null ? (
          "Mempool"
        ) : (
          <BlockLink height={transaction.block_height} />
        ),
      ],
      ["Fee", transaction.fee],
      ["Locktime", transaction.locktime],
      ["Rate", transaction.rate],
      ["Size", transaction.size],
      ["Version", transaction.version],
      ["Witness", transaction.witnessTx],
    ]}
  />
);
export default Card;
