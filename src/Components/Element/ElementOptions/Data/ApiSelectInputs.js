import { Button, Input, Select, Tooltip } from "antd";

export const ApiSelectorInput = ({
  t,
  api,
  openSelectApiModal,
  removeSelectedApi,
}) => (
  <Input.Group compact>
    <label style={{ marginRight: 10, marginLeft: 10 }}>{t("api")}</label>
    <Input
      className="api-input"
      readOnly={true}
      placeholder={t("selectOne")}
      value={api?.title}
    />
    <Tooltip>
      <Button className="api-rm-btn" onClick={removeSelectedApi}>
        <ion-icon name="close-outline"></ion-icon>
      </Button>
      <Button className="api-select-btn" onClick={openSelectApiModal}>
        {t("select")}
      </Button>
    </Tooltip>
  </Input.Group>
);

export const KpiSelect = ({ api, kpis, value, onChange }) => (
  <Select
    disabled={api === null || api === undefined}
    options={kpis ?? []}
    value={value}
    onChange={onChange}
    style={{ width: 150 }}
    allowClear={true}
  />
);
