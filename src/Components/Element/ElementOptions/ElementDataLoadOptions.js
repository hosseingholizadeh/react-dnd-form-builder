import { Radio, Space } from "antd";
import React from "react";
import { Datasource, DataLoadOptions } from "./Datasource";

export default function ElementDataLoadOptions({ t, datasource, setOptions }) {
  console.log(datasource);
  const onChangeDataSource = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      datasource: datasource,
    }));
  };

  if (!datasource) {
    datasource = new Datasource(DataLoadOptions.fromserver, onChangeDataSource);
  }

  return (
    <div class="row">
      <div class="col-12">
        <div class="inputs">
          <span class="title">{t("data options")}</span>
          <Space>
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
          </Space>
        </div>
      </div>
    </div>
  );
}
