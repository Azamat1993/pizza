import { decorate, observable, action, computed } from "mobx";

class SCManager {
  isOpen = false;

  close = () => {
    this.isOpen = false;
  };

  open = () => {
    this.isOpen = true;
  };
}

export default decorate(SCManager, {
  isOpen: observable,

  open: action,
  close: action
});
