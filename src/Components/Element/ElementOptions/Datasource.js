export const DataLoadOptions = {
  fromserver: 1,
  manual: 2,
};

export class Datasource {
  loadType;
  url;

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
}
