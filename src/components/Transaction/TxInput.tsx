import { TxInput as TxInputModel } from "api";

import TransactionLink from "components/Transaction/Link";

interface Props {
  input: TxInputModel;
}

const TxInput: React.FC<Props> = ({ input }: Props) => (
  <div>
    {input.hashPrevout ===
    "0000000000000000000000000000000000000000000000000000000000000000" ? (
      "Coinbase input"
    ) : (
      <div>
        <TransactionLink txid={input.hashPrevout} /> #{input.indexPrevout}
      </div>
    )}
  </div>
);
export default TxInput;
