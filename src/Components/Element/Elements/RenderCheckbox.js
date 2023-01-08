import { Checkbox } from "antd";
import { renderStyle } from "../RenderUtils";

export default function PreviewCheckbox({ t, element }) {
  console.log(element);
  let { options, name } = element;
  let { style } = options ?? {};
  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Apple", "Orange"];

  return (
    <Checkbox.Group
      style={renderStyle(style)}
      options={plainOptions}
      value={defaultCheckedList}
    />
  );
}
