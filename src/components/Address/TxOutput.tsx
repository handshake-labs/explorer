import { TxOutput as TxOutputModel } from "api";

import Hash from "components/Hash";
import BlockLink from "components/Block/Link";
import TransactionLink from "components/Transaction/Link";
import Money from "components/Money";
import NameLink from "components/Name/Link";
import AddressLink from "components/Address/Link";

import "./TxOutput.css";

interface Props {
  output: TxOutputModel;
  detailed?: boolean;
}

const TxOutput: FC<Props> = ({ output, detailed }: Props) => {
  return (
    <div>
      <div> 
        <BlockLink height={output.height} />
      </div>
      <div> 
          <TransactionLink txid={output.txid}>
            {detailed && <div className="icon tx">{output.txid}</div>}
          </TransactionLink>
          {!detailed && <sub>{output.index}</sub>}
      </div>
      <div>
        <Money value={output.value} />
      </div>
      {detailed ? (
        <div>
          <div>
            <b>Action </b>
            <span>{output.covenantAction}</span>
          </div>
          {output.name && (
            <div>
              <b>Name</b>
              <span>
                <NameLink name={output.name} />
              </span>
            </div>
          )}
          {output.covenantName && (
            <div>
              <b>Covenant Name</b>
              <span>{output.covenantName}</span>
            </div>
          )}
          {output.covenantNameHash && (
            <div>
              <b>Name Hash</b>
              <span> {output.covenantNameHash}</span>
            </div>
          )}
          {output.covenantHeight && (
            <div>
              <b>Covenant Height</b> <span>{output.covenantHeight}</span>
            </div>
          )}
        </div>
      ) : (
        output.name && (
          <div>
            <b styleName="b">{output.covenantAction}</b>
            {output.name && (
              <span>
                <NameLink name={output.name} />
              </span>
            )}
          </div>
        )
      )}
    </div>
  );
};
export default TxOutput;
