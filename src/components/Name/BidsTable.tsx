import { NameBid } from "api";

import Money from "components/Money";
import { Table as BaseTable, TR, TD, TH } from "components/Table";
import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";

interface Props {
  bids: NameBid[];
}

const Table: FC<Props> = ({ bids }: Props) => (
  <BaseTable>
    <TR>
      <TH id="block" />
      <TH id="transaction" />
      <TH id="lockup" />
      <TH id="reveal" />
    </TR>
    {bids.map(({ height, txid, lockup, reveal }) => (
      <TR>
        <TD>{height === null ? "Mempool" : <BlockLink height={height} />}</TD>
        <TD>
          <TransactionLink txid={txid} />
        </TD>
        <TD>
          {" "}
          <Money value={lockup} />
        </TD>
        <TD>{reveal === null ? "None" : <Money value={reveal} />}</TD>
      </TR>
    ))}
  </BaseTable>
);
export default Table;
