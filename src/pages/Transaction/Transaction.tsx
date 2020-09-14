import Link from "../../components/Link";
import { TxInput, TxOutput, Transaction } from "../../api";

const RenderTxInput = (txInput: TxInput) => <>
  Transaction input:
  <li><b>hashPrevout:</b>{txInput.hashPrevout}</li>
  <li><b>indexPrevout:</b>{txInput.indexPrevout}</li>
  <li><b>sequence:</b>{txInput.sequence}</li>
</>

const RenderTxOutput = (txOutput: TxOutput) => <>
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

const RenderTx = (tx: Transaction) => <>
  Transaction:
  <div><b>txid:</b> {tx.txid} </div>
  <li><b>witnessTx:</b> {tx.witnessTx} </li>
  <li><b>fee:</b> {tx.fee}</li>
  <li><b>rate:</b> {tx.rate}</li>
  <li><b>version:</b> {tx.version}</li>
  <li><b>locktime:</b> {tx.locktime}</li>
  <li><b>size:</b> {tx.size}</li>
  <li><b>block height:</b><Link route={{ id: "block", params: { height: tx.height, page: 0 }, }} > {tx.height} </Link> </li>
  <div>{tx.inputs && tx.inputs.length} Tx inputs <p></p>{tx.inputs && tx.inputs.map((txInput) => RenderTxInput(txInput))}</div>;
  <div>{tx.outputs && tx.outputs.length} Tx outputs <p></p>{tx.outputs && tx.outputs.map((txInput) => RenderTxOutput(txInput))}</div>;
</>

export {RenderTx, RenderTxOutput, RenderTxInput};
