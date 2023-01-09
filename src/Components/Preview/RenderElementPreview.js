import { ElementType, RenderType } from "../Element/ElementType";
import { renderElementContainerStyle } from "../Element/RenderUtils";

export default function RenderElementPreview(t, element) {
  let { name } = element;
  let elementType = ElementType[name];
  let hasPreview = elementType && elementType.render;

  if (!hasPreview) console.warn(`element ${name} has no render function`);

  return (
    <div
      class="preview-element"
      style={renderElementContainerStyle(element.top, element.left)}
    >
      {hasPreview ? elementType.render(t, element, RenderType.preview) : name}
    </div>
  );
}
