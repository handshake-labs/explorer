import { NameBid } from "api";

import Money from "components/Money";
import BaseTable from "components/Table";
import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";

interface Props {
  bids: NameBid[];
}

const Table: FC<Props> = ({ bids }: Props) => (
  <BaseTable
    head={["Block", "Transaction", "Lockup", "Reveal"]}
    rows={bids.map(({ height, txid, lockup, reveal }) => [
      height === null ? "Mempool" : <BlockLink height={height} />,
      <TransactionLink txid={txid} />,
      <Money value={lockup} />,
      reveal === null ? "None" : <Money value={reveal} />,
    ])}
  />
);
export default Table;
