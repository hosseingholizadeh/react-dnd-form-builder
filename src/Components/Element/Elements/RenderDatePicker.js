import { DatePicker } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderDatePicker({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return <DatePicker style={renderStyle(options?.style)} />;
}
