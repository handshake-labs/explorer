import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Spinner from "components/Spinner";
import Table from "components/Block/Table";
import Pagination from "components/Pagination";

interface Props {
  page: number;
}

const limit = 50;

const Block: React.FC<Props> = ({ page }) => {
  useTitle(`Blocks List`);

  const blocks = useAPI("/blocks", { limit, offset: page * limit });

  if (!blocks) return <Spinner />;

  return (
    <>
      <h2 className="separator">
        <span className="icon block">&nbsp;</span>
      </h2>
      <Table blocks={blocks.blocks} />
      <Pagination
        count={blocks.count}
        limit={limit}
        page={page}
        route={(page: number) => ({ id: "blocks", params: { page } })}
      />
    </>
  );
};
export default Block;
