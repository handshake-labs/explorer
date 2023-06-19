import { Block } from "api";

import Time from "components/Time";
import BaseCard from "components/Card";

interface Props {
  block: Block;
}

const Card: FC<Props> = ({ block }: Props) => (
  <BaseCard>
    <BaseCard.Prop id="hash">{block.hash}</BaseCard.Prop>
    <BaseCard.Prop id="time">
      <Time time={block.time} />
    </BaseCard.Prop>
    <BaseCard.Prop id="txsCount">{block.txsCount}</BaseCard.Prop>
    <BaseCard.Prop id="size">{block.size}</BaseCard.Prop>
    <BaseCard.Prop id="version">{block.version}</BaseCard.Prop>
    <BaseCard.Prop id="hashMerkleRoot">{block.hashMerkleRoot}</BaseCard.Prop>
    <BaseCard.Prop id="witnessRoot">{block.witnessRoot}</BaseCard.Prop>
    <BaseCard.Prop id="treeRoot">{block.treeRoot}</BaseCard.Prop>
    <BaseCard.Prop id="reservedRoot">{block.reservedRoot}</BaseCard.Prop>
    <BaseCard.Prop id="mask">{block.mask}</BaseCard.Prop>
    <BaseCard.Prop id="bits">{block.bits}</BaseCard.Prop>
    <BaseCard.Prop id="chainwork">{block.chainwork}</BaseCard.Prop>
    <BaseCard.Prop id="nonce">{block.nonce}</BaseCard.Prop>
    <BaseCard.Prop id="extraNonce">{block.extraNonce}</BaseCard.Prop>
  </BaseCard>
);
export default Card;
