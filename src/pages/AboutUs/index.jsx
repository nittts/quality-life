import DevCard from "../../components/DevsCard";
import Sidebar from "../../components/Sidebar";
import { Container, DevsContainer } from "./style";

const AboutUs = () => {
  return (
    <Container>
      <h2>Nossos Dev's</h2>
      <DevsContainer>
        <Sidebar />
        <DevCard />
      </DevsContainer>
    </Container>
  );
};

export default AboutUs;
