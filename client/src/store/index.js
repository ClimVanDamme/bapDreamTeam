import OrderStore from "./OrderStore";
import TapwedstrijdStore from "./TapwedstrijdStore";
import SupportersliedStore from "./SupportersliedStore";
import BelofteStore from "./BelofteStore";
import PostkaartStore from "./PostkaartStore";

class Store {
  constructor() {
    this.orderStore = new OrderStore(this);
    this.tapwedstrijdStore = new TapwedstrijdStore(this);
    this.supportersliedStore = new SupportersliedStore(this);
    this.belofteStore = new BelofteStore(this);
    this.postkaartStore = new PostkaartStore(this);
  }
}

export default new Store();
