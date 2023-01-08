import React from "react";
import { useDragLayer } from "react-dnd";
import { BOX } from "../types";
import * as elements from "../Element/Elements";

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
    let elName = item.name + "Element";
    switch (itemType) {
      case BOX:
        return elements[elName] ? (
          elements[elName](t, item)
        ) : (
          <span>{elName}</span>
        );
      default:
        return null;
    }
  };

  if (!isDragging) {
    return null;
  }

  return (
    <div className="draglayer">
      <div style={getDragLayerStyles(initialOffset, currentOffset)}>
        {renderItem()}
      </div>
    </div>
  );
}
