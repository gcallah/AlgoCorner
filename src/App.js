import listOfAlgorithms from "./algorithms/listOfAlgorithms.js";
import { useState } from "react";

function App() {
  const [algorithm, setAlgorith] = useState(null);

  const initialSelection = !algorithm && (
    <select name="algo" id="algo" onChange={(e) => setAlgorith(e.target.value)}>
      {Object.keys(listOfAlgorithms).map((algo) => (
        <option key={algo} value={algo}>
          {algo}
        </option>
      ))}
    </select>
  );

  const secondSelection = algorithm && (
    <select name="questions" id="questions">
      {listOfAlgorithms[algorithm].map((algo) => (
        <option key={algo.question} value={algo.question}>
          {algo.question}
        </option>
      ))}
    </select>
  );

  return (
    <>
      {initialSelection}
      <div>{secondSelection}</div>
    </>
  );
}

export default App;
