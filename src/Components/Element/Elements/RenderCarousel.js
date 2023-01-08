import { Carousel } from "antd";
import { renderStyle } from "../RenderUtils";

export default function RenderCarousel({ t, element }) {
  console.log(element);
  let { options, name, left, top } = element;
  let { style } = options ?? {};

  return (
    <Carousel style={renderStyle(style)}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
    </Carousel>
  );
}
