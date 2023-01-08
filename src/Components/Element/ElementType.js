import React from "react";

import { RenderComponents } from "./Elements/index";
import { ElementOptions } from "./ElementOptions/index";

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
    render: (t, element) => (
      <RenderComponents.RenderButton t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderInput t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderDropDown t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderProgress t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderButton t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderRadio t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderCheckbox t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderTab t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderSwitch t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderImage t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderRate t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderCarousel t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderDivider t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderTable t={t} element={element} />
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
    render: (t, element) => (
      <RenderComponents.RenderDatePicker t={t} element={element} />
    ),
  },
};
