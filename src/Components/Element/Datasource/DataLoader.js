import { RenderType } from "../ElementType";
import { DataLoadType } from "./DataLoadType";

export default class DataLoader {
  static load(datasource, renderType) {
    //dont load data when it's in drag and drop state
    if (!datasource || renderType === RenderType.dragdrop) {
      return [];
    }

    if (datasource.loadType === DataLoadType.fromserver) {
      return DataLoader.loadDataFromServer(datasource);
    } else {
      return DataLoader.loadManualData(datasource);
    }
  }

  static loadManualData(datasource) {
    return datasource.data;
  }

  static loadDataFromServer(datasource) {
    console.log(datasource);
    //todo
    return [];
  }
}
