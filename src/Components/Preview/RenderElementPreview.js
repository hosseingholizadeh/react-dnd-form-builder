import * as elements from "../Element/Elements";

export default function RenderElementPreview(t, element) {
  let { name } = element;
  let elName = name + "Element";

  return (
    <>{elements[elName] ? elements[elName](t, element) : <span>{name}</span>}</>
  );
}
