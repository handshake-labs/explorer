import { Block } from "api";

import Hash from "components/Hash";
import Time from "components/Time";
import BaseTable from "components/Table";
import BlockLink from "components/Block/Link";

interface Props {
  blocks: Block[];
}

const Table: FC<Props> = ({ blocks }: Props) => (
  <BaseTable>
    <BaseTable.TR>
      <BaseTable.TH id="hash" />
      <BaseTable.TH id="height" />
      <BaseTable.TH id="time" />
      <BaseTable.TH id="size" />
      <BaseTable.TH id="txsCount" />
    </BaseTable.TR>
    {blocks.map(({ height, hash, time, size, txsCount }) => (
      <BaseTable.TR>
        <BaseTable.TD>
          <BlockLink height={height} />
        </BaseTable.TD>
        <BaseTable.TD>
          <Hash hash={hash} />
        </BaseTable.TD>
        <BaseTable.TD>
          <Time time={time} />
        </BaseTable.TD>
        <BaseTable.TD>{size}</BaseTable.TD>
        <BaseTable.TD>{txsCount}</BaseTable.TD>
      </BaseTable.TR>
    ))}
  </BaseTable>
);
export default Table;
