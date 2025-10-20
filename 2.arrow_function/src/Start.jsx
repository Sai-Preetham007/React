let dev = "$@! **7"

const Developer=()=>{
    return (
        <h3>This website is developed by : {dev}</h3>
    )
}

function Display(){
    return (
        <div>
            <h1>Hello, Welcome!</h1>
            <Developer/>
        </div>
    )
}

export default Display