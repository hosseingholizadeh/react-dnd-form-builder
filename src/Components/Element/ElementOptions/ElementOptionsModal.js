import { Button, Modal, Tabs } from "antd";
import { DraggableData, DraggableEvent } from "react-draggable";
import Draggable from "react-draggable";
import culture from "../../../lib/js/culture";
import { ElementType } from "../ElementType";
import ElementDataLoadOptions from "./Data/ElementDataLoadOptions";
import { useRef, useState } from "react";

export default function ElementOptionsModal({
  t,
  element,
  visible,
  close,
  saveOptions,
  form,
  setFormData,
}) {
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

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
        saveOptions
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
          datasource={element.options.datasource}
          setOptions={saveOptions}
        />
      ),
    });

  return (
    <Modal
      mask={false}
      className="optionModal"
      destroyOnClose={true}
      maskClosable={false}
      zIndex={9}
      title={
        <div
          style={{
            width: "100%",
            cursor: "move",
          }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
          // fix eslintjsx-a11y/mouse-events-have-key-events
          // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
          onFocus={() => {}}
          onBlur={() => {}}
          // end
        >
          {t("optionModalTitle", { name: t(element.name) })}
        </div>
      }
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
            close();
          }}
        >
          {t("close")}
        </Button>,
      ]}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <Tabs
        direction={culture.isRtl(t.lang) ? "rtl" : "ltr"}
        defaultActiveKey="general"
        items={tabs}
      />
    </Modal>
  );
}
