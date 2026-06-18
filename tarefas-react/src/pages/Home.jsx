import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
