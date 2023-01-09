import { Table } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderTable({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return <Table bordered style={renderStyle(style)} />;
}
