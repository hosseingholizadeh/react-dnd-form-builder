import React from "react";
import ButtonOptions from "./ElementOptions/ButtonOptions";

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
      <ButtonOptions t={t} options={options} setOptions={setOptions} />
    ),
  },
  dropdown: { value: 3, optionsComponent: <ButtonOptions /> },
  progress: { value: 4, optionsComponent: <ButtonOptions /> },
  steps: { value: 5, optionsComponent: <ButtonOptions /> },
  radio: { value: 6, optionsComponent: <ButtonOptions /> },
  tab: { value: 7, optionsComponent: <ButtonOptions /> },
  switch: { value: 8, optionsComponent: <ButtonOptions /> },
  image: { value: 9, optionsComponent: <ButtonOptions /> },
  rate: { value: 10, optionsComponent: <ButtonOptions /> },
  carousel: { value: 11, optionsComponent: <ButtonOptions /> },
  divider: { value: 12, optionsComponent: <ButtonOptions /> },
  table: { value: 13, optionsComponent: <ButtonOptions /> },
};
