import React from "react";
import routes from "./routes";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        {routes.map(({path,component}, id)=>{
          return(
            <Route key={id} path={path} exact>
              {component}
            </Route>
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;
