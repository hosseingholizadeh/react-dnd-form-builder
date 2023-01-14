import { Button, Modal, Tabs } from "antd";
import { useState } from "react";
import culture from "../../../lib/js/culture";
import { ElementType } from "../ElementType";
import ElementDataLoadOptions from "./Data/ElementDataLoadOptions";

export default function ElementOptionsModal({
  t,
  element,
  visible,
  close,
  saveOptions,
  form,
  setFormData,
}) {
  const [options, setOptions] = useState(element.options);
  let elementType = ElementType[element.name];
  let tabs = [
    {
      label: t("generalSetting"),
      key: "general",
      children: elementType.optionsComponent(
        t,
        form,
        setFormData,
        element,
        options,
        setOptions
      ),
    },
  ];

  if (elementType.datasource)
    tabs.push({
      label: t("datasource"),
      key: "datasource",
      children: (
        <ElementDataLoadOptions
          t={t}
          elementType={elementType}
          datasource={options.datasource}
          setOptions={setOptions}
        />
      ),
    });

  return (
    <Modal
      destroyOnClose={true}
      maskClosable={false}
      zIndex={9}
      title={t("optionModalTitle", { name: t(element.name) })}
      centered
      open={visible}
      onCancel={() => close()}
      okText={t("save")}
      cancelText={t("cancel")}
      width={750}
      style={{ height: 650 }}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            saveOptions(options);
            close();
          }}
        >
          {t("close")}
        </Button>,
      ]}
    >
      <Tabs
        direction={culture.isRtl(t.lang) ? "rtl" : "ltr"}
        defaultActiveKey="general"
        items={tabs}
      />
    </Modal>
  );
}
