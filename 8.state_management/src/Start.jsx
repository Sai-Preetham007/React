import React, {useState} from "react";

const Location=()=>{
    const [city, setcity] = useState("Bangalore")

    return (
        <div>
            <h3>Hello $@! **7</h3>
            <p>My City : {city}</p>
            <button onClick={() => setcity("Hyderabad")} style={{backgroundColor : "lightgreen"}}>Click Me</button>
        </div>
    )
}

export default Location