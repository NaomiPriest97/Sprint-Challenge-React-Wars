import React, {useState, useEffect} from "react";
import axios from "axios";
import SWCard from "../components/SWCard";

export default function SWList(){
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`"https://swapi.co/api/people/"`)
        .then(response => {
            console.log(response);
           setList([response.data]);
        })
        .catch(error => {console.log("the data was not returned", error)});
            
    }, []);
    return (
        <div className = "imgs">
            {list.map(image => {
                return (
                    <SWCard 
                    name = {image.name}
                    species = {image.species}
                    home = {image.homeworld}
                    films = {image.films}
                    
                    />
                    
                );
            })}
        </div>
    );
} 