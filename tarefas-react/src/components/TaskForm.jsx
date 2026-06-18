import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa"
        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Adicionar
      </button>
    </form>
  );
}
