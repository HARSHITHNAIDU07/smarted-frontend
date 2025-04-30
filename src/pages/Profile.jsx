import React from 'react';

const Profile = () => {
  const user = {
    name: 'Student User',
    email: 'student@smarte.com',
    progress: {
      quizzesTaken: 5,
      tasksCompleted: 12,
      doubtsPosted: 3
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">👤 Profile</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
        <p className="mb-2"><strong>Name:</strong> {user.name}</p>
        <p className="mb-4"><strong>Email:</strong> {user.email}</p>
        <h2 className="text-xl font-semibold mb-2">📈 Progress Overview</h2>
        <ul className="list-disc ml-6">
          <li>Quizzes Taken: {user.progress.quizzesTaken}</li>
          <li>Tasks Completed: {user.progress.tasksCompleted}</li>
          <li>Doubts Posted: {user.progress.doubtsPosted}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
