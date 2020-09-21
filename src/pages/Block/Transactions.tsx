import { useAPI } from "../../hooks/api";
import Link from "../../components/Link";
import Pagination from "../../components/Pagination";

interface Props {
  height: number;
  hash: string;
  page: number;
}

// const Transactions: React.FC<Props> = ({ hash, page }) => {
const Transactions: React.FC<Props> = ({ height, hash, page }) => {
  const state = useAPI("/block/txs", { hash, page });

  if (state === undefined) {
    return <div>Loading</div>;
  }
  if (state === null) {
    return <div>Not Found</div>;
  }
  const { txs, count, limit } = state;
  // return <div>{txs && txs.map((tx) => <div>{tx.rate}</div>)}</div>;
  return (
    <>
      {" "}
      <div>
        {txs && txs.length} transactions{" "}
        {txs &&
          txs.map((tx) => (
            <p>
              <Link route={{ id: "transaction", params: { txid: tx.txid } }}>
                {tx.txid}
              </Link>
            </p>
          ))}
      </div>
      <Pagination
        page={page}
        count={count}
        limit={limit}
        route={(page: number) => ({ id: "block", params: { height, page } })}
      >
        {" "}
      </Pagination>
    </>
  );
};
export default Transactions;
