import { Switch, Route } from "react-router-dom";
import { Container, Content, Header } from "./style";

// components
import Sidebar from "../../components/Sidebar";
import GroupsCard from "../../components/Groups";
import Profile from "../../components/Profile";
import SpecificGroup from "../../components/SpecificGroup";

export default function Groups() {
  return (
    <Switch>
      <Route exact path={"/groups/:group_id/"}>
        <Container>
          <Sidebar />
          <Content>
            <Header>
              <Profile />
            </Header>
            <SpecificGroup />
          </Content>
        </Container>
      </Route>
      <Route path={"/"}>
        <Container>
          <Sidebar />
          <Content>
            <Header>
              <Profile />
            </Header>
            <GroupsCard />
          </Content>
        </Container>
      </Route>
    </Switch>
  );
}
