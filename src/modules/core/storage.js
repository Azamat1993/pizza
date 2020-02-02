const keyPrefix = "pizza-shop";

class Storage {
  getItem(key) {
    try {
      const data = localStorage.getItem(this.generateKey(key));

      if (data) {
        return this.deserialize(data);
      }

      return null;
    } catch (e) {
      console.warn(`Error while getting item from storage with key: ${key}`);
    }
  }

  setItem(key, value) {
    try {
      console.log("cellted");
      localStorage.setItem(this.generateKey(key), this.serialize(value));
    } catch (e) {
      console.warn(
        `Error while setting item: ${value} with key: ${key} to storage`
      );
    }
  }

  removeItem(key) {
    try {
      localStorage.removeItem(this.generateKey(key));
    } catch (e) {
      console.warn(`Error while removing item from storage with key: ${key}`);
    }
  }

  generateKey(partialKey) {
    return `${keyPrefix}_${partialKey}`;
  }

  deserialize(data) {
    return JSON.parse(data);
  }

  serialize(data) {
    return JSON.stringify(data);
  }
}

export const storage = new Storage();
