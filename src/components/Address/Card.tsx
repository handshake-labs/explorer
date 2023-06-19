import { GetAddressInfoRow } from "api";

import BaseCard from "components/Card";
import Money from "components/Money";

interface Props {
  info: GetAddressInfoRow;
}

const Card: FC<Props> = ({ info }: Props) => (
  <BaseCard>
    <BaseCard.Prop id="valueTotal"> <Money value={info.ValueTotal} /> </BaseCard.Prop>
    <BaseCard.Prop id="valueUsed"> <Money value={info.ValueUsed} /> </BaseCard.Prop>
    <BaseCard.Prop id="balance"> <Money value={info.ValueTotal - info.ValueUsed} /> </BaseCard.Prop>
    <BaseCard.Prop id="countTotal"> {info.TxOutputsTotal}  </BaseCard.Prop>
    <BaseCard.Prop id="countUsedUsed"> {info.TxOutputsUsed}  </BaseCard.Prop>
  </BaseCard>
);
export default Card;
