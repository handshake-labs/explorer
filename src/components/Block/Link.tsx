import BaseLink from "components/Link";

type Props = WithChildren<{
  height: number;
}>;

const Link: FC<Props> = ({ height, children }: Props) => (
  <BaseLink route={{ id: "block", params: { height, page: 0 } }}>
    {children ? children : <span className="icon block">{height}</span>}
  </BaseLink>
);
export default Link;
