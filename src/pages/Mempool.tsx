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

const Mempool: React.FC<Props> = ({  page }: Props) => {
  useTitle(`Mempool`);

  const transactions = useAPI("/mempool", {
    limit,
    offset: page * limit,
  });

  if (!transactions) return <Spinner />;
  return (
    <>
      <h2 className="separator">Mempool</h2>
      {transactions ? <Transactions transactions={transactions.txs} /> : null}
    </>
  );
};
export default Mempool;
