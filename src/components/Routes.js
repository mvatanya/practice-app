import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Lessons from "./Lessons";
import Practices from "./Practices";
import Practice from "./Practice";


const Routes = () => {

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home />} />


        <Route
          exact
          path="/lessons"
          render={props => (
            <Lessons 
              {...props}
            />
          )}
        />  

        <Route
          exact
          path="/practices"
          render={props => (
            <Practices 
              {...props}
            />
          )}
        />  

        <Route
          path="/practices/:handle"
          render={props => <Practice {...props} />}
        /> 

      </Switch>
    </div>
  );
}

export default Routes;
