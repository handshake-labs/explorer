import React from "react";
import { useAPI } from "../hooks/api";

import Info from "./Block/Info";
import Transactions from "./Block/Transactions";

interface Props {
  height: number;
  page: number;
}

const Block: React.FC<Props> = ({ height, page }) => {
  const state = useAPI("/block", { height });
  if (state === undefined) {
    return null;
  }
  if (state === null) {
    return <div>Not Found</div>;
  }
  const { block, maxHeight } = state;
  return (
    <>
      <Info
        block={block}
        isFirst={height === 0}
        isLast={height === maxHeight}
      />
      <Transactions hash={block.hash} page={page} />
    </>
  );
};
export default Block;
