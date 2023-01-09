import { Steps } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderSteps({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return (
    <Steps style={renderStyle(options?.style)}>
      <Step status="finish" title="مرحله اول" />
      <Step status="finish" title="مرحله دوم" />
      <Step status="process" title="مرحله آخر" />
    </Steps>
  );
}
