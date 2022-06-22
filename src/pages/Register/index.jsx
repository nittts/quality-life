// To do build page
import { Container } from "./style";

import { Link, useHistory } from "react-router-dom";

import { FiPlus } from "react-icons/fi";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const history = useHistory();

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <Link to="/login">Login</Link>
        <h2>
          Quality<span>Life</span>
        </h2>

        <hr />

        <div>
          <FaUser size={14} />
          <input type="text" name="username" placeholder="Nome de usuário" />
          <span>Nome de usuário é obrigatório!</span>
        </div>

        <div>
          <FaEnvelope size={14} />
          <input type="email" name="email" placeholder="E-mail válido" />
          <span>E-mail é obrigatório!</span>
        </div>

        <div>
          <FaLock size={14} />
          <input
            type="password"
            name="password"
            placeholder="Uma senha forte"
          />
          <span>Senha é obrigatório!</span>
        </div>

        <div>
          <FaLock size={14} />
          <input
            type="password"
            name="passwordConfirme"
            placeholder="Confirmar senha"
          />
          <span>Senha é obrigatório!</span>
        </div>

        <button
          type="submit"
          className="primary"
          onClick={() => history.push("/login")}
        >
          <FiPlus size={14} strokeWidth={3} /> Criar conta
        </button>

        <hr />

        <p>
          Já tem uma conta? Faça <a href="/login">login</a>.
        </p>
      </form>
    </Container>
  );
};

export default Register;
