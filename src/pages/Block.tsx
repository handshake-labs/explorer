import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import NotFound from "components/NotFound";
import Spinner from "components/Spinner";
import Pagination from "components/Pagination";

import Card from "components/Block/Card";
import Transactions from "components/Transaction/Table";

interface Props {
  height: number;
  page: number;
}

const limit = 50;

const Block: FC<Props> = ({ height, page }) => {
  useTitle(`Block ${height}`);

  const block = useAPI("/block", { height });
  const transactions = useAPI("/block/txs", {
    height,
    limit,
    offset: page * limit,
  });

  if (block === undefined) return <Spinner />;
  if (block === null) return <NotFound />;

  return (
    <>
      <h2 className="separator">
        <span className="icon block">{height} </span>
      </h2>
      <Card block={block.block} />
      <h2 className="separator">
        <span>Transactions ({block.block.txsCount}) </span>
      </h2>
      {transactions ? (
        <Transactions transactions={transactions.txs} />
      ) : (
        <Spinner />
      )}
      <Pagination
        count={block.block.txsCount}
        limit={limit}
        page={page}
        route={(page: number) => ({ id: "block", params: { height, page } })}
      />
    </>
  );
};
export default Block;
