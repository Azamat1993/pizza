import { decorate, observable, action, computed } from "mobx";

const minQuantity = 1;

class SCItem {
  quantity = minQuantity;

  constructor({ id, title, description, price }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > minQuantity) {
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
  totalPrice: computed
});
