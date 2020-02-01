import { decorate, observable, action, computed } from "mobx";
import SCList from "./sc-list";

// by default all items are represented by USD currency
const defaultCurrency = "USD";

const currencyFactors = {
  USD: 1,
  EUR: 1.11
};

class SC {
  withDelivery = false;
  currency = defaultCurrency;

  constructor(items = [], deliveryCost = 100) {
    this.content = new SCList(items);
    this.deliveryCost = deliveryCost;
  }

  setWithDelivery(withDelivery) {
    this.withDelivery = withDelivery;
  }

  setCurrency(currency = defaultCurrency) {
    if (currencyFactors[currency]) {
      this.currency = currency;
    }
  }

  get totalPrice() {
    // get total price of cart in usd without delivery
    let totalPrice = this.list.totalPrice;

    // adding delivery cost, if applied
    if (this.withDelivery) {
      totalPrice += this.deliveryCost;
    }

    // applying currency
    totalPrice *= currencyFactors[this.currency];

    return totalPrice;
  }
}

export default decorate(SC, {
  withDelivery: observable,
  currency: observable,

  setWithDelivery: action,
  setCurrency: action,

  totalPrice: computed
});
