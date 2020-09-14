import { useAPI } from "../../hooks/api";

import Link from "../../components/Link";
import Pagination from "../../components/Pagination";

interface Props {
  height: number;
  hash: string;
  page: number;
}

function RenderTxInput(txInput) {
  return <>
    Transaction input:
    <li><b>hashPrevout:</b>{txInput.hashPrevout}</li>
    <li><b>indexPrevout:</b>{txInput.indexPrevout}</li>
    <li><b>sequence:</b>{txInput.sequence}</li>
  </>
}

function RenderTxOutput(txOutput) {
  return <>
    Transaction output:
    <li><b>value:</b>{txOutput.value}</li>
    <li><b>address:</b>{txOutput.address}</li>
    
    <li><b>covenantAction :</b>{txOutput.covenantAction }</li>
    { txOutput.covenantNameHash &&
    <li><b>covenantNameHash:</b>{txOutput.covenantNameHash}</li>
    }
    { txOutput.covenantHeight &&
    <li><b>covenantHeight:</b>{txOutput.covenantHeight}</li>
    }
    { txOutput.covenantName &&
    <li><b>covenantName:</b>{txOutput.covenantName}</li>
    }
    { txOutput.covenantBidHash &&
    <li><b>covenantBidHash:</b>{txOutput.covenantBidHash}</li>
    }
    { txOutput.covenantNonce &&
    <li><b>covenantNonce:</b>{txOutput.covenantNonce}</li>
    }
    { txOutput.covenantRecordData &&
    <li><b>covenantRecordData:</b>{txOutput.covenantRecordData}</li>
    }
    { txOutput.covenantBlockHash &&
    <li><b>covenantBlockHash:</b>{txOutput.covenantBlockHash}</li>
    }
    { txOutput.covenantVersion &&
    <li><b>covenantVersion:</b>{txOutput.covenantVersion}</li>
    }
    { txOutput.covenantAddress &&
    <li><b>covenantAddress:</b>{txOutput.covenantAddress}</li>
    }
    { txOutput.covenantClaimHeight &&
    <li><b>covenantClaimHeight:</b>{txOutput.covenantClaimHeight}</li>
    }
    { txOutput.covenantRenewalCount &&
    <li><b>covenantRenewalCount:</b>{txOutput.covenantRenewalCount}</li>
    }

  </>
}

function RenderTx(tx) {
  return <>

    Transaction:
    <div><b>txid:</b> {tx.txid} </div>
    <li><b>witnessTx:</b> {tx.witnessTx} </li>
    <li><b>fee:</b> {tx.fee}</li>
    <li><b>rate:</b> {tx.rate}</li>
    <li><b>version:</b> {tx.version}</li>
    <li><b>locktime:</b> {tx.locktime}</li>
    <li><b>size:</b> {tx.size}</li>
    <div>Tx inputs <p></p>{tx.inputs && tx.inputs.map((txInput) => RenderTxInput(txInput))}</div>;
    <div>Tx outputs <p></p>{tx.outputs && tx.outputs.map((txInput) => RenderTxOutput(txInput))}</div>;
  </>
}

// const Transactions: React.FC<Props> = ({ hash, page }) => {
const Transactions: React.FC<Props> = ({ height, hash, page }) => {
  const state = useAPI("/block/txs", { hash, page });

  if (state === undefined) {
    return <div>Loading</div>;
  }
  if (state === null) {
    return <div>Not Found</div>;
  }
  const { txs, count, limit } = state;
  // return <div>{txs && txs.map((tx) => <div>{tx.rate}</div>)}</div>;
  return <> <div>{txs && txs.map((tx) => 
    <p>
      <Link route={{ id: "transaction", params: {txid: tx.txid}}}>
        {tx.txid}
      </Link>
    </p>)}
    </div>
      <Pagination page={page} count={count} limit={limit} route={(page: number) => ({ id: "block", params: { height, page } })} > </Pagination>
    </>
};
export default Transactions;
