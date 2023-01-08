import { Button, Dropdown } from "antd";
import { renderStyle } from "../PreviewUtils";

export default function PreviewDropDown({ t, element }) {
  let { options, name, left, top } = element;
  let { style } = options ?? {};

  return (
    <Dropdown
      style={renderStyle(style, left, top)}
      placement="bottomCenter"
      arrow
    ></Dropdown>
  );
}
