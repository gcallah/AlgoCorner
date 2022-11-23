export class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  insertNode(insertedNode) {
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return this;
        }
      }
    }
  }
}
