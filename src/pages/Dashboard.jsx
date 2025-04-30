import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link to="/quiz" className="bg-white shadow-md p-4 rounded hover:bg-blue-100">
          <h2 className="text-xl font-semibold mb-2">Smart Quiz</h2>
          <p>Take quizzes, track your performance, and get feedback.</p>
        </Link>
        <Link to="/forum" className="bg-white shadow-md p-4 rounded hover:bg-green-100">
          <h2 className="text-xl font-semibold mb-2">Doubt Forum</h2>
          <p>Post your academic doubts and discuss with peers.</p>
        </Link>
        <Link to="/todo" className="bg-white shadow-md p-4 rounded hover:bg-yellow-100">
          <h2 className="text-xl font-semibold mb-2">To-Do List</h2>
          <p>Organize your academic tasks and stay productive.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
