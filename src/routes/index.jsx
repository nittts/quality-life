// To do build routes component
import { Switch, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <h1>Home</h1>
      </Route>
      <Route path={"/register"}>
        <h1>Register</h1>
      </Route>
      <Route path={"/login"}>
        <h1>Login</h1>
      </Route>
      <Route path={"/dashboard"}>
        <h1>Dashboard</h1>
      </Route>
      <Route path={"/about-us"}>
        <AboutUs />
      </Route>
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
