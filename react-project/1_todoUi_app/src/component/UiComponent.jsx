import "bootstrap/dist/css/bootstrap.min.css";

function Ui() {
  let date = new Date();
  let { firstTodo, firstDate, secTodo } = {
    firstTodo: "Work Out",
    firstDate: date.toLocaleDateString(),
    secTodo: "Sleep"
  };
  return (
    <div className="container myContainer ">
      <h2 className="title text-center mb-3"> Todo UI</h2>
      <div className="row cus-row">
        <div className="col-5">
          <input type="text" placeholder="Enter todo item" />
        </div>
        <div className="col-5">
          <input type="date" placeholder="Select date" />
        </div>
        <div className="col-2">
          {" "}
          <button className=" btn btn-success custom "> Add</button>
        </div>
      </div>
      <div className="row cus-row">
        <div className="col-5"> {firstTodo}</div>
        <div className="col-5">{firstDate}</div>
        <div className="col-2">
          <button className=" btn btn-danger custom">Delete</button>
        </div>
      </div>{" "}
      <div className="row cus-row">
        <div className="col-5"> {secTodo}</div>
        <div className="col-5">{firstDate}</div>
        <div className="col-2">
          <button className=" btn btn-danger custom">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default Ui;
