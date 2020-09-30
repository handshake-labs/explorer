import { Block } from "api";

import Hash from "components/Hash";
import Time from "components/Time";
import BlockLink from "components/Block/Link";

interface Props {
  blocks: Array<Block>;
}

const Table: React.FC<Props> = ({ blocks }: Props) => (
  <div className="table">
    <div>
      <div>
        <span>Height</span>
      </div>
      <div>
        <span>Hash</span>
      </div>
      <div>
        <span>Time</span>
      </div>
      <div>
        <span>Size</span>
      </div>
      <div>
        <span>TXs count</span>
      </div>
    </div>
    {blocks.map((block) => (
      <div key={block.hash}>
        <div>
          <BlockLink height={block.height} />
        </div>
        <div>
          <BlockLink height={block.height}>
            <Hash hash={block.hash} />
          </BlockLink>
        </div>
        <div>
          <Time time={block.time} />
        </div>
        <div>{block.size}</div>
        <div>{block.txsCount}</div>
      </div>
    ))}
  </div>
);
export default Table;
