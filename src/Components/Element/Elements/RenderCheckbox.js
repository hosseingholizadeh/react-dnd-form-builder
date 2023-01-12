import { Checkbox } from "antd";
import { renderStyle } from "../RenderUtils";

export default function PreviewCheckbox({ t, element }) {
  let { options, name, defaultValue } = element;
  let { style, title } = options ?? {};

  if (!title || title.trim() === "") title = name;

  return (
    <Checkbox style={renderStyle(style)} checked={defaultValue}>
      {title}
    </Checkbox>
  );
}

function PreviewCheckboxGroup({ t, element }) {
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
