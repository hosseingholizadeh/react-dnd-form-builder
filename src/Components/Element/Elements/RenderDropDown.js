import { Select } from "antd";
import { useEffect, useState } from "react";
import DataLoader from "../Datasource/DataLoader";
import { RenderType } from "../ElementType";
import { renderStyle } from "../RenderUtils";

export default function RenderDropDown({ t, element, renderType }) {
  let { options, name } = element;
  let { style, datasource } = options ?? {};
  let isReadonly = renderType === RenderType.dragdrop;

  const [data, setData] = useState([]);

  useEffect(() => {
    if (renderType !== RenderType.dragdrop)
      DataLoader.load(t, datasource, setData);
  }, []);

  return (
    <Select
      aria-readonly={isReadonly}
      style={renderStyle(style)}
      options={data}
    />
  );
}
