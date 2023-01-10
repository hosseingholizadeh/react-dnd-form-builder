import { Modal, notification } from "antd";
import i18n from "../../lan/config";

export function ErrorMessage(msg) {
  notification["error"]({
    message: i18n.t("fail"),
    duration: 2.5,
    description: msg,
    placement: "bottomLeft",
  });
}

export function SuccessMessage(msg) {
  notification["success"]({
    message: i18n.t("success"),
    duration: 2.5,
    description: msg,
    placement: "bottomLeft",
  });
}

export const OpenConfirm = ({ title, body, ok, cancel }) => {
  return Modal.confirm({
    zIndex: 9999,
    closable: false,
    maskClosable: false,
    destroyOnClose: true,
    title: title,
    content: body,
    //mask:false,
    onOk() {
      if (ok?.event) ok.event();
    },
    onCancel() {
      if (cancel?.event) cancel.event();
    },
    okText: ok?.text ?? i18n.t("ok"),
    cancelText: cancel?.text ?? i18n.t("no"),
  });
};
