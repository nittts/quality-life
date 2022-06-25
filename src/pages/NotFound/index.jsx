import Sidebar from "../../components/Sidebar";
import { Container } from "./style";
import NotFoundImg from "../../assets/NotFound.svg";

const NotFound = () => {
  return (
    <>
      <Sidebar />
      <Container>
        <h2>
          Página não <br />
          encontrada!
        </h2>
        <figure>
          <img src={NotFoundImg} alt="404 - Page Not Found!"></img>
        </figure>
      </Container>
    </>
  );
};

export default NotFound;
