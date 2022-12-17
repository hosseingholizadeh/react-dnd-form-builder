import { Button, Modal } from "antd";
import { useState } from "react";
import { ElementType } from "../ElementType";

export default function ElementOptionsModal({
  t,
  element,
  visible,
  close,
  saveOptions,
}) {
  const [options, setOptions] = useState(element.options);
  let elementType = ElementType[element.name];

  return (
    <Modal
      maskClosable={false}
      zIndex={999}
      title={t("options {{element}}")}
      centered
      open={visible}
      onCancel={() => close()}
      okText={t("save")}
      cancelText={t("cancel")}
      width={600}
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
      {elementType.optionsComponent(t, options, setOptions)}
    </Modal>
  );
}
