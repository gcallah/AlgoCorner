import { hashTableQuestions } from "./hashTable.js";
import { bstQuestions } from "../forms/binarySearchTree";

const options = {
  "Binary Search Tree": {
    questions: bstQuestions,
  },
  "Hash Table": {
    questions: hashTableQuestions,
  },
};

export const SampleInputs = {
  initialInputs: [10, 5, 15, 2, 7, 20],
  inputsAfterPreoder: [10, 5, 2, 7, 15, 20],
  inputsAfterPostorder: [2, 7, 5, 20, 15, 10],
  inputsAfterInorder: [2, 5, 7, 10, 15, 20],
};

export const listOfAlgos = Object.keys(options);

export default options;
