var Stack = function () {
  var stack = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  stack.push = function (value) {
    storage[size++] = value;
  };

  stack.pop = function () {
    if (!size) {
      return;
    }
    var res = storage[size - 1];
    delete storage[size - 1];
    size--;
    return res;
  };

  stack.size = function () {
    return size;
  };

  return stack;
};
