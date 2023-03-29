var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = { size: 0 };
  return stack;
};

var stackMethods = {};
stackMethods.push = function (value) {
  var storage = this.storage;
  storage[storage.size] = value;
  storage.size++;
};

stackMethods.pop = function () {
  var storage = this.storage;
  if (storage.size === 0) {
    return;
  }
  var res = storage[storage.size - 1];
  delete storage[storage.size - 1];
  storage.size--;

  return res;
};

stackMethods.size = function () {
  return this.storage.size;
};
