import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Table from "components/Blocks/Table";
import Pagination from "components/Pagination";

interface Props {
  page: number;
}

const limit = 50;

const Block: React.FC<Props> = ({ page }) => {
  useTitle(`Blocks list`);

  const blocks = useAPI("/blocks", { limit, offset: page * limit });
  return blocks ? (
    <>
      <h2 className="separator"><span className="icon block">Blocks List</span></h2>
      <Table blocks={blocks.blocks}/>
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
