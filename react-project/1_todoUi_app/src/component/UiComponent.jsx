import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./TodoInput";
import Todos from "./Todos";
function Ui({ todosVal }) {
  return (
    <div className="container myContainer">
      <h2 className="title text-center mb-3">Todo UI</h2>
      <TodoInput />
      {todosVal.map((todo) => (
        <Todos key={todo} name={todo.name} dueDate={todo.dueDate} />
      ))}
    </div>
  );
}
export default Ui;
