import React, { HtmlHTMLAttributes, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userContext } from "./context/userContext";

function Page1() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [dobError, setdobError] = useState("");

  const { user, setUser } = useContext(userContext);

  const navigate = useNavigate();

  const handleValidation = () => {
    let formIsValid = true;

    if (!email.match(/^[a-zA-Z]{3,22}$/)) {
      formIsValid = false;
      setemailError("Firstname Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{3,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{3,22}$/)) {
      formIsValid = false;
      setdobError("Dob should dd/mm/yyyy format");
      return false;
    } else {
      setdobError("");
      formIsValid = true;
    }

   setUser({
    firstname: email,
    surname: password,
    dob: dob,
   })

    navigate("/home");
    return true;
  };

  const loginSubmit = (e: any) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <Container>
      <Row className="paddingTop20">
        <Col md={3} className=""></Col>
        <Col md={6}>
          <h4>Homehub user login.</h4>
        </Col>
        <Col md={3} className=""></Col>
      </Row>
      <Row>
        <Col md={3} className=""></Col>
        <Col md={6} className="loginForm">
          <Form id="loginform" onSubmit={loginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Firstname"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Surname"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="date"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="DOB"
                onChange={(event) => setDob(event.target.value)}
              />
            </Form.Group>
            <small id="doberror" className="text-danger form-text">
              {dobError}
            </small>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={3} className=""></Col>
      </Row>
    </Container>
  );
}

export default Page1;
