import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
  const [disables, setDisables] = useState(false);

  const handelChange = (e) => {
    const disables = setDisables(e.target.checked);
    return disables;
  };

  const checkBoxLabel = (
    <span style={{ color: "blue" }}>I agree to terms and conditions</span>
  );
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={checkBoxLabel}
          onChange={handelChange}
          checked={disables}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!disables}>
        Confirm Order
      </Button>
    </Form>
  );
}
