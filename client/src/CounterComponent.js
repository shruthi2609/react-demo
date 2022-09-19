import {useState} from 'react'
function CounterComponent(){
    let [count,setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <div>
            <h1>Counter App</h1>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>

    )
}
export default CounterComponent