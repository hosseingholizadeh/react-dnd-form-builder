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
    width: "fit-content",
    height: "fit-content",
  };
}

export default function RenderElement({
  t,
  element,
  updateElementOptions,
  setSelectedItem,
  isSelected,
  form,
  setFormData,
}) {
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const { name, left, top, id, options } = element;

  const dragItemId = "di_" + element.id;

  const resizeHandler = (mouseDownEvent) => {
    const startSize = options.style
      ? {
          x: options.style.width ?? 150,
          y: options.style.height ?? 50,
        }
      : { x: 150, y: 50 };
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

    function onMouseMove(mouseMoveEvent) {
      changeElementSize(
        startSize.x - startPosition.x + mouseMoveEvent.pageX,
        startSize.y - startPosition.y + mouseMoveEvent.pageY
      );
    }

    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    }

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };

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

  const changeElementSize = (x, y) => {
    updateElementOptions(element, {
      ...options,
      style: { ...options.style, width: x, height: y },
    });
  };

  let elementType = ElementType[element.name];
  return (
    <div
      className={"resizable" + (isSelected ? " selected" : "")}
      style={getDraggableBoxStyles(left, top, isDragging)}
    >
      {(() => {
        if (isSelected) {
          return (
            <button
              class="resizeButton"
              type="button"
              onMouseDown={resizeHandler}
            ></button>
          );
        }
      })()}
      <div
        id={dragItemId}
        aria-readonly={true}
        className="dragitem"
        ref={drag}
        onClick={() => (setSelectedItem ? setSelectedItem(element) : false)}
        onDoubleClick={openOptionsModal}
      >
        <ElementOptionsModal
          t={t}
          element={element}
          visible={optionsModalVisible}
          close={closeOptionsModal}
          saveOptions={saveElementOptions}
          form={form}
          setFormData={setFormData}
        />
        {elementType ? (
          elementType.render(t, element, RenderType.dragdrop)
        ) : (
          <span>{element.name}</span>
        )}
      </div>
    </div>
  );
}
