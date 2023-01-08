import { ElementType } from "../Element/ElementType";

export default function RenderElementPreview(t, element) {
  let { name } = element;
  let elementType = ElementType[name];
  let hasPreview = <span>{name}</span>;

  if (!hasPreview) console.warn(`element ${name} has no preview`);

  return <>{hasPreview ? elementType.preview(t, element) : name}</>;
}
