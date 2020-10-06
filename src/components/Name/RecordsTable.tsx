import { NameRecord } from "api";

import BaseTable from "components/Table";
import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";
import RecordItem from "components/Name/RecordItem";

interface Props {
  records: NameRecord[];
}

const Table: FC<Props> = ({ records }: Props) => (
  <BaseTable
    head={["Block", "Transaction", "Data"]}
    rows={records.map(({ height, txid, data }) => [
      height === null ? "Mempool" : <BlockLink height={height} />,
      <TransactionLink txid={txid} />,
      <RecordItem data={data} />,
    ])}
  />
);
export default Table;
