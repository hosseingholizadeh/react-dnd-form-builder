import { Button } from "antd";
import { renderStyle } from "../PreviewUtils";

export default function PreviewButton({ t, element }) {
  console.log(element);
  let { options, name, left, top } = element;
  let { style } = options ?? {};

  return (
    <Button type="primary" style={renderStyle(style, left, top)}>
      {name}
    </Button>
  );
}
