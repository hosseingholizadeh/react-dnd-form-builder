import React, { useCallback } from "react";
import { useDrop } from "react-dnd";
import RenderElement from "../RenderElement/RenderElement";
import { BOX } from "../types";

export function DragLayerContainer({
  t,
  elements,
  addElement,
  updateElement,
  updateElementOptions,
}) {
  const addBox = useCallback(
    (el, left, top) => {
      addElement({ ...el, left, top });
    },
    [elements]
  );
  const moveBox = useCallback(
    (el, left, top) => {
      updateElement({ ...el, left, top });
    },
    [elements]
  );

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: BOX,
    drop(item, monitor) {
      if (!elements[item.id]) {
        const delta = monitor.getClientOffset();

        let left = Math.round(delta.x);
        let top = Math.round(delta.y);
        addBox(item, left, top);
      } else {
        const delta = monitor.getDifferenceFromInitialOffset();

        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        moveBox(item, left, top);
      }
      return undefined;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <>
      <div ref={drop} className="dragcontainer">
        {Object.keys(elements).map((key) => {
          return (
            <RenderElement
              t={t}
              id={key}
              element={elements[key]}
              updateElement={updateElement}
              updateElementOptions={updateElementOptions}
            />
          );
        })}
      </div>
    </>
  );
}
