import options from "../algorithms/listOfAlgorithms";

export default function OptionsPage({ algoChoice }) {
  const algo = options[algoChoice].questions;
  
  const elements = algo.map((question) => {
    if (question.type === "number") {
      return <div><br />{question.question} <input type="number" /></div>;
    } else if (question.type === "text") {
      return <div><br />{question.question} <input type="text" /></div>;
    } else if (question.type === "select") {
      return (
        <div>
        <br />{question.question} {" "}
        <select >
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

  return <>{elements}</>;
}
