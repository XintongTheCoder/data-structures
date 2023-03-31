// Instantiate a new graph
var Graph = function () {
  // Map<node, neighbors[]>
  this.map = new Map();
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.map.set(node, []);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.map.has(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  if (!this.map.has(node)) {
    return;
  }
  const neighbors = this.map.get(node);
  this.map.delete(node);
  _.each(neighbors, (neighbor) => {
    const index = this.map.get(neighbor).indexOf(node);
    this.map.get(neighbor).splice(index, 1);
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return (
    this.map.has(fromNode) &&
    this.map.has(toNode) &&
    this.map.get(fromNode).indexOf(toNode) > -1
  );
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  if (
    !this.map.has(fromNode) ||
    !this.map.has(toNode) ||
    this.hasEdge(fromNode, toNode)
  ) {
    return;
  }
  this.map.get(fromNode).push(toNode);
  this.map.get(toNode).push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  if (
    !this.map.has(fromNode) ||
    !this.map.has(toNode) ||
    !this.hasEdge(fromNode, toNode) ||
    !this.hasEdge(toNode, fromNode)
  ) {
    return;
  }
  const fromNodeNeighbors = this.map.get(fromNode);
  fromNodeNeighbors.splice(fromNodeNeighbors.indexOf(toNode), 1);
  const toNodeNeighbors = this.map.get(toNode);
  toNodeNeighbors.splice(toNodeNeighbors.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  this.map.forEach(function (value, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
