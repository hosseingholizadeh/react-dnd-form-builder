export class ApiStore {
  static getApis = [];
  static submitApis = [];
  static LoadApis() {
    try {
      const resource = require(`./apis.json`);
      let apis = JSON.parse(JSON.stringify(resource));
      ApiStore.getApis = apis.load;
      ApiStore.submitApis = apis.submit;
    } catch (e) {
      console.error("failed to load file apis.json", " error:", e.message);
    }
  }
}
