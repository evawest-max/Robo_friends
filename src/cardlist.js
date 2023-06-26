import React from "react"
import Cards from "./cards"
//import robots  from "./robots"


function Cardlist({robots}){
    const cardComponent=robots.map(function(index, i){
        return <Cards 
        key={i}
        name={index.name} 
        email={index.email} 
        image={index.id}/>
    })
    
    return(
        <div >
            {cardComponent}           
        </div>
    )
}

export default Cardlist