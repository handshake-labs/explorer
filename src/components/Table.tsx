import { Ref, useRef, useEffect } from "preact/hooks";

import "./Table.css";

interface Props {
  head: Children[];
  rows: Children[][];
}

const Table: FC<Props> = ({ head, rows }: Props) => {
  const tableRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const table = tableRef.current;
    if (table === null) {
      return;
    }
    const widthPx: number[] = [];
    const rows = table.children;
    for (const row of rows) {
      const cells = row.children;
      for (let i = 0; i < cells.length; i++) {
        const measurer = cells[i].firstElementChild as HTMLElement;
        widthPx[i] = Math.max(widthPx[i] || 1, measurer.offsetWidth);
      }
    }
    const totalWidthPx = widthPx.reduce((p, c) => p + c, 0);
    const widthPercent = widthPx.map((w) =>
      Math.floor((w / totalWidthPx) * 100)
    );
    const maxWidthPercent = Math.max(...widthPercent);
    for (const row of rows) {
      const cells = row.children;
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i] as HTMLElement;
        cell.style.minWidth = widthPx[i] + "px";
        cell.style.maxWidth =
          widthPercent[i] < maxWidthPercent ? widthPercent[i] + "%" : "auto";
      }
    }
  });

  return (
    <div styleName="wrapper">
      {" "}
      <div styleName="table" ref={(e) => (tableRef.current = e)}>
        <div styleName="head">
          {head.map((c, i) => (
            <div styleName="cell">
              <span>{c}</span>
            </div>
          ))}
        </div>
        {rows.map((row, j) => (
          <div styleName="row">
            {row.map((c, i) => (
              <div styleName="cell">
                <span>{c}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Table;
