// To do build page
import {Container, Content } from "./style";

import { useHistory } from "react-router-dom";

import {FaUser, FaLock} from "react-icons/fa";



const Login = () =>{
const history = useHistory();

return (
  <Container>

    
    <form >
    <h2>
    Quality<span>Life</span>
    </h2>

    <hr/>

    <div>
      <p>Usuário</p>
      <div>
      <FaUser size={14} />
      <input type="text" name="username" placeholder="Nome de usuário" />
      </div>
      <span>Nome de usuário é obrigatório!</span>
      
    </div>

    <div>
      <p>Senha</p>
      <div>
      <FaLock size={14} />
      <input
        type="password"
        name="password"
        placeholder="Uma senha forte"
      />
      </div>
      <span>Senha é obrigatório!</span>
    </div>
      

    <button
      type="submit"
      className="primaryButton"
      onClick={() => history.push("/dashboard")}
    >
     Entrar
    </button>

    <div className="barOr">
      <hr/>
      <p>OU</p>
      <hr/>
    </div>

    

    <button
      type="submit"
      className="secundaryButton"
      onClick={() => history.push("/register")}
    >
      Cadastrar
    </button>      
    </form>
    
        
  
</Container>
)

};

export default Login;