import React from "react";

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
    hasDataSource: false,
    icon: "tablet-landscape-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.ButtonOptions
        t={t}
        options={options}
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
    hasDataSource: false,
    icon: "create-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.InputOptions
        t={t}
        options={options}
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
    hasDataSource: true,
    icon: "list-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.DropdownOptions
        t={t}
        options={options}
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
    hasDataSource: false,
    icon: "reload-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.ProgressBarOptions
        t={t}
        options={options}
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
    hasDataSource: true,
    icon: "analytics-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.StepsOptions
        t={t}
        options={options}
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
    hasDataSource: true,
    icon: "radio-button-on-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.RadioOptions
        t={t}
        options={options}
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
    hasDataSource: true,
    icon: "checkbox-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.CheckboxOptions
        t={t}
        options={options}
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
    hasDataSource: true,
    icon: "apps-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.TabsOptions
        t={t}
        options={options}
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
    hasDataSource: false,
    icon: "toggle-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.SwitchOptions
        t={t}
        options={options}
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
    hasDataSource: false,
    icon: "image-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.ImageOptions
        t={t}
        options={options}
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
    hasDataSource: false,
    icon: "star-half-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.RateOptions
        t={t}
        options={options}
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
    hasDataSource: false,
    icon: "caret-forward-circle-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.CarouselOptions
        t={t}
        options={options}
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
    hasDataSource: false,
    icon: "remove-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.DividerOptions
        t={t}
        options={options}
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
    hasDataSource: true,
    icon: "grid-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.TableOptions
        t={t}
        options={options}
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
    hasDataSource: false,
    icon: "today-outline",
    optionsComponent: (t, options, setOptions) => (
      <ElementOptions.DatePickerOptions
        t={t}
        options={options}
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
  //   hasDataSource: true,
  //   icon: "list-outline",
  //   optionsComponent: (t, options, setOptions) => (
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
