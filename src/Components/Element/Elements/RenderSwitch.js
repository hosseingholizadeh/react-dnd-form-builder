import { Switch } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderSwitch({ t, element }) {
  console.log(element);
  let { options, name } = element;
  let { style } = options ?? {};

  return <Switch style={renderStyle(style)} />;
}
