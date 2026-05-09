import { useState, useEffect } from 'react';

import Taskform from './Components/Taskform';
import Tasklist from './Components/Tasklist';
import Progresstracker from './Components/Progresstracker';
import Sidebar from './Components/Sidebar';
import StatsCards from './Components/StatsCards';
import MoodTracker from './Components/MoodTracker';

import './Style.css';

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="main-content">

        <header>
          <h1>TaskMan Dashboard</h1>
          <p><i>Your friendly Task Manager</i></p>
        </header>

        <StatsCards tasks={tasks} />
        <MoodTracker tasks={tasks} />
        <Taskform addTask={addTask} />

        <Tasklist
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />

        <Progresstracker tasks={tasks} />

        {tasks.length > 0 && (
          <button
            className='clear-btn'
            onClick={clearTasks}
          >
            Clear All Tasks
          </button>
        )}

      </div>

    </div>
  );
}