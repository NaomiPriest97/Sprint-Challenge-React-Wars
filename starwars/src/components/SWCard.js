import React from "react";
import styled from "styled-components";

const Card = styled.div`
display:flex;
justify-content:center;
align-content:center;
background-color: teal;
width: 100%;
color:white;
margin: 20px;
`;

const StyledP = styled.p`
margin: 20px;
align-content:center;
font-size: 20px;
`;

const SWCard = ( character ) => {
    return (
        <Card>
        <h2>{character.name} </h2>
        
          <StyledP>Gender: {character.gender}</StyledP>
          <StyledP>Skin Tone: {character.skin}</StyledP>
          <StyledP> Birth Year: {character.year}</StyledP>
        
      </Card>
 
    );
  };
  export default SWCard;
  