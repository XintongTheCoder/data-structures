var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {};

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
  if (!('head' in storage) || storage.head === storage.tail) {
    return;
  }
  var res = storage[storage.head];
  delete storage[storage.head];
  storage.head++;
  return res;
};

queueMethods.size = function () {
  var storage = this.storage;
  if (!('head' in storage)) {
    return 0;
  }
  return storage.tail - storage.head;
};
