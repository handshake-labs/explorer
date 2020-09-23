interface Props {
  time: number;
}

const Time: React.FC<Props> = ({ time }: Props) => (
  <span>{new Date(time * 1000).toLocaleString()} </span>
);
export default Time;
