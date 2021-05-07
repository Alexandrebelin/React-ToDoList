import React, { useState } from "react";
import "./App.css";

// Components
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Task from "./components/Task";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faListAlt);

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // add task

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Please, add a new task");
    } else {
      let tasksCopy = [...tasks];
      tasksCopy.push({
        title: input.length > 20 ? input.substring(0, 30) + "..." : input,
        done: false,
      });
      setTasks(tasksCopy);
      setInput("");
    }
  };

  // Check task

  const handleCheck = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy[index].done = !tasksCopy[index].done;
    setTasks(tasksCopy);
  };

  // Delete task
  const handleTrash = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(tasksCopy.indexOf(tasksCopy[index]), 1);
    setTasks(tasksCopy);
  };
  return (
    <div className="body">
      <Header />
      <div className="container">
        <Task
          handleCheck={handleCheck}
          handleTrash={handleTrash}
          tasks={tasks}
        />
        <Form setInput={setInput} handleSubmit={handleSubmit} input={input} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
