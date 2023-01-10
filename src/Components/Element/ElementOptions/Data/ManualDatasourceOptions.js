import { Button, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react";

export function ManualDatasourceOptions({ t, datasource }) {
  const [label, setLabel] = useState(null);
  const [value, setValue] = useState(null);

  const columns = [
    {
      dataIndex: "label",
      title: t("text"),
    },
    {
      dataIndex: "value",
      title: t("value"),
    },
    {
      width: 50,
      render: (_, item) => (
        <Space>
          <span onClick={(e) => datasource.removeDataItem(item)}>
            <ion-icon name="trash-outline"></ion-icon>
          </span>
        </Space>
      ),
    },
  ];

  const canAddNewItem = () =>
    label && label.trim() !== "" && value && value.trim !== "";
  const addNewDataItem = (e) => {
    if (canAddNewItem()) {
      datasource.addDataItem(label, value);
      setLabel("");
      setValue("");
    }
  };

  useEffect(() => {}, [datasource]);

  return (
    <div class="row">
      <div class="col-12">
        <div class="inputs" style={{ height: 250 }}>
          <div class="row">
            <div class="col-4">
              <div class="form-group">
                <Input
                  type="text"
                  placeholder={t("text")}
                  style={{ marginBottom: 5 }}
                  width={120}
                  onChange={(e) => setLabel(e.target.value)}
                  value={label}
                />
                <Input
                  type="text"
                  placeholder={t("value")}
                  style={{ marginBottom: 5 }}
                  width={120}
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
                <Button
                  disabled={!canAddNewItem()}
                  type="primary"
                  onClick={addNewDataItem}
                >
                  <ion-icon name="add-circle-outline"></ion-icon>
                  {t("add")}
                </Button>
              </div>
            </div>
            <div class="col-8">
              <Table
                size="small"
                bordered
                scroll={{ y: 175 }}
                style={{ height: 175, maxHeight: 175 }}
                columns={columns}
                pagination={false}
                dataSource={[...datasource.data]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
