import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { ElementType, RenderType } from "../Element/ElementType";
import { BOX } from "../types";
import ElementOptionsModal from "../Element/ElementOptions/ElementOptionsModal";
import { getEmptyImage } from "react-dnd-html5-backend";

function getDraggableBoxStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    left,
    top,
    //transform,
    //WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    width: "fit-Content",
    height: isDragging ? 0 : "",
  };
}

export default function RenderElement({
  t,
  element,
  updateElementOptions,
  setSelectedItem,
  isSelected,
}) {
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);

  const { name, left, top, id, options } = element;
  const [{ isDragging }, drag, preview] = useDrag({
    type: BOX,
    item: { type: BOX, id, left, top, name, options },
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

  let elementType = ElementType[element.name];
  return (
    <div
      aria-readonly={true}
      className={"dragitem" + (isSelected ? " selected" : "")}
      ref={drag}
      onClick={() => (setSelectedItem ? setSelectedItem(element) : false)}
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
      {elementType ? (
        elementType.render(t, element, RenderType.dragdrop)
      ) : (
        <span>{element.name}</span>
      )}
    </div>
  );
}
