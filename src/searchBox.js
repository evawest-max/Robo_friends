import Cards from "./cards"
import { useState } from "react"
import React  from "react"
import robots from "./robots"



const SearchBox= ()=>{
    let [current, newcurrent]=useState("")
    
    function news(events){
        newcurrent(events.target.value)
    }
    let typedtext= current.length>0
    function empty(){
        newcurrent("")
    }

    let filteredrobo= robots.filter((item)=>{
        return item.name.toLocaleLowerCase().includes(current.toLocaleLowerCase())
    })
    console.log(filteredrobo)
    
    return(
        <div className="pa2 ">
            <div>
                <input  onChange={news}  value={current} className="pa3 ba b--green bg-lightest-blue" type="text" placeholder="search for robot"/>
                
                {typedtext && <button onClick={empty} className="bg-light-red b--green pa3 ba">clear</button>}
            </div>
            {filteredrobo.map((item, i)=>{
                    return <Cards 
                        key={i}
                        name={item.name} 
                        email={item.email} 
                        image={item.id}/>
                    })
            }
            
        </div>
        
    )
}

export default SearchBox