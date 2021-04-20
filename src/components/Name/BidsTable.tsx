import { NameBid } from "api";

import Money from "components/Money";
import BaseTable from "components/Table";
import BlockLink from "components/Block/Link";
import BaseLink from "components/Link";
import TransactionLink from "components/Transaction/Link";

interface Props {
  bids: NameBid[];
}

const Table: FC<Props> = ({ bids }: Props) => (
  <BaseTable>
    <BaseTable.TR>
      <BaseTable.TH id="bidBlock" />
      <BaseTable.TH id="transaction" />
      <BaseTable.TH id="lockup" />
      <BaseTable.TH id="reveal" />
    </BaseTable.TR>
    {bids.map(({ height, bid_txid, lockup, reveal, reveal_txid, reveal_index }) => (
      <BaseTable.TR>
        <BaseTable.TD>
          {height === null ? "Mempool" : <BlockLink height={height} />}
        </BaseTable.TD>
        <BaseTable.TD>
          <TransactionLink txid={bid_txid} />
        </BaseTable.TD>
        <BaseTable.TD>
          {" "}
          <Money value={lockup} />
        </BaseTable.TD>
        <BaseTable.TD>
          {reveal === null ?
            "None" :
            <>
              <div> 
                <TransactionLink txid={reveal_txid} children={<Money value={reveal} />} />
                </div>
            </>
              }
        </BaseTable.TD>
      </BaseTable.TR>
    ))}
  </BaseTable>
);
export default Table;
