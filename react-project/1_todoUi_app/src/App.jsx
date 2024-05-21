import "./App.css";
import Ui from "./component/UiComponent";

function App() {
  let date = new Date().toDateString();
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: date
    },
    {
      name: "Go to College",
      dueDate: date
    },
    {
      name: "Like ",
      dueDate: "right now"
    }
  ];

  return (
    <>
      <Ui todosVal={todoItems}></Ui>
    </>
  );
}

export default App;
