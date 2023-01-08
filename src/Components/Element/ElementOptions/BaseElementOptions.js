import { Input, Space } from "antd";
import React, { useEffect, useState } from "react";
import ColorPicker from "../../lib/ColorPicker";

export default function BaseElementOptions({ t, style, setOptions }) {
  const onChangeStyle = (option, value) => {
    let newStyle = { ...style, [option]: value };
    setOptions((prevOptions) => ({ ...prevOptions, style: newStyle }));
  };

  return (
    <div class="row">
      <div class="col-12">
        {(() => {
          if (style) {
            return (
              <div class="inputs">
                <span class="title">{t("style options")}</span>
                <Space>
                  <div class="form-group">
                    <label>{t("width")}</label>
                    <Input
                      type="number"
                      style={{ width: 75 }}
                      min={0}
                      value={style.width}
                      onChange={(e) =>
                        onChangeStyle("width", Number(e.target.value))
                      }
                    />
                  </div>
                  <div class="form-group">
                    <label>{t("height")}</label>
                    <Input
                      type="number"
                      min={0}
                      style={{ width: 75 }}
                      value={style.height}
                      onChange={(e) =>
                        onChangeStyle("height", Number(e.target.value))
                      }
                    />
                  </div>
                  <div class="form-group">
                    <ColorPicker
                      label={t("background color")}
                      onChange={(color) =>
                        onChangeStyle("backgroundColorRgb", color)
                      }
                      color={style.backgroundColorRgb ?? {}}
                    />
                  </div>
                  <div class="form-group">
                    <ColorPicker
                      label={t("color")}
                      onChange={(color) => onChangeStyle("colorRgb", color)}
                      color={style.colorRgb ?? {}}
                    />
                  </div>
                </Space>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}
