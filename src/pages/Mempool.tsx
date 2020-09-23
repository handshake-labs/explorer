import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Transactions from "./Mempool/Transactions";

interface Props {
  page: number;
}

const Mempool: React.FC<Props> = ({ page }) => {
  useTitle(`Mempool transactions`);

  // const state = useAPI("/mempool", { page });
  // if (state === undefined) {
  //   return null;
  // }
  // if (state === null) {
  //   return <div>Not Found</div>;
  // }
  return (
    <>
      <Transactions page={page}></Transactions>
    </>
  );
};
export default Mempool;
