import { TxInput as TxInputModel } from "api";

import TransactionLink from "components/Transaction/Link";

interface Props {
  input: TxInputModel;
  detailed?: boolean;
}

const TxInput: FC<Props> = ({ input, detailed }: Props) => (
  <div>
    <div>
      {input.hashPrevout ===
      "0000000000000000000000000000000000000000000000000000000000000000" ? (
        "Coinbase input"
      ) : (
        <>
          <TransactionLink txid={input.hashPrevout} />
          <sub>{input.indexPrevout}</sub>
        </>
      )}
    </div>
    {detailed && (
      <div>
        <b>Sequence</b>
        <span>{input.sequence}</span>
      </div>
    )}
  </div>
);
export default TxInput;
