// To do build page
import { Container } from "./style";

import { useHistory } from "react-router-dom";

import { useToken } from "../../providers/token";

import { FaUser, FaLock } from "react-icons/fa";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./formSchema";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useUser } from "../../providers/user";

const Login = () => {
  const history = useHistory();
  const { updateToken, token } = useToken();
  const { getUser, user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitCallback = (data) => {
    api
      .post("sessions/", data)
      .then((response) => {
        const token = response.data.access;
        localStorage.clear();
        localStorage.setItem("@QualityLife:token", JSON.stringify(token));
        getUser(token);
        updateToken(token);
        toast.success("Usuário logado com sucesso!");
        return history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Usuário ou senha incorretos!");
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submitCallback)}>
        <h2>
          Quality<span>Life</span>
        </h2>

        <hr />

        <Input
          label="Usuário"
          icon={FaUser}
          type="text"
          name="username"
          placeholder="Seu nome de usuário"
          register={register}
          error={errors.username?.message}
        />

        <Input
          label="Senha"
          icon={FaLock}
          type="password"
          name="password"
          placeholder="Sua senha"
          register={register}
          error={errors.password?.message}
        />

        <Button type="submit">Entrar</Button>

        <div className="barOr">
          <hr />
          <p>OU</p>
          <hr />
        </div>

        <Button
          type="submit"
          tertiary
          onClick={() => history.push("/register")}
        >
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export default Login;
