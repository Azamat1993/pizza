import { decorate, observable, action, computed } from "mobx";
import SCItem from "./sc-item";

class SCList {
  list = [];

  constructor(items) {
    items.forEach(this.add.bind(this));
  }

  add(item) {
    this.list.push(new SCItem(item));
  }

  remove(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  getTotalPrice() {
    return this.list.reduce((acc, item) => acc + item.getTotalPrice(), 0);
  }
}

export default decorate(SCList, {
  list: observable,
  add: action,
  remove: action,
  getTotalPrice: computed
});
