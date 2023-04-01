class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.head === this.tail) {
      return;
    }
    var res = this[this.head];
    delete this[this.head];
    this.head++;
    return res;
  }

  size() {
    return this.tail - this.head;
  }
}
