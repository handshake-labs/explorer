import { TxInput as TxInputModel } from "api";

import TransactionLink from "components/Transaction/Link";

interface Props {
  input: TxInputModel;
  detailed?: boolean;
}

const TxInput: React.FC<Props> = ({ input, detailed }: Props) => (
  <div>
    {" "}
    <div>
      {input.hashPrevout ===
      "0000000000000000000000000000000000000000000000000000000000000000" ? (
        "Coinbase input"
      ) : (
        <>
          <TransactionLink txid={input.hashPrevout} />
          &nbsp;:&nbsp;{input.indexPrevout}
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
