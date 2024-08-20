import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function AddTaskModule(props) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="task-add-module"
      >
        <h4>Create a Task</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              onChange={handleChange}
              value={task.title}
              type="text"
              placeholder="shopping,car wash,etc.."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              onChange={handleChange}
              value={task.description}
              as={"textarea"}
              placeholder="task description"
              style={{
                resize: "none",
              }}
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
              <i className="fa fa-plus" />
              Create Task
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
}
