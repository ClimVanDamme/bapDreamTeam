import OrderStore from './OrderStore';
import TapwedstrijdStore from './TapwedstrijdStore';
import SupportersliedStore from './SupportersliedStore';

class Store {
	constructor() {
		this.orderStore = new OrderStore(this);
		this.tapwedstrijdStore = new TapwedstrijdStore(this);
		this.supportersliedStore = new SupportersliedStore(this);
	}
}

export default new Store();
