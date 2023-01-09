import { Tabs } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderTab({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return (
    <Tabs
      defaultActiveKey="1"
      style={renderStyle(style)}
      items={[
        {
          label: t("tab 1"),
          key: "tab1",
          children: <></>,
        },
        {
          label: t("tab 2"),
          key: "tab2",
          children: <></>,
        },
      ]}
    ></Tabs>
  );
}
