import { NameAction } from "api";

import Money from "components/Money";
import BaseTable from "components/Table";
import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";
import Link from "components/Link";

interface Props {
  actions: NameAction[];
}

const Table: FC<Props> = ({ actions }: Props) => (
  <BaseTable>
    <BaseTable.TR>
      <BaseTable.TH id="block" />
      <BaseTable.TH id="transaction" />
      <BaseTable.TH id="action" />
    </BaseTable.TR>
    {actions.map(({ height, txid, covenantAction }) => (
      <BaseTable.TR>
        <BaseTable.TD>
          {height === null ? <Link route={{ id: "mempool", params: { page: 0 } }}>Mempool</Link> : <BlockLink height={height} />}
        </BaseTable.TD>
        <BaseTable.TD>
          <TransactionLink txid={txid} />
        </BaseTable.TD>
        <BaseTable.TD>{covenantAction}</BaseTable.TD>
      </BaseTable.TR>
    ))}
  </BaseTable>
);
export default Table;
