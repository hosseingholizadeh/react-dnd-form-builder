import { Button, Modal, Tabs } from "antd";
import { useState } from "react";
import { ElementType } from "../ElementType";
import ElementDataLoadOptions from "./ElementDataLoadOptions";

export default function ElementOptionsModal({
  t,
  element,
  visible,
  close,
  saveOptions,
}) {
  const [options, setOptions] = useState(element.options);
  let elementType = ElementType[element.name];
  let tabs = [
    {
      label: t("general setting"),
      key: "general",
      children: elementType.optionsComponent(t, options, setOptions),
    },
  ];

  if (elementType.hasDataSource === true)
    tabs.push({
      label: t("datasource"),
      key: "datasource",
      children: (
        <ElementDataLoadOptions
          t={t}
          datasource={options.datasource}
          setOptions={setOptions}
        />
      ),
    });

  return (
    <Modal
      destroyOnClose={true}
      maskClosable={false}
      zIndex={999}
      title={t("optionModalTitle", { name: t(element.name) })}
      centered
      open={visible}
      onCancel={() => close()}
      okText={t("save")}
      cancelText={t("cancel")}
      width={750}
      style={{ height: 450 }}
      footer={[
        <Button key="back" onClick={() => close()}>
          {t("cancel")}
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            saveOptions(options);
            close();
          }}
        >
          {t("save")}
        </Button>,
      ]}
    >
      <Tabs defaultActiveKey="general" items={tabs} />
    </Modal>
  );
}
