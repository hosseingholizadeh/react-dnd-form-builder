import { Select } from "antd";
import DataLoader from "../Datasource/DataLoader";
import { RenderType } from "../ElementType";
import { renderStyle } from "../RenderUtils";

export default function RenderDropDown({ t, element, renderType }) {
  let { options, name } = element;
  let { style, datasource } = options ?? {};
  let isReadonly = renderType === RenderType.dragdrop;

  return (
    <Select
      aria-readonly={isReadonly}
      style={renderStyle(style)}
      options={DataLoader.load(datasource, renderType)}
    />
  );
}
