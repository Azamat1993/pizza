import { decorate, observable } from "mobx";

class SCItem {
  quantity = 0;
}

export default decorate(SCItem, {
  quantity: observable
});
