import React, { useState } from 'react';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, { title: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">✅ To-Do List</h1>
      <div className="mb-4 flex items-center gap-2">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {tasks.map((t, idx) => (
          <li
            key={idx}
            className={`flex justify-between items-center bg-white p-3 rounded shadow mb-2 ${t.completed ? 'line-through text-gray-400' : ''}`}
          >
            {t.title}
            <button
              onClick={() => toggleComplete(idx)}
              className={`text-sm px-2 py-1 rounded ${t.completed ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
            >
              {t.completed ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
