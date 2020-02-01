import { decorate, observable, action, computed } from "mobx";

class SCItem {
  quantity = 0;

  constructor(price) {
    this.price = price || 0;
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  getTotalPrice() {
    return this.quantity * this.price;
  }
}

export default decorate(SCItem, {
  quantity: observable,
  incrementQuantity: action,
  decrementQuantity: action,
  getTotalPrice: computed
});
