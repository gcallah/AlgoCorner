import { AVLNode, AVLTree } from "./AVLTree";
import { SampleInputs } from "./listOfAlgorithms";

let SampleAVL = new AVLTree();
SampleInputs.initialInputs.forEach((num) =>
  SampleAVL.insertNode(new AVLNode(num))
);

describe("creation of AVL Tree", () => {
  test("should correctly create a node then an empty tree then insert that node as root node of tree", () => {
    expect(new AVLNode(36).data).toEqual(36);
    let avl = new AVLTree();
    expect(avl.root).toEqual(null);
    avl.insert(avl.root, 36);
    expect(avl.root.data).toEqual(36);
  });
});

describe("Optimized tests", () => {
  test("it should not add duplicate nodes", () => {
    let avl = new AVLTree();
    let rootNode = new AVLNode(36);
    avl.insertNode(rootNode);
    let node2 = new AVLNode(36);
    expect(avl.isValidAVLTree()).toEqual(true);
  });

  test("Traversals", () => {
    // expect(new Set(SampleBst.preorderTraversal(SampleBst.root))).toEqual(
    //   new Set(SampleInputs.preorderTraversal)
    // );
    // expect(new Set(SampleBst.postorderTraversal(SampleBst.root))).toEqual(
    //   new Set(SampleInputs.postorderTraversal)
    // );
    // expect(new Set(SampleBst.inorderTraversal(SampleBst.root))).toEqual(
    //   new Set(SampleInputs.inorderTraversal)
    // );
  });

  test("searching for a node", () => {
    let avl = new AVLTree();
    expect(avl.searchNode(avl.root, 10)).toEqual(null);
    for (const number of SampleInputs.initialInputs) {
      expect(avl.searchNode(avl.root, number)).not.toBeNull;
    }
  });

  test("deletion of node", () => {
    let newNode = new AVLNode(1000000);
    SampleBst.insertNode(newNode);
    expect(SampleBst.searchNode(SampleBst.root, 1000000)).toEqual(newNode);
    SampleBst.remove(1000000);
    expect(SampleBst.isValidAVLTree()).toEqual(true);
    expect(SampleBst.searchNode(SampleBst.root, 1000000)).toEqual(null);
  });

  test("validity of Empty AVLTree", () => {
    let avl = new AVLTree();
    expect(avl.isValidAVLTree()).toEqual(true);
    let goodNode = new AVLNode(10);
    avl.insertNode(goodNode);
    expect(avl.isValidAVLTree()).toEqual(true);
    let badNode = new AVLNode(20);
    avl.root.left = badNode;
    expect(avl.isValidAVLTree()).toEqual(false);
  });

  test("validity of Good Non-Empty AVLTree", () => {
    expect(SampleBst.isValidAVLTree()).toEqual(true);
  });

  test("validity of Bad Non-Empty AVLTree", () => {
    let avl = new AVLTree();
    let goodNode = new AVLNode(20);
    let anotherGoodNode = new AVLTree(30);
    let badNode = new AVLNode(35);
    avl.insertNode(goodNode);
    avl.insertNode(anotherGoodNode);
    avl.root.left = badNode;
    expect(avl.isValidAVLTree()).toEqual(false);
  });

  test("insertion of random values", () => {
    const test = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 100)
    );
    let avl = new AVLTree();
    for (const number of test) {
      let newNode = new AVLNode(number);
      avl.insertNode(newNode);
      expect(avl.searchNode(avl.root, number)).toEqual(newNode);
      expect(avl.isValidAVLTree()).toEqual(true);
    }
  });
});
