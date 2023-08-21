import React from "react"
import Count from "./Count"
import "./App.css"

export default function App() {
    const [count,SetCount]=React.useState(0)
    // console.log(count)
    function add()
    {
        SetCount((item) => {
            item=item+1;
            return item;
        })
    }
    
    function subtract()
    {
        SetCount(prevcount => prevcount-1)
    }
    
    
    console.log("App component")
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count number={count}/>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
