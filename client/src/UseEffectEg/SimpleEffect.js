import { useEffect, useState } from "react"
const SimpleEffect=()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    useEffect(
    ()=>{
        console.log('useeffect is called')
    })
    return(
        <div>
            {console.log("render")}
            <h3>{count}</h3>
        <button onClick={increment}>+</button>
        </div>
    )
}
export default SimpleEffect