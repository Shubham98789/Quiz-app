import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, filter: 'brightness(50%)' }}
    >
      <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-6xl font-extrabold text-white mb-6">Quizzer</h1>
        <Link to="/quiz">
          <button className="mt-4 px-8 py-4 bg-purple-600  hover:text-purple-600 text-white hover:bg-white text-xl font-semibold rounded-full shadow-md hover:bg-purple-700 transition duration-300">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

