import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { removeTask } = useContext(TaskContext);

  return (
    <li className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-md px-4 py-2 mb-2">
      <span>{task.text}</span>
      <button
        onClick={() => removeTask(task.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
      >
        Excluir
      </button>
    </li>
  );
}
