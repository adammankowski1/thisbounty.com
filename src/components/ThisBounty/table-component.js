import React from "react";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

export const Table = () => (
  <List height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);
