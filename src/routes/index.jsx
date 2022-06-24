// To do build routes component
import { Switch, Route } from "react-router-dom";

import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <h1>home</h1>
      </Route>
      <Route path={"/register"} component={Register} />
      <Route path={"/login"}>
        <h1>Login</h1>
      </Route>
      <Route path={"/dashboard"}>
        <Dashboard />
      </Route>
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
