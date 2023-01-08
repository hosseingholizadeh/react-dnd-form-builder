import { Button } from "antd";
import { renderStyle } from "../PreviewUtils";

export default function PreviewCheckbox({ t, element }) {
  console.log(element);
  let { options, name } = element;
  let { style } = options ?? {};

  return <Button type="primary">{name}</Button>;
}
