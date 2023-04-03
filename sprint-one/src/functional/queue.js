var Queue = function () {
  var queue = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  queue.enqueue = function (value) {
    storage[tail++] = value;
  };

  queue.dequeue = function () {
    // If Queue is empty, do nothing
    if (!queue.size()) {
      return;
    }

    var res = storage[head];
    delete storage[head++];
    return res;
  };

  queue.size = function () {
    return tail - head;
  };

  return queue;
};
