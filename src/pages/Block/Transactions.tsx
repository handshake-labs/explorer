import { useAPI } from "../../hooks/api";

interface Props {
  hash: string;
  page: number;
}

const Transactions: React.FC<Props> = ({ hash, page }) => {
  const state = useAPI("/block/txs", { hash, page });

  if (state === undefined) {
    return <div>Loading</div>;
  }
  if (state === null) {
    return <div>Not Found</div>;
  }
  const { txs, count, limit } = state;
  return <div>{txs && txs.map((tx) => <div>{tx.rate}</div>)}</div>;
};
export default Transactions;
