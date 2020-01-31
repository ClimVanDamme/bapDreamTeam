import OrderStore from "./OrderStore";
import DrinkStore from "./DrinkStore";
import SporzaStore from "./SporzaStore";

class Store {
  constructor() {
    this.orderStore = new OrderStore(this);
    this.drinkStore = new DrinkStore(this);
    this.sporzaStore = new SporzaStore(this);
  }
}

export default new Store();
