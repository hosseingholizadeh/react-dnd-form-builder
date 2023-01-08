import { v4 } from "uuid";

export function generateElement(element) {
  return {
    ...element,
    id: v4(),
    options: { style: {} },
  };
}
