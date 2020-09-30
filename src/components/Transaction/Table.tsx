import { Transaction } from "api";

import TransactionLink from "components/Transaction/Link";
import TxInput from "components/Transaction/TxInput";
import TxOutput from "components/Transaction/TxOutput";

interface Props {
  transactions: Array<Transaction>;
}

import "./Table.css";

const Table: React.FC<Props> = ({ transactions }: Props) => (
  <div className="table">
    <div>
      <div>
        <span>TxID</span>
      </div>
      <div>
        <span>Inputs</span>
      </div>
      <div>
        <span>Outputs</span>
      </div>
    </div>
    {transactions.map((tx) => (
      <div key={tx.txid}>
        <div>
          <TransactionLink txid={tx.txid} />
        </div>
        <div styleName="inputs">
          <div>
            <b>Count</b>
            <span>{tx.inputs.length}</span>
            <b>Sequence</b>
            <span>{tx.inputs[0].sequence}</span>
          </div>
          {tx.inputs.map((input) => (
            <TxInput input={input} />
          ))}
        </div>
        <div styleName="outputs">
          <div>
            <b>Count</b>
            <span>{tx.inputs.length}</span>
            <b>Amount</b>{" "}
            <span>
              {tx.outputs.reduce((value, output) => value + output.value, 0)}
            </span>
          </div>
          {tx.outputs.map((output) => (
            <TxOutput output={output} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
export default Table;
