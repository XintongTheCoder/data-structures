var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
};

treeMethods.contains = function (target) {
  return (
    this.value === target ||
    !!_.find(this.children, function (child) {
      return child.contains(target);
    })
  );
};

treeMethods.removeFromParent = function () {
  var parent = this.parent;
  var targetValue = this.value;
  parent.children = _.filter(
    parent.children,
    function (child, index, children) {
      return child.value !== targetValue;
    }
  );
  this.parent = null;
};

treeMethods.traverse = function (cb) {
  cb(this.value);
  _.each(this.children, function (child) {
    child.traverse(cb);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
