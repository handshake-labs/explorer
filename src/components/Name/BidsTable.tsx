import { NameBid } from "api";
import Money from "components/Money";

import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";

interface Props {
  bids: Array<NameBid>;
}

const Table: React.FC<Props> = ({ bids }: Props) => (
  <div className="table">
    <div>
      <div>
        <span>Block</span>
      </div>
      <div>
        <span>Transaction</span>
      </div>
      <div>
        <span>Lockup</span>
      </div>
      <div>
        <span>Reveal</span>
      </div>
    </div>
    {bids.map((bid, i) => (
      <div key={i}>
        <div>
          <BlockLink height={bid.height} />
        </div>
        <div>
          <TransactionLink txid={bid.txid} />
        </div>
        <div>
          <Money value={bid.lockup} />
        </div>
        <div>
          {bid.reveal === -1 ? <b>NONE</b> : <Money value={bid.reveal} />}
        </div>
      </div>
    ))}
  </div>
);
export default Table;
