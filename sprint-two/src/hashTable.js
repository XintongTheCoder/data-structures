const maxLoadFactor = 0.75;
const minLoadFactor = 0.25;

var HashTable = function () {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    // No Node yet
    this._storage.set(index, new ListNode());
  }
  var curr = this._storage.get(index);
  while (curr.next) {
    if (curr.next.key === k) {
      curr.next.value = v;
      break;
    }
    curr = curr.next;
  }
  curr.next = new ListNode(k, v);
  this._size++;

  // Double size if exceed maxLoadFactor
  if (this._size / this._limit > maxLoadFactor) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var curr = this._storage.get(index);
  while (curr && curr.next) {
    if (curr.next.key === k) {
      return curr.next.value;
    }
    curr = curr.next;
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var curr = this._storage.get(index);
  while (curr && curr.next) {
    if (curr.next.key === k) {
      curr.next = curr.next.next;
      this._size--;
      break;
    }
    curr = curr.next;
  }

  // Halve size if below minLoadFactor
  if (this._size / this._limit < minLoadFactor) {
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function (newLimit) {
  this._limit = newLimit;
  var tempStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  // NOTE: here need to reset size to 0!!!
  this._size = 0;
  tempStorage.each(
    function (value) {
      var curr = value;
      while (curr && curr.next) {
        this.insert(curr.next.key, curr.next.value);
        curr = curr.next;
      }
    }.bind(this)
  );
};

var ListNode = function (key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
};

// To solve collision: separate chaining
// Approach1: use {} at each index => Problem: the key will always be converted to string, how to distinguish between 1 and '1' (Btw, in some envirnment, object itself also use hash, but not in Chrome V8)
// Approach2: use linkedList

/*
 * Complexity: What is the time complexity of the above functions?
 */
