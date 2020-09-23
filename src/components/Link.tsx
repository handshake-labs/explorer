import { setPath } from "history";
import { buildPath, Route } from "routes";

const onClick = (path: string) => (e: React.MouseEvent) => {
  if (e.button === 0 && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
    setPath(path);
    e.preventDefault();
  }
};

interface Props {
  route: Route;
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({route,children}: Props) => {
  const path = buildPath(route);

  return (
    <a href={path} onClick={onClick(path)}>
      {children}
    </a>
  );
};
export default Link;
