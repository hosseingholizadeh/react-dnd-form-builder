import React from "react";
import ButtonOptions from "./ElementOptions/ButtonOptions";
import InputOptions from "./ElementOptions/InputOptions";
import CheckboxOptions from "./ElementOptions/CheckboxOptions";
import RadioOptions from "./ElementOptions/RadioOptions";
import TableOptions from "./ElementOptions/TableOptions";
import ProgressBarOptions from "./ElementOptions/ProgressBarOptions";
import ImageOptions from "./ElementOptions/DropdownOptions";
import SwitchOptions from "./ElementOptions/SwitchOptions";
import DropdownOptions from "./ElementOptions/DropdownOptions";
import DividerOptions from "./ElementOptions/DividerOptions";
import CarouselOptions from "./ElementOptions/CarouselOptions";
import StepsOptions from "./ElementOptions/StepsOptions";
import TabsOptions from "./ElementOptions/TabsOptions";
import RateOptions from "./ElementOptions/RateOptions";

export const ElementType = {
  button: {
    value: 1,
    optionsComponent: (t, options, setOptions) => (
      <ButtonOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  input: {
    value: 2,
    optionsComponent: (t, options, setOptions) => (
      <InputOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  dropdown: {
    value: 3,
    optionsComponent: (t, options, setOptions) => (
      <DropdownOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  progress: {
    value: 4,
    optionsComponent: (t, options, setOptions) => (
      <ProgressBarOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  steps: {
    value: 5,
    optionsComponent: (t, options, setOptions) => (
      <StepsOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  radio: {
    value: 6,
    optionsComponent: (t, options, setOptions) => (
      <RadioOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  checkbox: {
    value: 7,
    optionsComponent: (t, options, setOptions) => (
      <CheckboxOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  tab: {
    value: 8,
    optionsComponent: (t, options, setOptions) => (
      <TabsOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  switch: {
    value: 9,
    optionsComponent: (t, options, setOptions) => (
      <SwitchOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  image: {
    value: 10,
    optionsComponent: (t, options, setOptions) => (
      <ImageOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  rate: {
    value: 11,
    optionsComponent: (t, options, setOptions) => (
      <RateOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  carousel: {
    value: 12,
    optionsComponent: (t, options, setOptions) => (
      <CarouselOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  divider: {
    value: 13,
    optionsComponent: (t, options, setOptions) => (
      <DividerOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  table: {
    value: 14,
    optionsComponent: (t, options, setOptions) => (
      <TableOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
};
