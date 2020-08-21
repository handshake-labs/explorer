import React from "react";

import Clipboard from "./Clipboard";

interface Props {
  header: string;
  records: Array<{
    key: string;
    value: string;
    copy?: boolean;
  }>;
}

const RecordsList: React.FC<Props> = (props: Props) => (
  <section>
    <header elem="header">{props.header}</header>
    <ul elem="list">
      {props.records.map(({ key, value, copy }) => (
        <li elem="item">
          <span elem="key">{key}</span>
          <span elem="value">{value}</span>
          {copy && <Clipboard text={value} />}
        </li>
      ))}
    </ul>
  </section>
);
export default RecordsList;
