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

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  if (start !== 0) {
    if (start !== 1) {
      pages.unshift(-1);
    }
    pages.unshift(0);
  }
  if (end !== max) {
    if (end !== max - 1) {
      pages.push(-2);
    }
    pages.push(max);
  }

  return (
    <div styleName="root" className="separator">
      {pages.map((p) =>
        p < 0 ? (
          <span key={p}>&hellip;</span>
        ) : p === page ? (
          <span key={p}>{p + 1}</span>
        ) : (
          <Link route={route(p)} key={p}>
            <span>{p + 1}</span>
          </Link>
        )
      )}
    </div>
  );
};
export default Pagination;
