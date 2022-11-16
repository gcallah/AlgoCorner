import options from "../algorithms/listOfAlgorithms";
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import { useState } from "react";

export default function OptionsPage({ algoChoice }) {
  const algo = options[algoChoice].questions;
  const { ref, insert, remove } = useBinarySearchTree();
  const [data, setData] = useState([])
  

  const elements = algo.map((question) => {
    if (question.type === "number") {
      return (
        <div key={question.question}>
          <br />
          {question.question} <input type="number" />
        </div>
      );
    } else if (question.type === "text") {
      return (
        <div key={question.question}>
          <br />
          {question.question} <input type="text" onChange={(e) => setData(e.target.value.split(","))}/>
        </div>
      );
    } else {
      return (
        <div key={question.question}>
          <br />
          {question.question}{" "}
          <select>
            {question.choices.map((elem) => (
              <option value={elem} key={elem}>
                {elem}
              </option>
            ))}
          </select>
        </div>
      );
    }
  });

  return (
    <>
      {elements}
      <BinarySearchTree data={data} ref={ref} />
    </>
  );
}
