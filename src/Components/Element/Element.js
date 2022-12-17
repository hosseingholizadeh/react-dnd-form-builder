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

  let iconFuncName = name + "Icon";
  return (
    <span ref={drag} class="fb-element-item" key={id}>
      {elements[iconFuncName] ? (
        elements[iconFuncName](t, name, id)
      ) : (
        <ion-icon name="tablet-landscape-outline"></ion-icon>
      )}
      <span>{t(name)}</span>
    </span>
  );
}
