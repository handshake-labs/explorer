import { Block } from "api";

import Hash from "components/Hash";
import Time from "components/Time";
import { Table as BaseTable, TR, TD, TH } from "components/Table";
import BlockLink from "components/Block/Link";

interface Props {
  blocks: Block[];
}

const Table: FC<Props> = ({ blocks }: Props) => (
  <BaseTable>
    <TR>
      <TH id="hash" />
      <TH id="height" />
      <TH id="time" />
      <TH id="size" />
      <TH id="txsCount" />
    </TR>
    {blocks.map(({ height, hash, time, size, txsCount }) => (
      <TR>
        <TD>
          <BlockLink height={height} />
        </TD>
        <TD>
          <Hash hash={hash} />
        </TD>
        <TD>
          <Time time={time} />
        </TD>
        <TD>{size}</TD>
        <TD>{txsCount}</TD>
      </TR>
    ))}
  </BaseTable>
);
export default Table;
