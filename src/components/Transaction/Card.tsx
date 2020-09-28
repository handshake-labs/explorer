import { Transaction } from "api";
import Link from "components/Link";

import Time from "components/Time";

interface Props {
  transaction: Transaction;
}

const Card: React.FC<Props> = ({ transaction }: Props) => (
  <div className="card">
    <div>
      <span>txid</span>
      <span>{transaction.txid}</span>
    </div>
    <div>
      <span>block</span>
      <span>
        <Link route={{ id: "blockByHeight", params: { height: transaction.height, page: 0} }}>
          {transaction.height}
        </Link>
      </span>
    </div>
    <div>
      <span>fee</span>
      <span>{transaction.fee}</span>
    </div>
    <div>
      <span>locktime</span>
      <span>{transaction.locktime}</span>
    </div>
    <div>
      <span>rate</span>
      <span>{transaction.rate}</span>
    </div>
    <div>
      <span>size</span>
      <span>{transaction.size}</span>
    </div>
    <div>
      <span>version</span>
      <span>{transaction.version}</span>
    </div>
    <div>
      <span>witness</span>
      <span>{transaction.witnessTx}</span>
    </div>
  </div>
  // inputs: [{…}]
  // outputs: [{…}]
);
export default Card;
