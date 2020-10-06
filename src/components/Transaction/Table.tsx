import { Transaction } from "api";

import BaseTable from "components/Table";
import TransactionLink from "components/Transaction/Link";
import TxInput from "components/Transaction/TxInput";
import TxOutput from "components/Transaction/TxOutput";

interface Props {
  transactions: Transaction[];
}

import "./Table.css";

const Table: FC<Props> = ({ transactions }: Props) => (
  <BaseTable
    head={["Txid", "Inputs", "Outputs"]}
    rows={transactions.map(({ txid, inputs, outputs }) => [
      <TransactionLink txid={txid} />,
      <div styleName="inputs">
        {inputs.map((input) => (
          <TxInput input={input} />
        ))}
      </div>,
      <div styleName="inputs">
        {outputs.map((output) => (
          <TxOutput output={output} />
        ))}
      </div>,
    ])}
  />
);
export default Table;
