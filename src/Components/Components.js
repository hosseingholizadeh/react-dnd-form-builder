import React from "react";
import Element from "./Element/Element";
import { ElementType } from "./Element/ElementType";
import { Table } from "antd";

export default function Components({ t, addElement }) {
  const columns = [
    {
      title: t("elements"),
      render: (_, key) => (
        <Element
          t={t}
          name={key}
          id={ElementType[key].value}
          addElement={addElement}
        />
      ),
    },
  ];

  let tableBodyHeight = window.innerHeight;
  return (
    <div class="d-flex">
      <Table
        columns={columns}
        dataSource={Object.keys(ElementType)}
        scroll={{ y: tableBodyHeight - 65 }}
        pagination={false}
        bordered={false}
      />
    </div>
  );
}
