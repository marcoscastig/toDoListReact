import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import Task from "./components/Task";
import TaskContent from "./components/TaskContent";


function App() {

  let initialTasks = JSON.parse(localStorage.getItem("tasks")) || []

  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  useEffect(()=>{
    if(initialTasks){
      localStorage.setItem("tasks", JSON.stringify(tasks))
    } else {
      localStorage.setItem("tasks", JSON.stringify([]))
    }
  }, [initialTasks,tasks])

  const deleteTask = (id)=> {
    const currentTask = tasks.filter((task) => task.idTask !== id);
    setTasks(currentTask)
  }


  //console.log(tasks)

  return (
    <Container>
      <Header/>
      <InputTask createTask={createTask}/>
      <TaskContent tasks={tasks} deleteTask={deleteTask}/>
      </Container>
  );
}

export default App;
