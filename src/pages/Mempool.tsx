import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Hash from "components/Hash";
import Pagination from "components/Pagination";
import Spinner from "components/Spinner";

import Transactions from "components/Transaction/Table";

interface Props {
  page: number;
}

const limit = 50;

const Mempool: FC<Props> = ({ page }: Props) => {
  useTitle(`Mempool`);

  const transactions = useAPI("/mempool", {
    limit,
    offset: page * limit,
  });

  console.log(transactions)

  if (!transactions) return <Spinner />;
  return (
    <>
      <h2 className="separator">Mempool</h2>
      {transactions.txs.length > 0 ? (
        <Transactions transactions={transactions.txs} />
      ) : (
      <h3 >Mempool is empty</h3>
      )}
    </>
  );
};
export default Mempool;
