import { v4 } from "uuid";

export function generateRow(key, columnsCount, name) {
  let defaultColumns = [];
  for (let i = 1; i <= columnsCount; i++) {
    defaultColumns.push(generateColumn(i));
  }
  return { key, name: name ?? `row${key}`, columns: defaultColumns };
}

export function getRowElements(row, elements) {
  return elements.filter((e) => e.rowId === row.key);
}

export function getElementIndex(elements, element) {
  return elements.findIndex((e) => e.id === element.id);
}

export function getColumnElements(column, elements) {
  return elements.filter((e) => e.columnId === column.key);
}

export function updateElementRowColumn(element, newRow, newColumn, elements) {
  let index = getElementIndex(elements, element);
  if (index >= 0) {
    elements[index] = {
      ...elements[index],
      rowId: newRow.key,
      columnId: newColumn.key,
    };
  }

  return elements;
}

export function generateColumn(key) {
  return { key, name: `column${key}` };
}

export function generateElement(row, column, element) {
  return { ...element, id: v4(), rowId: row.key, columnId: column.key };
}

export function getColumnClassName(row) {
  let count = row.columns.length;
  let cells = count === 2 ? 6 : count === 3 ? 4 : count === 1 ? 12 : 3;
  return `col-${cells}`;
}
