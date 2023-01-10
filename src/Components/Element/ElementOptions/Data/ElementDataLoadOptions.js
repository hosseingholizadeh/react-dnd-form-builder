import { Radio } from "antd";
import React from "react";
import { DataLoadType } from "../../Datasource/DataLoadType";
import { KeyValueDatasource } from "../../Datasource/KeyValueDatasource";
import { FromServerDatasourceOptions } from "./FromServerDatasourceOptions";
import { ManualDatasourceOptions } from "./ManualDatasourceOptions";

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
      DataLoadType.fromserver,
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
                {Object.keys(DataLoadType).map((key) => (
                  <Radio value={DataLoadType[key]}>{t(key)}</Radio>
                ))}
              </Radio.Group>
            </div>
          </div>
        </div>
      </div>

      {(() => {
        if (datasource.loadType === DataLoadType.fromserver) {
          return <FromServerDatasourceOptions t={t} datasource={datasource} />;
        } else {
          return <ManualDatasourceOptions t={t} datasource={datasource} />;
        }
      })()}
    </>
  );
}
