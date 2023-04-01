class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._size = 0;
  }

  push(value) {
    this[this._size] = value;
    this._size++;
  }

  pop() {
    if (this._size === 0) {
      return;
    }
    var res = this[this._size - 1];
    delete this[this._size - 1];
    this._size--;

    return res;
  }

  size() {
    return this._size;
  }
}
