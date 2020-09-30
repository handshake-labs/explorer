import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import NotFound from "components/NotFound";
import Spinner from "components/Spinner";
import Card from "components/Transaction/Card";
import TxInput from "components/Transaction/TxInput";
import TxOutput from "components/Transaction/TxOutput";

interface Props {
  txid: string;
}

const Transaction: React.FC<Props> = ({ txid }) => {
  useTitle(`Transaction ${txid}`);

  const tx = useAPI("/tx", { txid });

  if (tx === undefined) return <Spinner />;
  if (tx === null) return <NotFound />;

  return (
    <>
      <Card transaction={tx}></Card>
      <div>
        <div>{tx.inputs.length} Inputs</div>
        {tx.inputs.map((input, i) => (
          <TxInput input={input} key={i} />
        ))}
      </div>
      <div>
        <div>{tx.outputs.length} Outputs</div>
        {tx.outputs.map((output, i) => (
          <TxOutput output={output} key={i} />
        ))}
      </div>
    </>
  );
};
export default Transaction;
