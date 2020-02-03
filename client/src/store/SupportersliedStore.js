import { decorate, action, configure, observable } from "mobx";
import Crunker from "crunker";

configure({ enforceActions: `observed` });
class SupportersliedStore {
  layers = [];
  isRecording = false;

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

  startRecording = () => {
    this.isRecording = true;
  };
}

decorate(SupportersliedStore, {
  merge: action,
  layers: observable,
  isRecording: observable,
  startRecording: action
});

export default SupportersliedStore;
