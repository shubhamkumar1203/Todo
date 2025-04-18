// Home.jsx
import React, { useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import FilterSortBar from '../components/FilterSortBar';
import CategoryTagSelector from '../components/CategoryTagSelector';
import ReminderPopup from '../components/ReminderPopup';
import useTasks from '../hooks/useTasks'; // Correctly import the default export
import { filterTasks, filterByCategory, sortTasks } from '../utils/taskHelpers';
import '../styles/main.css';

const Home = () => {
  const {
    tasks,
    addTask,
    toggleComplete,
    deleteTask,
    setTasks
  } = useTasks();

  const [filter, setFilter] = React.useState('all');
  const [sortOrder, setSortOrder] = React.useState('newest');
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [reminderTask, setReminderTask] = React.useState(null);

  const categories = ['Work', 'Personal', 'Urgent'];

  useEffect(() => {
    // Set reminder task if any task's due date is approaching (mock-up)
    const reminder = tasks.find(task => task.dueDate && !task.completed);
    if (reminder) {
      setReminderTask(reminder);
    }
  }, [tasks]);

  // Applying filters and sorting using taskHelpers functions
  const filteredTasks = filterTasks(tasks, filter);
  const categorizedTasks = filterByCategory(filteredTasks, selectedCategory);
  const sortedTasks = sortTasks(categorizedTasks, sortOrder);

  return (
    <div>
      <h1>📝 My To-Do List</h1>

      {/* Category Selector */}
      <CategoryTagSelector
        categories={categories}
        selectedCategory={selectedCategory}
        setCategory={setSelectedCategory}
      />

      {/* Filter and Sort Bar */}
      <FilterSortBar
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Add Task Form */}
      <TaskForm addTask={addTask} categories={categories} />

      {/* Task List */}
      <TaskList
        tasks={sortedTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />

      {/* Reminder Popup */}
      {reminderTask && (
        <ReminderPopup task={reminderTask} onClose={() => setReminderTask(null)} />
      )}
    </div>
  );
};

export default Home;
