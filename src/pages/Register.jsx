import React from 'react';

const Register = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form className="bg-white p-6 rounded shadow-md w-80">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <input type="text" placeholder="Name" className="w-full mb-3 p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Register</button>
    </form>
  </div>
);

export default Register;
