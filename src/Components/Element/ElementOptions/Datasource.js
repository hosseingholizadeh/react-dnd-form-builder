export const DataLoadOptions = {
  fromserver: 1,
  manual: 2,
};

export class KeyValueDatasource {
  loadType;
  url;
  data = [];

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

  setUrl(url) {
    this.url = url;
    this.updateState();
  }

  setData(data) {
    this.data = data;
    this.updateState();
  }

  addDataItem(text, value) {
    let index = this.data.findIndex((d) => d.value === value);
    if (index === -1) {
      this.data.push({ text, value });
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
