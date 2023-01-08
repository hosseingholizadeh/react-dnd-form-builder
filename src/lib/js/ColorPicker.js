import { Input } from "antd";
import { useState } from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker({ label, onChange, color }) {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  return (
    <>
      <label>{label}</label>
      <Input
        onClick={() => setColorPickerVisible(true)}
        readOnly
        style={{
          width: 30,
          backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        }}
      />
      {colorPickerVisible ? (
        <div style={popover}>
          <div style={cover} onClick={() => setColorPickerVisible(false)} />
          <SketchPicker
            color={color}
            onChange={(color) => onChange(color.rgb)}
          />
        </div>
      ) : null}
    </>
  );
}
