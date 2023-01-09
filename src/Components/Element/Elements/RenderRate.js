import { Rate } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderRate({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return <Rate style={renderStyle(style)} allowHalf defaultValue={0} />;
}
