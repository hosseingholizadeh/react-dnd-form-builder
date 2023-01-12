import { Space } from "antd";
import React, { useEffect, useState } from "react";
import { ApiSelectorInput, KpiSelect } from "./ApiSelectInputs";
import DataApiSelectModal from "./DataApiSelectModal";

// this will be user for the {label, value} lists => ex: DropDownList
export function FromServerDatasourceOptions({ t, datasource }) {
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
          <Space direction="vertical" style={{ display: "flex" }}>
            <div class="form-group">
              <ApiSelectorInput
                t={t}
                api={datasource.api}
                removeSelectedApi={removeSelectedApi}
                openSelectApiModal={openSelectApiModal}
              />
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
              <KpiSelect
                api={datasource.api}
                kpis={kpis}
                value={datasource.labelField}
                onChange={setSelectedLabelMapKpi}
              />
              <label style={{ marginRight: 5, marginLeft: 5 }}>
                {t("value")}
              </label>
              <KpiSelect
                api={datasource.api}
                kpis={kpis}
                value={datasource.valueField}
                onChange={setSelectedValueMapKpi}
              />
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}
