import i18next from "i18next";
import React, { useState } from "react";
import Components from "./Components/Components";
import Dropzone from "./Dropzone/Dropzone";
import { generateElement, generateRow, getRowElements } from "./FbUtils";
import Toolbar from "./Toolbar";
import culture from "../lib/js/culture";
import CustomDragLayer from "./CustomDragLayer";

export default function FormBuilder(props) {
  let lan = culture.getLanguage();
  let t = i18next.getFixedT(lan);

  const [elements, setElements] = useState([]);

  const defaultRows = [generateRow(1, 1)];
  const [rows, setRows] = useState(defaultRows);

  const addElement = (row, column, element) => {
    let finalElement = generateElement(row, column, element);
    setElements((prevElements) => [...prevElements, finalElement]);
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
              <CustomDragLayer />
              {rows.map((row) => (
                <Dropzone
                  t={t}
                  elements={getRowElements(row, elements)}
                  row={row}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
