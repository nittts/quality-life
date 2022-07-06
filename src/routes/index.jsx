import { Switch } from "react-router-dom";
import Route from "./protectedRoute";
import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Habits from "../pages/Habits";
import Groups from "../pages/Groups";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home}></Route>
      <Route path={"/register"} component={Register} />
      <Route path={"/login"} component={Login} />
      <Route isPrivate={true} path={"/dashboard"} component={Dashboard} />
      <Route isPrivate={true} path={"/about-us"} component={AboutUs} />
      <Route isPrivate={true} path={"/habit"} component={Habits} />
      <Route isPrivate={true} path={"/groups"} component={Groups} />
      <Route path={"*"} component={NotFound} />
    </Switch>
  );
};

export default Routes;
