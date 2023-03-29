var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {
    head: 0,
    tail: 0,
  };

  return queue;
};

var queueMethods = {};
// NOTE: Here cannot use arrow function, otherwise keyword "this" cannot refer to queue
queueMethods.enqueue = function (value) {
  var storage = this.storage;
  if (!('head' in storage)) {
    storage.head = 0;
    storage.tail = 0;
  }
  storage[storage.tail] = value;
  storage.tail++;
};

queueMethods.dequeue = function () {
  var storage = this.storage;
  if (storage.head === storage.tail) {
    return;
  }
  var res = storage[storage.head];
  delete storage[storage.head];
  storage.head++;

  return res;
};

queueMethods.size = function () {
  return this.storage.tail - this.storage.head;
};
