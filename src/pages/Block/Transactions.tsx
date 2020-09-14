import { useAPI } from "../../hooks/api";

import Pagination from "../../components/Pagination";

interface Props {
  height: number;
  hash: string;
  page: number;
}

const Transactions: React.FC<Props> = ({ height, hash, page }) => {
  const state = useAPI("/block/txs", { hash, page });

  if (state === undefined) {
    return <div>Loading</div>;
  }
  if (state === null) {
    return <div>Not Found</div>;
  }
  const { txs, count, limit } = state;
  return (
    <>
      <div>{txs && txs.map((tx) => <div>{tx.rate}</div>)}</div>
      <Pagination
        page={page}
        count={count}
        limit={limit}
        route={(page: number) => ({ id: "block", params: { height, page } })}
      />
    </>
  );
};
export default Transactions;
