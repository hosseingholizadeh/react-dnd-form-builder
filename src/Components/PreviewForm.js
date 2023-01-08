import { Button, Modal } from "antd";

export default function PreviewForm({ t, elements, visible, close }) {
  console.log(visible);
  return (
    <Modal
      className="preview-modal"
      destroyOnClose={true}
      maskClosable={false}
      zIndex={999}
      title={t("preview")}
      centered
      open={visible}
      onCancel={() => close()}
      cancelText={t("cancel")}
      width={900}
      footer={[
        <Button key="submit" type="primary" onClick={() => close()}>
          {t("close")}
        </Button>,
      ]}
    >
      {Object.keys(elements).map((key) => (
        <>{elements[key].name}</>
      ))}
    </Modal>
  );
}
