import BaseElementOptions from "./BaseElementOptions";

export default function RadioOptions({ t, options, setOptions }) {
  return (
    <div>
      <BaseElementOptions t={t} style={options.style} setOptions={setOptions} />
      <div class="row">
        <div class="col-12">
          <div class="inputs">
            <span class="title">{t("extra radio options")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
