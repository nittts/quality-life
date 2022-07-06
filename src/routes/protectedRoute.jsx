import { Redirect } from "react-router-dom";
import { Route as CommonRoute } from "react-router-dom";
import { useToken } from "../providers/token";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useToken();

  return (
    <CommonRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;
