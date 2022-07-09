import React from "react";
import { Form, Button, FloatingLabel, Card } from "react-bootstrap";

function Comment({ height }) {
  return (
    <Card body>
      <Form className="fs-4">
        <FloatingLabel label="Name">
          <Form.Control type="input" className="mb-3" />
        </FloatingLabel>
        <FloatingLabel label="Comment">
          <Form.Control type="textarea" className="mb-3" style={{ height }} />
        </FloatingLabel>
        <Form.Text className=""></Form.Text>

        <Button variant="success" type="submit" className="float-end">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default Comment;
