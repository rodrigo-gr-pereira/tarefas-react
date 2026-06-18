import { useState } from "react";
import { TaskContext } from "./TaskContext";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) =>
    setTasks([...tasks, { id: Date.now(), text: task }]);
  const removeTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
}
