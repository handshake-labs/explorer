import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Spinner from "components/Spinner";
import Hash from "components/Hash";
import Pagination from "components/Pagination";

import Card from "components/Blocks/Card";
import Transactions from "components/Transaction/Table";

interface Props {
  hash: string;
  page: number;
}

const limit = 50;

const Block: React.FC<Props> = ({ hash, page }) => {
  useTitle(`Block ${hash}`);

  const block = useAPI("/block", { hash });
  const transactions = useAPI("/block/txs", {
    hash,
    limit,
    offset: page * limit,
  });

  if (!block) return <Spinner />;

  return (
    <>
      <h2 className="separator">
        <span className="icon block">
          <Hash hash={hash} />
        </span>
      </h2>
      <Card block={block.block} />
      {transactions ? (
        <Transactions transactions={transactions.txs} />
      ) : (
        <Spinner />
      )}
      <Pagination
        count={block.block.txsCount}
        limit={limit}
        page={page}
        route={(page: number) => ({ id: "block", params: { hash, page } })}
      />
    </>
  );
};
export default Block;
