import ContactManager from "./ContactManager/ContactManager"
import ContactSearch from "./ContactManager/ContactSearch"
import CounterComponent from "./CounterComponent"
import ReactForms from "./ReactForms"
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
function App(){
    return(
        <div>
         <BrowserRouter>
         <div>
            <Link to='/search'>Search Contact</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/contactmanager'>CM</Link>
         </div>
         <Routes>
            <Route path='/search' element={<ContactSearch></ContactSearch>}></Route>
            <Route path='/contactmanager' element={<ContactManager></ContactManager>}></Route>
         </Routes>
         </BrowserRouter>
        </div>
       

    )
}
export default App