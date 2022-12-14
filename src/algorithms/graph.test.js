import { Graph } from "./graph";

const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];
const sampleGraph = new Graph(9);
sampleGraph.adj = adjacencyList;

describe("Optimized tests", () => {
  test("checking bfs", () => {
    expect(new Set(sampleGraph.traversalBFS())).toEqual(
      new Set([0, 1, 3, 2, 4, 5, 8, 6, 7])
    );
  });

  test("checking bfs", () => {
    expect(new Set(sampleGraph.traversalDFS())).toEqual(
      new Set([0, 1, 3, 2, 8, 4, 6, 7, 5])
    );
  });
});
