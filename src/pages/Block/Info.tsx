import { Block } from "../../api";

import Link from "../../components/Link";

import "./Info.css";

interface Props {
  block: Block;
  isFirst: boolean;
  isLast: boolean;
}

const Info: React.FC<Props> = ({ block, isFirst, isLast }) => {
  var blockDateTime = new Date(block.time*1000);
  return (
    <div styleName="info">
      <div styleName="header">
        {!isFirst ? (
          <Link
            route={{
              id: "block",
              params: { height: block.height - 1, page: 0 },
            }}
          >
            {block.height - 1}
          </Link>
        ) : null}
        <span>Block {block.height}</span>
        {!isLast ? (
          <Link
            route={{
              id: "block",
              params: { height: block.height + 1, page: 0 },
            }}
          >
            {block.height + 1}
          </Link>
        ) : null}
      </div>
      <div>
        <b>Hash:</b> {block.hash}
        <div><b>Weight:</b> {block.weight}</div>
        <div><b>Time:</b> {block.time}</div>
        <div>Technical info:
          <li>size:{block.size}</li>
          <li>version:{block.version}</li>
          <li>hashMerkleRoot:{block.hashMerkleRoot}</li>
          <li>witnessRoot:{block.witnessRoot}</li>
          <li>treeRoot:{block.treeRoot}</li>
          <li>reservedRoot:{block.reservedRoot}</li>
          <li>mask:{block.mask}</li>
          <li>time:{blockDateTime.toLocaleString('en-GB')}</li>
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
