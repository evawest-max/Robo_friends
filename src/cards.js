import React from "react";

const Cards=(props)=>{
    return(
        <div className="bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.image}`} alt="robot"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
            
        </div>
    )
}

export default Cards