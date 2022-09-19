import ContentPage from "./ContentPage"

function AppComponent(props){
    console.log(props)
    return(
        <>
        <h1>Board Infinity - User : {props.username}</h1>
        <h2>React Module</h2>
        <ContentPage></ContentPage>
        </>
    )
}
export function DummyComponent(){
    return(
        <div>
            <h1>Dummy</h1>
        </div>
    )
}
export default AppComponent
