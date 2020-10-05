interface Props {
  time: number;
}

const Time: FC<Props> = ({ time }: Props) => (
  <span>{new Date(time * 1000).toLocaleString("en-GB")} </span>
);
export default Time;
