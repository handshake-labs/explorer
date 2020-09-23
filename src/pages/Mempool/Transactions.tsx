import { useAPI } from "hooks/api";
import Link from "components/Link";
import Pagination from "components/Pagination";
import { hex2ascii } from "helpers";
import { MempoolTxOutput, MempoolTx } from "api";

interface Props {
  page: number;
}

// const RenderMempoolMempoolTxs = () => {
// }
//
//
const RenderTxInput = (txInput: TxInput) => (
  <>
    Transaction input:
    <li>
      <b>hashPrevout:</b>
      <Link
        route={{ id: "transaction", params: { txid: txInput.hashPrevout } }}
      >
        {txInput.hashPrevout}
      </Link>
    </li>
    <li>
      <b>indexPrevout:</b>
      {txInput.indexPrevout}
    </li>
    <li>
      <b>sequence:</b>
      {txInput.sequence}
    </li>
  </>
);

const RenderTxOutput = (txOutput: MempoolTxOutput) => (
  <>
    Transaction output:
    <li>
      <b>value: </b> {txOutput.value / 10 ** 6} HNS
    </li>
    <li>
      <b>address: </b> {txOutput.address}
    </li>
    {txOutput.name && (
      <li>
        <Link route={{ id: "name", params: { name: txOutput.name, page: 0 } }}>
          {txOutput.name}
        </Link>
      </li>
    )}
    <li>
      <b>covenantAction: </b>
      {txOutput.covenantAction}
    </li>
    {txOutput.covenantNameHash && (
      <li>
        <b>covenantNameHash: </b>
        {txOutput.covenantNameHash}
      </li>
    )}
    {txOutput.covenantHeight && (
      <li>
        <b>covenantHeight:</b>
        {txOutput.covenantHeight}
      </li>
    )}
    {txOutput.covenantName && (
      <li>
        <b>covenantName:</b>
        {txOutput.covenantName}
      </li>
    )}
    {txOutput.covenantBidHash && (
      <li>
        <b>covenantBidHash:</b>
        {txOutput.covenantBidHash}
      </li>
    )}
    {txOutput.covenantNonce && (
      <li>
        <b>covenantNonce:</b>
        {txOutput.covenantNonce}
      </li>
    )}
    {txOutput.covenantRecordData && (
      <li>
        <b>covenantRecordData:</b>
        {txOutput.covenantRecordData}
      </li>
    )}
    {txOutput.covenantBlockHash && (
      <li>
        <b>covenantBlockHash:</b>
        {txOutput.covenantBlockHash}
      </li>
    )}
    {txOutput.covenantVersion && (
      <li>
        <b>covenantVersion:</b>
        {txOutput.covenantVersion}
      </li>
    )}
    {txOutput.covenantAddress && (
      <li>
        <b>covenantAddress:</b>
        {txOutput.covenantAddress}
      </li>
    )}
    {txOutput.covenantClaimHeight && (
      <li>
        <b>covenantClaimHeight:</b>
        {txOutput.covenantClaimHeight}
      </li>
    )}
    {txOutput.covenantRenewalCount && (
      <li>
        <b>covenantRenewalCount:</b>
        {txOutput.covenantRenewalCount}
      </li>
    )}
  </>
);

const RenderTx = (tx: MempoolTx) => (
  <>
    Transaction:
    <div>
      <b>txid:</b> {tx.hash}{" "}
    </div>
    <li>
      <b>witnessTx:</b> {tx.witnessHash}{" "}
    </li>
    <li>
      <b>version:</b> {tx.version}
    </li>
    <li>
      <b>locktime:</b> {tx.locktime}
    </li>
    <div>
      {tx.inputs && tx.inputs.length} Tx inputs <p></p>
      {tx.inputs && tx.inputs.map((txInput) => RenderTxInput(txInput))}
    </div>
    <div>
      {tx.outputs && tx.outputs.length} Tx outputs <p></p>
      {tx.outputs && tx.outputs.map((txInput) => RenderTxOutput(txInput))}
    </div>
  </>
);

// const Transactions: React.FC<Props> = ({ hash, page }) => {
const Transactions: React.FC<Props> = ({ page }) => {
  const state = useAPI("/mempool", { page });

  if (state === undefined) {
    return <div>Loading</div>;
  }
  if (state === null) {
    return <div>Not Found</div>;
  }
  // const { txs } = state;
  // return <div>{txs && txs.map((tx) => <div>{tx.rate}</div>)}</div>;
  return (
    <>
      Mempool transactions:
      {state.txs && state.txs.map((tx) => <div>{RenderTx(tx)}</div>)}
    </>
  );
};
export default Transactions;
