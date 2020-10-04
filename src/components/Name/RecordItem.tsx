import { Resource } from "record/resource";

const parseRecord = (data) => {
  const hexResource = Buffer.from(data, "hex");
  return Resource.decode(hexResource);
};

const renderRecord = (record) => {
  var resource;
  switch (record.getJSON().type) {
    case "DS":
      resource = (
        <>
          <div>Keytag: {record.keyTag} </div>
          <div>Algorithm: {record.algorithm}</div>
          <div>Digest type: {record.digestType}</div>
          <div>Digest: {record.digest}</div>
        </>
      );
      break;
    case "NS":
      resource = <div>Name server: {record.ns}</div>;
      break;
    case "GLUE4":
      resource = (
        <>
          <div>Name server: {record.ns}</div>
          <div>IPV4 address: {record.address}</div>
        </>
      );
      break;
    case "GLUE6":
      resource = (
        <>
          <div>Name server: {record.ns}</div>
          <div>IPV6 address: {record.address}</div>
        </>
      );
      break;
    case "SYNTH4":
      resource = <div>IPV4 address: {record.address}</div>;
      break;
    case "SYNTH6":
      resource = <div>IPV6 address: {record.address}</div>;
      break;
    case "TXT":
      resource = <div>TXT: {record.txt}</div>;
      break;
    default:
      resource = <div>"Unknown record"</div>;
      break;
  }
  return resource;
};

interface Props {
  data: string;
}

//Record is a collection of Resources
//each resource can be thought as DNS record
const RecordItem: React.FC<Props> = ({ data }: Props) => {
  var record = parseRecord(data);
  return (
    <>
      <div>{record.records.map((record) => renderRecord(record))}</div>
    </>
  );
};

export default RecordItem;
