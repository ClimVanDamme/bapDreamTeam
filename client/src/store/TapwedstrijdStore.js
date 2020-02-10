import { decorate, action, configure, observable, computed } from "mobx";

configure({ enforceActions: `observed` });
class TapwedstrijdStore {
  maxTaps = 0;
  aantalTaps = 0;
  startTime = 0;
  timeNow = 0;
  isRunning = false;
  isCompleted = false;
  finalTime;
  alreadyPlayed = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  initTaps = amount => {
    this.maxTaps = amount;
  };

  resetTimer = () => {
    this.alreadyPlayed = false;
    this.aantalTaps = 0;
    this.timeNow = this.startTime;
    this.stopTimer();
    console.log(this.timePassed);
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
    let rawNumb = parseFloat(this.timeNow - this.startTime) / 1000;
    let rounded = rawNumb.toFixed(1);
    return rounded;
  }

  stopTimer = () => {
    if (this.isRunning === false) return;
    console.log("STOP THE TIMERRR!!");
    this.isRunning = false;
    this.completed = true;
    this.alreadyPlayed = true;
    this.finalTime = this.timePassed;
    console.log("in store");
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
  resetTimer: action,
  alreadyPlayed: observable
});

export default TapwedstrijdStore;
