import { Select } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderDropDown({ t, element }) {
  let { options, name, left, top } = element;
  let { style } = options ?? {};

  return (
    <Select
      defaultValue="lucy"
      style={renderStyle(style)}
      options={[
        {
          value: "jack",
          label: "Jack",
        },
        {
          value: "lucy",
          label: "Lucy",
        },
        {
          value: "disabled",
          disabled: true,
          label: "Disabled",
        },
        {
          value: "Yiminghe",
          label: "yiminghe",
        },
      ]}
    />
  );
}
