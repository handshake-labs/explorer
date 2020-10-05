interface Props {
  value: number;
}

const Money: FC<Props> = ({ value }: Props) => {
  const s = "000000" + value.toString();
  const l = s.length - 6;
  return (
    <span>
      {`${s.substr(0, l).replace(/^0+/, "") || "0"}.${s.substr(l)}`.replace(
        /\.?0+$/,
        ""
      )}
      &nbsp;<b>HNS</b>
    </span>
  );
};
export default Money;
