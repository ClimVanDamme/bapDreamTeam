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
  toggleRecording: action,
  setMediaRecorder: action,
  createAudioFile: action,
  clearAudio: action,
  addAudioLayer: action,
  deleteLayer: action,
  resetTimeout: action
});

export default SupportersliedStore;
