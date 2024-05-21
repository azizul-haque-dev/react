const Todos = ({ name, dueDate }) => {
  return (
    <div className="row cus-row">
      <div className="col-5"> {name}</div>
      <div className="col-5">{dueDate}</div>
      <div className="col-2">
        <button className=" btn btn-danger custom">Delete</button>
      </div>
    </div>
  );
};
export default Todos;
