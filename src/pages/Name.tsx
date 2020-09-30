import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";
import Link from "components/Link";
import { AuctionHistoryRow } from "api";
import { hex2ascii } from "helpers";
import Spinner from "components/Spinner";

interface Props {
  name: string;
  page: number;
}

const RenderAuctionHistoryRow = (historyRow: AuctionHistoryRow) => (
  <>
    <div>
      <li>
        <b>Block:</b>
        <Link
          route={{
            id: "block",
            params: { height: historyRow.Height, page: 0 },
          }}
        >
          {" "}
          {historyRow.Height}{" "}
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

const RenderRecordHistoryRow = (recordRow: RecordHistoryRow) => (
  <>
    <div>
      <li>
        <b>Block:</b>
        <Link
          route={{ id: "block", params: { height: recordRow.Height, page: 0 } }}
        >
          {recordRow.Height}
        </Link>
      </li>
      <li>
        <b>Record: </b>
        {recordRow.CovenantRecordData}
      </li>
    </div>
  </>
);

const Reservation = ({ reservation }) => {
  return (
    <>
      This name is reserved.
      <li>
        <b>Origin name: </b>
        {hex2ascii(reservation.OriginName)}
      </li>
      <li>
        <b>Claim amount: </b>
        {reservation.ClaimAmount / 10 ** 6} HNS
      </li>
    </>
  );
};

const RecordHistory = ({ history }) => {
  return;
};

const Name: React.FC<Props> = ({ name, page }) => {
  useTitle(`Name ${name}`);

  const domain = useAPI("/name", { name, page });
  if (domain === undefined) {
    return <Spinner />;
  }
  if (domain === null) {
    return <div>Not Found</div>;
  }
  console.log(domain);
  return (
    <>
      <div>Name {name} </div>
      {domain.reserved && (
        <Reservation reservation={domain.reservation}></Reservation>
      )}
      {domain.records && domain.records.length > 0 ? (
        <>
          <b>Record history:</b>
          {domain.records.map((historyRow) =>
            RenderRecordHistoryRow(historyRow)
          )}
        </>
      ) : (
        <b>No record history.</b>
      )}

      {domain.auction && domain.auction.length > 0 ? (
        <>
          <b>Auction history:</b>
          {domain.auction.map((historyRow) =>
            RenderAuctionHistoryRow(historyRow)
          )}
        </>
      ) : (
        <b>No auction history</b>
      )}
    </>
  );
};
export default Name;
