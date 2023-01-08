import { Input } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderInput({ t, element }) {
  console.log(element);
  let { options, name, left, top } = element;
  let { style } = options ?? {};

  return (
    <Input style={renderStyle(style, left, top)} placeholder="input text" />
  );
}
