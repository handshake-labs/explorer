import { Block } from "api";

import Hash from "components/Hash";
import Time from "components/Time";
import BaseTable from "components/Table";
import BlockLink from "components/Block/Link";

interface Props {
  blocks: Block[];
}

const Table: FC<Props> = ({ blocks }: Props) => (
  <BaseTable
    head={["Height", "Hash", "Time", "Size", "TXs count"]}
    rows={blocks.map(({ height, hash, time, size, txsCount }) => [
      <BlockLink height={height} />,
      <Hash hash={hash} />,
      <Time time={time} />,
      size,
      txsCount,
    ])}
  />
);
export default Table;
