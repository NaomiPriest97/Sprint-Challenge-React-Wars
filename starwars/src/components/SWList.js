import React, {useState, useEffect} from "react";
import axios from "axios";
import SWCard from "../components/SWCard";

export default function SWList(){
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data);
           setList([response.data]);
        })
        .catch(error => {console.log("the data was not returned", error)});
            
    }, []);
    return (
        <div className = "imgs">
            {list.map(character => {
                return (
                    <SWCard 
                    name = {character.name}
                    key = {character.id}
                    // species = {character.species}
                    // home = {character.homeworld}
                    // films = {character.films}
                    
                    />
                    
                );
            })}
        </div>
    );
} 