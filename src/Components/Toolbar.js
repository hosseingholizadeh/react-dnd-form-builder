import { Button, Space } from "antd";

export default function Toolbar({ t, openPreview }) {
  return (
    <div class="row fb-toolbar">
      <div className="col-12">
        <Space>
          <Button type="primary" onClick={openPreview}>
            {t("Preview")}
          </Button>
        </Space>
      </div>
    </div>
  );
}
