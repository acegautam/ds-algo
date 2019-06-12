function CreateNode(key) {
  let neighbors = [];
  return {
    key,
    neighbors,
    addNeighbors(node) {
      neighbors.push(node);
    }
  };
}

function CreateGraph(directed = false) {
  let nodes = [];
  let edges = [];

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(CreateNode(key));
    },
    getNode(key) {
      return nodes.find(node => node.key === key);
    },
    addEdge(key1, key2) {
      const node1 = CreateNode(key1);
      const node2 = CreateNode(key2);
      node1.addNeighbors(node2);
      edges.push(`${key1} ---> ${key2}`);

      if (!directed) {
        node2.addNeighbors(node1);
      }
    }
  };
}
