import { Transaction } from "api";

import TransactionLink from "components/Transaction/Link";
import TxInput from "components/Transaction/TxInput";
import TxOutput from "components/Transaction/TxOutput";

interface Props {
  transactions: Array<Transaction>;
}

import "./Table.css";

const Table: FC<Props> = ({ transactions }: Props) => (
  <div className="table">
    <div>
      <div>
        <span>Txid</span>
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
          {tx.inputs.map((input) => (
            <TxInput input={input} />
          ))}
        </div>
        <div styleName="outputs">
          {tx.outputs.map((output) => (
            <TxOutput output={output} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
export default Table;
