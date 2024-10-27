import React, { useState, useEffect } from 'react';


// Notification Component
const addNotify = ({ message, duration = 15000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically close the notification after the specified duration
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    // Clear timeout when component unmounts
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow-md z-50 flex justify-between items-center">
      <div>{message}</div>
      <button
        onClick={() => setVisible(false)}
        className="text-white hover:text-red-500 focus:outline-none"
      >
        <h1>❌</h1>
      </button>
    </div>
  );
};

export default addNotify;
