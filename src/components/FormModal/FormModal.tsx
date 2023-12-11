import React, { useState } from "react";
import "./FormModal.scss";
import { Modal, Form, Button } from "react-bootstrap";

interface Props {
  show: boolean;
  close: () => void;
  onSave: (inputValue: string) => void;
}
//Component for a modal form
const FormModal = (props: Props) => {
  // State to manage the input value

  const [inputValue, setInputValue] = useState("");

  // Destructuring props for easier access
  const { show, close, onSave } = props;

  return (
    <div>
      {/* Modal component from react-bootstrap */}
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Name of the Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter player name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter player's name"
                autoFocus
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
                value={inputValue}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              // Trigger onSave function with the current input value
              onSave(inputValue);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormModal;
