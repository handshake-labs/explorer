import { useAPI } from "hooks/api";
import Link from "components/Link";
import NameLink from "components/Name/Link";
import Pagination from "components/Pagination";
import Spinner from "components/Spinner";
import TransactionLink from "components/Transaction/Link";
import BlockLink from "components/Block/Link";

interface Props {
  query: string;
}

const SearchResult: React.FC<Props> = ({ query }) => {
  const search = useAPI("/search", { query });

  if (search === undefined) {
    return <Spinner />
  }
  if (search === null) {
    return <div>Not Found</div>;
  }
  const { transaction, block, name } = search;
  return (
    <>
      {transaction && (
        <li>
          <b> Transaction: </b>
          <TransactionLink txid={transaction} />
        </li>
      )}
      {block && (
        <li>
          <b> Block: </b>
          <div>
            <BlockLink height={block} />
          </div>
        </li>
      )}
      {name && (
        <li>
          <b> Names: </b>
          <NameLink name={name} />
        </li>
      )}
    </>
  );
};
export default SearchResult;
