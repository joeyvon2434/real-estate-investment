import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

//404 not found page

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <p>The page you are looking for does not exist. Please 
          <a href="/"> Return to Home Page</a>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
