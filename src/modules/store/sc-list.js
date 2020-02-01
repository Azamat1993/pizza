import { decorate, observable, action } from "mobx";
import SCItem from "./sc-item";

class SCList {
  list = [];

  constructor(scItems) {
    scItems.forEach(this.add.bind(this));
  }

  add(scItem) {
    this.list.push(new SCItem(scItem));
  }

  remove(scItem) {
    this.list.splice(this.list.indexOf(scItem), 1);
  }
}

export default decorate(SCList, {
  list: observable,
  add: action,
  remove: action
});
