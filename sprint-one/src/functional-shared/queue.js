var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue._storage = {};
  queue._head = 0;
  queue._tail = 0;
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this._storage[this._tail++] = value;
};

queueMethods.dequeue = function () {
  if (!this.size()) {
    return;
  }
  var res = this._storage[this._head];
  delete this._storage[this._head++];
  return res;
};

queueMethods.size = function () {
  return this._tail - this._head;
};
