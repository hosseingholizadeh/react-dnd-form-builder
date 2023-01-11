import { ElementType } from "../ElementType";
import { DataLoadType } from "./DataLoadType";
import { KeyValueDatasource } from "./KeyValueDatasource";
import { MultiKpiDatasource } from "./MultiKpiDatasource";

export class DatasourceFactory {
  static CreateDatasource(elementType, onChangeDataSource) {
    switch (elementType.value) {
      case ElementType.dropdown.value:
        //case ElementType.multiselect.value:
        return new KeyValueDatasource(
          DataLoadType.fromserver,
          onChangeDataSource
        );
      case ElementType.table.value:
        return new MultiKpiDatasource(
          DataLoadType.fromserver,
          onChangeDataSource
        );
      default:
        console.error("no datasource type is set for this element");
    }
  }
}
