import { TxInput as TxInputModel } from "api";
import strings from "strings";

import TransactionLink from "components/Transaction/Link";
import BlockLink from "components/Block/Link";

interface Props {
  input: TxInputModel;
  detailed?: boolean;
}

const TxInput: FC<Props> = ({ input, detailed }: Props) => (
  <div>
    {input.hashPrevout ===
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
            <div>
              <b>Sequence</b>&nbsp;{input.sequence}
            </div>
          </>
        )}
      </>
    )}
  </div>
);
export default TxInput;
