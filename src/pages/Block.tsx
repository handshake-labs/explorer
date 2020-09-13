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
  return <div styleName="block">
    <div styleName="header">
      { block.height !== 0 ? <a href="#"></a> : "" }
      <span>Block { block.height }</span>
      { block.height !== maxHeight  ? <a href="#"></a> : "" }
    </div>
    <div><b>Hash:</b> {block.hash}</div>
  </div>
};
export default Block;
