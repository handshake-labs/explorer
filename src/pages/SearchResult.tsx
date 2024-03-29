import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Spinner from "components/Spinner";
import NotFound from "components/NotFound";

import NameLink from "components/Name/Link";
import TransactionLink from "components/Transaction/Link";
import BlockLink from "components/Block/Link";
import AddressLink from "components/Address/Link";

import "./SearchResult.css";

interface Props {
  query: string;
}

const SearchResult: FC<Props> = ({ query }) => {
  useTitle(`Search ${query}`);
  const search = useAPI("/search", { query });

  if (!search) return <Spinner />;
  const { transaction, block, name, address } = search;

  if (!transaction && !block && !name && !address) return <NotFound />;

  return (
    <>
      <h2 className="separator">Search</h2>
      {transaction ? (
        <div styleName="result">
          Transaction <TransactionLink txid={transaction} />
        </div>
      ) : null}
      {block ? (
        <div styleName="result">
          Block <BlockLink height={block} />
        </div>
      ) : null}
      {address ? (
        <div styleName="result">
          Address <AddressLink address={address} />
        </div>
      ) : null}
      {name ? (
        <div styleName="result">
          Name <NameLink name={name} />
        </div>
      ) : null}
    </>
  );
};
export default SearchResult;
