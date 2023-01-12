import React from "react";
import { useDragLayer } from "react-dnd";
import { BOX } from "../types";
import { ElementType, RenderType } from "../Element/ElementType";
import culture from "../../lib/js/culture";

function getDragLayerStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }

  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
    width: "fit-content",
    direction: culture.isRtl() ? "rtl" : "ltr",
  };
}

export function DragLayer({ t }) {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

  const renderItem = () => {
    let elementType = ElementType[item.name];
    let hasRender = elementType && elementType.render;

    if (!hasRender) console.warn(`element ${item.name} has no render function`);
    switch (itemType) {
      case BOX:
        return hasRender ? (
          elementType.render(t, item, RenderType.dragdrop)
        ) : (
          <span>{item.name}</span>
        );
      default:
        return null;
    }
  };

  if (!isDragging) {
    return null;
  }

  return (
    <div className="draglayer" style={{ direction: "ltr" }}>
      <div style={getDragLayerStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
}
