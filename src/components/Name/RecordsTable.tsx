import { NameRecord } from "api";

import BaseTable from "components/Table";
import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";
import RecordItem from "components/Name/RecordItem";

interface Props {
  records: NameRecord[];
}

const Table: FC<Props> = ({ records }: Props) => (
  <BaseTable>
    <BaseTable.TR>
      <BaseTable.TH id="block" />
      <BaseTable.TH id="transaction" />
      <BaseTable.TH id="recordData" />
    </BaseTable.TR>
    {records.map(({ height, txid, data }) => (
      <BaseTable.TR>
        <BaseTable.TD>
          {height === null ? "Mempool" : <BlockLink height={height} />}
        </BaseTable.TD>
        <BaseTable.TD>
          <TransactionLink txid={txid} />
        </BaseTable.TD>
        <BaseTable.TD>
          {" "}
          <RecordItem data={data} />
        </BaseTable.TD>
      </BaseTable.TR>
    ))}
  </BaseTable>
);
export default Table;
