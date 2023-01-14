import BaseElementOptions from "./BaseElementOptions";

export default function ProgressBarOptions({
  t,
  element,
  form,
  setFormData,
  options,
  setOptions,
}) {
  return (
    <div>
      <BaseElementOptions
        t={t}
        form={form}
        element={element}
        style={options.style}
        general={options.general}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    </div>
  );
}
