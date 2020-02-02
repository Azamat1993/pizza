import { decorate, observable, action } from "mobx";

// by default all items are represented by USD currency
const defaultCurrency = "USD";

const currencyInfo = {
  USD: {
    symbol: "$",
    factor: 1,
    name: "USD"
  },
  EUR: {
    symbol: "€",
    factor: 1 / 1.11,
    name: "EUR"
  }
};

class Currency {
  constructor(current) {
    this.current = current || currencyInfo[defaultCurrency];
  }

  setCurrent = (currency = defaultCurrency) => {
    if (currencyInfo[currency]) {
      this.current = currencyInfo[currency];
    }
  };
}

export default decorate(Currency, {
  current: observable,

  setCurrency: action
});
