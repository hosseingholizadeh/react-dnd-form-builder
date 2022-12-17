import { DragLayerMonitor, useDragLayer } from "react-dnd";

const CustomDragLayer = () => {
  const { isDragging, currentOffset, item } = useDragLayer((monitor) => {
    return {
      isDragging: monitor.isDragging(),
      currentOffset: monitor.getSourceClientOffset(),
      item: monitor.getItem(),
    };
  });

  return isDragging && currentOffset ? (
    <div
      style={{
        // functional
        transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",

        // design only
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "150px",
        height: "50px",
        border: "1px solid red",
        color: "red",
      }}
    >
      Dragging {item.id}
    </div>
  ) : null;
};

export default CustomDragLayer;
