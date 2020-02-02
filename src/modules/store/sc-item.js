import { decorate, observable, action, computed } from "mobx";

const minQuantity = 1;

class SCItem {
  quantity = minQuantity;

  constructor({ id, title, description, price, imageUrl }, currency) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;

    this.currency = currency;
  }

  incrementQuantity = () => {
    this.quantity++;
  };

  decrementQuantity = () => {
    if (this.quantity > minQuantity) {
      this.quantity--;
    }
  };

  setQuantity = (quantity = 1) => {
    if (quantity >= 1 && quantity <= 100) {
      this.quantity = quantity;
    }
  };

  get totalPrice() {
    return this.quantity * this.price * this.currency.current.factor;
  }

  get totalPriceWithCurrency() {
    return `${this.currency.current.symbol}${this.totalPrice.toFixed(2)}`;
  }
}

export default decorate(SCItem, {
  quantity: observable,

  incrementQuantity: action,
  decrementQuantity: action,
  setQuantity: action,

  totalPrice: computed,
  totalPriceWithCurrency: computed
});
