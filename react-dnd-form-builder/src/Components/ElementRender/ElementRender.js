import React from "react";
import * as elements from "../Element/Elements";

export default function ElementRender({ t, name }) {
  let elName = name + "Element";
  return elements[elName] ? elements[elName](t) : <span>{name}</span>;
}
