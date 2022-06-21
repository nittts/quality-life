// To do build routes component
import { Switch, Route } from "react-router-dom";

import Register from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <h1>Home</h1>
      </Route>
      <Route path={"/register"} component={Register} />
      <Route path={"/login"}>
        <h1>Login</h1>
      </Route>
      <Route path={"/dashboard"}>
        <h1>Dashboard</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
