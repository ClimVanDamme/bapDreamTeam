import { decorate, action, configure, observable, runInAction } from "mobx";

configure({ enforceActions: `observed` });
class PostkaartStore {
  choosenTemplate = null;
  cardComment = null;
  errorMessage = "";
  censoredWords = ["shit", "fuck"];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  renderCardResult = (template, text) => {
    console.log(template, text);
  };

  createErrorAlert = text => {
    this.errorMessage = text;
  };

  checkVal = text => {
    this.error = 0;
    this.cardComment = text;

    console.log(text);

    for (let i = 0; i < this.censoredWords.length; i++) {
      const val = this.censoredWords[i];
      if (text.toLowerCase().indexOf(val.toString()) > -1) {
        this.error++;
      }
    }

    if (this.error > 0) {
      console.log("vuil woord");
      this.errorMessage =
        "Gelieve de sportiviteit te respecteren en geen beledigende woorden te gebruiken.";
    }

    if (this.error === 0) {
      this.errorMessage = "";
    }
  };
}

decorate(PostkaartStore, {
  choosenTemplate: observable,
  cardComment: observable,
  errorMessage: observable,
  censoredWords: observable,
  renderCardResult: action,
  createErrorAlert: action,
  checkVal: action
});

export default PostkaartStore;
