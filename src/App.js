import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import DoubtForum from './pages/DoubtForum';
import ToDoList from './pages/ToDoList';
import Profile from './pages/Profile';

// Optional: Simple placeholder for 404
const NotFound = () => (
  <div className="p-6 text-center text-2xl text-red-600">404 - Page Not Found</div>
);

// Optional: Simulate auth check (replace with real logic later)
const isAuthenticated = () => {
  return true; // Replace with proper auth logic
};

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        <Route path="/forum" element={<ProtectedRoute><DoubtForum /></ProtectedRoute>} />
        <Route path="/todo" element={<ProtectedRoute><ToDoList /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
