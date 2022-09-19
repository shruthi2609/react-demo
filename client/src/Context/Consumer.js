import { useContext } from "react"
import CountContext from "./CreateContext"
const Consumer=()=>{
    const {count}=useContext(CountContext)
    return(
        <div>
            
            <h1>Im the first consumer</h1>
            <h3>{count}</h3>
        </div>

    )
}
export default Consumer