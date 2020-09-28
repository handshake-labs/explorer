import Link from "components/Link";
import { TxInput, TxOutput, Transaction } from "api";
import { hex2ascii } from "helpers";

const RenderTxInput = (txInput: TxInput) => (
    <>
        {txInput.hashPrevout == "0".repeat(64) ?
            <h1>Coinbase input</h1>
            :
            <>
                <li>
                    <b>hashPrevout:</b>
                    <Link route={{ id: "transaction", params: { txid: txInput.hashPrevout } }} >
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
        }
    </>
);

const RenderTxOutput = (txOutput: TxOutput) => (
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
                <b>name: </b>
                <Link route={{ id: "name", params: { name:txOutput.name, page: 0 }, }} >
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

export { RenderTxOutput, RenderTxInput };
