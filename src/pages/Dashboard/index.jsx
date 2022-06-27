// To do build page
import { Container, Content, ProfileContainer, ListContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import Card from "../../components/Card";
import List from "../../components/List";
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
          <List label="Meus Hábitos">
            <Card icon={<FiCheckCircle />}>
              <h1>Teste</h1>
              <h1>100%</h1>
            </Card>
          </List>
          <List label="Meus Grupos">
            <Card icon={<FiCheckCircle />}>
              <h1>Teste</h1>
              <h1>Saúde</h1>
            </Card>
          </List>
        </ListContainer>
      </Content>
    </Container>
  );
}
