// To do build routes component
import { Switch, Route } from "react-router-dom";

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
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/about-us"} component={AboutUs} />
      <Route path={"/habit"} component={Habits} />
      <Route path={"/groups"} component={Groups} />

      {/* após todas as rotas do app */}
      <Route path={"*"} component={NotFound} />
    </Switch>
  );
};

export default Routes;
