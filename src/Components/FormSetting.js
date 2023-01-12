import { Drawer, Radio, Space } from "antd";
import { useState } from "react";
import { ApiSelectorInput } from "./Element/ElementOptions/Data/ApiSelectInputs";
import DataApiSelectModal from "./Element/ElementOptions/Data/DataApiSelectModal";
import culture from "../lib/js/culture";

export default function FormSetting({ t, visible, close, form, setFormData }) {
  return (
    <Drawer
      title="Basic Drawer"
      placement={culture.isRtl(t.lang) ? "left" : "right"}
      onClose={close}
      open={visible}
    >
      {GeneralFormSetting(t, form, setFormData)}
      {form.formType === formType.submitForm ? (
        ApiSetting(t, form, setFormData)
      ) : (
        <></>
      )}
    </Drawer>
  );
}

const formType = {
  submitForm: 1,
  managementForm: 2,
};

function GeneralFormSetting(t, form, setFormData) {
  const setTitle = (e) => {
    setFormData({ ...form, title: e.target.value });
  };

  const onChangeFormType = (e) => {
    setFormData({ ...form, formType: e.target.value });
  };

  return (
    <div class="row">
      <div class="col-12">
        <div class="inputs">
          <Space>
            <div class="form-group">
              <label>{t("title")}</label>
              <input
                class="form-control"
                defaultValue={form.title}
                onChange={setTitle}
              />
            </div>
            <div class="form-group">
              <Radio.Group
                onChange={onChangeFormType}
                defaultValue={form.formType}
              >
                <Radio value={formType.submitForm}>{t("submitForm")}</Radio>
                <Radio value={formType.managementForm}>
                  {t("managementForm")}
                </Radio>
              </Radio.Group>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}

function ApiSetting(t, form, setFormData) {
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
  };

  const setSelectedApi = (api) => {
    form.setApi(api);
    setKpis(
      form.api
        ? [
            ...form.api.kpis.map((k) => ({
              value: k,
              label: k,
            })),
          ]
        : []
    );
  };

  return (
    <div class="row">
      <div class="col-12">
        <div class="inputs">
          <span class="title">{t("styleOptions")}</span>
          <Space direction="vertical" style={{ display: "flex" }}>
            <div class="form-group">
              <ApiSelectorInput
                t={t}
                api={form.api}
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
          </Space>
        </div>
      </div>
    </div>
  );
}
