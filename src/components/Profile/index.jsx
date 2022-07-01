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

  const { user }  = useUser();
 // const { token } = useToken();

 
 const getUserLetters = () => {
   const fullName = user.username.split("");
   const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
   return initials.toUpperCase();
 };

     
  

  // descomentar quando a funcionalidade de login estiver funcionando e gerando um token do usuário;
      console.log(user)
  return (
    <Container>
      <Avatar
        onMouseOver={() => setUpdateUser(true)}
        onMouseLeave={() => setUpdateUser(false)}
        onClick={() => setOpenModal(true)}
      >
        {updateUser ? <FaUserEdit /> : <> {user && getUserLetters() } </>}
        {/* inciais do usuário */}
      </Avatar>
      <h1>
        Olá,
        <span>{user && user.username}!</span>
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
                label="Nome"
                type="text"
                name="habit"
                placeholder={user.username}
                register={register}
                error={errors.habit?.message}
              />

              <Input
                label="Email"
                type="text"
                name="category"
                placeholder={user.email}
                register={register}
                error={errors.category?.message}
              />
              
            </div>

            <div className="footer-form">
              <Button type="submit" success width={211}>
                Salvar
              </Button>
              
            </div>
          </form>
        </Modal>
      )}
    </Container>
  );
}
