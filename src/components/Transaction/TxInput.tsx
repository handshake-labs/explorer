import { TxInput as TxInputModel } from "api";

import TransactionLink from "components/Transaction/Link";

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
          <div><TransactionLink txid={input.hashPrevout}>{detailed && <div className="icon tx">{input.hashPrevout}</div>}</TransactionLink>{!detailed && <sub>{input.indexPrevout}</sub>}</div>
          { detailed && <><div><b>Output Index</b>&nbsp;{input.indexPrevout}</div><div><b>Sequence</b>&nbsp;{input.sequence}</div></>}
        </>
      )}
    </div>
);
export default TxInput;
