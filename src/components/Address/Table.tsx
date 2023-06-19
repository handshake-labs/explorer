import { HistoryEntry } from "api";

import BaseTable from "components/Table";
import TransactionLink from "components/Transaction/Link";
import TxInput from "components/Address/TxInput";
import TxOutput from "components/Address/TxOutput";


interface Props {
  history: HistoryEntry[];
}

const Table: FC<Props> = ({ history }: Props) => (
  <BaseTable>
    <BaseTable.TR>
      <BaseTable.TH id="received" />
      <BaseTable.TH id="spent" />
    </BaseTable.TR>
    {history === null ? <div></div> : history.map((entry) => (
      <BaseTable.TR>
      <BaseTable.TD> <TxOutput output={entry.tx_output} /> </BaseTable.TD>
        <BaseTable.TD> {entry.tx_input.txid === null ? 'Not spent' : <TxInput input={entry.tx_input} />   }</BaseTable.TD>
      </BaseTable.TR>
    ))}
  </BaseTable>
);
export default Table;
