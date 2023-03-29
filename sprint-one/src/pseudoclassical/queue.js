var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {
    head: 0,
    tail: 0,
  };
};

Queue.prototype.enqueue = function (value) {
  var storage = this.storage;
  storage[storage.tail] = value;
  storage.tail++;
};

Queue.prototype.dequeue = function () {
  var storage = this.storage;
  if (storage.head === storage.tail) {
    return;
  }
  var res = storage[storage.head];
  delete storage[storage.head];
  storage.head++;
  return res;
};

Queue.prototype.size = function () {
  return this.storage.tail - this.storage.head;
};
