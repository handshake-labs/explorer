import { AddressTxInput } from "api";
import strings from "strings";

import TransactionLink from "components/Transaction/Link";
import BlockLink from "components/Block/Link";

interface Props {
  input: AddressTxInput;
  detailed?: boolean;
}

const TxInput: FC<Props> = ({ input, detailed }: Props) => (
  <div>
    {input.txid ===
    "0000000000000000000000000000000000000000000000000000000000000000" ? (
      "Coinbase input"
    ) : (
      <>
        <div> 
          {input.height === null ? ( strings.mempool) : ( <BlockLink height={input.height} />)}
        </div>
        <div>
          <TransactionLink txid={input.txid}>
            {detailed && <div className="icon tx">{input.index}</div>}
          </TransactionLink>
          {!detailed && <sub>{input.index}</sub>}
        </div>
        {detailed && (
          <>
            <div>
              <b>Output Index</b>&nbsp;{input.index}
            </div>
          </>
        )}
      </>
    )}
  </div>
);
export default TxInput;
