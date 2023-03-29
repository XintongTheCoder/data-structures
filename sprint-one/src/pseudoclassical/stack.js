var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {
    size: 0,
  };
};

Stack.prototype.push = function (value) {
  var storage = this.storage;
  storage[storage.size] = value;
  storage.size++;
};

Stack.prototype.pop = function () {
  var storage = this.storage;
  if (storage.size === 0) {
    return;
  }
  var res = storage[storage.size - 1];
  delete storage[storage.size - 1];
  storage.size--;

  return res;
};

Stack.prototype.size = function () {
  return this.storage.size;
};
