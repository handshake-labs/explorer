import { useAPI } from "../hooks/api";
import { useTitle } from "../hooks/title";
import Link from "../components/Link";
import { AuctionHistoryRow } from "../api";

interface Props {
  name: string;
  page: number;
}

const RenderAuctionHistoryRow = (historyRow: AuctionHistoryRow) => (
  <>
    <div>
      <li>
        <b>Block:</b>{" "}
        <Link
          route={{
            id: "block",
            params: { height: historyRow.Height, page: 0 },
          }}
        >
          {historyRow.Height}
        </Link>
      </li>
      <li>
        <b>Transaction: </b>
        <Link route={{ id: "transaction", params: { txid: historyRow.Txid } }}>
          {" "}
          {historyRow.Txid}{" "}
        </Link>
      </li>
      <li>
        <b>Action: </b>
        {historyRow.CovenantAction}
      </li>
      <li>
        <b>Lockup: </b>
        {historyRow.LockupValue / 10 ** 6} HNS
      </li>
      <li>
        <b>Reveal: </b>
        {historyRow.RevealValue / 10 ** 6} HNS
      </li>
    </div>
  </>
);

const Name: React.FC<Props> = ({ name, page }) => {
  useTitle(`Name ${name}`);

  const domain = useAPI("/names/auction", { name, page });
  if (domain === undefined) {
    return null;
  }
  if (domain === null) {
    return <div>Not Found</div>;
  }
  return (
    <>
      <div>Name {name} </div>
      {domain.history &&
        domain.history.map((historyRow) => RenderAuctionHistoryRow(historyRow))}
    </>
  );
};
export default Name;
