import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { removeTask } = useContext(TaskContext);

  return (
    <li>
      {task.text}
      <button onClick={() => removeTask(task.id)}>Excluir</button>
    </li>
  );
}
