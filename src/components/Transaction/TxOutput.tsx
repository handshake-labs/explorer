import { TxOutput as TxOutputModel } from "api";
//@ts-ignore
import bech32 from "record/bech32";

import Hash from "components/Hash";
import Money from "components/Money";
import NameLink from "components/Name/Link";
import AddressLink from "components/Address/Link";

import "./TxOutput.css";

const getTransferAddress = (output: any) => {
  // Transfer address is made of version+hash
  const {covenantVersion, covenantAddress} = output;      

  if (!output.covenantVersion || !output.covenantAddress) {
    return null;
  }

  try {
    return bech32.encode(
      'hs',
      parseInt(covenantVersion),
      Buffer.from(covenantAddress, 'hex')
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}

interface Props {
  output: TxOutputModel;
  id: number;
  detailed?: boolean;
}

const TxOutput: FC<Props> = ({ output, id, detailed }: Props) => {
  const transferAddress = getTransferAddress(output);

  return (
    <div id={"output-"+id}>
      <div>
        <AddressLink address={output.address} />
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
          {transferAddress && (
            <div>
              <b>Transfer Address </b>
              <span>
                <AddressLink address={transferAddress} />
              </span>
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
