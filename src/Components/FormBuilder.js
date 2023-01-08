import i18next from "i18next";
import React, { useState } from "react";
import culture from "../lib/js/culture";
import Components from "./Components";
import { DragLayer } from "./DragLayer/DragLayer";
import { DragLayerContainer } from "./DragLayer/DragLayerContainer";
import { generateElement } from "./FbUtils";
import Toolbar from "./Toolbar";

export default function FormBuilder(props) {
  let lan = culture.getLanguage();
  let t = i18next.getFixedT(lan);

  const [elements, setElements] = useState({});
  const [cache, setElementOnCache] = useState([]);

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

  const removeElement = (element) => {
    let id = element.id;
    delete elements[id];
    if (cache.findIndex((x) => x.id === id) === -1) {
      setElementOnCache((prevElements) => [...prevElements, element]);
    }
    setElements({ ...elements });
  };

  const updateElementOptionData = (element, options) => {
    let id = element.id;
    elements[id] = { ...element, options };
    setElements({ ...elements });
  };

  const undoRemove = () => {
    let last = cache.pop();
    if (last) {
      setElementOnCache([...cache]);

      setElements((prevElements) => ({
        ...prevElements,
        [last.id]: last,
      }));
    }
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
              <Toolbar t={t} tab_Add={props.tab_Add} />
            </div>
            <div class="col-12">
              <DragLayerContainer
                t={t}
                elements={elements}
                addElement={addElement}
                setElements={setElements}
                removeElement={removeElement}
                updateElement={updateElement}
                updateElementOptions={updateElementOptionData}
                undoRemove={undoRemove}
              />
              <DragLayer t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
