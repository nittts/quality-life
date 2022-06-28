import { Container, Logo } from "./style";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Logo>
        <h1>
          Quality<span>Life</span>
        </h1>
      </Logo>
      <p>
        Uma vida mais saudável
        <br />
        através de uma
        <span>
          <br />
          gestão de hábitos eficiente.
        </span>
      </p>
      <div>
        <Link to="/login">
          <Button width={330}>Entrar</Button>
        </Link>
        <Link to="/register">
          <Button primary width={330}>
            Cadastrar
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
