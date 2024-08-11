import React, { useRef, useState } from "react";
import { data } from "./../assets/data";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("bg-teal-200", "border-teal-500");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("bg-red-200", "border-red-500");
        option_array[question.ans - 1].current.classList.add("bg-teal-200", "border-teal-500");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove("bg-red-200", "border-red-500");
        option.current.classList.remove("bg-teal-200", "border-teal-500");
      });
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
    setScore(0);
    setResult(false);
    option_array.forEach((option) => {
      option.current.classList.remove("bg-red-200", "border-red-500");
      option.current.classList.remove("bg-teal-200", "border-teal-500");
    });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-black via-purple-800 to-black">
      <div className="w-full max-w-lg h-auto p-8 bg-white shadow-lg rounded-lg border border-gray-300">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Quizzer</h1>
        <hr className="border-gray-300 mb-6" />
        {result ? (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              You scored {score} out of {data.length}
            </h2>
            <button
              onClick={resetQuiz}
              className="w-full py-2 px-4 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-purple-700 transition duration-300"
            >
              Reset
            </button>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-4">
              {index + 1}. {question.question}
            </h2>
            <ul className="space-y-4">
              <li
                ref={Option1}
                onClick={(e) => checkAns(e, 1)}
                className="p-4 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300"
              >
                {question.option1}
              </li>
              <li
                ref={Option2}
                onClick={(e) => checkAns(e, 2)}
                className="p-4 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300"
              >
                {question.option2}
              </li>
              <li
                ref={Option3}
                onClick={(e) => checkAns(e, 3)}
                className="p-4 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300"
              >
                {question.option3}
              </li>
              <li
                ref={Option4}
                onClick={(e) => checkAns(e, 4)}
                className="p-4 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300"
              >
                {question.option4}
              </li>
            </ul>
            <button
              onClick={next}
              className="w-full mt-6 py-2 px-4 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-purple-700 transition duration-300"
            >
              Next
            </button>
            <div className="text-center text-gray-600 mt-4 text-lg">
              {index + 1} of {data.length} questions
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
