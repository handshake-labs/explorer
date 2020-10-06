import { GetNameResult } from "api";

import BaseCard from "components/Card";
import BlockLink from "components/Block/Link";

interface Props {
  data: GetNameResult;
}

const Card: FC<Props> = ({ data }: Props) => {
  const rows: Array<[string, Children]> = [
    ["Release Block", <BlockLink height={data.release_block} />],
  ];
  if (data.state.open_height)
    rows.push(
      [
        "Last Auction Open Block",
        <BlockLink height={data.state.open_height} />,
      ],
      ["Bid Period Start", <BlockLink height={data.state.open_height + 36} />],
      [
        "Reveal Period Start",
        <BlockLink height={data.state.open_height + 36 + 144 * 5} />,
      ],
      [
        "Reveal Period End",
        <BlockLink height={data.state.open_height + 36 + 144 * 15} />,
      ]
    );
  if (data.state.current_state)
    rows.push(["Auction State", data.state.current_state]);
  return <BaseCard rows={rows} />;
};
export default Card;
