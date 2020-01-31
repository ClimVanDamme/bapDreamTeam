import { computed, decorate, observable, action, configure } from "mobx";

configure({ enforceActions: `observed` });
class SporzaStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}
// decorate(SporzaStore, {
//   orders: observable,
//   removeOrder: action,
//   orderDrink: action,
//   total: computed
// });

export default SporzaStore;
