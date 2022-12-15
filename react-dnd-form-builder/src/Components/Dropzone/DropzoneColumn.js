import React from "react";
import { useDrop } from "react-dnd";
import ElementRender from "../ElementRender/ElementRender";
import { BOX } from "../types";
import { getColumnClassName } from "../FbUtils";

export default function DropzoneColumn({ t, row, column, elements }) {
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
      style={{ border: "1px solid #ccc" }}
      className={getColumnClassName(row)}
    >
      {isActive ? <div class="hover"></div> : <></>}
      {(() => {
        if (elements.length === 0) {
          return (
            <div class="text-center pt-2 pb-2">{t("leave elements here")}</div>
          );
        } else {
          elements.map((each, index) => {
            return <ElementRender t={t} key={index} name={each.element} />;
          });
        }
      })()}
    </div>
  );
}
