import { Radio } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderRadio({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return (
    <Radio.Group style={renderStyle(style)}>
      <Radio value={1}>1</Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
    </Radio.Group>
  );
}
