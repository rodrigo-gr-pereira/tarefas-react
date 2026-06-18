import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">
        Gerenciador de Tarefas
      </h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
