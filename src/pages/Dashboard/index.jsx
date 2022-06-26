// To do build page
import { Container, Content, ProfileContainer, ListContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import Card from "../../components/Card";

import { FiCheckCircle } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

export default function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <ListContainer>
          <div id="list-habits">List Habits</div>
          <div id="list-groups"> List Groups </div>
        </ListContainer>
      </Content>
    </Container>
  );
}
