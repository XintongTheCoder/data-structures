var BinarySearchTree = function (value) {
  this.value = value; // Root is given
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  var newTreeNode = new BinarySearchTree(value);
  var curr = this;
  while (curr) {
    if (curr.value < value) {
      // Go to right
      if (!curr.right) {
        curr.right = newTreeNode;
        break;
      } else {
        curr = curr.right;
      }
    } else if (curr.value > value) {
      // Go to left
      if (!curr.left) {
        curr.left = newTreeNode;
        break;
      } else {
        curr = curr.left;
      }
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  var curr = this;
  while (curr) {
    if (curr.value < value) {
      // Go to right
      curr = curr.right;
    } else if (curr.value > value) {
      // Go to left
      curr = curr.left;
    } else {
      return true;
    }
  }
  return false;
};

// Iteratively with Stack
BinarySearchTree.prototype.depthFirstLog = function (cb) {
  // var root = this;
  // var stack = [];
  // var temp = root;
  // while (temp || stack.length > 0) {
  //   while (temp) {
  //     stack.push(temp);
  //     cb(temp.value);
  //     temp = temp.left;
  //   }
  //   temp = stack.pop();
  //   temp = temp.right;
  // }
  // Recursion
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function (cb) {
  var queue = [];
  queue.push(this);
  while (queue.length > 0) {
    var temp = queue.shift();
    cb(temp.value);
    if (temp.left) {
      queue.push(temp.left);
    }
    if (temp.right) {
      queue.push(temp.right);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
