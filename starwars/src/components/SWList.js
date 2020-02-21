import React, {useState, useEffect} from "react";
import axios from "axios";
import SWCard from "../components/SWCard";


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
        <div>
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
        </div>
    );
} 