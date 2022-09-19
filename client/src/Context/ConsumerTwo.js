import { useContext } from "react"
import CountContext from "./CreateContext"
const ConsumerTwo=()=>{
    const {count}=useContext(CountContext)
    return(
        <div>
            
            <h1>Im a second consumer</h1>
            <h3>{count}</h3>
        </div>

    )
}
export default ConsumerTwo