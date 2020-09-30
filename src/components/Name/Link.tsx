import BaseLink from "components/Link";


interface Props {
  name: string;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ name, children }: Props) => {
  return (
    <BaseLink route={{ id: "name", params: { name, bids_page: 0, records_page:0 } }}>
      {children ? children : <span className="icon name">{name}</span>}
    </BaseLink>
  );
};
export default Link;
