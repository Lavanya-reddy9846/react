 import One from "./axios/One"
 import Nav from "./Navbar/Nav"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
let App=()=>{
      return<>
      <Router>
            <Nav/>
            <Switch>
                  <Route path="/DATA" component={One}/>
            </Switch>
      </Router>
      </>
}
export default App