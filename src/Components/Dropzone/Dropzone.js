import React from "react";
import { getColumnElements } from "../FbUtils";
import DropzoneColumn from "./DropzoneColumn";

export default function Dropzone({
  t,
  row,
  elements,
  updateElement,
  updateElementOptions,
}) {
  return (
    <div class="row fb-dropzone">
      {row.columns.map((column) => (
        <DropzoneColumn
          t={t}
          column={column}
          elements={getColumnElements(column, elements)}
          row={row}
          updateElement={updateElement}
          updateElementOptions={updateElementOptions}
        />
      ))}
    </div>
  );
}
