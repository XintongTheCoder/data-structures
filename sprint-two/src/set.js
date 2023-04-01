var Set = function () {
  var set = Object.create(setPrototype);
  // Assume this is a Set only for Strings
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  this._storage[item] = 0;
};

setPrototype.contains = function (item) {
  return item in this._storage;
};

setPrototype.remove = function (item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
              All 3 methods has time-O(1)
 */
