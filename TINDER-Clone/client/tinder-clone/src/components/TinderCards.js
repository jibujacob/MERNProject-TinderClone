import React, {  useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';

import "../styles/TinderCards.css";
import  {getCards} from "../api/axios.js";

function TinderCards() {
    const [persons,setPersons] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await getCards();
            setPersons(req.data);
        }

        fetchData();
    },[]);

    function swiped(direction,nameToDelete){
        console.log("Removing: " + nameToDelete);
        //setLastDirection(direction);
    }

    function outOfFrame(name){
        console.log(name + " left the screen!");
    }

    return (
        <div className="tinderCards">
            <div className="cardContainer">
                {persons.map( person => (
                    <TinderCard
                        className="swipe"
                        key={persons.name}
                        preventSwipe={["up","down"]}
                        onSwipe={ dir => swiped(dir,persons.name)}
                        onCardLeftScreen={ () => outOfFrame(persons.name)}>
                        
                        <div className="card"
                            style = {{backgroundImage:`url(${person.imgurl})`}}>
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>  
        </div>
    )
}

export default TinderCards;
