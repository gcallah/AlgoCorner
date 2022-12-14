export class Graph {
  constructor(v) {
    // Number of vertices
    this.V = v;

    // Adjacency List as ArrayList of ArrayList's
    this.adj = new Array(this.V);
    for (let i = 0; i < this.V; i += 1) {
      this.adj[i] = new Array();
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  // A recursive function used by topologicalSort
  topologicalSortUtil(v, visited, stack) {
    visited[v] = true;
    let i = 0;
    for (i = 0; i < this.adj[v].length; i++) {
      if (!visited[this.adj[v][i]]) {
        this.topologicalSortUtil(this.adj[v][i], visited, stack);
      }
    }
    stack.push(v);
  }

  // The function to do Topological Sort.
  // It uses recursive topologicalSortUtil()
  topologicalSort() {
    let stack = new Array();

    let visited = new Array(this.V);
    for (let i = 0; i < this.V; i++) {
      visited[i] = false;
    }

    for (let i = 0; i < this.V; i++) {
      if (visited[i] == false) {
        this.topologicalSortUtil(i, visited, stack);
      }
    }

    while (stack.length != 0) {
      console.log(stack.pop() + " ");
    }
  }

  traversalBFS = function () {
    const graph = this.adj;
    const seen = {};
    const queue = [0];
    const values = [];

    while (queue.length) {
      const vertex = queue.shift();

      values.push(vertex);
      seen[vertex] = true;

      const connections = graph[vertex];
      for (let i = 0; i < connections.length; i++) {
        const connection = connections[i];
        if (!seen[connection]) {
          queue.push(connection);
        }
      }
    }

    return values;
  };

  traversalDFS = function (vertex=0, graph=this.adj, values=[], seen={}) {
    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];

      if (!seen[connection]) {
        this.traversalDFS(connection, graph, values, seen);
      }
    }
    return values;
  };
}
