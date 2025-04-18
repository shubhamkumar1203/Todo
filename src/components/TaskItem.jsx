import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask, addSubTask }) => {
  const { id, text, completed, createdAt, subTasks } = task;

  return (
    <li className={`task-item ${completed ? 'completed' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
        <span>{text}</span>
        <div className="task-meta">
          <small>Created: {createdAt}</small>
        </div>
      </div>

      {/* Sub-tasks as an ordered list */}
      {subTasks.length > 0 && (
        <ol className="subtask-list">
          {subTasks.map((subTask, index) => (
            <li key={index}>{subTask}</li>
          ))}
        </ol>
      )}

      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
