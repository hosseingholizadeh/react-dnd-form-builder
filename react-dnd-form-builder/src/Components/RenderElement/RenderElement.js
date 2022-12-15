import { Button } from "antd";
import React from "react";
import * as elements from "../Element/Elements";
export default function RenderElement(t, element) {
  let elName = element.name + "Element";
  console.log(elName);
  return elements[elName] ? elements[elName](t) : <span>{element.name}</span>;
}
