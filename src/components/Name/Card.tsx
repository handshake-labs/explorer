import { GetNameResult } from "api";

import BaseCard from "components/Card";
import BlockLink from "components/Block/Link";
import Money from "components/Money";
import Link from "components/Link";

interface Props {
  data: GetNameResult;
}

const Card: FC<Props> = ({ data }: Props) => (
  <>
    {data.reserved && <h3>This name is reserved.</h3>}
    <BaseCard>
      {data.reserved ? (
        <>
          <BaseCard.Prop id="originName">
            {data.reserved.originName}
          </BaseCard.Prop>
          <BaseCard.Prop id="claimAmount">
            <Money value={data.reserved.claimAmount} />
          </BaseCard.Prop>
        </>
      ) : (
        <>
          <BaseCard.Prop id="releaseBlock">
            <BlockLink height={data.release_block} />
          </BaseCard.Prop>
          {data.state.open_height && (
            <>
              <BaseCard.Prop id="openHeight">
                {data.state.open_height == -1 ?
                  <Link route={{ id: "mempool", params: { page: 0 } }}>Mempool</Link>
                  : <BlockLink height={data.state.open_height} />}


              </BaseCard.Prop>
              <BaseCard.Prop id="bidHeightStart">
                <BlockLink height={data.state.open_height + 36 + 1} />
              </BaseCard.Prop>
              <BaseCard.Prop id="revealHeightStart">
                <BlockLink height={data.state.open_height + 36 + 1 + 144 * 5} />
              </BaseCard.Prop>
              <BaseCard.Prop id="revealHeightEnd">
                <BlockLink
                  height={data.state.open_height + 36 + 1 + 144 * 15}
                />
              </BaseCard.Prop>
            </>
          )}
          {data.state.current_state && (
            <BaseCard.Prop id="auctionState">
              {data.state.current_state}
            </BaseCard.Prop>
          )}
        </>
      )}
    </BaseCard>
  </>
);
export default Card;
