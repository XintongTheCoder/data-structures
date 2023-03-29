var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    if (!('head' in storage)) {
      storage.head = 0;
      storage.tail = 0;
    }
    storage[storage.tail] = value;
    storage.tail++;
  };

  someInstance.dequeue = function () {
    // If Queue is empty, do nothing
    if (!('head' in storage) || storage.head === storage.tail) {
      return;
    }

    var res = storage[storage.head];
    delete storage[storage.head];
    storage.head++;
    return res;
  };

  someInstance.size = function () {
    if (!('head' in storage)) {
      return 0;
    }
    return storage.tail - storage.head;
  };

  return someInstance;
};
