import { decorate, observable, action, computed } from "mobx";
import SCItem from "./sc-item";

class SCList {
  items = [];

  constructor(items, currency) {
    this.currency = currency;

    items.forEach(this.add);
  }

  add = item => {
    let existingItem = this.items.find(eItem => eItem.id === item.id);

    if (existingItem) {
      existingItem.incrementQuantity();
    } else {
      this.items.push(new SCItem(item, this.currency));
    }
  };

  remove = item => {
    this.items.splice(this.items.indexOf(item), 1);
  };

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
