import { BSTNode, BST } from "./BST";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";


describe("creation of bstNode", () => {
  test("should correctly create a node", () => {
    const node = new BSTNode(36);
    expect(node.data).toEqual(36);
  });
});

describe("creation of binarySearchTree", () => {
  test("should initialize a binary search tree with a root of null", () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });

  test("it should create a new root node", () => {
    let bst = new BST();
    let node = new BSTNode(36);
    bst.insertNode(node);
    expect(bst.root).toEqual(node);
  });
});

describe("insertion of single Node in binarySearchTree", () => {
  test("it should add a child node to the left of the root node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let newNode = new BSTNode(22);
    bst.insertNode(newNode);
    expect(rootNode.left.data).toEqual(22);
  });

  test("it should add a child node to the right of the root node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let newNode = new BSTNode(48);
    bst.insertNode(newNode);
    expect(rootNode.right.data).toEqual(48);
  });

  test("it should add a child to the left of a child node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(22);
    bst.insertNode(node2);
    let node3 = new BSTNode(11);
    bst.insertNode(node3);
    expect(rootNode.left.left.data).toEqual(11);
  });

  test("it should add a child to the right of a child node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(48);
    bst.insertNode(node2);
    let node3 = new BSTNode(73);
    bst.insertNode(node3);
    expect(rootNode.right.right.data).toEqual(73);
  });

  test("it should add a child to left or right of a node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(22);
    bst.insertNode(node2);
    let node3 = new BSTNode(33);
    bst.insertNode(node3);
    expect(rootNode.left.right.data).toEqual(33);
  });

  test("it should not add duplicate nodes", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insertNode(rootNode);
    let node2 = new BSTNode(36);
    expect(bst.root.data).toEqual(36)
    expect(bst.root.left).toEqual(null)
    expect(bst.root.right).toEqual(null)
  });
});


describe("Optimized tests", () => {
  test("Traversals", () => {
    let bst = new BST();
    [10,5,15,2,7,20].forEach(num => bst.insertNode(new BSTNode(num)))
    expect(new Set(bst.preorderTraversal(bst.root))).toEqual(new Set([10,5,2,7,15,20]));
    expect(new Set(bst.postorderTraversal(bst.root))).toEqual(new Set([2, 7,5,20,15,10]));
    expect(new Set(bst.inorderTraversal(bst.root))).toEqual(new Set([2, 5,7,10,15,20]));
  });

  test("searching for a node", () => {
    let bst = new BST();
    expect(bst.searchNode(bst.root, 10)).toEqual(null);
    let newNode = new BSTNode(10);
    bst.insertNode(newNode);
    expect(bst.searchNode(bst.root, 10)).toEqual(newNode);
  });

  test("deletion of node", () => {
    let bst = new BST();
    bst.remove(10)
    expect(bst.searchNode(bst.root, 10)).toEqual(null);
    let newNode = new BSTNode(10);
    bst.insertNode(newNode)
    bst.remove(10)
    expect(bst.searchNode(bst.root, 10)).toEqual(null);
  });

  test("validity of BST", () => {
    let bst = new BST();
    expect(bst.isValidBST()).toEqual(true);
    let goodNode = new BSTNode(10);
    bst.insertNode(goodNode);
    expect(bst.isValidBST()).toEqual(true);
    let badNode = new BSTNode(20);
    bst.root.left = badNode;
    expect(bst.isValidBST()).toEqual(false);
  });


  test("insertion of random values", () => {
    const test = Array.from({length: 6}, () => Math.floor(Math.random() * 100));
    let bst = new BST();
    for (const number of test) {
      let newNode = new BSTNode(number);
      bst.insertNode(newNode);
      expect(bst.searchNode(bst.root, number)).toEqual(newNode);
      expect(bst.isValidBST()).toEqual(true);
    }
  });
});



