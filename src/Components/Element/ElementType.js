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
import DatePickerOptions from "./ElementOptions/DatePickerOptions";

import PreviewButton from "../Preview/Elements/PreviewButton";
import PreviewDropDown from "../Preview/Elements/PreviewDropDown";
import PreviewInput from "../Preview/Elements/PreviewInput";
import PreviewRadio from "../Preview/Elements/PreviewRadio";
import PreviewCheckbox from "../Preview/Elements/PreviewCheckbox";
import PreviewSwitch from "../Preview/Elements/PreviewSwitch";
import PreviewImage from "../Preview/Elements/PreviewImage";
import PreviewRate from "../Preview/Elements/PreviewRate";
import PreviewCarousel from "../Preview/Elements/PreviewCarousel";
import PreviewDivider from "../Preview/Elements/PreviewDivider";
import PreviewTable from "../Preview/Elements/PreviewTable";
import PreviewDatePicker from "../Preview/Elements/PreviewDatePicker";
import PreviewTab from "../Preview/Elements/PreviewTab";
import PreviewProgress from "../Preview/Elements/PreviewProgress";

export const ElementType = {
  button: {
    value: 1,
    hasDataSource: false,
    optionsComponent: (t, options, setOptions) => (
      <ButtonOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewButton t={t} element={element} />,
  },
  input: {
    value: 2,
    optionsComponent: (t, options, setOptions) => (
      <InputOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewInput t={t} element={element} />,
  },
  dropdown: {
    value: 3,
    hasDataSource: true,
    optionsComponent: (t, options, setOptions) => (
      <DropdownOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewDropDown t={t} element={element} />,
  },
  progress: {
    value: 4,
    optionsComponent: (t, options, setOptions) => (
      <ProgressBarOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewProgress t={t} element={element} />,
  },
  steps: {
    value: 5,
    hasDataSource: true,
    optionsComponent: (t, options, setOptions) => (
      <StepsOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewButton t={t} element={element} />,
  },
  radio: {
    value: 6,
    hasDataSource: true,
    optionsComponent: (t, options, setOptions) => (
      <RadioOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewRadio t={t} element={element} />,
  },
  checkbox: {
    value: 7,
    hasDataSource: true,
    optionsComponent: (t, options, setOptions) => (
      <CheckboxOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewCheckbox t={t} element={element} />,
  },
  tab: {
    value: 8,
    hasDataSource: true,
    optionsComponent: (t, options, setOptions) => (
      <TabsOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewTab t={t} element={element} />,
  },
  switch: {
    value: 9,
    optionsComponent: (t, options, setOptions) => (
      <SwitchOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewSwitch t={t} element={element} />,
  },
  image: {
    value: 10,
    optionsComponent: (t, options, setOptions) => (
      <ImageOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewImage t={t} element={element} />,
  },
  rate: {
    value: 11,
    optionsComponent: (t, options, setOptions) => (
      <RateOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewRate t={t} element={element} />,
  },
  carousel: {
    value: 12,
    optionsComponent: (t, options, setOptions) => (
      <CarouselOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewCarousel t={t} element={element} />,
  },
  divider: {
    value: 13,
    optionsComponent: (t, options, setOptions) => (
      <DividerOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewDivider t={t} element={element} />,
  },
  table: {
    value: 14,
    hasDataSource: true,
    optionsComponent: (t, options, setOptions) => (
      <TableOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewTable t={t} element={element} />,
  },
  datepicker: {
    value: 15,
    optionsComponent: (t, options, setOptions) => (
      <DatePickerOptions t={t} options={options} setOptions={setOptions} />
    ),
    preview: (t, element) => <PreviewDatePicker t={t} element={element} />,
  },
};
