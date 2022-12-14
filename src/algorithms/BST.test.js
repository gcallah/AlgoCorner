import { BSTNode, BST } from "./BST";
import { SampleInputs } from "./listOfAlgorithms";

let SampleBst = new BST();
SampleInputs.initialInputs.forEach((num) =>
  SampleBst.insertNode(new BSTNode(num))
);

describe("creation of Tree", () => {
  test("should correctly create a node then an empty tree then insert that node as root node of tree", () => {
    const node = new BSTNode(36);
    expect(node.data).toEqual(36);
    let bst = new BST();
    expect(bst.root).toEqual(null);
    bst.insertNode(node);
    expect(bst.root).toEqual(node);
  });
});

describe("Optimized tests", () => {
  test("it should not add duplicate nodes", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(36);
    expect(bst.isValidBST()).toEqual(true);
  });

  test("Traversals", () => {
    expect(new Set(SampleBst.preorderTraversal(SampleBst.root))).toEqual(
      new Set(SampleInputs.preorderTraversal)
    );
    expect(new Set(SampleBst.postorderTraversal(SampleBst.root))).toEqual(
      new Set(SampleInputs.postorderTraversal)
    );
    expect(new Set(SampleBst.inorderTraversal(SampleBst.root))).toEqual(
      new Set(SampleInputs.inorderTraversal)
    );
  });

  test("searching for a node", () => {
    let bst = new BST();
    expect(bst.searchNode(bst.root, 10)).toEqual(null);
    for (const number of SampleInputs.initialInputs) {
      expect(bst.searchNode(bst.root, number)).not.toBeNull;
    }
  });

  test("deletion of node", () => {
    let newNode = new BSTNode(1000000);
    SampleBst.insertNode(newNode);
    expect(SampleBst.searchNode(SampleBst.root, 1000000)).toEqual(newNode);
    SampleBst.remove(1000000);
    expect(SampleBst.isValidBST()).toEqual(true);
    expect(SampleBst.searchNode(SampleBst.root, 1000000)).toEqual(null);
  });

  test("validity of Empty BST", () => {
    let bst = new BST();
    expect(bst.isValidBST()).toEqual(true);
    let goodNode = new BSTNode(10);
    bst.insertNode(goodNode);
    expect(bst.isValidBST()).toEqual(true);
    let badNode = new BSTNode(20);
    bst.root.left = badNode;
    expect(bst.isValidBST()).toEqual(false);
  });

  test("validity of Good Non-Empty BST", () => {
    expect(SampleBst.isValidBST()).toEqual(true);
  });

  test("validity of Bad Non-Empty BST", () => {
    let bst = new BST();
    let goodNode = new BSTNode(20);
    let anotherGoodNode = new BST(30);
    let badNode = new BSTNode(35);
    bst.insertNode(goodNode);
    bst.insertNode(anotherGoodNode);
    bst.root.left = badNode;
    expect(bst.isValidBST()).toEqual(false);
  });

  test("insertion of random values", () => {
    const test = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 100)
    );
    let bst = new BST();
    for (const number of test) {
      let newNode = new BSTNode(number);
      bst.insertNode(newNode);
      expect(bst.searchNode(bst.root, number)).toEqual(newNode);
      expect(bst.isValidBST()).toEqual(true);
    }
  });
});
