import React from "react";
import { getColumnElements } from "../FbUtils";
import DropzoneColumn from "./DropzoneColumn";

export default function Dropzone({ t, row, elements }) {
  return (
    <div class="row fb-dropzone">
      {row.columns.map((column) => (
        <DropzoneColumn
          t={t}
          column={column}
          elements={getColumnElements(column, elements)}
          row={row}
        />
      ))}
    </div>
  );
}
