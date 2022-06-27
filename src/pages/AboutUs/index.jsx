import DevCard from "../../components/DevCard";
import Sidebar from "../../components/Sidebar";
import { Container, DevsContainer } from "./style";

const AboutUs = () => {
  return (
    <>
      <Container>
        <h2>Nossos Dev's</h2>
      </Container>
      <DevsContainer>
        <Sidebar />
        <DevCard />
      </DevsContainer>
    </>
  );
};

export default AboutUs;
