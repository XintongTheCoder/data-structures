var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
};

Stack.prototype.push = function (value) {
  this[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function () {
  if (this._size === 0) {
    return;
  }
  var res = this[this._size - 1];
  delete this[this._size - 1];
  this._size--;

  return res;
};

Stack.prototype.size = function () {
  return this._size;
};
