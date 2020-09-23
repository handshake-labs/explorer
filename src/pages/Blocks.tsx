import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Pagination from "components/Pagination";

import Info from "./Block/Info";
import Transactions from "./Block/Transactions";

interface Props {
  page: number;
}

const limit = 50;

const Block: React.FC<Props> = ({ page }) => {
  useTitle(`Blocks list`);

  const blocks = useAPI("/blocks", { limit, offset: page * limit });
  return blocks ? (
    <>
      { blocks.blocks.map((block) => block.hash)}
      <Pagination
          count={blocks.count}
          limit={limit}
          page={page}
          route={(page: number) => ({ id: "blocks", params: { page } })}
        />
    </>
  ) : null;
};
export default Block;
