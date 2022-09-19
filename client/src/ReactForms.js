import {useState} from "react"
function ReactForms()
{
    const [fname,setFname]=useState("john")
    const [inp,setInp]=useState("")
    const updateUsername=()=>{
        setFname(inp)
    }
    const getName=(e)=>{
        console.log(e.target.value)
        setInp(e.target.value)
    }
    return(
        <div>
        <h1>Welcome{fname}</h1>
        Enter new Username:<input type="text" placeholder="enter your name here" onChange={(e)=>getName(e)}></input>
        <button onClick={updateUsername}>update</button>
        </div>
    )
}
export default ReactForms