import { setPath } from "history";
import { buildPath, Route } from "routes";

interface Props {
  route: Route;
  children: React.ReactNode;
}

const onClick = (path: string) => (e: React.MouseEvent) => {
  if (e.button === 0 && !e.ctrlKey && !e.shiftKey && !e.metaKey) {
    setPath(path);
    e.preventDefault();
  }
};

const Search: React.FC<Props> = ({route, children}: Props ) => {
  const path = "query";
  return (
    <>
    <input type="search"></input>
      <div><button onClick={onClick(path)}>Search</button></div>
    </>
  );
}



export default Search;
