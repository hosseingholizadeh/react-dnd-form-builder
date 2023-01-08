import React from "react";
import { useDrag } from "react-dnd";
import { BOX } from "../types";
import { ElementType } from "./ElementType";

export default function Element({ t, name, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: BOX,
    item: { name, type: BOX, id, left: 5, top: 5 },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  let elementType = ElementType[name];
  return (
    <span ref={drag} class="fb-element-item" key={id}>
      <ion-icon
        name={elementType?.icon ?? "tablet-landscape-outline"}
      ></ion-icon>
      <span>{t(name)}</span>
    </span>
  );
}
