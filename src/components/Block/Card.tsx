import { Block } from "api";

import Time from "components/Time";
import BaseCard from "components/Card";

interface Props {
  block: Block;
}

const Card: FC<Props> = ({ block }: Props) => (
  <BaseCard
    rows={[
      ["Hash", block.hash],
      ["Time", <Time time={block.time} />],
      ["Transactions Count", block.txsCount],
      ["Size", block.size],
      ["Version", block.version],
      ["Hash Merkle Root", block.hashMerkleRoot],
      ["Witness Root", block.witnessRoot],
      ["Tree Root", block.treeRoot],
      ["Reserved Root", block.reservedRoot],
      ["Mask", block.mask],
      ["Bits", block.bits],
      ["Difficulty", block.difficulty],
      ["Chainwork", block.chainwork],
      ["Nonce", block.nonce],
      ["Extra Nonce", block.extraNonce],
    ]}
  />
);
export default Card;
