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
    if (this.root === null) this.root = insertedNode;
    else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
          } else currentNode = currentNode.left;
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else currentNode = currentNode.right;
        } else return this;
      }
    }
  }

  isValidBST = () => {
    const helper = (node, min, max) => {
      if (!node) return true;
      if (node.data <= min || node.data >= max) return false;
      return (
        helper(node.left, min, node.data) && helper(node.right, node.data, max)
      );
    };
    return helper(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  };

  searchNode(node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.searchNode(node.left, data);
    else if (data > node.data) return this.searchNode(node.right, data);
    else return node;
  }

  remove(data) {
    const removeNode = (node, key) => {
      if (node === null) return null;
      else if (key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
      } else if (key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        var aux = this.findMinNode(node.right);
        node.data = aux.data;
        node.right = this.removeNode(node.right, aux.data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  findMinNode = () => {
    let node = this.root;
    while (!node.left === null) node = node.left;
    return node;
  };

  inorderTraversal(node) {
    if (!node) return []
    return this.inorderTraversal(node.left).concat([node.data], this.inorderTraversal(node.right))
  }

  postorderTraversal(node) {
    if (!node) return []
    return this.postorderTraversal(node.left).concat(this.postorderTraversal(node.right), [node.data])
  }

  preorderTraversal(node) {
    if (!node) return []
    return [node.data].concat(this.preorderTraversal(node.left), this.preorderTraversal(node.right))
  }
}
