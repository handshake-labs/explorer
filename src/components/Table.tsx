import "./Table.css";

interface Props {
  header: Children[];
  rows: Children[][];
}

const Table: FC<Props> = ({ header, rows }: Props) => (
  <div styleName="table">
    <div styleName="header">
      {header.map((ch) => (
        <div styleName="cell">{ch}</div>
      ))}
    </div>
    {rows.map((row) => (
      <div styleName="row">
        {row.map((ch) => (
          <div styleName="cell">{ch}</div>
        ))}
      </div>
    ))}
  </div>
);
export default Table;
