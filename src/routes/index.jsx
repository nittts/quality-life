// To do build routes component
import { Switch, Route } from "react-router-dom";

import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login"

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home}></Route>
      <Route path={"/register"} component={Register} />
      <Route path={"/login"} component={Login}/>   
      <Route path={"/dashboard"} component={Dashboard}/>        
      <Route path={"/about-us"} component={AboutUs} />
      <Route path={"*"}>
        <h1>Not found</h1>
      </Route>
      <Route path={"/groups"}>
        <h1>Groups</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
