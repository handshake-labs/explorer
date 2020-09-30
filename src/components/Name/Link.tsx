import BaseLink from "components/Link";

const hex2ascii = (hex: string): string => {
  let str = "";
  for (var i = 0; i < hex.length && hex.substr(i, 2) !== "00"; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
};

interface Props {
  name: string;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ name, children }: Props) => (
  <BaseLink route={{ id: "name", params: { name, page: 0 } }}>
    {children ? children : <span className="icon name">{hex2ascii(name)}</span>}
  </BaseLink>
);
export default Link;
