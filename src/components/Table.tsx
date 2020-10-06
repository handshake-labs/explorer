import { useRef, useEffect } from "preact/hooks";

import strings from "strings";

import "./Table.css";

interface TRProps {
  children?: Children;
}

export const TR: FC<TRProps> = ({ children }: TRProps) => (
  <div styleName="tr">{children}</div>
);

interface TDProps {
  children?: Children;
}

export const TD: FC<TDProps> = ({ children }: TDProps) => (
  <div styleName="td">
    <span>{children}</span>
  </div>
);

interface THProps {
  id: keyof typeof strings;
}

export const TH: FC<THProps> = ({ id }: THProps) => (
  <div styleName="th">
    <span>{strings[id]}</span>
  </div>
);

interface TableProps {
  children?: Children;
}

export const Table: FC<TableProps> = ({ children }: TableProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const table = ref.current;
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
          widthPercent[i] < maxWidthPercent ? widthPercent[i] + "%" : "none";
      }
    }
  });

  return (
    <div styleName="wrapper">
      <div styleName="table" ref={(e) => (ref.current = e)}>
        {children}
      </div>
    </div>
  );
};
