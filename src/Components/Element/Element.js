import React from "react";
import { useDrag } from "react-dnd";
import { BOX } from "../types";
import * as elements from "./Elements";

export default function Element({ t, name, id, addElement }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: BOX,
    item: { name, type: BOX, id, left: 5, top: 5 },
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult();
    //   monitor.getInitialSourceClientOffset();
    //   if (item && dropResult) {
    //    // addElement(item);
    //   }
    // },
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
