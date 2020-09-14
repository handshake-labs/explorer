import { Block } from "../../api";

import Link from "../../components/Link";

import "./Info.css";

interface Props {
  block: Block;
  isFirst: boolean;
  isLast: boolean;
}

const Info: React.FC<Props> = ({ block, isFirst, isLast }) => {
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
      </div>
    </div>
  );
};
export default Info;
