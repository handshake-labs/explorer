import { push } from "../history";
import { buildPath, Route } from "../routes";

const onClick = (e: React.MouseEvent) => {
  if (e.button === 0 && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
    push((e.target as HTMLAnchorElement).href);
    e.preventDefault();
  }
};

interface Props {
  route: Route;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = (props: Props) => {
  return (
    <a href={buildPath(props.route)} onClick={onClick}>
      {props.children || null}
    </a>
  );
};
export default Link;
