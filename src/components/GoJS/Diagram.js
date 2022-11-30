import "./Diagram.css";
import { BST, BSTNode } from "../../algorithms/BST";
import { useState, useEffect } from "react";

export default function Diagram({ nodes }) {
  const [bst, setBST] = useState(new BST());
  const renderTree = (root) => {
    if (!root) return <></>;
    return (
      <li>
        <a href="./">{root.data}</a>
        {root.left || root.right ? (
          <ul>
            {root.left ? renderTree(root.left) : <></>}
            {root.right ? renderTree(root.right) : <></>}
          </ul>
        ) : (
          <></>
        )}
      </li>
    );
  };

  useEffect(() => {
    if (nodes) {
      const tree = new BST();
      nodes.forEach((element) => {
        tree.insertNode(new BSTNode(Number(element)));
      });
      setBST(tree);
    }
  }, [nodes]);

  return (
    <div className="tree">
      <ul>{renderTree(bst.root)}</ul>
    </div>
  );
}
