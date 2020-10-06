import { setPath } from "history";
import { buildPath, Route } from "routes";

const onClick = (path: string) => (e: MouseEvent) => {
  if (e.button === 0 && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
    setPath(path);
    e.preventDefault();
  }
};

interface Props {
  route: Route;
  children?: Children;
}

const Link: FC<Props> = ({ route, children }: Props) => {
  const path = buildPath(route);

  return (
    <a href={path} onClick={onClick(path)}>
      {children}
    </a>
  );
};
export default Link;
