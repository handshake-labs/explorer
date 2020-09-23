import { Block } from "api";

import Time from "components/Time";

interface Props {
  block: Block;
}

const Card: React.FC<Props> = ({ block }: Props) => (
  <div className="card">
    <div>
      <span>Hash</span>
      <span>{block.hash}</span>
    </div>
    <div>
      <span>Height</span>
      <span>#{block.height}</span>
    </div>
    <div>
      <span>Time</span>
      <span><Time time={block.time}/></span>
    </div>
    <div>
      <span>Transactions Count</span>
      <span>{block.txsCount}</span>
    </div>
    <div>
      <span>Size</span>
      <span>{block.size}</span>
    </div>
    <div>
      <span>Version</span>
      <span>{block.version}</span>
    </div>
    <div>
      <span>Hash Merkle Root</span>
      <span>{block.hashMerkleRoot}</span>
    </div>
    <div>
      <span>Witness Root</span>
      <span>{block.witnessRoot}</span>
    </div>
    <div>
      <span>Tree Root</span>
      <span>{block.treeRoot}</span>
    </div>
    <div>
      <span>Reserved Root</span>
      <span>{block.reservedRoot}</span>
    </div>
    <div>
      <span>Mask</span>
      <span>{block.mask}</span>
    </div>
    <div>
      <span>Bits</span>
      <span>{block.bits}</span>
    </div>
    <div>
      <span>Difficulty</span>
      <span>{block.difficulty}</span>
    </div>
    <div>
      <span>Chainwork</span>
      <span>{block.chainwork}</span>
    </div>
    <div>
      <span>Nonce</span>
      <span>{block.nonce}</span>
    </div>
    <div>
      <span>Extra Nonce</span>
      <span>{block.extraNonce}</span>
    </div>
  </div>
);
export default Card;
