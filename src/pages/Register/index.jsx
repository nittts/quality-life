// To do build page
import { Container } from "./style";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./formSchema";

import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitCallback = (data) => {
    const { username, email, password } = data;
    const user = { username, email, password };

    api
      .post("users/", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((error) => {
        toast.error("Este usuário já existe!");
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
          placeholder="Nome de usuário"
          register={register}
          error={errors.username?.message}
        />

        <Input
          label="E-mail"
          icon={FaEnvelope}
          type="email"
          name="email"
          placeholder="E-mail válido"
          register={register}
          error={errors.email?.message}
        />

        <Input
          label="Senha"
          icon={FaLock}
          type="password"
          name="password"
          placeholder="Uma senha forte"
          register={register}
          error={errors.password?.message}
        />

        <Input
          label="Confirmar senha"
          icon={FaLock}
          type="password"
          name="passwordConfirm"
          placeholder="Confirme a senha"
          register={register}
          error={errors.passwordConfirm?.message}
        />

        <hr />

        <Button type="submit" primary>
          Criar conta
        </Button>

        <p>
          Já tem uma conta? Faça <Link to="/login">login</Link>
        </p>
      </form>
    </Container>
  );
};

export default Register;
