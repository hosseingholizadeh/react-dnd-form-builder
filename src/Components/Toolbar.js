import { Button, Space } from "antd";

export default function Toolbar({ t, tab_Add }) {
  return (
    <div class="row fb-toolbar">
      <div className="col-12">
        <Space>
          <Button
            type="primary"
            onClick={() => tab_Add("Preview", "Preview", 1)}
          >
            {t("Preview")}
          </Button>
        </Space>
      </div>
    </div>
  );
}
