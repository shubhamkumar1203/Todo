import React, { useEffect } from 'react';
import Header from '../components/Header'; // ← import it
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import FilterSortBar from '../components/FilterSortBar';
import CategoryTagSelector from '../components/CategoryTagSelector';
import ReminderPopup from '../components/ReminderPopup';
import useTasks from '../hooks/useTasks';
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
    const reminder = tasks.find(task => task.dueDate && !task.completed);
    if (reminder) {
      setReminderTask(reminder);
    }
  }, [tasks]);

  const filteredTasks = filterTasks(tasks, filter);
  const categorizedTasks = filterByCategory(filteredTasks, selectedCategory);
  const sortedTasks = sortTasks(categorizedTasks, sortOrder);

  return (
    <div className="home-container">
      <Header />
      <CategoryTagSelector
        categories={categories}
        selectedCategory={selectedCategory}
        setCategory={setSelectedCategory}
      />
      <FilterSortBar
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <TaskForm addTask={addTask} categories={categories} />
      <TaskList
        tasks={sortedTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
      {reminderTask && (
        <ReminderPopup task={reminderTask} onClose={() => setReminderTask(null)} />
      )}
    </div>
  );
};

export default Home;
