import axios from 'axios'
import {useEffect, useState} from 'react'
function ContactSearch(){
    const [contact,setContact]=useState([])
        const [searchFname,setSearch]=useState('')
        const [result,setResult]=useState([])
        
        
        const handleChange=(e)=>{
            setSearch(e.target.value)
        }
        const handleSearch=()=>{
            axios.get(`http://localhost:3001/search/${searchFname}`).then((res)=>setResult(res.data)).catch((err)=>console.log(err))
        }
        return(
            <div>
                <h1>contact manager</h1>
               Enter the username you want to search <input type='text' onChange={(e)=>handleChange(e)}></input>
                <button onClick={handleSearch}>search</button>
                {
                    result.map((item)=>(
                        <div>
                            <h2>Name:{item.fname}</h2>
                            <h3>Phone:{item.phone}</h3>
                            <p>Email:{item.email}</p>
                        </div>
                    ))
                }
            </div>
        )
}
export default ContactSearch