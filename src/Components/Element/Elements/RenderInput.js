import { Input } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderInput({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return <Input style={renderStyle(style)} placeholder="input text" />;
}
