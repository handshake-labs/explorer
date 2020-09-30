import { NameRecord } from "api";

import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";

interface Props {
  records: Array<NameRecord>;
}

const Table: React.FC<Props> = ({ records }: Props) => (
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
          <div>{record.data}</div>
      </div>
    ))}
  </div>
);
export default Table;
