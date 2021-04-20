import { useAPI } from "hooks/api";
import { useTitle } from "hooks/title";
import { toUnicode } from "punycode";

import Spinner from "components/Spinner";
import Card from "components/Address/Card";
import Table from "components/Address/Table";
import Pagination from "components/Pagination";


interface Props {
  address: string;
  page: number;
}

const limit = 50;

const Address: FC<Props> = ({
  address,
  page,
}: Props) => {
  useTitle(`Address ${address}`);

  const history = useAPI("/address", { address, limit, offset: page * limit, });
  const info = useAPI("/address/info", { address});

  if (info === undefined) return <Spinner />;
  if (history === undefined) return <Spinner />;


  return (
    <>
      <h2 className="separator">
        <span className="address">Address {address} </span>
      </h2>
      <Card info={address, info}/>
      <h2 className="separator">
        <span className="address">Outputs</span>
      </h2>
      <Table history={history} />
      <Pagination count={info.TxOutputsTotal} limit={limit} page={page} route={(page: number) => ({ id: "address", params: { address, page }, })} />
    </>
  );
};
export default Address;
