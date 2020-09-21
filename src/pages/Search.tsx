import { useAPI } from "../hooks/api";
import Link from "../components/Link";
import Pagination from "../components/Pagination";

interface Props {
  query: string;
}

const Search: React.FC<Props> = ({ query }) => {
  const search = useAPI("/search", { query });

  if (search === undefined) {
    return <div>Loading</div>;
  }
  if (search === null) {
    return <div>Not Found</div>;
  }
  const { transactions, blocks, names } = search;
  return (
    <>
      {transactions && (
        <li>
          <b> Transactions: </b>{transactions}
            <Link route={{ id: "transaction", params: { txid: transactions } }}>
                {txInput.hashPrevout}
            </Link>

        </li>
      )}
{blocks && (
        <li>
          <b> Blocks: </b><Link route={{ id: "block", params: { height: blocks, page: 0 } }}>{blocks}</Link>
        </li>
      )}
{names && (
        <li>
          <b> Names: </b><Link route={{ id: "name", params: { name: names, page: 0 } }}>{names}</Link> 
        </li>
      )}
    </>
  );
};
export default Search;
