import { useState } from "react";
import OptionsPage from "./Options";
import { listOfAlgos } from "../algorithms/listOfAlgorithms";


export default function MainPage() {
  const [algo, setAlgo] = useState("select Algorithm");

  const handleOnChange = (e) => {
    setAlgo(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    algo === "select Algorithm"
      ? (result = "select Algorithm")
      : (result = makeFirstLetterCapital(algo));
    return result;
  };

  return (
    <div>
      <div>
        <h1>{renderResult()}</h1>
      </div>
      <div>
        <select value={algo} onChange={handleOnChange}>
          <option value="select Algorithm">Select Algorithm</option>
          {listOfAlgos.map(elem => <option value={elem} key={elem}>{elem}</option>)}
        </select>
      </div>
      {algo !== "select Algorithm" && <OptionsPage algoChoice={algo}/>}
    </div>
  );
}
