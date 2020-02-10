import { decorate, action, configure, observable, runInAction } from "mobx";

configure({ enforceActions: `observed` });
class BelofteStore {
  textInputsAfkick = ["", "", "", ""];
  censoredWords = ["shit", "fuck"];
  error = 0;
  errorText = "";
  fieldsWithCensoredWords = [];
  resultTextAfkick = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  checkVal = text => {
    this.textInputsAfkick[text.current.id - 1] = text.current.value;
    this.resultTextAfkick = `Tijdens de Olympische Spelen van Tokio 2020 beloof ik ${this.textInputsAfkick[0]} plechtig dat ik twee weken niet ga ${this.textInputsAfkick[1]} \nOok zal ik Team Belgium steunen doorheen deze tijd. \nHierbij controleert ${this.textInputsAfkick[2]} mij en moet ik ${this.textInputsAfkick[3]} wanneer ik mij niet hou aan deze belofte.`;
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
  textInputsAfkick: observable,
  checkVal: action,
  censoredWords: observable,
  errorText: observable,
  saveResultTextAfkick: action,
  resultTextAfkick: observable
});

export default BelofteStore;
