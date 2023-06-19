import { Transaction } from "api";

import BaseTable from "components/Table";
import TransactionLink from "components/Transaction/Link";
import TxInput from "components/Transaction/TxInput";
import TxOutput from "components/Transaction/TxOutput";

import "./Table.css";

interface Props {
  transactions: Transaction[];
}

const Table: FC<Props> = ({ transactions }: Props) => (
  <BaseTable>
    <BaseTable.TR>
      <BaseTable.TH id="txid" />
      <BaseTable.TH id="inputs" />
      <BaseTable.TH id="outputs" />
    </BaseTable.TR>
    {transactions.map(({ txid, inputs, outputs }) => (
      <BaseTable.TR>
        <BaseTable.TD>
          <TransactionLink txid={txid} />
        </BaseTable.TD>
        <BaseTable.TD>
          <div styleName="inputs">
            {inputs.map((input) => (
              <TxInput input={input} />
            ))}
          </div>
        </BaseTable.TD>
        <BaseTable.TD>
          <div styleName="inputs">
            {outputs.map((output) => (
              <TxOutput output={output} />
            ))}
          </div>
        </BaseTable.TD>
      </BaseTable.TR>
    ))}
  </BaseTable>
);
export default Table;
