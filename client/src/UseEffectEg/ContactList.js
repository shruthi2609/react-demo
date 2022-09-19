import { useEffect, useState } from "react"

const ContactList=()=>{
    const [data,setData]=useState([])
    const [count,setCount]=useState(0)
/*const callAPI=()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{return res.json()}).then((res)=>setData(res)).catch((err)=>console.log(err))
}*/
useEffect(()=>{
    console.log("useeffect")
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{return res.json()}).then((res)=>setData(res)).catch((err)=>console.log(err))
},[])
const increment=()=>{
    setCount(count+1)
}

return(
    <div>
        {console.log("render")}
        <h1>Contact List {count}</h1>
     <button onClick={increment}>+</button>
        {
            data.map((item)=>(
                <div>
                    <h1>{item.username}</h1>
                    <h3>{item.email}</h3>
                    <p>{item.address.city}</p>
                </div>
            ))
        }
    </div>

)
}
export default ContactList