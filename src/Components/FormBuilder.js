import i18next from "i18next";
import React, { useState } from "react";
import culture from "../lib/js/culture";
import Components from "./Components";
import { DragLayer } from "./DragLayer/DragLayer";
import { DragLayerContainer } from "./DragLayer/DragLayerContainer";
import { generateElement, generateRow } from "./FbUtils";
import Toolbar from "./Toolbar";

export default function FormBuilder(props) {
  let lan = culture.getLanguage();
  let t = i18next.getFixedT(lan);

  const [elements, setElements] = useState({});

  const defaultRows = [generateRow(1, 1)];
  const [rows, setRows] = useState(defaultRows);

  const addElement = (element) => {
    let finalElement = generateElement(element);
    setElements((prevElements) => ({
      ...prevElements,
      [finalElement.id]: finalElement,
    }));
  };

  const updateElement = (element) => {
    setElements((prevElements) => ({
      ...prevElements,
      [element.id]: { ...element },
    }));
  };

  const updateElementOptionData = (element, options) => {
    setElements((prevElements) => ({
      ...prevElements,
      [element.id]: { ...element, options: options },
    }));
  };

  return (
    <div class="card fb-container">
      <div class="row">
        <div class="col-2">
          <Components t={t} addElement={addElement} />
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-12">
              <Toolbar t={t} setRows={setRows} tab_Add={props.tab_Add} />
            </div>
            <div class="col-12">
              <DragLayerContainer
                t={t}
                elements={Object.assign({}, elements ?? [])}
                addElement={addElement}
                setElements={setElements}
                updateElement={updateElement}
                updateElementOptions={updateElementOptionData}
              />
              <DragLayer />
              {/* {rows.map((row) => (
                <Dropzone
                  t={t}
                  row={row}
                  elements={getRowElements(row, elements)}
                  updateElement={updateElement}
                  updateElementOptions={updateElementOptionData}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
