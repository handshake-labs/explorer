import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import NotFound from "components/NotFound";
import Spinner from "components/Spinner";
import Hash from "components/Hash";

import Card from "components/Transaction/Card";
import TxInput from "components/Transaction/TxInput";
import TxOutput from "components/Transaction/TxOutput";

import "./Transaction.css";

interface Props {
  txid: string;
}

const Transaction: FC<Props> = ({ txid }) => {
  useTitle(`Transaction ${txid}`);

  const tx = useAPI("/tx", { txid });

  if (tx === undefined) return <Spinner />;
  if (tx === null) return <NotFound />;

  return (
    <>
      <h2 className="separator">
        <span className="icon tx">
          <Hash hash={txid} />
        </span>
      </h2>
      <Card transaction={tx}></Card>
      <h2 className="separator">
        <span>Inputs ({tx.inputs.length})</span>
      </h2>
      <div styleName="list">
        {tx.inputs.map((input, i) => (
          <TxInput input={input} key={i} detailed={true} />
        ))}
      </div>
      <h2 className="separator">
        <span>Outputs ({tx.outputs.length})</span>
      </h2>
      <div styleName="list">
        {tx.outputs.map((output, i) => (
          <TxOutput output={output} key={i} detailed={true} />
        ))}
      </div>
    </>
  );
};
export default Transaction;
