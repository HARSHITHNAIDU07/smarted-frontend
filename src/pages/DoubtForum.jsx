import React, { useState } from 'react';

const DoubtForum = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const handlePost = () => {
    if (question.trim()) {
      setQuestions([...questions, { text: question, date: new Date().toLocaleString() }]);
      setQuestion('');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">💬 Doubt Forum</h1>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows="3"
          placeholder="Post your academic doubt..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handlePost}>Post</button>
      </div>
      <div>
        {questions.length > 0 ? (
          questions.map((q, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow mb-3">
              <p>{q.text}</p>
              <p className="text-xs text-gray-500 mt-2">{q.date}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No questions posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default DoubtForum;
