export class AVLNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

export class AVLTree {
  constructor() {
    this.root = null;
  }

  getBalanceFactor(root) {
    if (!root) return 0;
    return this.getHeight(root.left) - this.getHeight(root.right);
  }

  getHeight(root) {
    if (!root) return 0;
    return root.height;
  }

  insert(root, nodeValue) {
    let node = new AVLNode(nodeValue);
    if (root === null) return node;
    else if (nodeValue < root.data)
      root.left = this.insert(root.left, nodeValue);
    else root.right = this.insert(root.right, nodeValue);
    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    let balance = this.getBalanceFactor(root);
    if (balance > 1 && nodeValue < root.left.data)
      return this.rightRotate(root);
    if (balance > 1 && nodeValue > rootNode.left.data) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }
    if (balance < -1 && nodeValue < root.right.data)
      return this.leftRotate(root);
    if (balance < -1 && nodeValue < root.right.data) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }
    return root;
  }

  rightRotate(disbalanceNode) {
    let newRoot = disbalanceNode.left;
    disbalanceNode.left = disbalanceNode.left.right;
    newRoot.right = disbalanceNode;
    disbalanceNode.height =
      1 +
      Math.max(getHeight(disbalanceNode.left), getHeight(disbalanceNode.right));
    newRoot.height =
      1 + Math.max(getHeight(newRoot.left), getHeight(newRoot.right));
    return newRoot;
  }

  leftRotate(disbalanceNode) {
    let newRoot = disbalanceNode.left;
    disbalanceNode.right = disbalanceNode.right.left;
    newRoot.left = disbalanceNode;
    disbalanceNode.height =
      1 +
      Math.max(getHeight(disbalanceNode.left), getHeight(disbalanceNode.right));
    newRoot.height =
      1 + Math.max(getHeight(newRoot.left), getHeight(newRoot.right));
    return newRoot;
  }

  inorderTraversal(node) {
    if (!node) return [];
    return this.inorderTraversal(node.left).concat(
      [node.data],
      this.inorderTraversal(node.right)
    );
  }

  postorderTraversal(node) {
    if (!node) return [];
    return this.postorderTraversal(node.left).concat(
      this.postorderTraversal(node.right),
      [node.data]
    );
  }

  preorderTraversal(node) {
    if (!node) return [];
    return [node.data].concat(
      this.preorderTraversal(node.left),
      this.preorderTraversal(node.right)
    );
  }

  getMinValue(root) {
    if (!root || !root.left) return root;
    return this.getMinValue(root.left);
  }

  delete(root, nodeValue) {
    if (root === null) return root;
    else if (nodeValue < root.data)
      root.left = this.delete(root.left, nodeValue);
    else if (nodeValue > root.data)
      root.right = this.delete(root.right, nodeValue);
    else {
      if (!root.left) {
        let temp = root.right;
        root = null;
        return temp;
      } else if (!root.right) {
        let temp = root.left;
        root = null;
        return temp;
      }
      let temp = this.getMinValue(root.right);
      root.data = temp.data;
      root.right = this.delete(root.right, temp.data);
    }
    let balance = this.getBalanceFactor(root);
    if (balance > 1 && this.getBalanceFactor(root.left) >= 0)
      return this.rightRotate(root);
    if (balance < -1 && this.getBalanceFactor(root.right) <= 0) {
      return this.leftRotate(root);
    }
    if (balance > 1 && this.getBalanceFactor(root.left) < 0) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }

    if (balance < -1 && this.getBalanceFactor(root.right) > 0) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }
    return root;
  }
}
