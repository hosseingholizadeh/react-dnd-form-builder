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
      style={{
        width: 230,
        height: 31,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
      }}
      readOnly={true}
      placeholder={t("selectOne")}
      value={api?.title}
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
);

export const KpiSelect = ({ api, kpis, value, onChange }) => (
  <Select
    disabled={api === null || api === undefined}
    options={kpis ?? []}
    value={value}
    onChange={onChange}
    style={{ width: 150 }}
  />
);
