import { ElementType } from "../Element/ElementType";

export default function RenderElementPreview(t, element) {
  let { name } = element;
  let elementType = ElementType[name];
  let hasPreview = elementType && elementType.render;

  if (!hasPreview) console.warn(`element ${name} has no preview`);

  return <>{hasPreview ? elementType.render(t, element) : name}</>;
}
