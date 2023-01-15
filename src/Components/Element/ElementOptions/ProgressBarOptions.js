import BaseElementOptions from "./BaseElementOptions";

export default function ProgressBarOptions({
  t,
  element,
  form,
  setFormData,
  setOptions,
}) {
  return (
    <div>
      <BaseElementOptions
        t={t}
        form={form}
        element={element}
        setFormData={setFormData}
        setOptions={setOptions}
      />
    </div>
  );
}
