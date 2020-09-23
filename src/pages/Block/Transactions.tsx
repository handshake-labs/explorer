import Link from "components/Link";

import { Transaction } from "api";

interface Props {
  txs: Transaction[];
}

const Transactions: React.FC<Props> = ({ txs }) => (
  <div>
    {txs.map((tx) => (
      <p>
        <Link route={{ id: "transaction", params: { txid: tx.txid } }}>
          {tx.txid}
        </Link>
      </p>
    ))}
  </div>
);
export default Transactions;
