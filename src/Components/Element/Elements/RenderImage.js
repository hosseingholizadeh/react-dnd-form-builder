import { Image } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderImage({ t, element }) {
  let { options, name } = element;
  let { style } = options ?? {};

  return (
    <Image.PreviewGroup style={renderStyle(options?.style)}>
      <Image src="./image.jpg" width={200} height={200} />
    </Image.PreviewGroup>
  );
}
