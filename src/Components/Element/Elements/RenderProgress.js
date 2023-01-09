import { Progress } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderProgress({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return (
    <Progress
      style={renderStyle(options?.style)}
      type="circle"
      percent={100}
      width={80}
    />
  );
}
