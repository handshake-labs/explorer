import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Hash from "components/Hash";
import Pagination from "components/Pagination";

import Card from "components/Blocks/Card";
import Transactions from "components/Transactions/Table";

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
  return (
    <>
      <h2 className="separator"><span className="icon block"><Hash hash={hash}/></span></h2>
      {block ? <Card block={block.block} /> : null}
      {transactions ? <Transactions transactions={transactions.txs} /> : null}
      {block ? (
        <Pagination
          count={block.block.txsCount}
          limit={limit}
          page={page}
          route={(page: number) => ({ id: "block", params: { hash, page } })}
        />
      ) : null}
    </>
  );
};
export default Block;
