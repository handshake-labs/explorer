import { Block } from "api";

import "./Info.css";

interface Props {
  block: Block;
}

const Info: React.FC<Props> = ({ block }) => {
  var blockDateTime = new Date(block.time * 1000);
  return (
    <div className="card">
      <div styleName="header" className="header">
        <div styleName="block">Block #{block.height}</div>
      </div>
      <div>
        <b>Hash:</b> {block.hash}
        <div>
          <b>Weight:</b> {block.weight}
        </div>
        <div>
          <b>Time:</b> {block.time}
        </div>
        <div>
          Technical info:
          <li>size:{block.size}</li>
          <li>version:{block.version}</li>
          <li>hashMerkleRoot:{block.hashMerkleRoot}</li>
          <li>witnessRoot:{block.witnessRoot}</li>
          <li>treeRoot:{block.treeRoot}</li>
          <li>reservedRoot:{block.reservedRoot}</li>
          <li>mask:{block.mask}</li>
          <li>time:{blockDateTime.toLocaleString("en-GB")}</li>
          <li>bits:{block.bits}</li>
          <li>difficulty:{block.difficulty}</li>
          <li>chainwork:{block.chainwork}</li>
          <li>nonce:{block.nonce}</li>
          <li>extraNonce:{block.extraNonce}</li>
        </div>
      </div>
    </div>
  );
};
export default Info;
