import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
    <h1 className="text-4xl font-bold mb-4">Welcome to SmartEd</h1>
    <p className="text-center max-w-md mb-6">SmartEd is your personalized student learning environment — quizzes, doubt forum, and task planner in one place.</p>
    <div className="space-x-4">
      <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</Link>
      <Link to="/register" className="bg-gray-600 text-white px-4 py-2 rounded">Register</Link>
    </div>
  </div>
);

export default Home;
