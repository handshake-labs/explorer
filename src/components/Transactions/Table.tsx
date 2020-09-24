import { Transaction } from "api";

import Link from "./Link";

interface Props {
  transactions: Array<Transaction>;
}

const Table: React.FC<Props> = ({ transactions }: Props) => (
  <div className="table">
    <div>
      <div>
        <span>TXID</span>
      </div>
      <div>
        <span></span>
      </div>
    </div>
    {transactions.map((tx) => (
      <div key={tx.txid}>
        <div>
          <Link txid={tx.txid} />
        </div>
        <div>Inputs: {tx.inputs.length}</div>
        <div>Outputs: {tx.inputs.length}</div>
      </div>
    ))}
  </div>
);
export default Table;
