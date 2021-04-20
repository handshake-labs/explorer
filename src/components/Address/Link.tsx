import BaseLink from "components/Link";

interface Props {
  address: string;
  children?: Children;
}

const Link: FC<Props> = ({ address, children }: Props) => (
  <BaseLink route={{ id: "address", params: { address, page: 0 } }}>
    {children ? children : <span className="">{address}</span>}
  </BaseLink>
);

export default Link;
