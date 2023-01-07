import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import * as elements from "../Element/Elements";
import { BOX } from "../types";
import ElementOptionsModal from "../Element/ElementOptions/ElementOptionsModal.jsx";
import { getEmptyImage } from "react-dnd-html5-backend";

function getDraggableBoxStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    width: "fit-Content",
    height: isDragging ? 0 : "",
  };
}

export default function RenderElement({ t, element, updateElementOptions }) {
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);

  const { name, left, top, id } = element;
  const [{ isDragging }, drag, preview] = useDrag({
    type: BOX,
    item: { type: BOX, id, left, top, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  const openOptionsModal = () => setOptionsModalVisible(true);
  const closeOptionsModal = () => setOptionsModalVisible(false);
  const saveElementOptions = (options) => {
    updateElementOptions(element, options);
  };

  let elName = element.name + "Element";
  return (
    <div
      className="dragitem"
      ref={drag}
      onDoubleClick={openOptionsModal}
      style={getDraggableBoxStyles(left, top, isDragging)}
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
