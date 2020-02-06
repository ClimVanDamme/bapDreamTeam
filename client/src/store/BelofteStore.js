import { decorate, action, configure, observable, runInAction } from "mobx";

configure({ enforceActions: `observed` });
class BelofteStore {
  textInputs = [];
  censoredWords = ["shit", "fuck"];
  error = 0;
  errorText = "";
  fieldsWithCensoredWords = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  appendTextInputs = textInputs => {
    textInputs.forEach(textInput => {
      this.textInputs.push(textInput);
    });
  };

  checkVal = text => {
    if (this.fieldsWithCensoredWords.includes(text.current.id)) {
      const index = this.fieldsWithCensoredWords.indexOf(text.current.id);

      if (index > -1) {
        this.fieldsWithCensoredWords.splice(index, 1);
      }
    }

    this.error = 0;
    this.errorText = "";
    for (let i = 0; i < this.censoredWords.length; i++) {
      const val = this.censoredWords[i];
      if (text.current.value.toLowerCase().indexOf(val.toString()) > -1) {
        this.error++;
      }
    }

    if (
      this.error > 0 &&
      !this.fieldsWithCensoredWords.includes(text.current.id)
    ) {
      this.fieldsWithCensoredWords.push(text.current.id);
    }

    if (this.fieldsWithCensoredWords.length > 0) {
      this.errorText =
        "Gelieve de sportiviteit te respecteren en geen beledigende woorden te gebriuken.";
    }
  };
}

decorate(BelofteStore, {
  appendTextInputs: action,
  checkVal: action,
  censoredWords: observable,
  errorText: observable
});

export default BelofteStore;
