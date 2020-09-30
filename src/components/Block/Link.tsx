import BaseLink from "components/Link";

interface Props {
  height: number;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ height, children }: Props) => (
  <BaseLink route={{ id: "block", params: { height, page: 0 } }}>
    {children ? children : <span className="icon block">{height}</span>}
  </BaseLink>
);
export default Link;
