import { decorate, observable, action, computed } from "mobx";

import SCList from "./sc-list";
import Currency from "./currency";

class SC {
  withShipping = false;

  constructor(items = [], shippingCost = 100) {
    this.currency = new Currency();

    this.list = new SCList(items, this.currency);
    this.shippingCost = shippingCost;
  }

  setWithShipping = withShipping => {
    this.withShipping = withShipping;
  };

  toggleWithShipping = () => {
    this.withShipping = !this.withShipping;
  };

  reset = () => {
    this.list.reset();
  };

  get totalPrice() {
    // get total price of cart in usd without delivery
    let totalPrice = this.list.totalPrice;

    // adding delivery cost, if applied
    if (this.withShipping) {
      totalPrice += this.shippingCost * this.currency.current.factor;
    }

    return totalPrice;
  }

  get totalPriceWithCurrency() {
    return `${this.currency.current.symbol}${this.totalPrice.toFixed(2)}`;
  }

  get shippingCostWithCurrency() {
    const cost = this.currency.current.factor * this.shippingCost;
    return `${this.currency.current.symbol}${cost.toFixed(2)}`;
  }
}

export default decorate(SC, {
  withShipping: observable,
  currency: observable,

  setWithShipping: action,
  toggleWithShipping: action,
  reset: action,

  totalPrice: computed,
  totalPriceWithCurrency: computed,
  shippingCostWithCurrency: computed
});
