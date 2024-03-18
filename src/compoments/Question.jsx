import React, { useEffect, useState } from "react";

function Question({
  question,
  incorrect_answers,
  correct_answer,
  setCount,
  count,
  result,
  setResult,
}) {
  const [time, setTime] = useState(10);
  // const[score , setScore] = useState([]);

  // let arr = [...incorrect_answers, correct_answer];

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (time === 0 && count < 10) {
      setCount((prev) => prev + 1);
      setTime(10);
    }
  }, [time, count]);

  return (
    <div className=" p-4 ">
      <h2 className="text-3xl font-semibold mb-4 p-2 ">
        Question : {count + 1}
      </h2>
      <div>
        <p className="text-xl mb-2">{question}</p>
      </div>
      <div className="ml-8 p-2">
        <ul
          style={{ listStyleType: "Disc" }}
          className="flex flex-col gap-2 justify-center"
        >
          {incorrect_answers.map((value, idx) => {
            //  console.log(value)
            return (
              <li key={idx}>
                <button
                  className=" px-2 rounded-md"
                  value={value}
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  {value}
                </button>
              </li>
            );
          })}
          <li >
                <button
                  className=" px-2 rounded-md"
                  // value={value}
                  onClick={() => {
                    setCount(count + 1);
                    setResult(result + 1);
                  }}
                >
                  {correct_answer}
                </button>
              </li>
        </ul>
      </div>
      <div
        className="mb-4 mt-2 text-xl font-medium"
        style={{ color: time > 5 ? "black" : "red" }}
      >
        {" "}
        Time left: {time} Second
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 bg-slate-500 rounded-lg font-medium hover:bg-slate-600"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Skip Qusetion
        </button>
      </div>
    </div>
  );
}

export default Question;
