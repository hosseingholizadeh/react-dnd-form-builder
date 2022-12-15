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

export function generateColumn(key) {
  return { key, name: `column${key}` };
}

export function generateElement(row, column, element) {
  return { ...element, rowId: row.key, columnId: column.key };
}

export function getColumnClassName(row) {
  let count = row.columns.length;
  let cells = count === 2 ? 6 : count === 3 ? 4 : count === 1 ? 12 : 3;
  return `col-${cells}`;
}
