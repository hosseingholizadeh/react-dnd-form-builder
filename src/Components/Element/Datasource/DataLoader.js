import { ErrorMessage } from "../../../lib/js/message";
import * as reqs from "../../../lib/js/request";
import { DataLoadType } from "./DataLoadType";

export default class DataLoader {
  static load(t, datasource, setData) {
    //dont load data when it's in drag and drop state
    if (!datasource) {
      return false;
    }

    try {
      if (datasource.loadType === DataLoadType.fromserver) {
        DataLoader.loadDataFromServer(t, datasource, setData);
      } else {
        DataLoader.loadManualData(t, datasource, setData);
      }
    } catch (e) {
      console.error("failed to load data. error: ", e);
    }
  }

  static loadManualData(t, datasource, setData) {
    setData(datasource.data);
  }

  static loadDataFromServer(t, datasource, setData) {
    console.log("loading from server");
    let api = datasource.api;
    if (!api) {
      throw new Error("the api is not set to this element");
    }

    if (!datasource.labelField) {
      throw new Error("label field is not set for this element datasource");
    }

    if (!datasource.valueField) {
      throw new Error("value field is not set for this element datasource");
    }

    reqs.get_request(
      api.url,
      (res) => {
        if (res.status === 200 && res.data)
          setData(
            res.data.map((d) => ({
              label: d[datasource.labelField],
              value: d[datasource.valueField],
            }))
          );
        else return ErrorMessage(t("load data failed"));
      },
      (error) => {},
      { lan: t.lang }
    );
  }
}
