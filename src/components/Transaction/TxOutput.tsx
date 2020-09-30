import { TxOutput as TxOutputModel } from "api";

import NameLink from "components/Name/Link";
import Money from "components/Money";

interface Props {
  output: TxOutputModel;
  covenant?: boolean;
}

const TxOutput: React.FC<Props> = ({ output, covenant }: Props) => (
  <div>
    <div>
      <Money value={output.value} />
    </div>
    <div>{output.address}</div>
    {covenant ? (
      <div>
        <div>
          <b>Action</b> {output.covenantAction}
        </div>
        {output.covenantName && (
          <div>
            <b>Name</b> {output.covenantName}
          </div>
        )}
        {output.covenantNameHash && (
          <div>
            <b>Name Hash</b> {output.covenantNameHash}
          </div>
        )}
        {output.covenantHeight && (
          <div>
            <b>Height</b> {output.covenantHeight}
          </div>
        )}
      </div>
    ) : (
      output.covenantName && (
        <div>
          <b>{output.covenantAction}</b>
          <NameLink name={output.covenantName} />
        </div>
      )
    )}
  </div>
);
export default TxOutput;
