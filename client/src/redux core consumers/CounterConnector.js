import { connect } from "react-redux";
import CounterComponent from "./CounterComponent";
import { increment,decrement } from "../redux core/actions/counterActions";

const mapStatetoProps=(state)=>{
return{
    count:state
}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        plus:()=>dispatch(increment()),
        minus:()=>dispatch(decrement())
    }
}


export default connect(mapStatetoProps,mapDispatchToProps)(CounterComponent)