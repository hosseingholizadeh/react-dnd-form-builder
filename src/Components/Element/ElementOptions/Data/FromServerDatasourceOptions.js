import { Button, Input, Select, Space, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import DataApiSelectModal from "./DataApiSelectModal";

// this will be user for the {label, value} lists => ex: DropDownList
export function FromServerDatasourceOptions({ t, datasource }) {
  console.log(datasource);
  const [apiSelectModalVisible, setApiSelectModalVisible] = useState(false);
  const [kpis, setKpis] = useState([]);

  const openSelectApiModal = (e) => {
    setApiSelectModalVisible(true);
  };

  const closeSelectApiModal = (e) => {
    setApiSelectModalVisible(false);
  };

  const removeSelectedApi = (e) => {
    setSelectedApi(null);
    setSelectedLabelMapKpi(null);
    setSelectedValueMapKpi(null);
  };

  const setSelectedApi = (api) => {
    datasource.setApi(api);
    setKpis(
      datasource.api
        ? [
            ...datasource.api.kpis.map((k) => ({
              value: k,
              label: k,
            })),
          ]
        : []
    );
  };

  const setSelectedLabelMapKpi = (value) => {
    datasource.setLabelField(value);
  };

  const setSelectedValueMapKpi = (value) => {
    datasource.setValueField(value);
  };

  useEffect(() => {
    if (datasource.api) {
      setKpis([
        ...datasource.api.kpis.map((k) => ({
          value: k,
          label: k,
        })),
      ]);
    }
  }, []);

  return (
    <div class="row">
      <div class="col-12">
        <div class="inputs">
          <span class="title">{t("style options")}</span>
          <Space direction="vertical" style={{ display: "flex" }}>
            <div class="form-group">
              <Input.Group compact>
                <label style={{ marginRight: 10, marginLeft: 10 }}>
                  {t("api")}
                </label>
                <Input
                  style={{
                    width: 230,
                    height: 31,
                    borderTopLeftRadius: 7,
                    borderBottomLeftRadius: 7,
                  }}
                  readOnly={true}
                  placeholder={t("selectOne")}
                  value={datasource.api?.title}
                />
                <Tooltip>
                  <Button
                    onClick={removeSelectedApi}
                    style={{
                      height: 31,
                      borderRadius: 0,
                    }}
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </Button>
                  <Button
                    onClick={openSelectApiModal}
                    style={{
                      height: 31,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    {t("select")}
                  </Button>
                </Tooltip>
              </Input.Group>
              <DataApiSelectModal
                visible={apiSelectModalVisible}
                setSelectedApi={setSelectedApi}
                close={closeSelectApiModal}
                t={t}
              />
            </div>
            <div class="form-group">
              <label style={{ marginRight: 5, marginLeft: 5 }}>
                {t("label")}
              </label>
              <Select
                disabled={
                  datasource.api === null || datasource.api === undefined
                }
                options={kpis}
                value={datasource.labelField}
                onChange={setSelectedLabelMapKpi}
                style={{ width: 150 }}
              />
              <label style={{ marginRight: 5, marginLeft: 5 }}>
                {t("value")}
              </label>
              <Select
                disabled={
                  datasource.api === null || datasource.api === undefined
                }
                options={kpis}
                value={datasource.valueField}
                onChange={setSelectedValueMapKpi}
                style={{ width: 150 }}
              />
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}
