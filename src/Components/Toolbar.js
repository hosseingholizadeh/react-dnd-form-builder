import { Button, Space } from "antd";
import { useState } from "react";
import FormSetting from "./FormSetting";

export default function Toolbar({ t, openPreview, form, setFormData }) {
  const [formSettingVisible, setFormSettingVisible] = useState(false);

  return (
    <div class="row fb-toolbar">
      <FormSetting
        visible={formSettingVisible}
        close={() => setFormSettingVisible(false)}
        t={t}
        form={form}
        setFormData={setFormData}
      />
      <div className="col-12">
        <Space>
          <Button type="primary" onClick={() => setFormSettingVisible(true)}>
            {t("formSetting")}
          </Button>
          <Button type="dashed" danger onClick={openPreview}>
            {t("preview")}
          </Button>
        </Space>
      </div>
    </div>
  );
}
