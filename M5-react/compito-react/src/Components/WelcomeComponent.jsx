import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './WelcomeStyle.css';  

export default function WelcomeComponent() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert show={show} variant="success" className="alert-custom">
        <Alert.Heading>Welcome</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success" className="btn-custom">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)} className="btn-show-alert">Show Alert</Button>}
    </>
  );
}

