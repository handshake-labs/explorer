import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Hash from "components/Hash";
import Pagination from "components/Pagination";

import Card from "components/Blocks/Card";
import Transactions from "components/Transactions/Table";



interface Props {
  page: number;
}

const limit = 50;
const page=0

const Mempool: React.FC<Props> = ({ limit, offset }) => {
  useTitle(`Mempool`);

  const transactions = useAPI("/mempool", {
    limit: 50,
    offset: 0,
  });
  return (
    <>
      <h2 className="separator">
        Mempool
      </h2>
      {transactions ? <Transactions transactions={transactions.txs} /> : null}
    </>
  );
};
export default Mempool;
