import { decorate, action, configure, observable, runInAction } from "mobx";
import Crunker from "crunker";

configure({ enforceActions: `observed` });
class SupportersliedStore {
  layers = [];
  isRecording = false;
  createdMediaRecorder;
  audioCurrent = [];
  audioLayers = [];
  audioBuffers = [];
  mergedAudioURL;
  layerCount = 0;
  autoStop;
  timeLeft = 5;
  countdownTimer;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  merge = () => {
    let audio = new Crunker();

    audio
      .fetchAudio(...this.audioLayers)
      .then(buffers => audio.mergeAudio(buffers))
      .then(merged => audio.export(merged, "audio/mp3"))
      .then(output => {
        runInAction(() => {
          this.mergedAudioURL = output.url;
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  toggleRecording = () => {
    this.isRecording = !this.isRecording;
  };

  setMediaRecorder = mediaRecorder => {
    this.createdMediaRecorder = mediaRecorder;
  };

  createAudioFile = data => {
    this.audioCurrent = [];
    this.audioCurrent.push(URL.createObjectURL(new Blob(data)));
  };

  addAudioLayer = data => {
    this.audioLayers.push(data);
    this.layerCount++;
  };

  clearAudio = () => {
    this.audioCurrent = [];
  };

  deleteLayer = index => {
    console.log("audiolayers", this.audioLayers);

    this.audioLayers.splice(index, 1);
    this.layerCount--;
    console.log("updated audiolayers", this.audioLayers);
  };

  resetTimeout = stop => {
    this.autoStop = stop;
    this.countdownTimer = setInterval(this.countdown, 1000);
  };

  countdown = () => {
    if (this.timeLeft === 0) {
      this.stopCountdown();
      console.log("countdown gereset");
    } else {
      this.timeLeft--;
      console.log(this.timeLeft);
    }
  };

  stopCountdown = () => {
    clearTimeout(this.countdownTimer);
    this.timeLeft = 5;
  };
}

decorate(SupportersliedStore, {
  merge: action,
  layers: observable,
  audioCurrent: observable,
  audioLayers: observable,
  isRecording: observable,
  createdMediaRecorder: observable,
  mergedAudioURL: observable,
  layerCount: observable,
  autoStop: observable,
  timeLeft: observable,
  toggleRecording: action,
  setMediaRecorder: action,
  createAudioFile: action,
  clearAudio: action,
  addAudioLayer: action,
  deleteLayer: action,
  resetTimeout: action,
  countdown: action,
  stopCountdown: action
});

export default SupportersliedStore;
