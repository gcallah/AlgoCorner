import { hashTableQuestions } from "./hashTable.js";
import { bstQuestions } from "./binarySearchTree.js";


const options = {
  "Binary Search Tree": {
    questions: bstQuestions
  },
  "Hash Table": {
    questions: hashTableQuestions
  },
};

export const listOfAlgos = Object.keys(options)

export default options;
