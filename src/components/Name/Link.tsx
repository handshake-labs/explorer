import { toUnicode } from "punycode";

import BaseLink from "components/Link";

type Props = WithChildren<{
  name: string;
}>;

const Link: FC<Props> = ({ name, children }: Props) => (
  <BaseLink
    route={{ id: "name", params: { name, bids_page: 0, records_page: 0 } }}
  >
    {children ? children : <span className="icon name">{toUnicode(name)}</span>}
  </BaseLink>
);
export default Link;
