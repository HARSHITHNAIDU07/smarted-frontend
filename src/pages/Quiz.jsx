import React from 'react';

const Quiz = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">📝 Smart Quiz</h1>
      <p className="mb-6">Select a subject or topic to begin your quiz. Performance tracking and explanations included.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Math', 'Science', 'English'].map(subject => (
          <div key={subject} className="bg-white p-4 rounded shadow hover:bg-blue-50 cursor-pointer">
            <h2 className="text-xl font-semibold">{subject} Quiz</h2>
            <p className="text-sm text-gray-600">Practice questions and improve your score.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
