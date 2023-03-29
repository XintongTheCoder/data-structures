class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {
      size: 0,
    };
  }

  push(value) {
    var storage = this.storage;
    storage[storage.size] = value;
    storage.size++;
  }

  pop() {
    var storage = this.storage;
    if (storage.size === 0) {
      return;
    }
    var res = storage[storage.size - 1];
    delete storage[storage.size - 1];
    storage.size--;

    return res;
  }

  size() {
    return this.storage.size;
  }
}
