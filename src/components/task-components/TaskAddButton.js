export default function TaskAddButton({ handleClick }) {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 col-12  p-1">
        <button
          className="task-card task-add-button card "
          onClick={handleClick}
        >
          <i className="fa fa-plus" />
          Add New Task
        </button>
      </div>
    </>
  );
}
