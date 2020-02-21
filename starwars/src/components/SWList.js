import React, {useState, useEffect} from "react";
import axios from "axios";
import SWCard from "../components/SWCard";
import { Container, Row } from "reactstrap";

export default function SWList(){
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data.results);
           setList(response.data.results);
        })
        .catch(error => {console.log("the data was not returned", error)});
            
    }, []);
    return (
        <Container>
            <Row>
            {list.map(character => {
                return (
                    <SWCard 
                    name = {character.name}
                    gender = {character.gender}
                    skin = {character.skin_color}
                    year = {character.birth_year}
                    key = {character.id}
                    />   
                );
            })}
            </Row>
        </Container>
    );
} 