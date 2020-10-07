import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";
import { toUnicode } from "punycode";

import Spinner from "components/Spinner";
import Pagination from "components/Pagination";

import NameCard from "components/Name/Card";
import BidsTable from "components/Name/BidsTable";
import RecordsTable from "components/Name/RecordsTable";

interface Props {
  name: string;
  bids_page: number;
  records_page: number;
}

const limit = 50;

const Name: FC<Props> = ({ name, bids_page, records_page }: Props) => {
  useTitle(`Name ${name}`);

  const data = useAPI("/name", { name });
  const bids = useAPI("/name/bids", {
    name,
    limit,
    offset: bids_page * limit,
  });
  const records = useAPI("/name/records", {
    name,
    limit,
    offset: records_page * limit,
  });

  if (!data) return <Spinner />;
  const unicodeName = toUnicode(name);

  return (
    <>
      <h2 className="separator">
        <span className="icon name">
          {name} {unicodeName != name && "(" + unicodeName + ")"}
        </span>
      </h2>
      <NameCard data={data} />
      {data.reserved ? (
        <div></div>
      ) : (
        <>
          <h2 className="separator">
            <span>Auction history</span>
          </h2>
          {bids ? <BidsTable bids={bids.bids} /> : <Spinner />}
          <Pagination
            count={data.bids_count}
            limit={limit}
            page={bids_page}
            route={(bids_page: number) => ({
              id: "name",
              params: { name, bids_page, records_page },
            })}
          />
        </>
      )}

      <h2 className="separator">
        <span>Record history</span>
      </h2>
      {records ? <RecordsTable records={records.records} /> : <Spinner />}
      <Pagination
        count={data.records_count}
        limit={limit}
        page={records_page}
        route={(records_page: number) => ({
          id: "name",
          params: { name, bids_page, records_page },
        })}
      />
    </>
  );
};
export default Name;
