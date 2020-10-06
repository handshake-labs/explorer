import { NameRecord } from "api";

import { Table as BaseTable, TR, TD, TH } from "components/Table";
import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";
import RecordItem from "components/Name/RecordItem";

interface Props {
  records: NameRecord[];
}

const Table: FC<Props> = ({ records }: Props) => (
  <BaseTable>
    <TR>
      <TH id="block" />
      <TH id="transaction" />
      <TH id="recordData" />
    </TR>
    {records.map(({ height, txid, data }) => (
      <TR>
        <TD>{height === null ? "Mempool" : <BlockLink height={height} />}</TD>
        <TD>
          <TransactionLink txid={txid} />
        </TD>
        <TD>
          {" "}
          <RecordItem data={data} />
        </TD>
      </TR>
    ))}
  </BaseTable>
);
export default Table;
