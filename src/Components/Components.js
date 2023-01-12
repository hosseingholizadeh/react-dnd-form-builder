import React from "react";
import Element from "./Element/Element";
import { ElementType } from "./Element/ElementType";
import { Table } from "antd";

export default function Components({ t, addElement }) {
  const columns = [
    {
      title: () => (
        <span style={{ fontSize: 16, fontWeight: 600, color: "rgb(6 0 127)" }}>
          <ion-icon name="grid-outline"></ion-icon> {t("elements")}
        </span>
      ),
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
    <div class="d-flex widgets-container">
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
