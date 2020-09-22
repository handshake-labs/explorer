import { useAPI } from "../hooks/api";
import { useTitle } from "../hooks/title";
import Link from "../components/Link";
import { NameRow } from "../api";
import { hex2ascii } from "../helpers";

interface Props {
  page: number;
}

const RenderListExpensiveRow = (listExpensiveRow: NameRow) => (
  <>
    <div>
      <li>
        <b>Auction opening block:</b>{" "}
        <Link
          route={{
            id: "block",
            params: { height: listExpensiveRow.OpenHeight, page: 0 },
          }}
        >
          {listExpensiveRow.OpenHeight}
        </Link>
      </li>
      <li>
        <b>Name:</b>{" "}
        <Link
          route={{
            id: "name",
            params: { name: hex2ascii(listExpensiveRow.CovenantName), page: 0 },
          }}
        >
          {hex2ascii(listExpensiveRow.CovenantName)}
        </Link>
      </li>
      <li>
        <b>Max lockup: </b>
        {listExpensiveRow.MaxLockup / 10 ** 6} HNS
      </li>
      <li>
        <b>Max reveal: </b>
        {listExpensiveRow.MaxRevealed / 10 ** 6} HNS
      </li>
      <li>
        <b>Number of bids: </b>
        {listExpensiveRow.BidCount}
      </li>
    </div>
  </>
);

const ListExpensive: React.FC<Props> = ({ page }) => {
  useTitle(`Most expensive names`);

  const listExpensive = useAPI("/lists/expensive", { page });
  if (listExpensive === undefined) {
    return null;
  }
  if (listExpensive === null) {
    return <div>Not Found</div>;
  }
  return (
    <>
      {listExpensive &&
        listExpensive.names.map((listExpensiveRow) =>
          RenderListExpensiveRow(listExpensiveRow)
        )}
    </>
  );
};
export default ListExpensive;
