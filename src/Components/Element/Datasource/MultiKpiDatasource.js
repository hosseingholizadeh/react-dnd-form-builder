export class MultiKpiDatasource {
  loadType;
  api;
  data = [];
  selectedKpis = [];
  pk;
  updateState;
  pageable = true;

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
    this.selectedKpis = [];
    this.updateState();
  }

  returnNotSelectedKpis(kpis) {
    return kpis.filter(
      (kpi) => this.selectedKpis.findIndex((k) => k.value === kpi.value) === -1
    );
  }

  addKpi(kpi) {
    if (this.selectedKpis.findIndex((k) => k.value === kpi.value) === -1) {
      this.selectedKpis.push(kpi);
      this.updateState();
    }
  }

  removeKpi(kpi) {
    let index = this.selectedKpis.findIndex((k) => k.value === kpi.value);
    if (index !== -1) {
      this.selectedKpis.splice(index, 1);
      this.updateState();
    }
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

  setPk(pk) {
    this.pk = pk;
    this.updateState();
  }

  setIsPageable(pageable) {
    this.pageable = pageable;
    this.updateState();
  }
}
