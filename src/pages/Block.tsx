import React from "react";
import { useHistoryState } from "../hooks/history";

import { BlockResponse } from "../types/api"

interface Props {
  hash: string
}

const Block: React.FC<Props> = ({ hash }) => {
  const [state, setState] = useHistoryState<BlockResponse>()
  return (
    <>
      <h1>Block information</h1>
    </>
  );
};
export default Block;
