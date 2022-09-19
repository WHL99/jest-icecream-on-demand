import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import Button from 'react-bootstrap/Button';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

// const popover = (
//   <Popover id="popover-basic">
//     <Popover.Header as="h3">Popover right</Popover.Header>
//     <Popover.Body>
//       And here's some <strong>amazing</strong> content. It's very engaging.
//       right?
//     </Popover.Body>
//   </Popover>
// );

// const Example = () => (
//   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//     <Button variant="success">Click me to see</Button>
//   </OverlayTrigger>
// );

// render(<Example />);

export default function SummaryForm() {
  const [disables, setDisables] = useState(false);

  const handelChange = (e) => {
    const disables = setDisables(e.target.checked);
    return disables;
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>no ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkBoxLabel = (
    <OverlayTrigger placement="right" overlay={popover}>
      <span style={{ color: "blue" }}>I agree to terms and conditions</span>
    </OverlayTrigger>
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
