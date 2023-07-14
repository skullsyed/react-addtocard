import * as React from "react";
import Container from "react-bootstrap/Container";
import { Figure } from "react-bootstrap";

const TextBody = () => {
  return (
    <Container>
      <Figure>
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
    </Container>
  );
};

export default TextBody;
