import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    Col
  } from "reactstrap";

const SWCard = ( character ) => {
    return (
    <Col xs="6" md="4" xl="3">
        <Card>
        <CardHeader>{character.name} </CardHeader>
        <CardBody>
          <CardText>Gender: {character.gender}</CardText>
          <CardText>Skin Tone: {character.skin}</CardText>
          <CardText> Birth Year: {character.year}</CardText>
        </CardBody>
      </Card>
    </Col>
    );
  };
  export default SWCard;
  