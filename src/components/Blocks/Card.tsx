import { Block } from "api";

interface Props {
  block: Block;
}

const Card: React.FC<Props> = ({ block }: Props) => (
  <div>
  <div><span>Height</span><span>#{block.height}</span></div>
  <div><span>Time</span><span>{block.time}</span></div>
  <div><span>TXs count</span><span>{block.txsCount}</span></div>
  <div><span>size</span><span>{block.size}</span></div>
  <div><span>version</span><span>{block.version}</span></div>
  <div><span>hashMerkleRoot</span><span>{block.hashMerkleRoot}</span></div>
  <div><span>witnessRoot</span><span>{block.witnessRoot}</span></div>
  <div><span>treeRoot</span><span>{block.treeRoot}</span></div>
  <div><span>reservedRoot</span><span>{block.reservedRoot}</span></div>
  <div><span>mask</span><span>{block.mask}</span></div>
  <div><span>time</span><span>{block.time}</span></div>
  <div><span>bits</span><span>{block.bits}</span></div>
  <div><span>difficulty</span><span>{block.difficulty}</span></div>
  <div><span>chainwork</span><span>{block.chainwork}</span></div>
  <div><span>nonce</span><span>{block.nonce}</span></div>
  <div><span>extraNonce</span><span>{block.extraNonce}</span></div>
  </div>
);
export default Card;
