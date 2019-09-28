import React from "react";
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";




export default function PhotoCard(props) {
    return (
      <Col xs="6" lg="4" height="100%">
        <Card height="100%">
          <CardBody height="100%">
            {/*
              Note the use of properties, passed in with the
              "props" object as a parameter to MovieCard()
              above.
  
              Note also the mix of Reactstrap components
              and built-in React components (<hr/>, <small/>)
            */}
            <CardTitle>{props.copyright}</CardTitle>
            <hr />
            <CardText>{props.date}</CardText>
            <hr />
            <CardText>{props.explanation}</CardText>
            <hr />
            <CardText>{props.hdurl}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }