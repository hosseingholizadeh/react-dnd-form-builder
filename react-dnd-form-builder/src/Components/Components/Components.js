import React from "react";
import Element from "../Element/Element";
import { ElementType } from "../Element/Elements";
import { Table } from "antd";

export default function Components({ t, addElement }) {
  const columns = [
    {
      title: t("elements"),
      render: (_, key) => (
        <Element
          t={t}
          name={key}
          id={ElementType[key]}
          addElement={addElement}
        />
      ),
    },
  ];
  return (
    <div class="d-flex">
      <Table
        columns={columns}
        dataSource={Object.keys(ElementType)}
        scroll={{ y: 800 }}
      />
    </div>
  );
}
