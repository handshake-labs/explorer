import { TxOutput as TxOutputModel } from "api";

import NameLink from "components/Name/Link";
import Money from "components/Money";

interface Props {
  output: TxOutputModel;
  detailed?: boolean;
}

const TxOutput: React.FC<Props> = ({ output, detailed }: Props) => {
  return (
    <div>
      <div>
        <Money value={output.value} />
      </div>
      <div>{output.address}</div>
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
        <div>
          <b>{output.covenantAction}</b>
          {output.name && (
            <span>
              <NameLink name={output.name} />
            </span>
          )}
        </div>
      )}
    </div>
  );
};
export default TxOutput;
