class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.storage[this.tail++] = value;
  }

  dequeue() {
    if (!this.size()) {
      return;
    }

    var res = this.storage[this.head];
    delete this.storage[this.head++];
    return res;
  }

  size() {
    return this.tail - this.head;
  }
}
