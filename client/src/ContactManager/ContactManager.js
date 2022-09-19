import {useEffect, useState} from 'react'
import axios from 'axios'
function ContactManager(){
        const [contact,setContact]=useState([])
        const [fname,setFname]=useState('')
        const [phone,setPhone]=useState('')
        const [email,setEmail]=useState('')
        const [msg,setMsg]=useState('')
        useEffect(()=>{
            axios.get('/getall').then((res)=>setContact(res.data)).catch((err)=>console.log(err))
        },[])
        const handleUsername=(e)=>{
            setFname(e.target.value)
        }
        const handlePhone=(e)=>{
            setPhone(e.target.value)
        }
        const handleEmail=(e)=>{
            setEmail(e.target.value)
        }
        const handleDelete=(itemname)=>{
            //to delete in backend
          axios.get(`/delete/${itemname}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
          //for removing from UI
          const result=  contact.filter((item)=>item.fname!==itemname)
          setContact(result)
        }
        const handleCreate=(e)=>{
            e.preventDefault()
            axios.post('/create',{
                "id":Date.now(),
                "fname":fname,
                "phone":phone,
                "email":email
            }).then((res)=>setMsg(res.data)).catch((err)=>console.log(err))
        }
        return(
            <div>
                {console.log(contact)}
                <form>
                 Username:<input type='text' placeholder='enter firstname' onChange={(e)=>handleUsername(e)}></input>
                 Phone:<input type='text' placeholder='enter phone' onChange={(e)=>handlePhone(e)}></input>
                 Email:<input type='text' placeholder='enter email' onChange={(e)=>handleEmail(e)}></input>
                 <button onClick={(e)=>handleCreate(e)} className='btn btn-primary'>create contact</button>
                </form>
                <h3>{msg}</h3>
                {
                    contact.map((item)=>(
                        
                                <div className='col-xl-4'>
                                    <div className='card'>
                                        <div className='card-body'>
                                    <h2>Name:{item.fname}</h2>
                                    <h3>Phone:{item.phone}</h3>
                                    <p>Email:{item.email}</p>
                                    <button onClick={()=>handleDelete(item.fname)}className='btn btn-danger'>delete</button>
                                    </div>
                                    </div>
                                </div>
                        
                    ))
                }
            </div>
        )
}
export default ContactManager