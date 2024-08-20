import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function UpdateTaskModule(props) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (props.task != {}) {
      console.log(props.task);
      setTask(props.task);
    }
  }, [props.task]);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="task-add-module"
      >
        <h4>Edit a Task</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={handleChange}
              value={task.title}
              placeholder="shopping,car wash,etc.."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              style={{
                resize: "none",
              }}
              as={"textarea"}
              name="description"
              onChange={handleChange}
              value={task.description}
              placeholder="task description"
              rows={8}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={handleChange}
              value={task.date}
            />
          </Form.Group>
          <Form.Group className="btn-controlles mb-3">
            <Button onClick={props.onHide}>
              <i className="fa fa-edit" />
              Edit Task
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
}
