import './App.css';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// If you export default then you don't need the brackets
import { Task } from './models/Task';
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(
    () => {
      if (!tasks.length) {
        loadTasksFromLocalStorage();
      }
    },

    // In the case of an empty array, the function only fires the first time the
    // component initializes

    // If we put a variable reference and that variable changes
    // this function fires again
    []
  );

  useEffect(() => {
    saveTasksToLocalStorage();
  }, [tasks]);

  async function onTaskCreate(name) {
    // create the Task
    const id = new Date().getTime();
    const task = new Task(id, name, false);

    // add the task to the tasks state
    setTasks([...tasks, task]);
  }

  async function onTaskRemove(taskId) {
    // update the tasks state with the filtered tasks
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  async function onTaskCompleteToggle(taskId) {
    // toggle the tasks complete state
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    // update the tasks state with the new updated state
    setTasks(
      tasks.map((task) => {
        return task.id === taskId ? taskToToggle : task;
      })
    );
  }

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArr = JSON.parse(json);
      if (taskArr.length) {
        setTasks(taskArr.map((x) => Task.fromJSON(x)));
      }
    }
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Task List</h1>

        <hr></hr>

        <p>Our firebase Task List</p>

        <TaskInput onTaskCreate={onTaskCreate}></TaskInput>
        <TaskTable
          tasks={tasks}
          onTaskRemove={onTaskRemove}
          onTaskCompleteToggle={onTaskCompleteToggle}
        ></TaskTable>
      </div>
    </div>
  );
}

export default App;
