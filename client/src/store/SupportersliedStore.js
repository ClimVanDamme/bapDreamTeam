import { decorate, action, configure, observable } from "mobx";
import Crunker from "crunker";

configure({ enforceActions: `observed` });
class SupportersliedStore {
  layers = [];
  isRecording = false;
  createdMediaRecorder;
  audioLayers = [];
  audioCurrent = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  merge = () => {
    console.log("in de merge");
    let audio = new Crunker();

    audio
      .fetchAudio(this.layers[0], this.layers[1])
      .then(buffers => audio.mergeAudio(buffers))
      .then(merged => audio.export(merged, "audio/mp3"))
      .then(output => audio.download(output.blob))
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
    console.log(this.audioCurrent);
  };

  addAudioLayer = data => {
    this.audioLayers.push(data);
  };
}

decorate(SupportersliedStore, {
  merge: action,
  layers: observable,
  audioCurrent: observable,
  audioLayers: observable,
  isRecording: observable,
  createdMediaRecorder: observable,
  toggleRecording: action,
  setMediaRecorder: action,
  createAudioFile: action,
  clearAudio: action,
  addAudioLayer: action
});

export default SupportersliedStore;
