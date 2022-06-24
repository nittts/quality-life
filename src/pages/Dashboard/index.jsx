// To do build page
import { Container, Content, Profile, ListContainer } from "./style";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Profile> Profile </Profile>
        <ListContainer>
          <div id="list-habits"> List Habits </div>
          <div id="list-groups"> List Groups </div>
        </ListContainer>
      </Content>
    </Container>
  );
}
