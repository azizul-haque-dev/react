const TodoInput = () => {
  return (
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
  );
};
export default TodoInput;
