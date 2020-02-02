import { decorate, observable, action, computed } from "mobx";

import SCList from "./sc-list";
import Currency from "./currency";

class SC {
  withDelivery = false;

  constructor(items = [], deliveryCost = 100) {
    this.currency = new Currency();

    this.list = new SCList(items, this.currency);
    this.deliveryCost = deliveryCost;
  }

  setWithDelivery(withDelivery) {
    this.withDelivery = withDelivery;
  }

  get totalPrice() {
    // get total price of cart in usd without delivery
    let totalPrice = this.list.totalPrice;

    // adding delivery cost, if applied
    if (this.withDelivery) {
      totalPrice += this.deliveryCost;
    }

    return totalPrice;
  }

  get totalPriceWithCurrency() {
    return `${this.currency.current.symbol}${this.totalPrice.toFixed(2)}`;
  }
}

export default decorate(SC, {
  withDelivery: observable,
  currency: observable,

  setWithDelivery: action,

  totalPrice: computed,
  totalPriceWithCurrency: computed
});
