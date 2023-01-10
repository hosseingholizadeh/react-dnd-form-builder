export class KeyValueDatasource {
  loadType;
  api;
  data = [];
  labelField;
  valueField;

  updateState;

  static fromOptions(options) {}

  constructor(loadType, updateState) {
    this.loadType = loadType;
    this.updateState = updateState;
  }

  changeLoadType(type) {
    this.loadType = type;
    this.updateState();
  }

  setApi(api) {
    this.api = api;
    this.updateState();
  }

  setLabelField(labelField) {
    this.labelField = labelField;
    this.updateState();
  }

  setValueField(valueField) {
    this.valueField = valueField;
    this.updateState();
  }

  setData(data) {
    this.data = data;
    this.updateState();
  }

  addDataItem(label, value) {
    let index = this.data.findIndex((d) => d.value === value);
    if (index === -1) {
      this.data.push({ label, value });
      this.updateState();
    }
  }

  removeDataItem(item) {
    let value = item.value;
    let index = this.data.findIndex((d) => d.value === value);
    if (index >= 0) {
      this.data.splice(index, 1);
      this.updateState();
    }
  }
}
