// To do build page
import { Container } from "./style";

import { useHistory } from "react-router-dom";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../components/Button";

const Register = () => {
  const history = useHistory();

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>
          Quality<span>Life</span>
        </h2>

        <hr />

        <div>
          <label htmlFor="#username">Usuário</label>
          <div className="input-container">
            <FaUser size={14} />
            <input type="text" name="username" placeholder="Nome de usuário" />
          </div>
          <span>Verifique seu nome de usuário!</span>
        </div>

        <div>
          <label htmlFor="#email">E-mail</label>
          <div className="input-container">
            <FaEnvelope size={14} />
            <input type="email" name="email" placeholder="E-mail válido" />
          </div>
          <span>Insira um e-mail válido!</span>
        </div>

        <div>
          <label htmlFor="#password">Senha</label>
          <div className="input-container">
            <FaLock size={14} />
            <input
              type="password"
              name="password"
              placeholder="Uma senha forte"
            />
          </div>
          <span>Verifique a senha digitada!</span>
        </div>

        <div>
          <label htmlFor="#passwordConfirm">Confirmar senha</label>
          <div className="input-container">
            <FaLock size={14} />
            <input
              type="password"
              name="passwordConfirme"
              placeholder="Confirme a senha"
            />
          </div>
          <span>As senhas não conferem!</span>
        </div>

        <hr />

        <Button type="submit" primary>
          Criar conta
        </Button>

        <p>
          Já tem uma conta? Faça <a href="/login">login</a>.
        </p>
      </form>
    </Container>
  );
};

export default Register;
