import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { getColumnClassName } from "../FbUtils";
import RenderElement from "../RenderElement/RenderElement";
import { BOX } from "../types";

export default function DropzoneColumn({
  t,
  row,
  column,
  elements,
  updateElement,
}) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: BOX,
    drop: () => ({ row, column }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: BOX,
    // item: { name: element.name },
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

  const isActive = canDrop && isOver;
  return (
    <div
      ref={drop}
      className={getColumnClassName(row)}
      style={{ position: "relative", border: "1px solid #ccc" }}
    >
      {isActive ? <div class="hover"></div> : <></>}
      {(() => {
        if (elements.length === 0) {
          return (
            <div class="text-center pt-2 pb-2">{t("leave elements here")}</div>
          );
        } else {
          return elements.map((el) => (
            <div ref={drag}>{RenderElement(t, el)}</div>
          ));
        }
      })()}
    </div>
  );
}
