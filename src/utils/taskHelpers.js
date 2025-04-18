// Filter tasks by status
export const filterTasks = (tasks, filter) => {
    switch (filter) {
      case 'completed':
        return tasks.filter((t) => t.completed);
      case 'active':
        return tasks.filter((t) => !t.completed);
      default:
        return tasks;
    }
  };
  
  // Filter by category
  export const filterByCategory = (tasks, category) => {
    if (!category) return tasks;
    return tasks.filter((t) => t.category === category);
  };
  
  // Sort tasks by order
  export const sortTasks = (tasks, sortOrder) => {
    return [...tasks].sort((a, b) => {
      if (sortOrder === 'newest') return b.id - a.id;
      if (sortOrder === 'oldest') return a.id - b.id;
      return 0;
    });
  };
  
  // Move task up/down
  export const moveTask = (tasks, fromIndex, toIndex) => {
    const updated = [...tasks];
    const [movedTask] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedTask);
    return updated;
  };
  