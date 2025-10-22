const Details=(props)=>{
    return (
        <div>
            <h2>Hi, {props.name}</h2>
            <p></p>
            <h4>Please, reach out to me.</h4>
            <p><b>Email : </b>{props.email}, <b>Contact : </b>{props.contact}</p>
            <p><b>Address : </b>{props.address}</p>
        </div>
    )
}

export default Details