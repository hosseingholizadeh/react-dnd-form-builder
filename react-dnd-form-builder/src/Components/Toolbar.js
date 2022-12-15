import { Button } from "antd";
import { generateRow } from "./FbUtils";

export default function Toolbar({ t, setRows, tab_Add }) {
  const addRow = () => {
    setRows((prevRows) => [...prevRows, generateRow(prevRows.length, 1)]);
  };

  return (
    <div class="fb-toolbar">
      <Button type="primary" onClick={addRow}>
        {t("افزودن سطر جدید")}
      </Button>{" "}
      <Button
        type="primary"
        onClick={() => tab_Add("پیش نمایش فرم", "Preview", 1)}
        class="btn-info "
        style={{ borderRadius: 4, marginTop: 15 }}
      >
        پیش نمایش فرم
      </Button>
    </div>
  );
}
