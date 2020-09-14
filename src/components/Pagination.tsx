import { replaceRoute } from "../history";
import { Route } from "../routes";
import Link from "./Link";

interface Props {
  page: number;
  count: number;
  limit: number;
  route: (page: number) => Route;
}

const Pagination: React.FC<Props> = ({ page, count, limit, route }: Props) => {
  const pagesCount = Math.ceil(count / limit) || 1;

  React.useEffect(() => {
    if (page >= pagesCount) {
      replaceRoute(route(0));
    }
  }, [page, pagesCount]);

  if (pagesCount === 1) {
    return null;
  }

  return (
    <div>
      <Link route={route(0)}>0</Link>
      <Link route={route(pagesCount)}>{pagesCount}</Link>
    </div>
  );
};
export default Pagination;
