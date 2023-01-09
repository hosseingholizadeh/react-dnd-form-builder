export class ApiStore {
  static apis = [];
  static LoadApis() {
    try {
      const resource = require(`./apis.json`);
      ApiStore.apis = JSON.parse(JSON.stringify(resource));
      console.log(ApiStore.apis);
    } catch (e) {
      console.error("failed to load file apis.json", " error:", e.message);
    }
  }
}
