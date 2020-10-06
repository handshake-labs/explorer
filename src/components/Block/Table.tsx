import { Block } from "api";

import Hash from "components/Hash";
import Time from "components/Time";
import BlockLink from "components/Block/Link";
import BaseTable from "components/Table";

interface Props {
  blocks: Block[];
}

const Table: FC<Props> = ({ blocks }: Props) => (
  <BaseTable
    header={["Height", "Hash", "Time", "Size", "TXs count"]}
    rows={blocks.map((block) => [
      <BlockLink height={block.height} />,
      <BlockLink height={block.height}>
        <Hash hash={block.hash} />
      </BlockLink>,
      <Time time={block.time} />,
      block.size,
      block.txsCount,
    ])}
  />
);
export default Table;
