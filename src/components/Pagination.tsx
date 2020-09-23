import { replaceRoute } from "history";
import { Route } from "routes";

import Link from "components/Link";

import "./Pagination.css";

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

  const pages = [0, 1, page - 1, page, page + 1, pagesCount - 2, pagesCount - 1]
    .filter((p: number): boolean => p >= 0 && p < pagesCount)
    .sort();

  return (
    <div styleName="pages">
      {pages.map((p: number, i: number) =>
        p === pages[i - 1] ? null : (
          <>
            {p !== 0 && p - 1 !== pages[i - 1] ? <span>&hellip;</span> : null}
            {p === page ? (
              <span>{p + 1}</span>
            ) : (
              <Link route={route(p)}>
                <span>{p + 1}</span>
              </Link>
            )}
          </>
        )
      )}
    </div>
  );
};
export default Pagination;
