interface Props {
  value: number;
}

const Money: React.FC<Props> = ({ value }: Props) => {
  const s = value.toString();
  const l = s.length - 6;
  return <span>{`${s.substr(0, l) || "0"}.${s.substr(l)}`}</span>;
};
export default Money;
