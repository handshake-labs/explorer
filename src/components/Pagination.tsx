import { replaceRoute } from "history";
import { Route } from "routes";

import Link from "components/Link";

import "./Pagination.css";

interface Props {
  count: number;
  page: number;
  limit: number;
  route: (page: number) => Route;
}

const Pagination: React.FC<Props> = ({ count, page, limit, route }: Props) => {
  const max = (Math.ceil(count / limit) || 1) - 1;
  const start = Math.max(page - 2, 0);
  const end = Math.min(page + 2, max);

  const pages: Array<number | null> = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  if (start !== 0) {
    if (start !== 1) {
      pages.unshift(null);
    }
    pages.unshift(0);
  }
  if (end !== max) {
    if (end !== max - 1) {
      pages.push(null);
    }
    pages.push(max);
  }

  return (
    <div styleName="pages">
      {pages.map((p) =>
        p === null ? (
          <span>&hellip;</span>
        ) : p === page ? (
          <span>{p + 1}</span>
        ) : (
          <Link route={route(p)}>
            <span>{p + 1}</span>
          </Link>
        )
      )}
    </div>
  );
};
export default Pagination;
