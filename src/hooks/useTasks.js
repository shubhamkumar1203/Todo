// useTasks.js
import { useState, useEffect } from 'react';

const TASKS_KEY = 'todo_tasks';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(TASKS_KEY);
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  // Sync to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, category = '', subTasks = [], dueDate = null) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      category,
      subTasks, // Add subTasks array
      dueDate,
      createdAt: new Date().toLocaleString(), // Store formatted creation date
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  const addSubTask = (taskId, subTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, subTasks: [...task.subTasks, subTask] }
          : task
      )
    );
  };

  return {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    toggleComplete,
    updateTask,
    addSubTask,
  };
};

export default useTasks; // Ensure you have 'export default useTasks;'
