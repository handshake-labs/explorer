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
const page = 0;

const Mempool: React.FC<Props> = ({ limit, offset }) => {
  useTitle(`Mempool`);

  const transactions = useAPI("/mempool", {
    limit: 50,
    offset: 0,
  });

  if (!transactions) return <Spinner />;
  return (
    <>
      <h2 className="separator">Mempool</h2>
      {transactions.txs ? <Transactions transactions={transactions.txs} /> : 'Mempool is empty.'}
    </>
  );
};
export default Mempool;
