import React from "react";
import { useDrag } from "react-dnd";
import { BOX } from "../types";
import * as elements from "./Elements";

export default function Element({ t, name, id, addElement }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        addElement(dropResult.row, dropResult.column, item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <span ref={drag} class="fb-element-item" key={id}>
      {elements[name] ? elements[name](t, name, id) : <></>}
      <span>{t(name)}</span>
    </span>
  );
}
