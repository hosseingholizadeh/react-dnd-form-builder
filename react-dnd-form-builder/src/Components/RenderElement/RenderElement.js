import React from "react";
import { useDrag } from "react-dnd";
import * as elements from "../Element/Elements";
import { BOX } from "../types";
export default function RenderElement({ t, element, updateElement }) {
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

  let elName = element.name + "Element";
  return (
    <div ref={drag}>
      {elements[elName] ? elements[elName](t) : <span>{element.name}</span>}
    </div>
  );
}
