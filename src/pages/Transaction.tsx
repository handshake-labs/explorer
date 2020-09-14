import { useAPI } from "../hooks/api";
import { useTitle } from "../hooks/title";
import {
  RenderTx,
  RenderTxInput,
  RenderTxOutput,
} from "./Transaction/Transaction";

interface Props {
  txid: string;
}

const Transaction: React.FC<Props> = ({ txid }) => {
  useTitle(`Transaction ${txid}`);

  const tx = useAPI("/tx", { txid });
  if (tx === undefined) {
    return null;
  }
  if (tx === null) {
    return <div>Not Found</div>;
  }
  return RenderTx(tx);
};
export default Transaction;
