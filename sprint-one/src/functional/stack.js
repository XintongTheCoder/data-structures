var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    if (!('size' in storage)) {
      storage.size = 0;
    }
    storage[storage.size] = value;
    storage.size++;
  };

  someInstance.pop = function () {
    if (!('size' in storage) || storage.size === 0) {
      return;
    }
    var res = storage[storage.size - 1];
    delete storage[storage.size - 1];
    storage.size--;
    return res;
  };

  someInstance.size = function () {
    return storage.size || 0;
  };

  return someInstance;
};
