import Consumer from "./Consumer"
import ConsumerTwo from "./ConsumerTwo"
import CountContext from "./CreateContext"
const ProviderContext=()=>{
    return(
        <CountContext.Provider value={{count:0}}>
            <Consumer></Consumer>
            <ConsumerTwo></ConsumerTwo>
        </CountContext.Provider>
    )
}
export default ProviderContext