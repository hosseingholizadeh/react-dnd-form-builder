import { Select } from "antd";
import { RenderType } from "../ElementType";
import { renderStyle } from "../RenderUtils";

export default function RenderDropDown({ t, element, renderType }) {
  let { options, name } = element;
  console.log(element);
  let { style } = options ?? {};
  let isReadonly = renderType === RenderType.dragdrop;

  console.log("drop down is readonly ", isReadonly);

  return (
    <Select
      aria-readonly={isReadonly}
      style={renderStyle(style)}
      options={
        isReadonly
          ? []
          : [
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
            ]
      }
    />
  );
}
