import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";

import Spinner from "components/Spinner";
import Pagination from "components/Pagination";

import BidsTable from "components/Name/BidsTable";
import RecordsTable from "components/Name/RecordsTable";

interface Props {
  name: string;
  bids_page: number;
  records_page: number;
}

const limit = 50;

const Name: React.FC<Props> = ({name,bids_page,records_page}: Props) => {
  useTitle(`Name ${name}`);

  const info = useAPI("/name", { name });
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

  if (!info) return <Spinner />;

  return (
    <>
      <h2 className="separator">
        <span className="icon name">{ name }</span>
      </h2>
      { bids ? <BidsTable bids={bids.bids} /> : <Spinner/> }
      <Pagination
        count={info.bids_count}
        limit={limit}
        page={bids_page}
        route={(bids_page: number) => ({ id: "name", params: { name,  bids_page, records_page } })}
      />
      { records ? <RecordsTable records={records.records} /> : <Spinner/> }
      <Pagination
        count={info.records_count}
        limit={limit}
        page={records_page}
        route={(records_page: number) => ({ id: "name", params: { name,  bids_page, records_page } })}
      />
    </>
  );
};
export default Name;
