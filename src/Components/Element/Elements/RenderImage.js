import { Image } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderImage({ t, element }) {
  console.log(element);
  let { options, name } = element;
  let { style } = options ?? {};

  return (
    <Image.PreviewGroup style={renderStyle(options?.style)}>
      <Image width={200} />
    </Image.PreviewGroup>
  );
}
