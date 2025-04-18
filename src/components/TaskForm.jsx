import React, { useState } from 'react';

const TaskForm = ({ addTask, categories }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [subTasks, setSubTasks] = useState(['']); // Manage sub-tasks as an array

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTask(text, category, subTasks); // Pass subTasks to addTask
    setText('');
    setCategory('');
    setSubTasks(['']); // Reset sub-tasks on submit
  };

  const handleSubTaskChange = (index, value) => {
    const newSubTasks = [...subTasks];
    newSubTasks[index] = value;
    setSubTasks(newSubTasks);
  };

  const handleAddSubTask = () => {
    setSubTasks([...subTasks, '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      {/* Sub-task inputs */}
      {subTasks.map((subTask, index) => (
        <div key={index} className="subtask-input">
          <input
            type="text"
            placeholder="Sub-task details"
            value={subTask}
            onChange={(e) => handleSubTaskChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddSubTask}>Add Sub-task</button>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
