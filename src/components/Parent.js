import React,{useState} from "react";
import Child from "./Child";

function Parent() {
    const [inputValue,setInputValue]=useState("");

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{inputValue}</p>
            <Child state={inputValue} func={setInputValue}/>
        </div>
    )
}

export default Parent;