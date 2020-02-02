import { decorate, observable, action, computed } from "mobx";

class SCManager {
  open = false;

  toggleIsOpen() {
    this.open = !this.open;
  }
}

export default decorate(SCManager, {
  open: observable,

  toggleIsOpen: action
});
