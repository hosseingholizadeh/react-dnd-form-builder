import { Input, Space } from "antd";
import React from "react";
import ColorPicker from "../../../lib/js/ColorPicker";
import { ElementType } from "../ElementType";
import { KpiSelect } from "./Data/ApiSelectInputs";

export default function BaseElementOptions({
  t,
  element,
  form,
  setFormData,
  style,
  general = {},
  setOptions,
}) {
  const onChangeStyle = (option, value) => {
    let newStyle = { ...style, [option]: value };
    setOptions((prevOptions) => ({ ...prevOptions, style: newStyle }));
  };

  const onChangeKpiConnection = (kpi) => {
    let newGeneral = { ...general, kpi: kpi };
    setOptions((prevOptions) => ({ ...prevOptions, general: newGeneral }));
    toggleSelectdKpiInForm(kpi);
  };

  const toggleSelectdKpiInForm = (kpi) => {
    if (kpi) {
      let index = form.kpis.findIndex((x) => x.name === kpi);
      if (index !== -1) {
        form.kpis[index].elementId = element.id;
        setFormData({ ...form, kpis: [...form.kpis] });
        console.log(`kpi ${kpi} connection to element ${element.id} is added`);
      }
    } else {
      //kpi is removed from the element
      let index = form.kpis.findIndex((x) => x.elementId === element.id);
      if (index !== -1) {
        form.kpis[index].elementId = undefined;
        setFormData({ ...form, kpis: [...form.kpis] });
        console.log(
          `kpi ${form.kpis[index].name} connection to element ${element.id} is removed`
        );
      }
    }
  };

  const getNotSelectedKpis = () =>
    form.kpis
      ?.filter((kpi) => !kpi.elementId)
      .map((kpi) => ({ label: kpi.name, value: kpi.name })) ?? [];

  const isValueControlElement = () => element.name !== ElementType.button;

  return (
    <div class="row">
      <div class="col-12">
        {(() => {
          if (style) {
            return (
              <div class="inputs">
                <span class="title">{t("styleOptions")}</span>
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
                      label={t("backgroundColor")}
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
        {(() => {
          console.log(form);
          if (isValueControlElement()) {
            return (
              <div class="inputs">
                <span class="title">{t("kpiConnectionOptions")}</span>
                <Space>
                  <div class="form-group">
                    <label style={{ marginRight: 5, marginLeft: 5 }}>
                      {t("label")}
                    </label>
                    <KpiSelect
                      api={form.api}
                      kpis={getNotSelectedKpis()}
                      value={general.kpi}
                      onChange={onChangeKpiConnection}
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
