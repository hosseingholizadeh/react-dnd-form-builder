import { Button, Input, Radio, Space, Table } from "antd";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { DataLoadOptions, KeyValueDatasource } from "./Datasource";

export default function ElementDataLoadOptions({ t, datasource, setOptions }) {
  console.log(datasource);
  const onChangeDataSource = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      datasource: datasource,
    }));
  };

  if (!datasource) {
    datasource = new KeyValueDatasource(
      DataLoadOptions.fromserver,
      onChangeDataSource
    );
  }

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="inputs">
            <div class="form-group">
              <Radio.Group
                defaultValue={datasource.loadType}
                onChange={(e) => datasource.changeLoadType(e.target.value)}
              >
                {Object.keys(DataLoadOptions).map((key) => (
                  <Radio value={DataLoadOptions[key]}>{t(key)}</Radio>
                ))}
              </Radio.Group>
            </div>
          </div>
        </div>
      </div>

      {(() => {
        if (datasource.loadType === DataLoadOptions.fromserver) {
          return <FromServerDatasourceOptions datasource={datasource} />;
        } else {
          return <ManualDatasourceOptions datasource={datasource} />;
        }
      })()}
    </>
  );
}

function FromServerDatasourceOptions({ datasource }) {
  return (
    <div class="row">
      <div class="col-12">
        <div class="inputs"></div>
      </div>
    </div>
  );
}

function ManualDatasourceOptions({ datasource }) {
  const [text, setText] = useState(null);
  const [value, setValue] = useState(null);

  const columns = [
    {
      dataIndex: "text",
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
    text && text.trim() !== "" && value && value.trim !== "";
  const addNewDataItem = (e) => {
    if (canAddNewItem()) {
      datasource.addDataItem(text, value);
      setText("");
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
                  onChange={(e) => setText(e.target.value)}
                  value={text}
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
