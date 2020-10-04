import { useAPI } from "hooks/api";

import Spinner from "components/Spinner";
import NotFound from "components/NotFound";

import NameLink from "components/Name/Link";
import TransactionLink from "components/Transaction/Link";
import BlockLink from "components/Block/Link";

import "./SearchResult.css";

interface Props {
  query: string;
}

const SearchResult: React.FC<Props> = ({ query }) => {
  const search = useAPI("/search", { query });

  if (!search) return <Spinner />;
  const { transaction, block, name } = search;

  if (!transaction && !block && !name) return <NotFound />;

  return (
    <>
      <h2 className="separator">Search</h2>
      {transaction ? (
        <div styleName="result">
          <TransactionLink txid={transaction} />
        </div>
      ) : null}
      {block ? (
        <div styleName="result">
          <BlockLink height={block} />
        </div>
      ) : null}
      {name ? (
        <div styleName="result">
          <NameLink name={name} />
        </div>
      ) : null}
    </>
  );
};
export default SearchResult;
