import { Tabs } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderTab({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return <Tabs defaultActiveKey="1" style={renderStyle(style)}></Tabs>;
}
