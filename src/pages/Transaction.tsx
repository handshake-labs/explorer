import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";
import { RenderTxInput, RenderTxOutput } from "./Transaction/Transaction";

import Spinner from "components/Spinner";
import Card from "components/Transaction/Card";

interface Props {
  txid: string;
}

const Transaction: React.FC<Props> = ({ txid }) => {
  useTitle(`Transaction ${txid}`);

  const tx = useAPI("/tx", { txid });

  if (tx === undefined) return <Spinner />;
  if (tx === null) return <div>Not Found</div>;

  return (
    <>
      <Card transaction={tx}></Card>
      <div className="table">
        {tx.inputs.length} Tx inputs <p></p>
        {tx.inputs.map((txInput) => RenderTxInput(txInput))}
      </div>
      <div className="table">
        {tx.outputs.length} Tx outputs <p></p>
        {tx.outputs.map((txInput) => RenderTxOutput(txInput))}
      </div>
    </>
  );
};
export default Transaction;
