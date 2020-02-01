import { decorate, observable, action, computed } from "mobx";
import SCItem from "./sc-item";

class SCList {
  items = [];

  constructor(items) {
    items.forEach(this.add.bind(this));
  }

  add(item) {
    this.items.push(new SCItem(item));
  }

  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  get totalPrice() {
    return this.items.reduce((acc, item) => acc + item.totalPrice, 0);
  }
}

export default decorate(SCList, {
  items: observable,
  add: action,
  remove: action,
  totalPrice: computed
});
