import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Lessons from "./Lessons/Lessons";
import Practices from "./Practices/Practices";
import Practice from "./Practice/Practice";
import BooksCollections from "./BooksCollections/BooksCollections"


const Routes = () => {

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home />} 
        />

        <Route
          exact
          path="/books-collections"
          render={props => (
            <BooksCollections 
              {...props}
            />
          )}
        />  
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
