import { Button, Dropdown, Space } from "antd";
import { generateRow } from "./FbUtils";

export default function Toolbar({ t, setRows, tab_Add }) {
  const addRow = (columns) => {
    setRows((prevRows) => {
      return [...prevRows, generateRow(prevRows.length + 1, columns)];
    });
  };

  const onMenuClick = (e) => {
    console.log("click", e);
    addRow(e.key);
  };

  const items = [
    {
      key: "1",
      label: "add row(1 column)",
    },
    {
      key: "2",
      label: "add row(2 column)",
    },
    {
      key: "3",
      label: "add row(3 column)",
    },
    {
      key: "4",
      label: "add row(4 column)",
    },
  ];

  return (
    <div class="row fb-toolbar">
      <div className="col-12">
        <Space>
          <Dropdown.Button menu={{ items, onClick: onMenuClick }}>
            {t("Add Row")}
          </Dropdown.Button>
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
