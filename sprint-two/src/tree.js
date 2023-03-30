var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var newChild = Tree(value);
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
