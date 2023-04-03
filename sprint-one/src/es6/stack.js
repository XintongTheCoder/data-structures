class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.tail = 0;
  }

  push(value) {
    this.storage[this.tail++] = value;
  }

  pop() {
    if (!this.tail) {
      return;
    }
    var res = this.storage[this.tail - 1];
    delete this.storage[this.tail - 1];
    this.tail--;

    return res;
  }

  size() {
    return this.tail;
  }
}
