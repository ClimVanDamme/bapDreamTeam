import { decorate, action, configure, observable, computed } from 'mobx';

configure({ enforceActions: `observed` });
class TapwedstrijdStore {
	maxTaps = 0;
	aantalTaps = 0;
	startTime = 0;
	timeNow = 0;
	isRunning = false;
	isCompleted = false;
	finalTime;

	constructor(rootStore) {
		this.rootStore = rootStore;
	}

	initTaps = amount => {
		this.maxTaps = amount;
		console.log(this.maxTaps);
	};

	resetTimer = () => {
		this.aantalTaps = 0;
		// this.timeNow = this.startTime;
		this.stopTimer();
	};

	addTap = () => {
		this.aantalTaps++;
	};

	startTimer = () => {
		if (this.isRunning === true) return;
		this.setRunningToTrue();
		this.startTime = new Date().getTime();
		// this.timeNow = 0;
		setTimeout(this.getTimeNow(), 10);
	};

	setRunningToTrue = () => {
		this.isRunning = true;
	};

	getTimeNow = () => {
		if (this.aantalTaps === this.maxTaps) return;
		if (this.aantalTaps === 0) {
			this.timeNow = this.startTime;
		} else {
			this.timeNow = new Date().getTime();
		}
	};

	get timePassed() {
		let rawNumb = (parseFloat = (this.timeNow - this.startTime) / 1000);
		let rounded = rawNumb.toFixed(1);
		return rounded;
	}

	stopTimer = () => {
		console.log('STOP THE TIMERRR!!');
		if (this.isRunning === false) return;
		this.isRunning = false;
		this.completed = true;
		this.finalTime = this.timePassed;
		console.log('in store');
		console.log(this.finalTime);
	};
}

decorate(TapwedstrijdStore, {
	aantalTaps: observable,
	addTap: action,
	startTimer: action,
	startTime: observable,
	getTimeNow: action,
	timeNow: observable,
	timePassed: computed,
	finalTime: observable,
	stopTimer: action,
	initTaps: action,
	isRunning: observable,
	isCompleted: observable,
	resetTimer: action
});

export default TapwedstrijdStore;
