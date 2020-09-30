import { TxOutput as TxOutputModel } from "api";

import NameLink from "components/Name/Link";
import Money from "components/Money";

interface Props {
  output: TxOutputModel;
  detailed?: boolean;
}

const TxOutput: React.FC<Props> = ({ output, detailed }: Props) => {
  var name
  name = output.covenantName || output.name
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
        {name!=undefined && (
          <div>
            <b>Name </b>
            <span>
              <NameLink name={name} />
            </span>
          </div>
        )}
        {output.covenantNameHash && (
          <div>
            <b>Name hash </b>
            <span> {output.covenantNameHash}</span>
          </div>
        )}
        {output.covenantHeight && (
          <div>
            <b>Height</b> <span>{output.covenantHeight}</span>
          </div>
        )}
      </div>
    ) : (
      (
        <div>
          <b>{output.covenantAction}</b>
          {name!=undefined &&
          <span>
            <NameLink name={name} />
          </span>}
        </div>
      )
    )}
  </div>
  )};
export default TxOutput;
