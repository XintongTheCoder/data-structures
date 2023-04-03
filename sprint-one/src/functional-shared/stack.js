var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack._storage = {};
  stack._size = 0;
  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this._storage[this._size++] = value;
};

stackMethods.pop = function () {
  if (!this._size) {
    return;
  }
  var res = this._storage[this._size - 1];
  delete this._storage[this._size - 1];
  this._size--;
  return res;
};

stackMethods.size = function () {
  return this._size;
};
