import BinaryHeap from "./BinaryHeap";
import { SampleInputs } from "./listOfAlgorithms";

let SampleHeap = new BinaryHeap();
SampleInputs.initialInputs.forEach((num) => SampleHeap.push(num));

describe("Optimized tests", () => {
  test("should correctly get size of heap and check whether heap is empty", () => {
    const heap = new BinaryHeap();
    expect(heap.size()).toEqual(0);
    expect(heap.isEmpty()).toEqual(true);
    expect(SampleHeap.size()).toEqual(SampleInputs.initialInputs.length);
    expect(SampleHeap.isEmpty()).toEqual(false);
  });

  test("should correctly create a heap then insert that a node in it", () => {
    const heap = new BinaryHeap();
    expect(heap.isEmpty()).toEqual(true);
    heap.push(36);
    expect(heap.contains(36)).toEqual(true);
  });

  test("searching for a node", () => {
    let heap = new BinaryHeap();
    expect(heap.contains(10)).toEqual(false);
    for (const number of SampleInputs.initialInputs) {
      expect(heap.contains(number)).not.toBeNull;
    }
  });

  test("deletion of node", () => {
    SampleHeap.push(1000000);
    expect(SampleHeap.contains(1000000)).toEqual(true);
    SampleHeap.pop(1000000);
    expect(SampleHeap.contains(1000000)).toEqual(false);
  });

  test("insertion of multiple values", () => {
    const test = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 100)
    );
    let heap = new BinaryHeap();
    for (const number of test) {
      heap.push(number);
      expect(heap.contains(number)).toEqual(true);
    }
  });
});
