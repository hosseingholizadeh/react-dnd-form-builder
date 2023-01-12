import { Button, Checkbox, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { ApiSelectorInput, KpiSelect } from "./ApiSelectInputs";
import DataApiSelectModal from "./DataApiSelectModal";

// this will be user for the {label, value} lists => ex: DropDownList
export function FromServerMultiKpiDataOptions({ t, datasource }) {
  const [apiSelectModalVisible, setApiSelectModalVisible] = useState(false);
  const [kpis, setKpis] = useState([]);
  const [selectedKpi, setSelectedKpiApi] = useState(null);
  const [selectedKpiForRemove, setSelectedKpiApiForRemove] = useState(null);

  const openSelectApiModal = (e) => {
    setApiSelectModalVisible(true);
  };

  const closeSelectApiModal = (e) => {
    setApiSelectModalVisible(false);
  };

  const removeSelectedApi = (e) => {
    setSelectedApi(null);
    setKpis([]);
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

  const addKpiToSelected = () => {
    if (selectedKpi) {
      datasource.addKpi(selectedKpi);
    }
  };

  const removeSelectedKpi = () => {
    if (selectedKpiForRemove) {
      datasource.removeKpi(selectedKpiForRemove);
    }
  };

  const getNotSelectedKpis = () => {
    return datasource.returnNotSelectedKpis(kpis);
  };

  const selectPk = (value) => {
    datasource.setPk(value);
  };

  const onChangePaging = (checked) => {
    datasource.setIsPageable(checked);
  };

  const columns = [
    {
      dataIndex: "label",
      title: t("kpis"),
      width: 100,
    },
  ];

  const selectedTableColumns = [
    {
      dataIndex: "label",
      width: 100,
      title: t("selectedKpis"),
    },
  ];

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
          <Space>
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
              <label>{t("pk")}</label>
              <KpiSelect
                api={datasource.api}
                kpis={kpis}
                value={datasource.pk}
                onChange={selectPk}
              />
            </div>
          </Space>
        </div>
        {(() => {
          if (datasource.api) {
            return (
              <>
                <div class="inputs">
                  <Space>
                    <div class="form-group">
                      <Checkbox
                        defaultChecked={datasource.pageable}
                        onChange={onChangePaging}
                      >
                        {t("isPageable")}
                      </Checkbox>
                    </div>
                  </Space>
                </div>
                <div class="inputs">
                  <dic class="col-4">
                    <Table
                      size="small"
                      bordered
                      scroll={{ y: 175 }}
                      style={{ height: 175, maxHeight: 175 }}
                      columns={columns}
                      dataSource={[...getNotSelectedKpis()]}
                      pagination={false}
                      rowClassName={(record, index) =>
                        selectedKpi?.value === record.value
                          ? "ant-table-row-selected"
                          : ""
                      }
                      onRow={(record, index) => {
                        return {
                          onClick: (e) => {
                            setSelectedKpiApi(record);
                          },
                        };
                      }}
                    />
                  </dic>
                  <dic class="col-4 text-center">
                    <Space direction="vertical" style={{ display: "flex" }}>
                      <Button type="primary" onClick={addKpiToSelected}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                      </Button>
                      <Button type="primary" onClick={removeSelectedKpi}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                      </Button>
                    </Space>
                  </dic>
                  <dic class="col-4">
                    <Table
                      size="small"
                      bordered
                      scroll={{ y: 175 }}
                      style={{ height: 175, maxHeight: 175 }}
                      columns={selectedTableColumns}
                      dataSource={[...datasource.selectedKpis]}
                      pagination={false}
                      rowClassName={(record, index) =>
                        selectedKpiForRemove?.value === record.value
                          ? "ant-table-row-selected"
                          : ""
                      }
                      onRow={(record, index) => {
                        return {
                          onClick: (e) => {
                            setSelectedKpiApiForRemove(record);
                          },
                        };
                      }}
                    />
                  </dic>
                </div>
              </>
            );
          }
        })()}
      </div>
    </div>
  );
}
