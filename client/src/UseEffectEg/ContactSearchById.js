import { useEffect,useState} from "react"

const ContactSearchById=()=>{
    const [id,setId]=useState(1)
    const [data,setData]=useState({})
    const handleChange=(e)=>{
        setId(e.target.value)
    }
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{return res.json()}).then((res)=>setData(res)).catch((err)=>console.log(err))
    },[id])
    return(
        <div>
            {console.log(data)}
           Enter Id <input type='text' onChange={(e)=>handleChange(e)}></input>
            <h1>Contact you searched is :</h1>
            <h2>{data.username}</h2>
            <h3>{data.email}</h3>
            <p>{data.address.city}</p>
        </div>
    )
}
export default ContactSearchById