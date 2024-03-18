import React, { useEffect, useState } from "react";
import Question from "./Question";

function Quiz() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    async function ftechApi() {
      try {
        let apiFetch = await fetch(
          "https://opentdb.com/api.php?amount=10&type=multiple"
        );
        let response = await apiFetch.json();
        console.log(response.results);
        setData(response.results);
      } catch (error) {
        console.log("error");
      }
    }
    ftechApi();
  }, []);
  console.log(result);

  return (
    <div>
      <h1 className=" text-center text-4xl p-3 font-bold">
        Quiz App
      </h1>
      <div>
        {data.map((e, idx) =>
          count === idx ? (
            <>
              <Question
                key={idx}
                question={e.question}
                correct_answer={e.correct_answer}
                incorrect_answers={e.incorrect_answers}
                setCount={setCount}
                count={count}
                result={result}
                setResult={setResult}
              />
            </>
          ) : null
        )}
        {count > 10 && (
          
              <div>
                <h2>Congratulations! Quiz Completed!</h2>
                <p>Your Score: {result} out of 10</p>
              </div>
            )}
      </div>
    </div>
  );
}

export default Quiz;
