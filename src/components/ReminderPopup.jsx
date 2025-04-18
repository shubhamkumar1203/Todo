import React, { useEffect } from 'react';

const ReminderPopup = ({ task, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="reminder-popup">
      <p>Reminder: "{task.text}" is due soon!</p>
      <button onClick={onClose}>Dismiss</button>
    </div>
  );
};

export default ReminderPopup;
