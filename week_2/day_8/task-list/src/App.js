import './App.css';

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// If you export default then you don't need the brackets
import { Task } from './models/Task';
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';

import TaskService from './services/task-service';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(
    () => {
      if (!tasks.length) {
        onInitialLoad();
      }
    },

    // In the case of an empty array, the function only fires the first time the
    // component initializes

    // If we put a variable reference and that variable changes
    // this function fires again
    []
  );

  async function onInitialLoad() {
    // We try catch here if there is an error
    // We can show that error to the user
    try {
      const tasks = await TaskService.fetchTasks();
      setTasks(tasks);
    } catch (err) {
      // TODO: handle error correctly
      console.log(err);
    }
  }

  async function onTaskCreate(name) {
    // create the Task
    const task = await TaskService.createTask(new Task(null, name, false));

    // add the task to the tasks state
    setTasks([...tasks, task]);
  }

  async function onTaskRemove(taskId) {
    await TaskService.deleteTask(taskId);

    // update the tasks state with the filtered tasks
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  async function onTaskCompleteToggle(taskId) {
    // toggle the tasks complete state
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    const updatedTask = await TaskService.updateTask(taskToToggle);

    // update the tasks state with the new updated state
    setTasks(
      tasks.map((task) => {
        return task.id === taskId ? updatedTask : task;
      })
    );
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
