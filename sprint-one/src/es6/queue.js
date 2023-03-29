class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {
      head: 0,
      tail: 0,
    };
  }

  enqueue(value) {
    var storage = this.storage;
    storage[storage.tail] = value;
    storage.tail++;
  }

  dequeue() {
    var storage = this.storage;
    if (storage.head === storage.tail) {
      return;
    }
    var res = storage[storage.head];
    delete storage[storage.head];
    storage.head++;
    return res;
  }

  size() {
    return this.storage.tail - this.storage.head;
  }
}
