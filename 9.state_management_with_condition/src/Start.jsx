import React, {useState, useEffect} from "react"

const Display=(props)=>{

    const {emp_id, emp_name, emp_email, organisation} = props.info
    const [city, setcity] = useState("Bangalore")         // city = "Bangalore"

    useEffect(()=>{
        if (city === "Bangalore"){
            setcity("Hyderabad")
        }
    }, [city])

    return (
        <div>
            <h3>Hei, Hi {emp_name}.</h3>
            <p>
                <b>Employee ID : </b> {emp_id} <br />
                <b>Employee Email : </b> {emp_email} <br />
                <b>Organisation : </b> {organisation} <br />
                <b>Location : </b> {city}
            </p>
        </div>
    )
}

export default Display