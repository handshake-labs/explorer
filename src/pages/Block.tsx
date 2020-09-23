import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Pagination from "components/Pagination";

import Info from "./Block/Info";
import Transactions from "./Block/Transactions";

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
      {block ? <Info block={block.block} /> : null}
      {transactions ? <Transactions txs={transactions.txs} /> : null}
      {block ? (
        <Pagination
          count={block.txs_count}
          limit={limit}
          page={page}
          route={(page: number) => ({ id: "block", params: { hash, page } })}
        />
      ) : null}
    </>
  );
};
export default Block;
