// To do build component
import { Container } from "./style";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useUser } from "../../providers/user";
import { useToken } from "../../providers/token";

import { useHistory } from "react-router-dom";

import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Profile() {
  const [updateUser, setUpdateUser] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const history = useHistory();

  const formSchema = yup.object().shape({
    habit: yup.string().required("Verifique o valor digitado!"),
    category: yup.string().required("Verifique o valor digitado!"),
    frequency: yup.string().required("Verifique o valor digitado!"),
    achieved: yup.string().required("Verifique o valor digitado!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitCallback = (data) => {
    console.log(data);
  };

  //const { user, getUser() }  = useUser();
  //const { token } = useToken();

  //   const fullName = user.username.split("");
  //   const getUserLetters = () => {
  //     const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  //     return initials.toUpperCase();
  //   };

  //   useEffect(() => {
  // getUser(token);
  //   }, []);
  //

  // descomentar quando a funcionalidade de login estiver funcionando e gerando um token do usuário;

  return (
    <Container>
      <Avatar
        onMouseOver={() => setUpdateUser(true)}
        onMouseLeave={() => setUpdateUser(false)}
        onClick={() => setOpenModal(true)}
      >
        {updateUser ? <FaUserEdit /> : <> WB{/*user && getUserLetters() */} </>}
        {/* inciais do usuário */}
      </Avatar>
      <h1>
        Olá,
        <span> William Baierle Charqueiro{/*user && user.username*/}!</span>
      </h1>
      {/* nome do usuário */}
      {openModal && (
        <Modal
          setModalState={setOpenModal}
          modalState={openModal}
          label="Perfil"
        >
          {/* Children da edição de usuário */}

          <form onSubmit={handleSubmit(submitCallback)}>
            <div className="body-form">
              <Input
                label="Hábito"
                type="text"
                name="habit"
                placeholder="Tomar água"
                register={register}
                error={errors.habit?.message}
              />

              <Input
                label="Categoria"
                type="text"
                name="category"
                placeholder="Saúde"
                register={register}
                error={errors.category?.message}
              />

              <Input
                label="Frequência"
                type="text"
                name="frequency"
                placeholder="Diária"
                register={register}
                error={errors.frequency?.message}
              />

              <Input
                label="Atingido"
                type="text"
                name="achieved"
                placeholder="95%"
                register={register}
                error={errors.achieved?.message}
              />
            </div>

            <div className="footer-form">
              <Button type="submit" success width={211}>
                Finalizar edição
              </Button>
              <Button type="button" negative width={211}>
                Excluir hábito
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </Container>
  );
}
