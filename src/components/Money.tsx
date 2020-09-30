interface Props {
  value: number;
}

const Money: React.FC<Props> = ({ value }: Props) => {
  const s = value.toString();
  const l = s.length - 6;
  return (
    <span className="icon currency">
      {`${s.substr(0, l) || "0"}.${s.substr(l)}`.replace(/\.?0+$/, "")}
    </span>
  );
};
export default Money;
