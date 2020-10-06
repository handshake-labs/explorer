import { Transaction } from "api";

import { Table as BaseTable, TR, TD, TH } from "components/Table";
import TransactionLink from "components/Transaction/Link";
import TxInput from "components/Transaction/TxInput";
import TxOutput from "components/Transaction/TxOutput";

import "./Table.css";

interface Props {
  transactions: Transaction[];
}

const Table: FC<Props> = ({ transactions }: Props) => (
  <BaseTable>
    <TR>
      <TH id="txid" />
      <TH id="inputs" />
      <TH id="outputs" />
    </TR>
    {transactions.map(({ txid, inputs, outputs }) => (
      <TR>
        <TD>
          <TransactionLink txid={txid} />
        </TD>
        <TD>
          <div styleName="inputs">
            {inputs.map((input) => (
              <TxInput input={input} />
            ))}
          </div>
        </TD>
        <TD>
          <div styleName="inputs">
            {outputs.map((output) => (
              <TxOutput output={output} />
            ))}
          </div>
        </TD>
      </TR>
    ))}
  </BaseTable>
);
export default Table;
