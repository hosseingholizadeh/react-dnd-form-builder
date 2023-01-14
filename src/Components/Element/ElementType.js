import React from "react";
import { FromServerDatasourceOptions } from "./ElementOptions/Data/FromServerDatasourceOptions";
import { FromServerMultiKpiDataOptions } from "./ElementOptions/Data/FromServerMultiKpiDataOptions";
import { ManualDatasourceOptions } from "./ElementOptions/Data/ManualDatasourceOptions";

import { ElementOptions } from "./ElementOptions/index";
import { RenderComponents } from "./Elements/index";

export const RenderType = {
  dragdrop: 1,
  preview: 2,
  finalform: 3,
};

export const ElementType = {
  button: {
    value: 1,
    icon: "tablet-landscape-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.ButtonOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderButton
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  input: {
    value: 2,
    icon: "create-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.InputOptions
        t={t}
        element={element}
        options={options}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderInput
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  dropdown: {
    value: 3,
    datasource: {
      fromserver: (t, datasource) => (
        <FromServerDatasourceOptions t={t} datasource={datasource} />
      ),
      manual: (t, datasource) => (
        <ManualDatasourceOptions t={t} datasource={datasource} />
      ),
    },
    icon: "list-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.DropdownOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderDropDown
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  progress: {
    value: 4,
    icon: "reload-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.ProgressBarOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderProgress
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  steps: {
    value: 5,
    datasource: {
      fromserver: (t, datasource) => (
        <FromServerDatasourceOptions t={t} datasource={datasource} />
      ),
      manual: (t, datasource) => (
        <ManualDatasourceOptions t={t} datasource={datasource} />
      ),
    },
    icon: "analytics-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.StepsOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderButton
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  radio: {
    value: 6,
    datasource: {
      fromserver: (t, datasource) => (
        <FromServerDatasourceOptions t={t} datasource={datasource} />
      ),
      manual: (t, datasource) => (
        <ManualDatasourceOptions t={t} datasource={datasource} />
      ),
    },
    icon: "radio-button-on-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.RadioOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderRadio
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  checkbox: {
    value: 7,
    datasource: {
      fromserver: (t, datasource) => (
        <FromServerDatasourceOptions t={t} datasource={datasource} />
      ),
      manual: (t, datasource) => (
        <ManualDatasourceOptions t={t} datasource={datasource} />
      ),
    },
    icon: "checkbox-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.CheckboxOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderCheckbox
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  tab: {
    value: 8,
    datasource: {
      fromserver: (t, datasource) => (
        <FromServerDatasourceOptions t={t} datasource={datasource} />
      ),
      manual: (t, datasource) => (
        <ManualDatasourceOptions t={t} datasource={datasource} />
      ),
    },
    icon: "apps-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.TabsOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderTab
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  switch: {
    value: 9,
    icon: "toggle-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.SwitchOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderSwitch
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  image: {
    value: 10,
    icon: "image-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.ImageOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderImage
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  rate: {
    value: 11,
    icon: "star-half-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.RateOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderRate
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  carousel: {
    value: 12,
    icon: "caret-forward-circle-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.CarouselOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderCarousel
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  divider: {
    value: 13,
    icon: "remove-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.DividerOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderDivider
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  table: {
    value: 14,
    datasource: {
      fromserver: (t, datasource) => (
        <FromServerMultiKpiDataOptions t={t} datasource={datasource} />
      ),
      manual: (t, datasource) => (
        <ManualDatasourceOptions t={t} datasource={datasource} />
      ),
    },
    icon: "grid-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.TableOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderTable
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  datepicker: {
    value: 15,
    icon: "today-outline",
    optionsComponent: (t, form, setFormData, element, options, setOptions) => (
      <ElementOptions.DatePickerOptions
        t={t}
        options={options}
        element={element}
        form={form}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    ),
    render: (t, element, renderType) => (
      <RenderComponents.RenderDatePicker
        t={t}
        element={element}
        renderType={renderType}
      />
    ),
  },
  // multiselect: {
  //   value: 16,
  //   icon: "list-outline",
  //   optionsComponent:  (t, form, setFormData, options, setOptions) => (
  //     <ElementOptions.DropdownOptions
  //       t={t}
  //       options={options}
  //       setOptions={setOptions}
  //     />
  //   ),
  //   render: (t, element, renderType) => (
  //     <RenderComponents.RenderDropDown
  //       t={t}
  //       element={element}
  //       renderType={renderType}
  //     />
  //   ),
  // },
};
