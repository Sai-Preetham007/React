const Details=(props)=>{
    // prop_destructuring is similar to unpacking tuple in python.
    const {name, brand, symbol} = props.info
    return (
        <div>
            <p>Hello {name}</p> <br />
            <h3>
                <b>My Brand : {brand} <br />
                    Symbol : {symbol}
                </b>
            </h3>
        </div>
    )
}

export default Details