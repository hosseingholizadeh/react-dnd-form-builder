import { Button } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderButton({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return (
    <Button type="primary" style={renderStyle(style)}>
      {name}
    </Button>
  );
}
