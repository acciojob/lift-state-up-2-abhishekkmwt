import React, {useState} from "react";

function Child({state,func}) {  


    return (
        <div className="child">
            <h2>Child Component</h2>
            <input type="text" onChange={e=>func(e.target.value)} value={state}/>
        </div>
    )
    
}

export default Child;