import { Button } from "antd";
import { renderStyle } from "../PreviewUtils";

export default function PreviewCarousel({ t, element }) {
  console.log(element);
  let { options, name, left, top } = element;
  let { style } = options ?? {};

  return <Button type="primary">{name}</Button>;
}
