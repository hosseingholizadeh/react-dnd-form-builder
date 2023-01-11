import { Table } from "antd";
import { useEffect, useState } from "react";
import DataLoader from "../Datasource/DataLoader";
import { RenderType } from "../ElementType";
import { renderStyle } from "../RenderUtils";

export default function RenderTable({ t, element, renderType }) {
  let { options, name } = element;
  let { style, datasource } = options ?? {};

  const [data, setData] = useState([]);

  useEffect(() => {
    if (renderType !== RenderType.dragdrop)
      DataLoader.load(t, datasource, setData);
  }, []);

  return (
    <Table
      columns={
        datasource?.selectedKpis.map((kpi) => ({
          dataIndex: kpi.value,
          title: kpi.label,
        })) ?? []
      }
      pagination={datasource?.pageable}
      bordered
      style={renderStyle(style)}
      dataSource={data}
    />
  );
}
