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
            <RenderElement t={t} element={el} updateElement={updateElement} />
          ));
        }
      })()}
    </div>
  );
}
