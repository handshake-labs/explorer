import { useAPI } from "../hooks/api";
import { useTitle } from "../hooks/title";


interface Props {
  txid: string;
  page: number;
}

const Transaction: React.FC<Props> = ({ txid, page }) => {
  useTitle(`Transaction ${txid}`);
  
  const state = useAPI("/tx", { txid });
  console.log("www");
  if (state === undefined) {
    return null;
  }
  if (state === null) {
    return <div>Not Found</div>;
  }
  // const { transaction } = state;
  return (
    "test"
  );
};
export default Transaction;
