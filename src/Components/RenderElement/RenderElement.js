import React, { useState } from "react";
import { useDrag } from "react-dnd";
import * as elements from "../Element/Elements";
import { BOX } from "../types";
import ElementOptionsModal from "../Element/ElementOptions/ElementOptionsModal.jsx";

export default function RenderElement({
  t,
  element,
  updateElement,
  updateElementOptions,
}) {
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: BOX,
    item: element,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        updateElement(dropResult.row, dropResult.column, item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const openOptionsModal = () => setOptionsModalVisible(true);
  const closeOptionsModal = () => setOptionsModalVisible(false);
  const saveElementOptions = (options) => {
    console.log(options);
    updateElementOptions(element, options);
  };

  let elName = element.name + "Element";
  return (
    <div
      ref={drag}
      onDoubleClick={openOptionsModal}
      style={{ width: "fit-Content" }}
    >
      <ElementOptionsModal
        t={t}
        element={element}
        visible={optionsModalVisible}
        close={closeOptionsModal}
        saveOptions={saveElementOptions}
      />
      {elements[elName] ? (
        elements[elName](t, element)
      ) : (
        <span>{element.name}</span>
      )}
    </div>
  );
}
