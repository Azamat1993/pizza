import { decorate, observable, action, computed } from "mobx";

class SCItem {
  quantity = 0;

  constructor(price, title) {
    this.price = price || 0;
    this.title = title;
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  get totalPrice() {
    return this.quantity * this.price;
  }
}

export default decorate(SCItem, {
  quantity: observable,
  incrementQuantity: action,
  decrementQuantity: action,
  getTotalPrice: computed
});
