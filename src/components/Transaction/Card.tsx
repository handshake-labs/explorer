import { Transaction } from "api";

import BlockLink from "components/Block/Link";

interface Props {
  transaction: Transaction;
}

const Card: React.FC<Props> = ({ transaction }: Props) => (
  <div className="card">
    <div>
      <span>TXID</span>
      <span>{transaction.txid}</span>
    </div>
    <div>
      <span>Block Height</span>
      <span>
        {transaction.block_height === -1 ? (
          "Mempool"
        ) : (
          <BlockLink height={transaction.block_height} />
        )}
      </span>
    </div>
    <div>
      <span>Fee</span>
      <span>{transaction.fee}</span>
    </div>
    <div>
      <span>Locktime</span>
      <span>{transaction.locktime}</span>
    </div>
    <div>
      <span>Rate</span>
      <span>{transaction.rate}</span>
    </div>
    <div>
      <span>Size</span>
      <span>{transaction.size}</span>
    </div>
    <div>
      <span>Version</span>
      <span>{transaction.version}</span>
    </div>
    <div>
      <span>Witness</span>
      <span>{transaction.witnessTx}</span>
    </div>
  </div>
);
export default Card;
