import React from "react";
import { useAPI } from "../hooks/api";

import "./Block.css"

interface Props {
  height: number;
}

const Block: React.FC<Props> = ({ height }) => {
  const state = useAPI("/block", { height });
  if (state === undefined) {
    return <div>Loading</div>
  }
  if (state === null) {
    return <div>Not Found</div>
  }
  const { block, maxHeight } = state;
  console.log(block)
  let blockDateTime = new Date(block.time*1000)
  console.log(blockDateTime)
  return <div styleName="block">
    <div styleName="header">
      { block.height !== 0 ? <a href="#"></a> : "" }
      <span>Block { block.height }</span>
      { block.height !== maxHeight  ? <a href="#"></a> : "" }
    </div>
    <div><b>Hash:</b> {block.hash}</div>
    <div><b>Weight:</b> {block.weight}</div>
    <div><b>Time:</b> {block.time}</div>
    <div>Technical info:
      <li>size:{block.size}</li>
      <li>version:{block.version}</li>
      <li>hashMerkleRoot:{block.hashMerkleRoot}</li>
      <li>witnessRoot:{block.witnessRoot}</li>
      <li>treeRoot:{block.treeRoot}</li>
      <li>reservedRoot:{block.reservedRoot}</li>
      <li>mask:{block.mask}</li>
      <li>time:{blockDateTime.toLocaleString('en-GB')}</li>
      <li>bits:{block.bits}</li>
      <li>difficulty:{block.difficulty}</li>
      <li>chainwork:{block.chainwork}</li>
      <li>nonce:{block.nonce}</li>
      <li>extraNonce:{block.extraNonce}</li>
    </div>
  </div>


};
export default Block;
