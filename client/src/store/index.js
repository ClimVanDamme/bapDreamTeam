import OrderStore from "./OrderStore";
import DrinkStore from "./DrinkStore";
import SupportersliedStore from "./SupportersliedStore";

class Store {
  constructor() {
    this.orderStore = new OrderStore(this);
    this.drinkStore = new DrinkStore(this);
    this.supportersliedStore = new SupportersliedStore(this);
  }
}

export default new Store();
