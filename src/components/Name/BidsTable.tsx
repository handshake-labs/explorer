import { NameBid } from "api";

import Money from "components/Money";
import BaseTable from "components/Table";
import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";

import "./BidsTable.css";

interface Props {
  bids: NameBid[];
}

const Table: FC<Props> = ({ bids }: Props) => (
  <BaseTable>
      <div>
    <BaseTable.TR>
      <BaseTable.TH id="bidBlock" />
      <BaseTable.TH id="lockup" />
      <BaseTable.TH id="reveal" />
    </BaseTable.TR>
      </div>
    {bids.map(({ height, bid_txid, lockup, reveal, reveal_txid, winner }) => (
        <div class="table" style={winner ? "background-color:#cce5ed" : ""}>
      <BaseTable.TR>
        <BaseTable.TD>
          {height === null ? "Mempool" : <BlockLink height={height} />}
        </BaseTable.TD>
        <BaseTable.TD>
          {lockup === null ?  "None" : <> <div> <TransactionLink txid={bid_txid} children={<Money value={lockup} />} /> </div> </> }
        </BaseTable.TD>
        <BaseTable.TD>
          {reveal === null ?  "None" : <> <div> <TransactionLink txid={reveal_txid} children={<Money value={reveal} />} /> </div> </> }
        </BaseTable.TD>
      </BaseTable.TR>
      </div>
    ))}
  </BaseTable>
);
export default Table;
