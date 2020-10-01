import { NameRecord } from "api";
import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";
import  RecordItem  from "components/Name/RecordItem";


interface Props {
  records: Array<NameRecord>;
}


const Table: React.FC<Props> = ({ records }: Props) => {
  return (
  <div className="table">
    <div>
      <div>
        <span>Block</span>
      </div>
      <div>
        <span>Transaction</span>
      </div>
      <div>
        <span>Data</span>
      </div>
    </div>
    {records.map((record, i) => (
      <div key={i}>
        <div>
          <BlockLink height={record.height} />
        </div>
        <div>
          <TransactionLink txid={record.txid} />
        </div>
        <div>
          <RecordItem data={record.data} />
        </div>
      </div>
    ))}
  </div>
)};
export default Table;
